import React from 'react';

const TVHomeLineupGrid = ({ segments, title }) => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      {title && <h2 className="text-5xl font-bold text-gray-900 mb-8 text-left">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {segments.map((item, idx) => (
          <div key={idx} className="relative bg-white rounded-3xl overflow-hidden" style={{ height: '400px' }}>
            <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover rounded-3xl" />

            <div
              className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10"
              style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))', textShadow: '0 0 5px rgba(0,0,0,0.5)' }}
            >
              {item.name && <h3 className="text-2xl font-semibold mb-1 drop-shadow">{item.name}</h3>}
              {item.desc && <p className="text-lg mb-2 drop-shadow">{item.desc}</p>}
              {item.price && <p className="text-xl font-bold mb-4 drop-shadow">{item.price}</p>}
              <div className="flex justify-start gap-4 z-20">
                {item.links && item.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.url}
                    className={`px-4 py-1 rounded-full text-sm font-medium transition-colors
                      ${link.label === 'Buy' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-200'}
                    `}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TVHomeLineupGrid; 