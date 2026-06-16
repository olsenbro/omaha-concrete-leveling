import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NeighborhoodPageTemplate } from "@/components/areas/NeighborhoodPageTemplate";
import { getCityBySlug } from "@/lib/areas-served";
import { getKeywordsForPage } from "@/lib/keyword-targets";
import {
  getNeighborhoodBySlug,
  getNeighborhoodPath,
  neighborhoodAreas,
} from "@/lib/neighborhoods";
import { buildPageMetadata } from "@/lib/seo";

type NeighborhoodPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return neighborhoodAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: NeighborhoodPageProps): Metadata {
  const area = getNeighborhoodBySlug(params.slug);
  if (!area) return {};

  const city = getCityBySlug(area.citySlug);
  const path = getNeighborhoodPath(area.slug);

  return buildPageMetadata({
    title: area.title,
    description: area.description,
    canonical: path,
    keywords: city ? getKeywordsForPage(path, city) : undefined,
  });
}

export default function NeighborhoodAreaPage({ params }: NeighborhoodPageProps) {
  const area = getNeighborhoodBySlug(params.slug);
  if (!area) notFound();

  return <NeighborhoodPageTemplate area={area} />;
}
