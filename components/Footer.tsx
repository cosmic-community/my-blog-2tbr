export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🔬</span>
            <span className="font-bold text-xl text-white">My Blog</span>
          </div>
          <p className="text-sm">Physics STEM Teaching Portfolio</p>
          <p className="text-xs mt-4 text-gray-500">
            © {new Date().getFullYear()} My Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}