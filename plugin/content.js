(() => {
  const existing = globalThis.__videoToolboxControllerV2;
  if (existing) {
    existing.activate();
    return;
  }

  const videos = new Set();
  const observers = new Map();
  const metadataListeners = new Map();
  let speed = 1;
  let active = false;
  let speedError = false;

  function state() {
    for (const video of videos) {
      if (video.isConnected) continue;
      const listener = metadataListeners.get(video);
      if (listener) video.removeEventListener("loadedmetadata", listener);
      metadataListeners.delete(video);
      videos.delete(video);
    }
    return { speed, videoCount: videos.size, speedError };
  }

  function applySpeed(video) {
    try {
      if (video.playbackRate !== speed) video.playbackRate = speed;
    } catch (_) {
      speedError = true;
    }
  }

  function addVideo(video) {
    if (!videos.has(video)) {
      videos.add(video);
      const onMetadata = () => { if (active) applySpeed(video); };
      metadataListeners.set(video, onMetadata);
      video.addEventListener("loadedmetadata", onMetadata);
    }
    applySpeed(video);
  }

  function scan(root) {
    if (!active || !root) return;
    if (root.nodeType === 1 && root.localName === "video") addVideo(root);
    if (root.nodeType === 1 && root.shadowRoot) scan(root.shadowRoot);
    if (root.querySelectorAll) {
      for (const video of root.querySelectorAll("video")) addVideo(video);
      for (const element of root.querySelectorAll("*")) if (element.shadowRoot) scan(element.shadowRoot);
    }
    if ((root.nodeType === 9 || root.nodeType === 11) && !observers.has(root)) {
      const observer = new MutationObserver(records => {
        for (const record of records) for (const node of record.addedNodes) scan(node);
      });
      observer.observe(root, { childList: true, subtree: true });
      observers.set(root, observer);
    }
  }

  function setSpeed(value) {
    if (!Number.isFinite(value)) return state();
    speed = Math.max(0.25, Math.min(16, Math.round(value * 100) / 100));
    speedError = false;
    for (const video of videos) if (video.isConnected) applySpeed(video);
    return state();
  }

  function deactivate() {
    speed = 1;
    for (const video of videos) applySpeed(video);
    for (const observer of observers.values()) observer.disconnect();
    observers.clear();
    for (const [video, listener] of metadataListeners) video.removeEventListener("loadedmetadata", listener);
    metadataListeners.clear();
    videos.clear();
    chrome.runtime.onMessage.removeListener(onMessage);
    active = false;
  }

  function onMessage(message, _sender, sendResponse) {
    if (!message || typeof message.type !== "string") return;
    if (message.type === "VT2_GET") sendResponse(state());
    else if (message.type === "VT2_SPEED") sendResponse(setSpeed(Number(message.value)));
    else if (message.type === "VT2_EXIT") {
      deactivate();
      sendResponse({ exited: true });
    }
  }

  function activate() {
    if (active) return;
    active = true;
    chrome.runtime.onMessage.addListener(onMessage);
    scan(document);
  }

  globalThis.__videoToolboxControllerV2 = { activate };
  activate();
})();
