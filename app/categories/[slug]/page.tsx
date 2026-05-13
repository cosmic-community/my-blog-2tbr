// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import PostCard from '@/components/PostCard';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) notFound();

  const posts = await getPostsByCategory(category.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <p className="text-brand-600 font-semibold uppercase tracking-wider mb-2">Category</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          {getMetafieldValue(category.metadata?.name) || category.title}
        </h1>
        {category.metadata?.description && (
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {getMetafieldValue(category.metadata.description)}
          </p>
        )}
      </div>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No posts in this category yet.</p>
      )}
    </div>
  );
}