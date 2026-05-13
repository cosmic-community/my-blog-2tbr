import { getAllCategories, getMetafieldValue } from '@/lib/cosmic';
import Link from 'next/link';

export const metadata = {
  title: 'Categories - My Blog',
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Categories</h1>
        <p className="text-gray-600 text-lg">Browse content by category</p>
      </div>
      {categories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border-l-4 border-brand-500"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {getMetafieldValue(category.metadata?.name) || category.title}
              </h3>
              {category.metadata?.description && (
                <p className="text-gray-600">
                  {getMetafieldValue(category.metadata.description)}
                </p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No categories available.</p>
      )}
    </div>
  );
}