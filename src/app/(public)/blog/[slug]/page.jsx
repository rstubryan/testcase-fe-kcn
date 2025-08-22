import Link from "next/link";
import { getAllBlogs } from "@/services/blogs/api";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const posts = await getAllBlogs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPostBySlug(slug) {
  const posts = await getAllBlogs();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    throw new Error(`Post with slug ${slug} not found`);
  }

  return post;
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  const formattedBody = post.body.split("\n").map((line, i) => (
    <p key={i} className="mb-4">
      {line}
    </p>
  ));

  return (
    <div className="container mx-auto py-8">
      <Link
        href="/blogs"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to blogs
      </Link>

      <article className="prose lg:prose-xl">
        <h1>{post.title}</h1>
        <div>{formattedBody}</div>
      </article>
    </div>
  );
}
