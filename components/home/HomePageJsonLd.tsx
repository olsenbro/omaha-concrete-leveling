import { getHomeFAQPageSchema, getHomeLocalBusinessSchema } from "@/lib/schema";

export function HomePageJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getHomeLocalBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getHomeFAQPageSchema()),
        }}
      />
    </>
  );
}
