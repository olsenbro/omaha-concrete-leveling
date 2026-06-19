import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/blog/BlogPostTemplate";
import { blogPosts, getBlogPath, getBlogPost } from "@/lib/blog-posts";
import { buildPageMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    canonical: getBlogPath(post.slug),
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return <BlogPostTemplate post={post} />;
}
