import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { formatBlogDate, getAllBlogPosts, getBlogPath } from "@/lib/blog-posts";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Concrete Leveling Blog | Omaha Mudjacking Pros",
  description:
    "Expert guides on mudjacking, polyjacking, concrete leveling costs, and Nebraska freeze-thaw settlement — from Omaha Mudjacking Pros.",
  canonical: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="label-caps mb-4 text-accent-light">Blog</p>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Concrete Leveling Guides for Omaha Homeowners
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Practical advice on mudjacking, foam jacking, costs, and Nebraska soil conditions —
              written for the Omaha metro.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-primary/10 bg-neutral p-6 shadow-sm"
              >
                <time
                  dateTime={post.publishedDate}
                  className="text-sm font-medium text-muted"
                >
                  {formatBlogDate(post.publishedDate)}
                </time>
                <h2 className="mt-2 font-display text-xl font-bold text-primary">
                  <Link
                    href={getBlogPath(post.slug)}
                    className="transition-colors hover:text-primary-dark"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.description}</p>
                <Link
                  href={getBlogPath(post.slug)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
