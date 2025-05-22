import React from 'react';
import { ipadData } from '../data/ProductData';

const IpadLineupSegment = ({title}) => {
 
  const segments = ipadData.lineupSegments;

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-gray-900 mb-12 text-left">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {segments.map((p, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-full flex justify-center mb-6">
              <img src={p.img} alt={p.name} className="h-48 object-contain" />
            </div>
            {p.isNew && <span className="text-xs text-blue-600 font-semibold mb-2">New</span>}
            <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">{p.name}</h3>
            <div className="text-base font-semibold text-gray-700 mb-2 text-center">{p.chip}</div>
            <div className="text-gray-600 text-center mb-4">{p.desc}</div>
            <div className="text-gray-900 font-medium text-center mb-6">{p.price}</div>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                Learn more
              </button>
              <button className="text-blue-600 font-semibold hover:underline">Buy &gt;</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IpadLineupSegment;
