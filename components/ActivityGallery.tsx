import { CosmicFile } from '@/types';

export default function ActivityGallery({ photos }: { photos: CosmicFile[] }) {
  if (!photos || photos.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo, idx) => (
        <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={`Activity photo ${idx + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            width="300"
            height="300"
          />
        </div>
      ))}
    </div>
  );
}