const sessions = new Map();

async function stop(tabId) {
  const session = sessions.get(tabId);
  if (!session) return { boost: 100, capturing: false };
  sessions.delete(tabId);
  for (const track of session.stream.getTracks()) track.stop();
  await session.context.close().catch(() => {});
  return { boost: 100, capturing: false };
}

function get(tabId) {
  const session = sessions.get(tabId);
  return session
    ? { boost: session.boost, capturing: true }
    : { boost: 100, capturing: false };
}

async function start(tabId, streamId, boost) {
  if (sessions.has(tabId)) return set(tabId, boost);
  let stream;
  let context;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: { mandatory: { chromeMediaSource: "tab", chromeMediaSourceId: streamId } },
      video: false
    });
    if (!stream.getAudioTracks().length) throw new Error("Captured tab has no audio track");
    context = new AudioContext();
    const source = context.createMediaStreamSource(stream);
    const gain = context.createGain();
    gain.gain.value = boost / 100;
    source.connect(gain);
    gain.connect(context.destination);
    if (context.state !== "running") {
      await Promise.race([
        context.resume(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Audio playback was blocked")), 1500))
      ]);
    }
    if (context.state !== "running") throw new Error("Audio playback was blocked");
    const session = { stream, context, gain, boost };
    sessions.set(tabId, session);
    for (const track of stream.getTracks()) {
      track.addEventListener("ended", () => { if (sessions.get(tabId) === session) stop(tabId).catch(() => {}); });
    }
    return get(tabId);
  } catch (error) {
    for (const track of stream?.getTracks() || []) track.stop();
    await context?.close().catch(() => {});
    throw error;
  }
}

function set(tabId, boost) {
  const session = sessions.get(tabId);
  if (!session) throw new Error("Audio capture is not active");
  session.boost = boost;
  session.gain.gain.value = boost / 100;
  return get(tabId);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.target !== "offscreen") return;
  if (sender.id !== chrome.runtime.id || sender.tab) {
    sendResponse({ error: "Unauthorized sender" });
    return;
  }
  const tabId = Number(message.tabId);
  if (!Number.isInteger(tabId) || tabId < 0) {
    sendResponse({ error: "Invalid tab" });
    return;
  }
  const boost = Number(message.boost);
  if (["AUDIO_START", "AUDIO_SET"].includes(message.type) && (!Number.isFinite(boost) || boost < 0 || boost > 1000)) {
    sendResponse({ error: "Invalid volume" });
    return;
  }
  if (message.type === "AUDIO_START" && (typeof message.streamId !== "string" || !message.streamId)) {
    sendResponse({ error: "Invalid stream ID" });
    return;
  }
  let task;
  if (message.type === "AUDIO_GET") task = Promise.resolve(get(tabId));
  else if (message.type === "AUDIO_START") task = start(tabId, message.streamId, boost);
  else if (message.type === "AUDIO_SET") task = Promise.resolve(set(tabId, boost));
  else if (message.type === "AUDIO_STOP") task = stop(tabId);
  else return;
  task.then(sendResponse, error => sendResponse({ error: String(error.message || error) }));
  return true;
});
