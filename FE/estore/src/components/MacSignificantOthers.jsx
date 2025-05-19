import React, { useState } from 'react';

const accordionData = [
  {
    title: 'Mac and iPhone',
    content: `Answer calls or messages from your iPhone directly on your Mac. See and control what's on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.`,
    image: '/images/Mac/Screenshot 2025-05-19 182900.png',
  },
  {
    title: 'Mac and iPad',
    content: `Use your iPad as a second display for your Mac with Sidecar. Draw with Apple Pencil on your iPad and see it on your Mac. Start an email on your iPad and finish it on your Mac. Universal Control lets you use a single mouse and keyboard between your Mac and iPad.`,
    image: '/images/Mac/Screenshot 2025-05-19 183121.png',
  },
  {
    title: 'Mac and Apple Watch',
    content: `Unlock your Mac automatically when you're wearing your Apple Watch. Use Apple Pay on your Mac and confirm with your watch. And get notifications and calls from your iPhone right on your Mac and Apple Watch.`,
    image: '/images/Mac/Screenshot 2025-05-19 183153.png',
  },
];

export default function MacSignificantOthers() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-left">Significant others.</h2>
      <div className="bg-[#fafafa] rounded-3xl py-12 px-8 flex flex-col md:flex-row gap-8 items-stretch min-h-[420px]">
        {/* Accordion list */}
        <div className="flex-1 min-w-[320px] max-w-[420px]">
          {accordionData.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full flex justify-between items-center py-6 border-b border-gray-200 focus:outline-none"
                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
              >
                <span className="text-xl font-semibold text-left">{item.title}</span>
                <span className="ml-2">
                  {openIndex === idx ? (
                    <svg width="24" height="24" fill="none" stroke="#444" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 15l6-6 6 6"/></svg>
                  ) : (
                    <svg width="24" height="24" fill="none" stroke="#444" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[500px] opacity-100 py-2 pb-6' : 'max-h-0 opacity-0 py-0 pb-0'}`}
                style={{}}
              >
                <div className="text-base text-gray-700">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={accordionData[openIndex]?.image}
            alt={accordionData[openIndex]?.title}
            className="max-h-[340px] w-auto object-contain drop-shadow-xl transition-all duration-300"
            style={{ minWidth: 200 }}
          />
        </div>
      </div>
    </section>
  );
} 