import Link from "next/link";
import { getAllBlogs } from "@/services/blogs/api";
import { Typography } from "@/components/atoms/typography/typography";
import { Skeleton } from "@/components/atoms/skeleton/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/atoms/card/card";
import ContainerLayout from "@/components/templates/container/container-layout";

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

function BlogPostSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Skeleton className="h-6 w-32" />
      </div>
      <Card>
        <CardHeader className="border-b">
          <Skeleton className="h-10 w-3/4" />
        </CardHeader>
        <CardContent className="mt-6 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </CardContent>
      </Card>
    </div>
  );
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  const formattedBody = post.body.split("\n").map((line, i) => (
    <Typography key={i} className="mb-4">
      {line}
    </Typography>
  ));

  return (
    <ContainerLayout>
      <div className="py-8">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 flex items-center mb-6 gap-1"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back to blogs</span>
        </Link>

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
      </div>
    </ContainerLayout>
  );
}
