import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatBlogDate, getAllBlogPosts, getBlogPath } from "@/lib/blog-posts";

export function BlogSection() {
  const posts = getAllBlogPosts();

  return (
    <section className="bg-neutral section-padding" aria-labelledby="home-blog-heading">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="home-blog-heading" className="font-display text-3xl font-bold sm:text-4xl">
            Concrete Leveling Guides
          </h2>
          <p className="mt-4 text-lg text-muted">
            Practical advice for Omaha homeowners on mudjacking, costs, and Nebraska soil conditions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm"
            >
              <time
                dateTime={post.publishedDate}
                className="text-sm font-medium text-muted"
              >
                {formatBlogDate(post.publishedDate)}
              </time>
              <h3 className="mt-3 flex-1 font-display text-lg font-bold text-primary">
                <Link
                  href={getBlogPath(post.slug)}
                  className="transition-colors hover:text-primary-dark"
                >
                  {post.title}
                </Link>
              </h3>
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
  );
}
