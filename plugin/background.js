let creatingOffscreen = null;
const navigationVersion = new Map();
const audioQueues = new Map();

function queueAudio(tabId, operation) {
  const previous = audioQueues.get(tabId) || Promise.resolve();
  const task = previous.catch(() => {}).then(operation);
  audioQueues.set(tabId, task);
  const clear = () => { if (audioQueues.get(tabId) === task) audioQueues.delete(tabId); };
  task.then(clear, clear);
  return task;
}

async function hasOffscreen() {
  const contexts = await chrome.runtime.getContexts({ contextTypes: ["OFFSCREEN_DOCUMENT"] });
  return contexts.length > 0;
}

async function ensureOffscreen() {
  if (await hasOffscreen()) return;
  if (!creatingOffscreen) {
    creatingOffscreen = chrome.offscreen.createDocument({
      url: "offscreen.html",
      reasons: ["USER_MEDIA"],
      justification: "Play the current tab's audio through a local volume control after the user enables it."
    }).finally(() => { creatingOffscreen = null; });
  }
  await creatingOffscreen;
}

async function sendOffscreen(type, tabId, extra = {}) {
  const response = await chrome.runtime.sendMessage({ target: "offscreen", type, tabId, ...extra });
  if (!response || response.error) throw new Error(response?.error || "Offscreen audio did not respond");
  return response;
}

async function getAudio(tabId) {
  if (!await hasOffscreen()) return { boost: 100, capturing: false };
  return sendOffscreen("AUDIO_GET", tabId);
}

async function stopAudio(tabId) {
  if (!await hasOffscreen()) return { boost: 100, capturing: false };
  return sendOffscreen("AUDIO_STOP", tabId);
}

async function setAudio(tabId, input) {
  if (!Number.isFinite(input)) throw new Error("Invalid volume");
  const boost = Math.max(0, Math.min(1000, Math.round(input / 10) * 10));
  if (boost === 100) return stopAudio(tabId);
  const version = navigationVersion.get(tabId) || 0;
  await ensureOffscreen();
  const current = await sendOffscreen("AUDIO_GET", tabId);
  let result;
  if (current.capturing) result = await sendOffscreen("AUDIO_SET", tabId, { boost });
  else {
    const streamId = await chrome.tabCapture.getMediaStreamId({ targetTabId: tabId });
    result = await sendOffscreen("AUDIO_START", tabId, { boost, streamId });
  }
  if ((navigationVersion.get(tabId) || 0) !== version) return stopAudio(tabId);
  return result;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.target !== "background") return;
  if (sender.id !== chrome.runtime.id || sender.url !== chrome.runtime.getURL("popup.html")) {
    sendResponse({ error: "Unauthorized sender" });
    return;
  }
  const tabId = Number(message.tabId);
  if (!Number.isInteger(tabId) || tabId < 0) {
    sendResponse({ error: "Invalid tab" });
    return;
  }
  let task;
  if (message.type === "AUDIO_GET") task = queueAudio(tabId, () => getAudio(tabId));
  else if (message.type === "AUDIO_SET") task = queueAudio(tabId, () => setAudio(tabId, Number(message.value)));
  else if (message.type === "AUDIO_STOP") task = queueAudio(tabId, () => stopAudio(tabId));
  else return;
  task.then(sendResponse, error => sendResponse({ error: String(error.message || error) }));
  return true;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "loading") {
    navigationVersion.set(tabId, (navigationVersion.get(tabId) || 0) + 1);
    queueAudio(tabId, () => stopAudio(tabId)).catch(() => {});
  }
});

chrome.tabs.onRemoved.addListener(tabId => {
  const version = (navigationVersion.get(tabId) || 0) + 1;
  navigationVersion.set(tabId, version);
  queueAudio(tabId, () => stopAudio(tabId)).catch(() => {}).finally(() => {
    if (navigationVersion.get(tabId) === version) navigationVersion.delete(tabId);
  });
});
