import React from 'react';

const MacEssentials = ({ items }) => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-left">Mac essentials.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl overflow-hidden relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              height: 400,
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 flex flex-col items-start justify-start h-full p-8">
              <div className="mb-2 text-sm font-semibold opacity-90 text-black drop-shadow-lg text-left">{item.title}</div>
              {item.content && (
                <div className="mb-4 text-lg text-black drop-shadow-lg text-left">{item.content}</div>
              )}
              {item.description && (
                <div className="mb-4 text-lg text-black drop-shadow-lg text-left">{item.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MacEssentials; 