import Link from "next/link";
import { Typography } from "@/components/atoms/typography/typography";
import { Skeleton } from "@/components/atoms/skeleton/skeleton";
import ContainerLayout from "@/components/templates/container/container-layout";

function GallerySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <div
          key={item}
          className="aspect-square bg-gray-200 rounded-md overflow-hidden"
        >
          <Skeleton className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}

export default function GalleryLayout({ children, isLoading }) {
  return (
    <ContainerLayout>
      <div className="py-8">
        <div className="mb-10">
          <Typography size="h1" className="mb-4">
            Image Gallery
          </Typography>
          <Typography variant="secondary" className="max-w-2xl">
            Koleksi gambar dengan menggunakan next/image untuk optimasi
          </Typography>
        </div>

        {isLoading ? <GallerySkeleton /> : children}

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </ContainerLayout>
  );
}

export { GallerySkeleton };
