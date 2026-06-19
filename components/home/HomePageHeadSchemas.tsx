import { headers } from "next/headers";
import { HomePageJsonLd } from "@/components/home/HomePageJsonLd";

export function HomePageHeadSchemas() {
  const pathname = headers().get("x-pathname");
  if (pathname !== "/") return null;
  return <HomePageJsonLd />;
}
