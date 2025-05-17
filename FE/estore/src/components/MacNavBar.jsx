import React from 'react';

const macNavItems = [
  {
    label: 'MacBook Air',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="12" width="28" height="14" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="10" y="28" width="20" height="2" rx="1" fill="#222"/></svg>
    ),
    isNew: true,
  },
  {
    label: 'MacBook Pro',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="12" width="28" height="14" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="10" y="28" width="20" height="2" rx="1" fill="#222"/><rect x="12" y="16" width="16" height="2" rx="1" fill="#222"/></svg>
    ),
  },
  {
    label: 'iMac',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="10" width="24" height="16" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="16" y="28" width="8" height="2" rx="1" fill="#222"/></svg>
    ),
  },
  {
    label: 'Mac mini',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="12" y="18" width="16" height="4" rx="2" stroke="#222" strokeWidth="1.5"/></svg>
    ),
  },
  {
    label: 'Mac Studio',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="10" y="16" width="20" height="8" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="14" y="26" width="12" height="2" rx="1" fill="#222"/></svg>
    ),
    isNew: true,
  },
  {
    label: 'Mac Pro',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="14" y="10" width="12" height="20" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="18" y="30" width="4" height="2" rx="1" fill="#222"/></svg>
    ),
  },
  {
    label: 'Help Me Choose',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="10" stroke="#222" strokeWidth="1.5"/><text x="20" y="25" textAnchor="middle" fontSize="12" fill="#222">?</text></svg>
    ),
  },
  {
    label: 'Compare',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="10" y="14" width="8" height="12" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="22" y="14" width="8" height="12" rx="2" stroke="#222" strokeWidth="1.5" strokeDasharray="4 2"/></svg>
    ),
  },
  {
    label: 'Displays',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="14" width="10" height="10" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="22" y="16" width="10" height="8" rx="2" stroke="#222" strokeWidth="1.5"/></svg>
    ),
  },
  {
    label: 'Accessories',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="8" stroke="#222" strokeWidth="1.5"/><rect x="28" y="28" width="4" height="4" rx="2" fill="#222"/></svg>
    ),
  },
  {
    label: 'Sequoia',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="12" fill="#222"/><text x="20" y="25" textAnchor="middle" fontSize="10" fill="#fff">macOS</text></svg>
    ),
  },
  {
    label: 'Shop Mac',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="18" width="24" height="8" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="14" y="26" width="12" height="2" rx="1" fill="#222"/></svg>
    ),
  },
];

const MacNavBar = () => (
  <div className="w-full bg-gray-50 border-b">
    <div className="w-full overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div
        className="flex px-4 py-8 gap-12 justify-center w-max"
        style={{
          minWidth: '100%',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {macNavItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center min-w-[90px] snap-center"
            style={{ scrollSnapAlign: 'center' }}
          >
            <div className="mb-2" style={{ height: 56 }}>
              {React.cloneElement(item.icon, { width: 56, height: 56 })}
            </div>
            <span className="text-sm text-gray-900 text-center leading-tight font-medium">
              {item.label}
            </span>
            {item.isNew && (
              <span className="text-xs text-orange-600 font-semibold mt-0.5">New</span>
            )}
          </div>
        ))}
      </div>
    </div>
    <style>{`
      .w-full::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  </div>
);

export default MacNavBar; 