import React from 'react';
import { Link } from 'react-router-dom';

const IpadNavBar = () => {
  const navItems = [
    { name: 'iPad Pro', path: '/ipad/pro' },
    { name: 'iPad Air', path: '/ipad/air' },
    { name: 'iPad', path: '/ipad' },
    { name: 'iPad mini', path: '/ipad/mini' },
    { name: 'Apple Pencil', path: '/ipad/pencil' },
    { name: 'Keyboards', path: '/ipad/keyboards' },
    { name: 'Compare', path: '/ipad/compare' },
    { name: 'Why iPad', path: '/ipad/why-ipad' },
  ];

  return (
    <nav className="bg-[#f5f5f7] text-sm">
      <div className="max-w-7xl mx-auto">
        <ul className="flex items-center justify-center space-x-8 py-2 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default IpadNavBar; 