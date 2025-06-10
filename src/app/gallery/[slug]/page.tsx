import { getAlbumBySlug, getAllAlbums } from '@/lib/albums';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface AlbumPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const albums = getAllAlbums();
  return albums.map((album) => ({
    slug: album.slug,
  }));
}

export default function AlbumPage({ params }: AlbumPageProps) {
  const album = getAlbumBySlug(params.slug);

  if (!album) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href="/gallery"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        ← Back to Gallery
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{album.title}</h1>
      <p className="text-gray-600 mb-8">{album.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {album.images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image.image}
              alt={image.caption || album.title}
              fill
              className="object-cover rounded-lg"
            />
            {image.caption && (
              <p className="mt-2 text-sm text-gray-600">{image.caption}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
} 