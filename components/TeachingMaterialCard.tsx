import Link from 'next/link';
import { TeachingMaterial } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function TeachingMaterialCard({ material }: { material: TeachingMaterial }) {
  const previewImage = material.metadata?.preview_image;
  const materialType = getMetafieldValue(material.metadata?.material_type);
  const title = getMetafieldValue(material.metadata?.title) || material.title;
  const description = getMetafieldValue(material.metadata?.description);

  return (
    <Link
      href={`/teaching-materials/${material.slug}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
    >
      {previewImage ? (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${previewImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width="400"
            height="225"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl">
          📚
        </div>
      )}
      <div className="p-6 flex-1">
        {materialType && (
          <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold mb-2">
            {materialType}
          </span>
        )}
        <h3 className="font-bold text-lg mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  );
}