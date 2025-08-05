'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            SUNG KIM
          </Link>
          
          <ul className="flex space-x-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm font-normal tracking-wide transition-colors hover:opacity-70 ${
                    pathname === item.href 
                      ? 'text-black' 
                      : 'text-black'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;