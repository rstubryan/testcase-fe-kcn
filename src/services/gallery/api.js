export async function getGalleryImages(count = 12) {
  return Array.from({ length: count }, (_, i) => {
    const seed = `image-${i + 1}`;
    return {
      id: i + 1,
      url: `https://picsum.photos/seed/${seed}/800/800`,
      title: `Image ${i + 1}`,
      alt: `Gallery image ${i + 1}`,
    };
  });
}
