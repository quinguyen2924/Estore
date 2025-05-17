import React, { useRef } from 'react';

const features = [
  {
    title: 'Apple Intelligence and macOS',
    subtitle: 'Easy to use. Easy to love.',
    image: '/images/mac-feature-1.png', // Thay bằng ảnh thật hoặc placeholder
    bg: 'bg-gray-100',
  },
  {
    title: 'Performance and Battery Life',
    subtitle: 'Go fast. Go far.',
    image: '/images/mac-feature-2.png',
    bg: 'bg-black text-white',
  },
  {
    title: 'Mac and iPhone',
    subtitle: 'Dream team.',
    image: '/images/mac-feature-3.png',
    bg: 'bg-green-50',
  },
  {
    title: 'Compatibility',
    subtitle: 'Mac runs your favorite apps.',
    image: '/images/mac-feature-4.png',
    bg: 'bg-sky-200',
  },
  {
    title: 'Privacy and Security',
    subtitle: "Your business is nobody else's.",
    image: '/images/mac-feature-5.png',
    bg: 'bg-gradient-to-r from-pink-400 to-purple-400 text-white',
  },
];

const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-10 h-10 rounded-full flex items-center justify-center mx-2
      ${disabled ? 'bg-gray-200 text-gray-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-300'}
      shadow transition`}
    aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
  >
    {direction === 'left' ? (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M15 19l-7-7 7-7" />
      </svg>
    ) : (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" />
      </svg>
    )}
  </button>
);

const MacFeatureCards = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -350 : 350,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto w-full py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Get to know Mac.</h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
        >
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`min-w-[320px] max-w-xs rounded-3xl p-6 flex-shrink-0 ${f.bg} relative`}
              style={{ height: 480 }}
            >
              <div className="mb-2 text-sm font-semibold opacity-80">{f.title}</div>
              <div className="mb-4 text-2xl font-bold">{f.subtitle}</div>
              <div className="w-full h-64 bg-white/30 rounded-2xl flex items-center justify-center mb-2 overflow-hidden">
                <img src={f.image} alt={f.title} className="max-h-full max-w-full object-contain" />
              </div>
            </div>
          ))}
        </div>
        {/* Nút điều hướng */}
        <div className="flex justify-center mt-6">
          <ArrowButton direction="left" onClick={() => scroll('left')} />
          <ArrowButton direction="right" onClick={() => scroll('right')} />
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default MacFeatureCards; 