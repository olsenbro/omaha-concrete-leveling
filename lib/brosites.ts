const PLACEHOLDER = "NEXT_PUBLIC_SITE_ID_PLACEHOLDER";

export function getBroSitesSiteId(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_ID?.trim();
  if (fromEnv && fromEnv !== PLACEHOLDER) return fromEnv;

  if (typeof window !== "undefined") {
    const fromConfig = window.SITE_CONFIG?.forms?.siteId;
    if (fromConfig && fromConfig !== PLACEHOLDER) return fromConfig;
  }

  return "";
}

export function buildBroSitesLeadPayload(formData: FormData): {
  name: string;
  email: string;
  phone: string;
  message: string;
  session_id: string | null;
} {
  const messageParts: string[] = [];
  const message = formData.get("message");
  if (message) messageParts.push(String(message));

  for (const key of ["address", "projectType", "severity", "timeline"] as const) {
    const value = formData.get(key);
    if (value) messageParts.push(`${key}: ${value}`);
  }

  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const nameFromParts = [firstName, lastName].filter(Boolean).join(" ");

  return {
    name: nameFromParts || String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    message: messageParts.join("\n"),
    session_id:
      typeof window !== "undefined" && window.__bs_session_id
        ? window.__bs_session_id
        : null,
  };
}

export async function submitBroSitesLead(formData: FormData): Promise<boolean> {
  const siteId = getBroSitesSiteId();
  if (!siteId) return false;

  const res = await fetch(`https://brosites.lovable.app/api/public/leads/${siteId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildBroSitesLeadPayload(formData)),
  });

  return res.ok;
}

export function showBroSitesErrorToast(): void {
  if (typeof document === "undefined") return;

  const toast = document.createElement("div");
  toast.textContent = "Something went wrong. Please call us or try again.";
  toast.style.cssText =
    "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#dc2626;color:#fff;padding:12px 20px;border-radius:6px;z-index:9999";
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 5000);
}

declare global {
  interface Window {
    SITE_CONFIG?: {
      forms?: { siteId?: string };
    };
    __bs_session_id?: string;
    initBroSitesTracking?: () => void;
    trackBroSitesPageview?: () => void;
  }
}
