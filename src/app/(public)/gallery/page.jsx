import Image from "next/image";
import { getGalleryImages } from "@/services/gallery/api";
import GalleryLayout from "@/components/templates/gallery/gallery-layout";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const images = await getGalleryImages(12);

  return (
    <GalleryLayout isLoading={!images}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-md"
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority={image.id <= 4}
            />
          </div>
        ))}
      </div>
    </GalleryLayout>
  );
}
