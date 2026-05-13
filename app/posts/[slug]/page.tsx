// app/posts/[slug]/page.tsx
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ActivityGallery from '@/components/ActivityGallery';
import TeachingMaterialCard from '@/components/TeachingMaterialCard';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const featuredImage = post.metadata?.featured_image;
  const author = post.metadata?.author;
  const category = post.metadata?.category;
  const activityPhotos = post.metadata?.activity_photos || [];
  const teachingMaterials = post.metadata?.teaching_materials || [];
  const tags = post.metadata?.tags || [];
  const content = post.metadata?.content || '';

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Image */}
      {featuredImage && (
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-auto"
            width="800"
            height="450"
          />
        </div>
      )}

      {/* Category Badge */}
      {category && (
        <div className="mb-4">
          <Link
            href={`/categories/${category.slug}`}
            className="inline-block bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-semibold hover:bg-brand-200 transition-colors"
          >
            {getMetafieldValue(category.metadata?.name) || category.title}
          </Link>
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        {getMetafieldValue(post.metadata?.title) || post.title}
      </h1>

      {/* Author */}
      {author && (
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
          {author.metadata?.photo && (
            <img
              src={`${author.metadata.photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={author.title}
              className="w-12 h-12 rounded-full object-cover"
              width="48"
              height="48"
            />
          )}
          <div>
            <Link href={`/authors/${author.slug}`} className="font-semibold text-gray-900 hover:text-brand-600">
              {getMetafieldValue(author.metadata?.name) || author.title}
            </Link>
            {author.metadata?.expertise && (
              <p className="text-sm text-gray-600">{getMetafieldValue(author.metadata.expertise)}</p>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      {content && (
        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {/* Activity Photos */}
      {activityPhotos.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Activity Photos</h2>
          <ActivityGallery photos={activityPhotos} />
        </section>
      )}

      {/* Teaching Materials */}
      {teachingMaterials.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Teaching Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teachingMaterials.map((material) => (
              <TeachingMaterialCard key={material.id} material={material} />
            ))}
          </div>
        </section>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}