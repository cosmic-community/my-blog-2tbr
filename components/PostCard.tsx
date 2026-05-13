import Link from 'next/link';
import { Post } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function PostCard({ post }: { post: Post }) {
  const featuredImage = post.metadata?.featured_image;
  const category = post.metadata?.category;
  const title = getMetafieldValue(post.metadata?.title) || post.title;

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
    >
      {featuredImage ? (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width="400"
            height="225"
          />
        </div>
      ) : (
        <div className="aspect-video gradient-bg flex items-center justify-center text-white text-5xl">
          📝
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        {category && (
          <span className="inline-block bg-brand-100 text-brand-700 px-2 py-1 rounded text-xs font-semibold mb-2 self-start">
            {getMetafieldValue(category.metadata?.name) || category.title}
          </span>
        )}
        <h3 className="font-bold text-lg mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
          {title}
        </h3>
      </div>
    </Link>
  );
}