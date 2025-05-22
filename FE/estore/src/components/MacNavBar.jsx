import React from 'react';

const MacNavBar = ({ navItems }) => {
  return (
    <nav className="w-full bg-[#f5f5f7] py-2">
      <div className="max-w-[980px] mx-auto px-4">
        <ul className="flex justify-between items-center">
          {navItems.map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <a href={item.link || '#'} className="flex flex-col items-center">
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MacNavBar;
