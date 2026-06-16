(function () {
  function showErrorToast() {
    var t = document.createElement("div");
    t.textContent = "Something went wrong. Please call us or try again.";
    t.style.cssText =
      "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#dc2626;color:#fff;padding:12px 20px;border-radius:6px;z-index:9999";
    document.body.appendChild(t);
    setTimeout(function () {
      t.remove();
    }, 5000);
  }

  function getSiteId() {
    var siteId =
      window.SITE_CONFIG &&
      window.SITE_CONFIG.forms &&
      window.SITE_CONFIG.forms.siteId;
    if (!siteId || siteId === "NEXT_PUBLIC_SITE_ID_PLACEHOLDER") return "";
    return siteId;
  }

  function buildPayload(fd) {
    var messageParts = [];
    var message = fd.get("message");
    if (message) messageParts.push(String(message));

    ["address", "projectType", "severity", "timeline"].forEach(function (key) {
      var value = fd.get(key);
      if (value) messageParts.push(key + ": " + value);
    });

    return {
      name:
        [fd.get("first_name"), fd.get("last_name")].filter(Boolean).join(" ") ||
        fd.get("name") ||
        "",
      email: fd.get("email") || "",
      phone: fd.get("phone") || "",
      message: messageParts.join("\n"),
      session_id: window.__bs_session_id || null,
    };
  }

  async function handleSubmit(form) {
    var siteId = getSiteId();
    if (!siteId) {
      showErrorToast();
      return;
    }

    var fd = new FormData(form);

    try {
      var res = await fetch(
        "https://brosites.lovable.app/api/public/leads/" + siteId,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload(fd)),
        }
      );
      if (!res.ok) throw new Error("submit failed");
      form.reset();
      window.location.href = "/thank-you/";
    } catch (err) {
      showErrorToast();
    }
  }

  document.addEventListener(
    "submit",
    function (e) {
      var form = e.target;
      if (!form || !form.matches || !form.matches("form[data-bs-form]")) return;
      e.preventDefault();
      handleSubmit(form);
    },
    true
  );
})();
