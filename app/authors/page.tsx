import { getAllAuthors, getMetafieldValue } from '@/lib/cosmic';
import Link from 'next/link';

export const metadata = {
  title: 'Authors - My Blog',
};

export default async function AuthorsPage() {
  const authors = await getAllAuthors();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Authors</h1>
        <p className="text-gray-600 text-lg">Meet our contributors</p>
      </div>
      {authors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <Link
              key={author.id}
              href={`/authors/${author.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 text-center"
            >
              {author.metadata?.photo ? (
                <img
                  src={`${author.metadata.photo.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
                  alt={author.title}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  width="96"
                  height="96"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-brand-100 mx-auto mb-4 flex items-center justify-center text-3xl">
                  👤
                </div>
              )}
              <h3 className="font-bold text-lg mb-1">
                {getMetafieldValue(author.metadata?.name) || author.title}
              </h3>
              {author.metadata?.expertise && (
                <p className="text-sm text-brand-600 mb-2">
                  {getMetafieldValue(author.metadata.expertise)}
                </p>
              )}
              {author.metadata?.bio && (
                <p className="text-sm text-gray-600 line-clamp-3">
                  {getMetafieldValue(author.metadata.bio)}
                </p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No authors available.</p>
      )}
    </div>
  );
}