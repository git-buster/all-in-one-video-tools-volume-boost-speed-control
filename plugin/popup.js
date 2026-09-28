const translations = {
  "zh-CN": { offline:"完全离线", permissionEyebrow:"网页访问", permissionTitle:"控制此网页的视频", permissionBody:"允许访问当前网页后，即可调节视频声音和速度。插件不会联网或上传信息。", allow:"允许读取此网页", refreshHint:"刷新此网页后，音量和速度会恢复默认。", currentPage:"当前网页", volumeTitle:"额外音量", restore100:"恢复 100%", volumeCaption:"原始声音 = 100%", speedTitle:"播放速度", customSpeed:"自定义速度", resetAll:"全部恢复默认", videos:n=>`${n} 个视频`, noVideos:"暂无视频", unsupported:"此页面不允许插件运行。请在普通网页打开视频后重试。", failed:"无法连接此网页。请重新打开插件后重试。", audioError:"此网页的视频无法使用额外音量放大；速度调节仍可使用。", audioSuspended:"请点击一下网页中的视频，以启用额外音量。", badSpeed:"请输入 0.25 到 16 之间的速度。", loading:"正在启用…" },
  "zh-TW": { offline:"完全離線", permissionEyebrow:"網頁存取", permissionTitle:"控制此網頁的影片", permissionBody:"允許存取目前網頁後，即可調整影片音量和速度。擴充功能不會連線或上傳資料。", allow:"允許讀取此網頁", refreshHint:"重新整理網頁後，音量和速度會恢復預設。", currentPage:"目前網頁", volumeTitle:"額外音量", restore100:"恢復 100%", volumeCaption:"原始聲音 = 100%", speedTitle:"播放速度", customSpeed:"自訂速度", resetAll:"全部恢復預設", videos:n=>`${n} 部影片`, noVideos:"目前沒有影片", unsupported:"此頁面不允許擴充功能執行。請在一般網頁開啟影片後重試。", failed:"無法連線到此網頁。請重新開啟擴充功能後重試。", audioError:"此網頁的影片無法使用額外音量放大；仍可調整速度。", audioSuspended:"請點一下網頁中的影片，以啟用額外音量。", badSpeed:"請輸入 0.25 到 16 之間的速度。", loading:"正在啟用…" },
  en: { offline:"Fully offline", permissionEyebrow:"PAGE ACCESS", permissionTitle:"Control this page's videos", permissionBody:"Allow access to this page to adjust video sound and speed. The extension never connects or uploads information.", allow:"Allow access to this page", refreshHint:"Sound and speed reset when this page reloads.", currentPage:"CURRENT PAGE", volumeTitle:"Extra volume", restore100:"Restore 100%", volumeCaption:"Original sound = 100%", speedTitle:"Playback speed", customSpeed:"Custom speed", resetAll:"Reset all to default", videos:n=>`${n} video${n===1?"":"s"}`, noVideos:"No videos yet", unsupported:"Extensions cannot run on this page. Open a video on a regular website and try again.", failed:"Could not connect to this page. Reopen the extension and try again.", audioError:"Extra volume is unavailable for this page's video; speed control still works.", audioSuspended:"Click the video on the page to enable extra volume.", badSpeed:"Enter a speed from 0.25 to 16.", loading:"Enabling…" },
  fr: { offline:"Hors ligne", permissionEyebrow:"ACCÈS À LA PAGE", permissionTitle:"Contrôler les vidéos de cette page", permissionBody:"Autorisez l'accès à cette page pour régler le son et la vitesse. L'extension ne se connecte pas à Internet et n'envoie aucune donnée.", allow:"Autoriser l'accès à cette page", refreshHint:"Le son et la vitesse sont réinitialisés au rechargement de la page.", currentPage:"PAGE ACTUELLE", volumeTitle:"Volume supplémentaire", restore100:"Rétablir à 100 %", volumeCaption:"Son d'origine = 100 %", speedTitle:"Vitesse de lecture", customSpeed:"Vitesse personnalisée", resetAll:"Tout réinitialiser", videos:n=>`${n} vidéo${n===1?"":"s"}`, noVideos:"Aucune vidéo", unsupported:"L'extension ne peut pas fonctionner sur cette page. Ouvrez une vidéo sur un site classique.", failed:"Connexion à cette page impossible. Rouvrez l'extension et réessayez.", audioError:"L'amplification est indisponible pour cette vidéo ; la vitesse reste réglable.", audioSuspended:"Cliquez sur la vidéo pour activer l'amplification.", badSpeed:"Saisissez une vitesse entre 0,25 et 16.", loading:"Activation…" },
  de: { offline:"Vollständig offline", permissionEyebrow:"SEITENZUGRIFF", permissionTitle:"Videos auf dieser Seite steuern", permissionBody:"Erlaube den Zugriff auf diese Seite, um Lautstärke und Tempo anzupassen. Die Erweiterung verbindet sich nicht mit dem Internet und sendet keine Daten.", allow:"Zugriff auf diese Seite erlauben", refreshHint:"Beim Neuladen der Seite werden Ton und Tempo zurückgesetzt.", currentPage:"AKTUELLE SEITE", volumeTitle:"Zusätzliche Lautstärke", restore100:"Auf 100 % zurücksetzen", volumeCaption:"Originalton = 100 %", speedTitle:"Wiedergabegeschwindigkeit", customSpeed:"Eigenes Tempo", resetAll:"Alles zurücksetzen", videos:n=>`${n} Video${n===1?"":"s"}`, noVideos:"Noch keine Videos", unsupported:"Auf dieser Seite sind Erweiterungen nicht zulässig. Öffne ein Video auf einer normalen Website.", failed:"Verbindung zur Seite fehlgeschlagen. Öffne die Erweiterung erneut.", audioError:"Verstärkung ist für dieses Video nicht verfügbar; das Tempo kann weiterhin geändert werden.", audioSuspended:"Klicke auf das Video, um die Verstärkung zu aktivieren.", badSpeed:"Gib ein Tempo zwischen 0,25 und 16 ein.", loading:"Wird aktiviert…" },
  es: { offline:"Totalmente sin conexión", permissionEyebrow:"ACCESO A LA PÁGINA", permissionTitle:"Controla los videos de esta página", permissionBody:"Permite el acceso a esta página para ajustar el sonido y la velocidad. La extensión no se conecta a Internet ni envía datos.", allow:"Permitir acceso a esta página", refreshHint:"El sonido y la velocidad se restablecen al actualizar la página.", currentPage:"PÁGINA ACTUAL", volumeTitle:"Volumen adicional", restore100:"Restaurar al 100 %", volumeCaption:"Sonido original = 100 %", speedTitle:"Velocidad de reproducción", customSpeed:"Velocidad personalizada", resetAll:"Restablecer todo", videos:n=>`${n} video${n===1?"":"s"}`, noVideos:"Todavía no hay videos", unsupported:"La extensión no puede ejecutarse en esta página. Abre un video en un sitio web normal.", failed:"No se pudo conectar a esta página. Vuelve a abrir la extensión.", audioError:"El volumen adicional no está disponible para este video; aún puedes cambiar la velocidad.", audioSuspended:"Haz clic en el video para activar el volumen adicional.", badSpeed:"Introduce una velocidad entre 0,25 y 16.", loading:"Activando…" },
  ja: { offline:"完全オフライン", permissionEyebrow:"ページへのアクセス", permissionTitle:"このページの動画を操作", permissionBody:"このページへのアクセスを許可すると、音量と再生速度を調整できます。拡張機能は通信もデータ送信もしません。", allow:"このページへのアクセスを許可", refreshHint:"ページを再読み込みすると、音量と速度は初期値に戻ります。", currentPage:"現在のページ", volumeTitle:"追加音量", restore100:"100% に戻す", volumeCaption:"元の音量 = 100%", speedTitle:"再生速度", customSpeed:"カスタム速度", resetAll:"すべて初期値に戻す", videos:n=>`動画 ${n} 本`, noVideos:"動画はまだありません", unsupported:"このページでは拡張機能を実行できません。通常のウェブページで動画を開いてください。", failed:"ページに接続できません。拡張機能を開き直してください。", audioError:"この動画では追加音量を使用できません。速度は調整できます。", audioSuspended:"追加音量を有効にするには、ページ上の動画をクリックしてください。", badSpeed:"0.25 ～ 16 の速度を入力してください。", loading:"有効化中…" },
  ko: { offline:"완전 오프라인", permissionEyebrow:"페이지 접근", permissionTitle:"이 페이지의 동영상 제어", permissionBody:"현재 페이지 접근을 허용하면 동영상 음량과 속도를 조절할 수 있습니다. 확장 프로그램은 인터넷에 연결하거나 정보를 전송하지 않습니다.", allow:"이 페이지 접근 허용", refreshHint:"페이지를 새로고침하면 음량과 속도가 기본값으로 돌아갑니다.", currentPage:"현재 페이지", volumeTitle:"추가 음량", restore100:"100%로 복원", volumeCaption:"원래 음량 = 100%", speedTitle:"재생 속도", customSpeed:"사용자 지정 속도", resetAll:"모두 기본값으로 복원", videos:n=>`동영상 ${n}개`, noVideos:"아직 동영상 없음", unsupported:"이 페이지에서는 확장 프로그램을 실행할 수 없습니다. 일반 웹사이트에서 동영상을 열어 주세요.", failed:"페이지에 연결할 수 없습니다. 확장 프로그램을 다시 열어 주세요.", audioError:"이 동영상에서는 추가 음량을 사용할 수 없지만 속도는 조절할 수 있습니다.", audioSuspended:"추가 음량을 사용하려면 페이지의 동영상을 클릭해 주세요.", badSpeed:"0.25에서 16 사이의 속도를 입력해 주세요.", loading:"사용 설정 중…" }
};

Object.assign(translations["zh-CN"], { exit: "退出", languageLabel: "选择语言", restore1: "恢复 1×" });
Object.assign(translations["zh-TW"], { exit: "退出", languageLabel: "選擇語言", restore1: "恢復 1×" });
Object.assign(translations.en, { exit: "Exit", languageLabel: "Select language", restore1: "Restore 1×" });
Object.assign(translations.fr, { exit: "Quitter", languageLabel: "Choisir la langue", restore1: "Rétablir 1×" });
Object.assign(translations.de, { exit: "Beenden", languageLabel: "Sprache wählen", restore1: "1× zurück" });
Object.assign(translations.es, { exit: "Salir", languageLabel: "Elegir idioma", restore1: "Restaurar 1×" });
Object.assign(translations.ja, { exit: "終了", languageLabel: "言語を選択", restore1: "1× に戻す" });
Object.assign(translations.ko, { exit: "종료", languageLabel: "언어 선택", restore1: "1×로 복원" });

Object.assign(translations["zh-CN"], { audioError: "无法处理当前标签页声音，请重试。" });
Object.assign(translations["zh-TW"], { audioError: "無法處理目前分頁的聲音，請重試。" });
Object.assign(translations.en, { audioError: "Could not process this tab's audio. Try again." });
Object.assign(translations.fr, { audioError: "Impossible de traiter le son de cet onglet. Réessayez." });
Object.assign(translations.de, { audioError: "Der Ton dieses Tabs konnte nicht verarbeitet werden. Erneut versuchen." });
Object.assign(translations.es, { audioError: "No se pudo procesar el audio de esta pestaña. Inténtalo de nuevo." });
Object.assign(translations.ja, { audioError: "このタブの音声を処理できませんでした。再試行してください。" });
Object.assign(translations.ko, { audioError: "이 탭의 오디오를 처리할 수 없습니다. 다시 시도해 주세요." });

Object.assign(translations["zh-CN"], { permissionBody: "点击允许后才控制此网页。调节额外音量时，仅在本地处理当前标签页声音，不录制或上传。" });
Object.assign(translations["zh-TW"], { permissionBody: "點擊允許後才控制此網頁。調整額外音量時，只在本機處理目前分頁聲音，不錄製或上傳。" });
Object.assign(translations.en, { permissionBody: "Access starts only after you allow it. Extra volume processes this tab's audio locally; nothing is recorded or uploaded." });
Object.assign(translations.fr, { permissionBody: "L'accès commence après votre accord. Le son de cet onglet est traité localement, sans enregistrement ni envoi." });
Object.assign(translations.de, { permissionBody: "Der Zugriff beginnt erst nach deiner Erlaubnis. Der Ton dieses Tabs wird lokal verarbeitet, nicht aufgenommen oder gesendet." });
Object.assign(translations.es, { permissionBody: "El acceso comienza al permitirlo. El audio de esta pestaña se procesa localmente, sin grabarlo ni enviarlo." });
Object.assign(translations.ja, { permissionBody: "許可後にのみページを操作します。追加音量ではタブの音声をローカルで処理し、録音や送信はしません。" });
Object.assign(translations.ko, { permissionBody: "허용한 뒤에만 페이지를 제어합니다. 추가 음량은 탭 소리를 기기에서만 처리하며 녹음하거나 전송하지 않습니다." });

Object.assign(translations["zh-CN"], { actionFailed: "操作失败，请重试。", audioStopFailed: "无法停止额外音量，请重试。" });
Object.assign(translations["zh-TW"], { actionFailed: "操作失敗，請重試。", audioStopFailed: "無法停止額外音量，請重試。" });
Object.assign(translations.en, { actionFailed: "Action failed. Try again.", audioStopFailed: "Could not stop extra volume. Try again." });
Object.assign(translations.fr, { actionFailed: "Échec de l'action. Réessayez.", audioStopFailed: "Impossible d'arrêter l'amplification. Réessayez." });
Object.assign(translations.de, { actionFailed: "Aktion fehlgeschlagen. Erneut versuchen.", audioStopFailed: "Verstärkung konnte nicht gestoppt werden. Erneut versuchen." });
Object.assign(translations.es, { actionFailed: "La acción falló. Inténtalo de nuevo.", audioStopFailed: "No se pudo detener la amplificación. Inténtalo de nuevo." });
Object.assign(translations.ja, { actionFailed: "操作に失敗しました。再試行してください。", audioStopFailed: "追加音量を停止できません。再試行してください。" });
Object.assign(translations.ko, { actionFailed: "작업에 실패했습니다. 다시 시도해 주세요.", audioStopFailed: "추가 음량을 중지할 수 없습니다. 다시 시도해 주세요." });

const $ = id => document.getElementById(id);
const displayNames = {
  "zh-CN": "视频集成工具｜音量放大与倍速调节",
  "zh-TW": "影片整合工具｜音量放大與倍速調節",
  en: "All-in-One Video Tools | Volume Boost & Speed Control"
};
let locale = localStorage.getItem("videoToolboxLocale") || pickLocale(navigator.language);
if (!Object.hasOwn(translations, locale)) locale = pickLocale(navigator.language);
let tabId = null;
let currentState = null;
let commandQueue = Promise.resolve();
let latestCommand = 0;
let unsupportedTab = false;
let resetPending = false;
let exiting = false;

function pickLocale(language) {
  const lower = language.toLowerCase();
  if (lower.startsWith("zh")) return /tw|hk|mo/.test(lower) ? "zh-TW" : "zh-CN";
  return ["fr", "de", "es", "ja", "ko"].find(code => lower.startsWith(code)) || "en";
}

function t(key, ...args) {
  const entry = translations[locale][key];
  return typeof entry === "function" ? entry(...args) : entry;
}

function translate() {
  document.documentElement.lang = locale;
  const displayName = displayNames[locale] || displayNames.en;
  $("brand-name").textContent = displayName;
  $("brand-name").title = displayName;
  document.title = displayName;
  for (const node of document.querySelectorAll("[data-i18n]")) node.textContent = t(node.dataset.i18n);
  $("language").setAttribute("aria-label", t("languageLabel"));
  if (unsupportedTab) $("allow").title = t("unsupported");
  if (currentState) render(currentState);
}

function showStatus(message) {
  $("status").textContent = message || "";
  $("status").hidden = !message;
}

function showGate() {
  $("gate").hidden = false;
  $("controls").hidden = true;
  $("exit").hidden = true;
}

function showControls() {
  $("gate").hidden = true;
  $("controls").hidden = false;
  $("exit").hidden = false;
  showStatus("");
}

function setFill(input) {
  const value = Number(input.value);
  const min = Number(input.min);
  const max = Number(input.max);
  input.style.setProperty("--fill", `${((value - min) / (max - min)) * 100}%`);
}

function render(state) {
  currentState = state;
  $("volume").value = state.boost;
  $("volume").setAttribute("aria-valuetext", `${state.boost}%`);
  $("volume-value").textContent = `${state.boost}%`;
  $("speed").value = state.speed;
  $("speed").setAttribute("aria-valuetext", `${state.speed}×`);
  $("speed-input").value = state.speed;
  $("speed-value").textContent = `${state.speed}×`;
  $("video-count").textContent = state.videoCount ? t("videos", state.videoCount) : t("noVideos");
  setFill($("volume"));
  setFill($("speed"));
  for (const button of $("presets").querySelectorAll("button")) {
    const active = Number(button.dataset.rate) === state.speed;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  }
  for (const button of $("volume-presets").querySelectorAll("button")) {
    const active = Number(button.dataset.boost) === state.boost;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  }
  if (state.speedError) showStatus(t("failed"));
  else if (state.audioUnavailable) showStatus(t("audioError"));
  else showStatus("");
}

function queryActiveTab() {
  return new Promise((resolve, reject) => chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const error = chrome.runtime.lastError;
    if (error) reject(error); else resolve(tabs[0]);
  }));
}

function sendContent(type, value) {
  return new Promise((resolve, reject) => chrome.tabs.sendMessage(tabId, { type, value }, response => {
    const error = chrome.runtime.lastError;
    if (error || !response) reject(error || new Error("No response")); else resolve(response);
  }));
}

function sendAudio(type, value) {
  return new Promise((resolve, reject) => chrome.runtime.sendMessage({ target: "background", type, tabId, value }, response => {
    const error = chrome.runtime.lastError;
    if (error || !response || response.error) reject(error || new Error(response?.error || "No audio response"));
    else resolve(response);
  }));
}

async function readState() {
  const page = await sendContent("VT2_GET");
  const audio = await sendAudio("AUDIO_GET").catch(() => ({ boost: 100, capturing: false, audioUnavailable: true }));
  return { ...page, ...audio };
}

function inject() {
  return new Promise((resolve, reject) => chrome.scripting.executeScript({ target: { tabId }, files: ["content.js"] }, result => {
    const error = chrome.runtime.lastError;
    if (error) reject(error); else resolve(result);
  }));
}

function command(type, value) {
  const sequence = ++latestCommand;
  commandQueue = commandQueue.catch(() => {}).then(async () => {
    const update = type === "AUDIO_SET"
      ? await sendAudio(type, value)
      : await sendContent(type, value);
    currentState = { ...currentState, ...update, ...(type === "AUDIO_SET" ? { audioUnavailable: false } : {}) };
    if (sequence === latestCommand) render(currentState);
  }).catch(() => {
    if (sequence === latestCommand) {
      if (currentState) render(currentState);
      showStatus(t(type === "AUDIO_SET" ? "audioError" : "actionFailed"));
    }
  });
}

function resetAll() {
  if (resetPending || exiting) return;
  resetPending = true;
  $("reset-all").disabled = true;
  const sequence = ++latestCommand;
  commandQueue = commandQueue.catch(() => {}).then(async () => {
    const results = await Promise.allSettled([sendAudio("AUDIO_STOP"), sendContent("VT2_SPEED", 1)]);
    const audio = results[0].status === "fulfilled" ? results[0].value : null;
    const page = results[1].status === "fulfilled" ? results[1].value : null;
    currentState = { ...currentState, ...audio, ...page, ...(audio ? { audioUnavailable: false } : {}) };
    if (sequence === latestCommand) {
      render(currentState);
      if (!audio || !page) showStatus(t(!audio ? "audioStopFailed" : "actionFailed"));
    }
  }).finally(() => {
    resetPending = false;
    $("reset-all").disabled = exiting;
  });
}

function exitControls() {
  if (exiting) return;
  exiting = true;
  $("exit").disabled = true;
  $("reset-all").disabled = true;
  const sequence = ++latestCommand;
  commandQueue = commandQueue.catch(() => {}).then(async () => {
    let audio;
    try {
      audio = await sendAudio("AUDIO_STOP");
      await sendContent("VT2_EXIT");
      if (sequence === latestCommand) {
        currentState = null;
        showGate();
        showStatus("");
      }
    } catch (_) {
      if (sequence === latestCommand) {
        if (audio && currentState) render({ ...currentState, ...audio });
        showStatus(t(audio ? "actionFailed" : "audioStopFailed"));
      }
    }
  }).finally(() => {
    exiting = false;
    $("exit").disabled = false;
    $("reset-all").disabled = resetPending;
  });
}

async function init() {
  $("language").value = locale;
  translate();
  showGate();
  try {
    const tab = await queryActiveTab();
    tabId = tab?.id;
    const rawUrl = tab?.url || "";
    let url;
    try { url = new URL(rawUrl); } catch (_) { url = null; }
    const site = url && ["http:", "https:"].includes(url.protocol)
      ? url.hostname
      : rawUrl || "—";
    $("gate-site").textContent = site;
    $("gate-site").title = site;
    $("control-site").textContent = site;
    $("control-site").title = site;
    if (tabId == null || !url || !["http:", "https:", "file:"].includes(url.protocol)) throw new Error("Unsupported URL");
    try { const state = await readState(); showControls(); render(state); }
    catch (_) { showGate(); }
  } catch (_) {
    unsupportedTab = true;
    $("allow").disabled = true;
    $("allow").title = t("unsupported");
    showStatus("");
  }
}

$("language").addEventListener("change", event => {
  locale = event.target.value;
  localStorage.setItem("videoToolboxLocale", locale);
  translate();
});

$("allow").addEventListener("click", async () => {
  $("allow").disabled = true;
  $("allow").firstElementChild.textContent = t("loading");
  showStatus("");
  try {
    try { await sendContent("VIDEO_TOOLBOX_RESET"); } catch (_) {}
    await inject();
    const state = await readState();
    showControls();
    render(state);
  } catch (_) { showStatus(t("failed")); }
  finally { $("allow").disabled = false; $("allow").firstElementChild.textContent = t("allow"); }
});

$("volume").addEventListener("input", event => {
  const value = Number(event.target.value);
  $("volume-value").textContent = `${value}%`;
  event.target.setAttribute("aria-valuetext", `${value}%`);
  setFill(event.target);
  command("AUDIO_SET", value);
});

$("reset-volume").addEventListener("click", () => command("AUDIO_SET", 100));
$("reset-speed").addEventListener("click", () => command("VT2_SPEED", 1));
$("volume-presets").addEventListener("click", event => {
  const button = event.target.closest("button[data-boost]");
  if (button) command("AUDIO_SET", Number(button.dataset.boost));
});
$("reset-all").addEventListener("click", resetAll);
$("exit").addEventListener("click", exitControls);

$("presets").addEventListener("click", event => {
  const button = event.target.closest("button[data-rate]");
  if (button) command("VT2_SPEED", Number(button.dataset.rate));
});

$("speed").addEventListener("input", event => {
  const value = Number(event.target.value);
  $("speed-value").textContent = `${value}×`;
  event.target.setAttribute("aria-valuetext", `${value}×`);
  $("speed-input").value = value;
  setFill(event.target);
  command("VT2_SPEED", value);
});

$("speed-input").addEventListener("change", event => {
  const value = Number(event.target.value);
  if (!Number.isFinite(value) || value < 0.25 || value > 16) {
    showStatus(t("badSpeed"));
    event.target.value = currentState?.speed ?? 1;
    return;
  }
  command("VT2_SPEED", value);
});

init();
