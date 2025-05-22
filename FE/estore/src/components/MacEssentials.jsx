import React from 'react';

const MacEssentials = ({items,title}) => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-left">{title}</h2>
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
            {/* Lớp overlay làm tối ảnh nền tổng thể */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Phần chữ nằm trên cùng, có nền đen mờ */}
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 p-6 rounded-b-3xl z-20">
              <div className="text-sm font-semibold opacity-90 text-white drop-shadow-lg">{item.title}</div>
              {item.content && (
                <div className="text-lg text-white drop-shadow-lg">{item.content}</div>
              )}
              {item.description && (
                <div className="text-lg text-white drop-shadow-lg">{item.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MacEssentials;
