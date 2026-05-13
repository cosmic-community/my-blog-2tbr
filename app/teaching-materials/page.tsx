import { getAllTeachingMaterials } from '@/lib/cosmic';
import TeachingMaterialCard from '@/components/TeachingMaterialCard';

export const metadata = {
  title: 'Teaching Materials - My Blog',
};

export default async function TeachingMaterialsPage() {
  const materials = await getAllTeachingMaterials();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Teaching Materials</h1>
        <p className="text-gray-600 text-lg">Resources and materials for educators</p>
      </div>
      {materials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <TeachingMaterialCard key={material.id} material={material} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No teaching materials available.</p>
      )}
    </div>
  );
}