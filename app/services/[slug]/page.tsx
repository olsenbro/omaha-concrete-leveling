import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { ServiceSections } from "@/components/service/ServiceSections";
import { getKeywordsForPage } from "@/lib/keyword-targets";
import { buildPageMetadata } from "@/lib/seo";
import { coreServices, getServiceBySlug, getServicePath } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return coreServices.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const path = getServicePath(service.slug);

  return buildPageMetadata({
    title: service.title,
    description: service.description,
    canonical: path,
    keywords: getKeywordsForPage(path),
  });
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <ServicePageTemplate
      h1={service.h1}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: service.label },
      ]}
      serviceSlug={service.slug}
      intro={service.intro}
      schema={{
        name: service.schema.name,
        description: service.schema.description,
        url: `${siteConfig.schemaUrl}${getServicePath(service.slug)}`,
      }}
      faqs={service.faqs}
      faqTitle={service.faqTitle}
      ctaHeading="Ready to Get a Free Estimate?"
    >
      <ServiceSections sections={service.sections} />
    </ServicePageTemplate>
  );
}
