import React, { useState } from 'react';

const MacSignificantOthers = ({ items, title = "Significant others." }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-left">{title}</h2>
      <div className="bg-[#fafafa] rounded-3xl py-12 px-8 flex flex-col md:flex-row gap-8 items-stretch min-h-[420px]">
        {/* Accordion list */}
        <div className="flex-1 min-w-[320px] max-w-[420px]">
          {items.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full flex justify-between items-center py-6 border-b border-gray-200 focus:outline-none"
                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
              >
                <span className="text-xl font-semibold text-left">{item.title}</span>
                <span className="ml-2">
                  {openIndex === idx ? (
                    <svg width="24" height="24" fill="none" stroke="#444" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M6 15l6-6 6 6"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" fill="none" stroke="#444" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-[500px] opacity-100 py-2 pb-6' : 'max-h-0 opacity-0 py-0 pb-0'
                }`}
              >
                <div className="text-base text-gray-700 text-left">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={items[openIndex]?.image}
            alt={items[openIndex]?.title}
            className="max-h-[340px] w-auto object-contain drop-shadow-xl transition-all duration-300"
            style={{ minWidth: 200 }}
          />
        </div>
      </div>
    </section>
  );
};

export default MacSignificantOthers; 