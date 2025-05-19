import React, { useState, useRef } from 'react';

const productData = {
  laptops: [
    {
      name: "MacBook Air 13\" and 15\"",
      chip: "M4 chip",
      desc: "Strikingly thin and fast so you can work, play, or create anywhere.",
      price: "From $999 or $83.25/mo. for 12 mo.**",
      img: "/images/Mac/product_tile_mba_13_15__fx2g3qlubdym_large.png",
      isNew: true,
    },
    {
      name: "MacBook Pro 14\" and 16\"",
      chip: "M4, M4 Pro, or M4 Max chip",
      desc: "The most advanced Mac laptops for demanding workflows.",
      price: "From $1599 or $133.25/mo. for 12 mo.**",
      img: "/images/Mac/product_tile_mbp_14_16__bkl8zusnkpw2_large.png",
      isNew: false,
    },
  ],
  desktops: [
    {
      name: "iMac",
      chip: "M4 chip",
      desc: "A stunning all-in-one desktop for creativity and productivity.",
      price: "From $1299 or $108.25/mo. for 12 mo.**",
      img: "/images/Mac/product_tile_imac_24__inq0od011wuq_large.png",
      isNew: false,
    },
    {
      name: "Mac mini",
      chip: "M4 or M4 Pro chip",
      desc: "The mini-est, most affordable Mac with mighty performance.",
      price: "From $599 or $49.91/mo. for 12 mo.**",
      img: "/images/Mac/product_tile_mac_mini__c4284n3j25w2_large.png",
      isNew: false,
    },
    {
      name: "Mac Studio",
      chip: "M4 Max or M3 Ultra chip",
      desc: "Powerful performance and extensive connectivity for pro workflows.",
      price: "From $1999 or $166.58/mo. for 12 mo.**",
      img: "/images/Mac/product_tile_mac_studio__c24lhkuq4vee_large.png",
      isNew: true,
    },
    {
      name: "Mac Pro",
      chip: "M2 Ultra chip",
      desc: "A pro workstation with PCIe expansion for demanding workflows.",
      price: "From $6999 or $583.25/mo. for 12 mo.**",
      img: "/images/Mac/product_tile_mac_pro__6q3qt8073f6e_large.png",
      isNew: false,
    },
  ],
  displays: [
    {
      name: "Studio Display",
      chip: "",
      desc: "27-inch 5K Retina display. A sight to be bold.",
      price: "From $1599 or $133.25/mo. for 12 mo.**",
      img: "/images/Mac/product_tile_studio_display__c0gbtkgtsx0m_large.png",
      isNew: false,
    },
    {
      name: "Pro Display XDR",
      chip: "",
      desc: "32-inch Retina 6K display. Extreme dynamic range.",
      price: "From $4999 or $416.58/mo. for 12 mo.**",
      img: "/images/Mac/product_tile_studio_display__c0gbtkgtsx0m_large.png",
      isNew: false,
    },
  ],
};

const segments = [
  { key: 'laptops', label: 'Laptops' },
  { key: 'desktops', label: 'Desktops' },
  { key: 'displays', label: 'Displays' },
];

export default function MacLineupSegment() {
  const [selected, setSelected] = useState('laptops');
  const products = productData[selected];
  const scrollRef = useRef(null);

  const scrollBy = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 relative">
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-left">Explore the lineup.</h2>
      <div className="flex items-center gap-2 mb-12">
        {segments.map(seg => (
          <button
            key={seg.key}
            onClick={() => setSelected(seg.key)}
            className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-200
              ${selected === seg.key ? 'bg-black text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {seg.label}
          </button>
        ))}
      </div>
      <div className="relative">
        {/* Nút trái */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow"
          style={{ display: products.length > 2 ? 'flex' : 'none' }}
          onClick={() => scrollBy(-350)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#e5e7eb"/><path d="M14.5 7.5L10 12L14.5 16.5" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Nút phải */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow"
          style={{ display: products.length > 2 ? 'flex' : 'none' }}
          onClick={() => scrollBy(350)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#e5e7eb"/><path d="M9.5 16.5L14 12L9.5 7.5" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-12 overflow-x-auto scrollbar-hide px-12"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((p, idx) => (
            <div key={idx} className="flex-shrink-0 flex flex-col items-center w-[340px] bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-full flex justify-center mb-6">
                <img src={p.img} alt={p.name} className="h-48 object-contain" />
              </div>
              {p.isNew && <span className="text-xs text-blue-600 font-semibold mb-2">New</span>}
              <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">{p.name}</h3>
              <div className="text-base font-semibold text-gray-700 mb-2 text-center">{p.chip}</div>
              <div className="text-gray-600 text-center mb-4">{p.desc}</div>
              <div className="text-gray-900 font-medium text-center mb-6">{p.price}</div>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Learn more</button>
                <button className="text-blue-600 font-semibold hover:underline">Buy &gt;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 