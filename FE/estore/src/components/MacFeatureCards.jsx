import React, { useRef } from 'react';

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

const ProductFeatureCards = ({ cards, title = "Get to know our products." }) => {
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
      <h2 className="text-4xl md:text-5xl font-bold mb-8">{title}</h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
        >
          {cards.map((f, idx) => (
            <div
              key={idx}
              className="min-w-[320px] max-w-xs rounded-3xl p-0 flex-shrink-0 overflow-hidden relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                height: 600,
                backgroundImage: `url(${f.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10 flex flex-col items-start justify-start h-full p-8">
                <div className="mb-2 text-sm font-semibold opacity-90 text-black drop-shadow-lg text-left">{f.title}</div>
                <div className="mb-4 text-2xl font-bold text-black drop-shadow-lg text-left">{f.description}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
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

export default ProductFeatureCards; 