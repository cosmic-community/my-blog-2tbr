import Link from 'next/link';
import { Category } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function CategoryBadge({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="inline-block bg-white border-2 border-brand-500 text-brand-700 px-4 py-2 rounded-full font-semibold hover:bg-brand-500 hover:text-white transition-colors"
    >
      {getMetafieldValue(category.metadata?.name) || category.title}
    </Link>
  );
}