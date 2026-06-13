"use client";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function PhoneLink({ className, children }: PhoneLinkProps) {
  function handleClick() {
    // TODO: Replace console.log with your analytics event (GA4, Plausible, etc.)
    console.log("Phone click tracked");
  }

  return (
    <a
      href={siteConfig.phoneHref}
      onClick={handleClick}
      className={cn(className)}
      aria-label={`Call ${siteConfig.phone}`}
    >
      {children ?? siteConfig.phone}
    </a>
  );
}
