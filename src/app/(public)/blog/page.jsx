import Link from "next/link";
import { getAllBlogs } from "@/services/blogs/api";
import { Typography } from "@/components/atoms/typography/typography";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/atoms/card/card";
import BlogLayout from "@/components/templates/blog/blog-layout";

export const dynamic = "force-static";

export default async function BlogsPage() {
  const posts = await getAllBlogs();

  return (
    <BlogLayout isLoading={!posts}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="transition-all hover:shadow-md">
            <CardHeader className="border-b border-gray-200">
              <Link href={`/blog/${post.slug}`}>
                <CardTitle className="text-left hover:text-blue-600 transition-colors capitalize">
                  {post.title}
                </CardTitle>
              </Link>
            </CardHeader>
            <CardContent className="mt-2">
              <Typography
                variant="secondary"
                className="line-clamp-3 text-left"
              >
                {post.body.substring(0, 150)}...
              </Typography>
            </CardContent>
            <CardFooter className="border-t border-gray-200 justify-end">
              <Link
                href={`/blog/${post.slug}`}
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 flex items-center"
              >
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
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
        ))}
      </div>
    </BlogLayout>
  );
}
