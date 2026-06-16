(function () {
  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0;
      var v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  var STORAGE_KEY = "bs_session_id";

  try {
    var sessionId = localStorage.getItem(STORAGE_KEY);
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem(STORAGE_KEY, sessionId);
    }
    window.__bs_session_id = sessionId;
  } catch (e) {
    window.__bs_session_id = uuidv4();
  }

  var siteId =
    window.SITE_CONFIG &&
    window.SITE_CONFIG.forms &&
    window.SITE_CONFIG.forms.siteId;

  if (!siteId || siteId === "NEXT_PUBLIC_SITE_ID_PLACEHOLDER") {
    return;
  }

  var pixel = new Image();
  pixel.src =
    "https://brosites.lovable.app/api/public/px/" +
    siteId +
    "?sid=" +
    encodeURIComponent(window.__bs_session_id) +
    "&path=" +
    encodeURIComponent(location.pathname) +
    "&ref=" +
    encodeURIComponent(document.referrer || "");
})();
