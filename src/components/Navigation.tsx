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
      <div className="container">
        <div className="flex justify-between items-center py-6">
          <Link 
            href="/" 
            className="nav-logo hover:opacity-70 transition-opacity"
          >
            SUNG KIM
          </Link>
          
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`nav-item transition-colors hover:opacity-70 ${
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