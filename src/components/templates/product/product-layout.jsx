import Link from "next/link";
import { Typography } from "@/components/atoms/typography/typography";
import { Skeleton } from "@/components/atoms/skeleton/skeleton";
import { Card, CardHeader, CardContent } from "@/components/atoms/card/card";
import ContainerLayout from "@/components/templates/container/container-layout";

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item}>
          <CardHeader className="border-b">
            <Skeleton className="h-7 w-3/4" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/4" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function ProductLayout({ children, isLoading }) {
  return (
    <ContainerLayout>
      <div className="py-8">
        <div className="mb-10">
          <Typography size="h1" className="mb-4">
            Products
          </Typography>
          <Typography variant="secondary" className="max-w-2xl">
            Explore our latest products and offerings
          </Typography>
        </div>

        {isLoading ? <ProductSkeleton /> : children}

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </ContainerLayout>
  );
}

export { ProductSkeleton };
