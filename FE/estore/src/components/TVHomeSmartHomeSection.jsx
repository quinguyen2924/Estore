import React from 'react';

const TVHomeSmartHomeSection = ({ items, title }) => {
  return (
    <section className="w-full py-16 px-4 text-center">
      {title && <h2 className="text-5xl font-bold text-gray-900 mb-12">{title}</h2>}
      <div className="w-full">
        <div className="flex flex-row gap-8 justify-center">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center flex-shrink-0 w-[380px] h-[480px] border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <div className="flex-grow flex flex-col justify-between items-center">
                {item.title && <h3 className="text-2xl font-semibold text-gray-900 mb-4 leading-tight">{item.title}</h3>}
                {item.content && <h1 className="text-1xl font-semibold text-gray-900 mb-4 leading-tight">{item.content}</h1>}
                {/* Assuming the link text is 'Learn more' followed by the link URL */}
                {item.link && (
                  <a href={item.link} className="text-blue-600 hover:text-blue-800 text-base font-medium flex items-center justify-center">
                    Learn more <span className="ml-1">›</span>
                  </a>
                )}
              </div>
              {/* Image/Visual below text */}
              {item.image && (
                <div className="mt-6 w-full flex justify-center flex-grow items-center">
                   {/* The image needs to be handled based on its content - could be a regular image, or the Siri text/Lock icon. Using an img tag for now, but might need refinement based on actual data structure if images are not just simple image files. */}
                  <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
                </div>
              )}
               {/* Add specific rendering for Siri text or lock icon if needed based on data */}
               {/* Example placeholder for Siri text if not an image: */}
               {/* {item.siriText && <div className="mt-6 text-4xl font-bold" style={{ backgroundImage: 'linear-gradient(to right, #ff8a00, #e23a3a, #aa00ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{item.siriText}</div>} */}
               {/* Example placeholder for Lock icon if not an image: */}
               {/* {item.lockIcon && <div className="mt-6"><svg ...>{item.lockIcon}</svg></div>} */}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TVHomeSmartHomeSection; 