// app/authors/[slug]/page.tsx
import { getAuthorBySlug, getMetafieldValue } from '@/lib/cosmic';
import { notFound } from 'next/navigation';

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {author.metadata?.photo ? (
            <img
              src={`${author.metadata.photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
              alt={author.title}
              className="w-40 h-40 rounded-full object-cover"
              width="160"
              height="160"
            />
          ) : (
            <div className="w-40 h-40 rounded-full bg-brand-100 flex items-center justify-center text-6xl">
              👤
            </div>
          )}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {getMetafieldValue(author.metadata?.name) || author.title}
            </h1>
            {author.metadata?.expertise && (
              <p className="text-brand-600 font-semibold mb-4">
                {getMetafieldValue(author.metadata.expertise)}
              </p>
            )}
            {author.metadata?.bio && (
              <p className="text-gray-700 leading-relaxed">
                {getMetafieldValue(author.metadata.bio)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}