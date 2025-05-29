import React, { useRef, useState } from 'react';

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

const FeatureModal = ({ open, onClose, feature }) => {
  if (!open || !feature) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={handleOverlayClick}>
      <div className="bg-white rounded-2xl max-w-3xl w-full p-8 relative shadow-xl animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="mb-2 text-sm font-semibold text-gray-500">Compatibility</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
        <div className="mb-6 text-lg font-semibold text-gray-800">{feature.description}</div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <div className="font-bold text-xl mb-2">{feature.content1}</div>
          {feature.image1 && (
            <img src={feature.image1} alt="feature" className="rounded-xl mx-auto my-4 max-h-72 object-contain" />
          )}
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <div className="font-bold text-xl mb-2">{feature.content2}</div>
          {feature.image2 && (
            <img src={feature.image2} alt="feature2" className="rounded-xl mx-auto my-4 max-h-72 object-contain" />
          )}
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="font-bold text-xl mb-2">{feature.content3}</div>
          {feature.image3 && (
            <img src={feature.image3} alt="feature3" className="rounded-xl mx-auto my-4 max-h-72 object-contain" />
          )}
        </div>
      </div>
    </div>
  );
};

const ProductFeatureCards = ({ cards, title = "Get to know our products." }) => {
  const scrollRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -350 : 350,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClick = (feature) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <section className="max-w-7xl mx-auto w-full py-16 px-4 text-left">
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
                backgroundImage: `url(${f.image1 || f.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => handleCardClick(f)}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10 flex flex-col items-start justify-start h-full p-8">
                <div className="mb-2 text-sm font-semibold opacity-90 text-black drop-shadow-lg text-left">{f.title}</div>
                <div className="mb-2 text-sm font-semibold opacity-90 text-white drop-shadow-lg text-left">{f.title2}</div>
                <div className="mb-4 text-2xl font-bold text-black drop-shadow-lg text-left">{f.description}</div>
                <div className="mb-4 text-2xl font-bold text-white drop-shadow-lg text-left">{f.description2}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <div className="flex justify-center mt-6">
          <ArrowButton direction="left" onClick={() => scroll('left')} />
          <ArrowButton direction="right" onClick={() => scroll('right')} />
        </div>
        <FeatureModal open={modalOpen} onClose={handleCloseModal} feature={selectedFeature} />
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ProductFeatureCards; 