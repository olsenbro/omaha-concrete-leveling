import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import {
  formatBlogDate,
  getBlogPath,
  type BlogPost,
} from "@/lib/blog-posts";
import { getArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

type BlogPostTemplateProps = {
  post: BlogPost;
};

export function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const path = getBlogPath(post.slug);

  return (
    <>
      <SchemaScript
        schema={getArticleSchema({
          title: post.title,
          description: post.description,
          path,
          publishedDate: post.publishedDate,
        })}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article>
        <header className="relative overflow-hidden bg-primary text-white">
          <div className="container-narrow section-padding">
            <div className="mx-auto max-w-3xl">
              <p className="label-caps mb-4 text-accent-light">Blog</p>
              <time
                dateTime={post.publishedDate}
                className="text-sm font-medium text-white/80"
              >
                {formatBlogDate(post.publishedDate)}
              </time>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/90">{post.description}</p>
            </div>
          </div>
        </header>

        <div className="bg-white section-padding">
          <div className="container-narrow mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none text-muted">
              {post.sections.map((section) => (
                <section key={section.heading ?? section.paragraphs[0].slice(0, 40)}>
                  {section.heading && (
                    <h2 className="font-display text-2xl font-bold text-primary">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="bg-accent section-padding text-dark">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Get Your Free Concrete Leveling Estimate
          </h2>
          <p className="mt-4 text-lg text-dark/90">
            Connect with a local Omaha concrete leveling specialist who will assess your project and
            provide an honest, no-obligation quote. Most jobs in the area are completed within the
            same week.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <PhoneLink className="inline-flex items-center gap-3 rounded-lg bg-white px-10 py-4 text-lg font-bold text-accent shadow-lg transition-colors hover:bg-neutral">
              <Phone className="h-6 w-6" aria-hidden="true" />
              Call {siteConfig.phone} Now
            </PhoneLink>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-base font-semibold text-dark underline-offset-4 hover:underline"
            >
              Or Request Online
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
