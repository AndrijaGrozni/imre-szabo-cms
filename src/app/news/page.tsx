import Image from 'next/image';
import Link from 'next/link';

// This will be replaced with actual data from Decap CMS
const news = [
  {
    id: 1,
    title: 'New Exhibition Opening',
    date: '2024-03-15',
    excerpt: 'Join us for the opening of my latest exhibition featuring a collection of black and white photographs.',
    image: '/images/placeholder.jpg',
    slug: 'new-exhibition-opening',
  },
  {
    id: 2,
    title: 'Photography Workshop',
    date: '2024-03-10',
    excerpt: 'Learn the art of photography in an intensive workshop designed for both beginners and advanced photographers.',
    image: '/images/placeholder.jpg',
    slug: 'photography-workshop',
  },
  // Add more news items as needed
];

export default function News() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">News & Updates</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay updated with the latest exhibitions, workshops, and photography news.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={item.date} className="text-gray-500">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <Link
                    href={`/news/${item.slug}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Read more
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/news/${item.slug}`}>
                      <span className="absolute inset-0" />
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 