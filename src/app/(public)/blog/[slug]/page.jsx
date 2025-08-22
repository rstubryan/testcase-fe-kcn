import Link from "next/link";
import { getAllBlogs } from "@/services/blogs/api";
import { Typography } from "@/components/atoms/typography/typography";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/atoms/card/card";
import BlogDetailLayout from "@/components/templates/blog/blog-detail-layout";

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
    <Typography key={i} className="mb-4">
      {line}
    </Typography>
  ));

  return (
    <BlogDetailLayout isLoading={!post}>
      <Card className="overflow-hidden">
        <CardHeader className="border-b border-gray-200">
          <Typography size="h1" className="text-left capitalize">
            {post.title}
          </Typography>
        </CardHeader>
        <CardContent className="py-8">{formattedBody}</CardContent>
        <CardFooter className="border-t border-gray-200 justify-between">
          <Typography variant="secondary" size="sm">
            Post ID: {post.id}
          </Typography>
          <Link
            href="/blog"
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            <span>All posts</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </CardFooter>
      </Card>
    </BlogDetailLayout>
  );
}
