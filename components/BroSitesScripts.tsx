"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function BroSitesScripts() {
  const pathname = usePathname();
  const [trackingReady, setTrackingReady] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (!trackingReady) return;

    if (!initialized.current) {
      window.initBroSitesTracking?.();
      initialized.current = true;
      return;
    }

    window.trackBroSitesPageview?.();
  }, [pathname, trackingReady]);

  return (
    <>
      <Script src="/js/site-config.js" strategy="afterInteractive" />
      <Script
        src="/js/brosites-tracking.js"
        strategy="afterInteractive"
        onLoad={() => setTrackingReady(true)}
      />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
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
