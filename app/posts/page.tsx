import { getAllPosts } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export const metadata = {
  title: 'All Posts - My Blog',
  description: 'Browse all physics STEM teaching posts',
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">All Posts</h1>
        <p className="text-gray-600 text-lg">Browse our complete collection of posts</p>
      </div>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No posts available.</p>
      )}
    </div>
  );
}