import Link from "next/link";
import { Skeleton } from "@/components/atoms/skeleton/skeleton";
import { Card, CardHeader, CardContent } from "@/components/atoms/card/card";
import ContainerLayout from "@/components/templates/container/container-layout";

function BlogDetailSkeleton() {
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

export default function BlogDetailLayout({ children, isLoading }) {
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

        {isLoading ? <BlogDetailSkeleton /> : children}
      </div>
    </ContainerLayout>
  );
}

export { BlogDetailSkeleton };
