import { getAllAlbums } from '@/lib/albums';
import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
  const albums = getAllAlbums();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album) => (
          <Link
            key={album.slug}
            href={`/gallery/${album.slug}`}
            className="group block"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={album.coverImage}
                alt={album.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold">{album.title}</h2>
            <p className="mt-2 text-gray-600">{album.description}</p>
            <p className="mt-2 text-sm text-gray-500">
              {new Date(album.date).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
} 