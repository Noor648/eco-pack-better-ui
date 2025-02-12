import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop by Use', href: '/shop-by-use' },
    { label: 'Categories', href: '/categories' },
    { label: 'Best Selling', href: '/best-selling' },
    { label: 'New Arrivals', href: '/new-arrivals' },
    { label: 'Bundles', href: '/bundles' },
    { label: 'Bulk Purchase', href: '/bulk-purchase' },
    { label: 'Samples', href: '/samples' },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md">
      <div className="text-2xl font-bold text-green-600">
        ECO<span className="text-gray-800">PAK</span>
      </div>
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-green-600">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-green-600">🔍</button>
        <button className="text-gray-600 hover:text-green-600">👤</button>
        <button className="text-gray-600 hover:text-green-600 relative">
          🛒
          <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">1</span>
        </button>
      </div>
    </nav>
  );
}
