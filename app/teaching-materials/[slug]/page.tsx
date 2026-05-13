// app/teaching-materials/[slug]/page.tsx
import { getTeachingMaterialBySlug, getMetafieldValue } from '@/lib/cosmic';
import { notFound } from 'next/navigation';

export default async function TeachingMaterialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const material = await getTeachingMaterialBySlug(slug);

  if (!material) notFound();

  const previewImage = material.metadata?.preview_image;
  const file = material.metadata?.file;
  const materialType = getMetafieldValue(material.metadata?.material_type);
  const description = getMetafieldValue(material.metadata?.description);
  const title = getMetafieldValue(material.metadata?.title) || material.title;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {previewImage && (
          <img
            src={`${previewImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-64 md:h-80 object-cover"
            width="800"
            height="400"
          />
        )}
        <div className="p-8 md:p-12">
          {materialType && (
            <span className="inline-block bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {materialType}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
          {description && (
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{description}</p>
          )}
          {file && (
            <a
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              📥 Download Material
            </a>
          )}
        </div>
      </div>
    </div>
  );
}