const fs = require("fs");
const path = require("path");

const configPath = path.join(__dirname, "../public/js/site-config.js");
const placeholder = "NEXT_PUBLIC_SITE_ID_PLACEHOLDER";
const siteId = process.env.NEXT_PUBLIC_SITE_ID || placeholder;

let content = fs.readFileSync(configPath, "utf8");

if (!content.includes("forms:")) {
  console.error("site-config.js is missing forms.siteId configuration");
  process.exit(1);
}

content = content.replace(
  /siteId:\s*"[^"]*"/,
  `siteId: "${siteId.replace(/"/g, '\\"')}"`
);

fs.writeFileSync(configPath, content);

if (siteId === placeholder) {
  console.warn(
    "Warning: NEXT_PUBLIC_SITE_ID is not set; BroSites forms and tracking are disabled until it is configured."
  );
} else {
  console.log("Injected NEXT_PUBLIC_SITE_ID into public/js/site-config.js");
}
