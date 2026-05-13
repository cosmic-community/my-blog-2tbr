import { getAllPosts, getAllCategories, getAllTeachingMaterials } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';
import CategoryBadge from '@/components/CategoryBadge';
import TeachingMaterialCard from '@/components/TeachingMaterialCard';
import Link from 'next/link';

export default async function HomePage() {
  const [posts, categories, materials] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
    getAllTeachingMaterials(),
  ]);

  const featuredPosts = posts.slice(0, 6);
  const recentMaterials = materials.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Physics STEM Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              อัพเดทเนื้อหาการสอนฟิสิกส์ STEM กิจกรรม ภาพกิจกรรม และสื่อการสอน
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/posts"
                className="bg-white text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Posts
              </Link>
              <Link
                href="/teaching-materials"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Teaching Materials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Categories</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <CategoryBadge key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Posts</h2>
            <Link href="/posts" className="text-brand-600 hover:text-brand-700 font-semibold">
              View All →
            </Link>
          </div>
          {featuredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No posts yet.</p>
          )}
        </div>
      </section>

      {/* Teaching Materials */}
      {recentMaterials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Teaching Materials</h2>
              <Link href="/teaching-materials" className="text-brand-600 hover:text-brand-700 font-semibold">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentMaterials.map((material) => (
                <TeachingMaterialCard key={material.id} material={material} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}