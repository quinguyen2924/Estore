import React from 'react';

export default function MacEssentials() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-5xl font-bold text-gray-900 text-left">Mac essentials.</h2>
        <a href="#" className="text-blue-600 text-base font-medium hover:underline">All Mac accessories &gt;</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-[#fafafa] rounded-3xl p-8 flex flex-col items-center justify-between min-h-[420px]">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Mac accessories</h3>
            <p className="text-gray-700 text-base mb-4 text-center">Explore keyboards, mice, and other essentials.</p>
            <a href="#" className="text-blue-600 font-medium hover:underline mb-4">Shop Mac accessories &gt;</a>
          </div>
          <img src="/images/Mac/essentials_accessories__dglhsic54owi_xlarge.jpg" alt="Mac accessories" className="w-full max-w-[380px] object-contain mt-4" />
        </div>
        {/* Card 2 */}
        <div className="bg-[#fafafa] rounded-3xl p-8 flex flex-col items-center justify-between min-h-[420px]">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Studio Display</h3>
            <p className="text-gray-700 text-base mb-4 text-center">The 27-inch 5K Retina display pairs beautifully with any Mac.</p>
            <a href="#" className="text-blue-600 font-medium hover:underline mb-4">Learn more &gt;</a>
          </div>
          <img src="/images/Mac/essentials_display__bk3i351qm0c2_xlarge.jpg" alt="Studio Display" className="w-full max-w-[380px] object-contain mt-4" />
        </div>
      </div>
    </section>
  );
} 