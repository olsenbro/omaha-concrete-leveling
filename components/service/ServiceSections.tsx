import type { ServiceContentSection } from "@/lib/services";
import {
  BulletList,
  ProcessSteps,
  ServiceComparisonTable,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";

type ServiceSectionsProps = {
  sections: ServiceContentSection[];
};

export function ServiceSections({ sections }: ServiceSectionsProps) {
  return (
    <>
      {sections.map((section) => {
        const className = section.className ?? "bg-white";

        switch (section.type) {
          case "prose":
            return (
              <ServiceSection key={section.title} title={section.title} className={className}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </ServiceSection>
            );

          case "bullet-list":
            return (
              <ServiceSection key={section.title} title={section.title} className={className}>
                {section.intro && <p>{section.intro}</p>}
                <BulletList items={section.items} />
                {section.outro && <p className="mt-4">{section.outro}</p>}
              </ServiceSection>
            );

          case "process":
            return (
              <ServiceSection key={section.title} title={section.title} className={className}>
                <ProcessSteps steps={section.steps} />
              </ServiceSection>
            );

          case "comparison":
            return (
              <ServiceSection key={section.title} title={section.title} className={className}>
                {section.intro &&
                  section.intro.split("\n\n").map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                <ServiceComparisonTable headers={section.headers} rows={section.rows} />
              </ServiceSection>
            );
        }
      })}
    </>
  );
}
