import { Typography } from "@/components/atoms/typography/typography";
import { Skeleton } from "@/components/atoms/skeleton/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/atoms/card/card";
import ContainerLayout from "@/components/templates/container/container-layout";

function UsersSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item}>
          <CardHeader className="border-b">
            <Skeleton className="h-7 w-3/4" />
          </CardHeader>
          <CardContent className="mt-2 space-y-2">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
          <CardFooter className="border-t justify-end">
            <Skeleton className="h-6 w-24" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function UserLayout({ children, isLoading }) {
  return (
    <ContainerLayout>
      <div className="py-8">
        <div className="mb-10">
          <Typography size="h1" className="mb-4">
            Users
          </Typography>
          <Typography variant="secondary" className="max-w-2xl">
            Browse all available users in the system
          </Typography>
        </div>

        {isLoading ? <UsersSkeleton /> : children}
      </div>
    </ContainerLayout>
  );
}

export { UsersSkeleton };
