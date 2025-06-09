import Image from 'next/image';
import Link from 'next/link';

// This will be replaced with actual data from Decap CMS
const albums = [
  {
    id: 1,
    title: 'Black & White',
    description: 'A collection of monochrome photographs capturing timeless moments.',
    coverImage: '/images/placeholder.jpg',
    slug: 'black-and-white',
  },
  {
    id: 2,
    title: 'Improvisation',
    description: 'Spontaneous moments and candid shots that tell unique stories.',
    coverImage: '/images/placeholder.jpg',
    slug: 'improvisation',
  },
  // Add more albums as needed
];

export default function Gallery() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Photo Gallery</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore the world through my lens, one photograph at a time.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {albums.map((album) => (
            <article key={album.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <Link
                    href={`/gallery/${album.slug}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    View Album
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/gallery/${album.slug}`}>
                      <span className="absolute inset-0" />
                      {album.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{album.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 