import Link from "next/link";
import Script from "next/script";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    { name: "Home", url: siteConfig.schemaUrl },
    ...items.map((item) => ({
      name: item.label,
      url: item.href
        ? `${siteConfig.schemaUrl}${item.href}`
        : siteConfig.schemaUrl,
    })),
  ];

  return (
    <>
      <Script
        id={`breadcrumb-${items.map((i) => i.label).join("-").toLowerCase().replace(/\s+/g, "-")}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema(schemaItems) }}
      />
      <nav aria-label="Breadcrumb" className="border-b border-primary/10 bg-neutral/50">
        <div className="container-narrow px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-1">
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted/50" aria-hidden="true" />
                  {isLast || !item.href ? (
                    <span className="font-medium text-primary" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className="transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
