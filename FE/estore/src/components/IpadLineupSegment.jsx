import React, { useRef } from 'react';

const IpadLineupSegment = ({ title, segments }) => {
  const scrollRef = useRef(null);

  const scrollBy = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 relative">
      <h2 className="text-5xl font-bold text-gray-900 mb-12 text-left">{title}</h2>

      {/* Nút scroll trái */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow"
        onClick={() => scrollBy(-350)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#e5e7eb" />
          <path d="M14.5 7.5L10 12L14.5 16.5" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Nút scroll phải */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow"
        onClick={() => scrollBy(350)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#e5e7eb" />
          <path d="M9.5 16.5L14 12L9.5 7.5" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Danh sách sản phẩm - scroll ngang */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap gap-12 overflow-x-auto scrollbar-hide px-12"
        style={{ scrollBehavior: 'smooth' }}
      >
        {segments.map((p, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex flex-col items-center w-[340px] bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-full flex justify-center mb-6">
              <img src={p.img} alt={p.name} className="h-48 object-contain" />
            </div>
            {p.isNew && (
              <span className="text-xs text-blue-600 font-semibold mb-2">New</span>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">{p.name}</h3>
            {p.chip && <div className="text-base font-semibold text-gray-700 mb-2 text-center">{p.chip}</div>}
            <div className="text-gray-600 text-center mb-4">{p.desc}</div>
            <div className="text-gray-900 font-medium text-center mb-6">{p.price}</div>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Learn more</button>
              <button className="text-blue-600 font-semibold hover:underline">Buy &gt;</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IpadLineupSegment;
