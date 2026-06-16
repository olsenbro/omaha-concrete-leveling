document.querySelectorAll("form[data-bs-form]").forEach(function (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    var fd = new FormData(form);
    var siteId =
      window.SITE_CONFIG &&
      window.SITE_CONFIG.forms &&
      window.SITE_CONFIG.forms.siteId;

    if (!siteId || siteId === "NEXT_PUBLIC_SITE_ID_PLACEHOLDER") {
      showErrorToast();
      return;
    }

    var messageParts = [];
    var message = fd.get("message");
    if (message) messageParts.push(String(message));

    ["address", "projectType", "severity", "timeline"].forEach(function (key) {
      var value = fd.get(key);
      if (value) messageParts.push(key + ": " + value);
    });

    var payload = {
      name:
        [fd.get("first_name"), fd.get("last_name")].filter(Boolean).join(" ") ||
        fd.get("name") ||
        "",
      email: fd.get("email") || "",
      phone: fd.get("phone") || "",
      message: messageParts.join("\n"),
      session_id: window.__bs_session_id || null,
    };

    try {
      var res = await fetch(
        "https://brosites.lovable.app/api/public/leads/" + siteId,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error("submit failed");
      form.reset();
      window.location.href = "/thank-you/";
    } catch (err) {
      showErrorToast();
    }
  });
});

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
