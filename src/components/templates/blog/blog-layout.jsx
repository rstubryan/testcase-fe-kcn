import Link from "next/link";
import { Typography } from "@/components/atoms/typography/typography";
import { Skeleton } from "@/components/atoms/skeleton/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/atoms/card/card";
import ContainerLayout from "@/components/templates/container/container-layout";

function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item}>
          <CardHeader className="border-b">
            <Skeleton className="h-7 w-3/4" />
          </CardHeader>
          <CardContent className="mt-4">
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
          <CardFooter className="border-t justify-end">
            <Skeleton className="h-8 w-24" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function BlogLayout({ children, isLoading }) {
  return (
    <ContainerLayout>
      <div className="py-8">
        <div className="mb-10">
          <Typography size="h1" className="mb-4">
            Blog Posts
          </Typography>
          <Typography variant="secondary" className="max-w-2xl">
            Explore our latest articles and stay updated
          </Typography>
        </div>

        {isLoading ? <BlogSkeleton /> : children}

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </ContainerLayout>
  );
}

export { BlogSkeleton };
