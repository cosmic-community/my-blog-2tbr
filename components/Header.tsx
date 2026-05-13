import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🔬</span>
            <span className="font-bold text-xl gradient-text">My Blog</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-brand-600 font-medium">
              Home
            </Link>
            <Link href="/posts" className="text-gray-700 hover:text-brand-600 font-medium">
              Posts
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-brand-600 font-medium">
              Categories
            </Link>
            <Link href="/teaching-materials" className="text-gray-700 hover:text-brand-600 font-medium">
              Materials
            </Link>
            <Link href="/authors" className="text-gray-700 hover:text-brand-600 font-medium">
              Authors
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}