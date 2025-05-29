import React, { useRef, useState } from 'react';
import Header from '../components/layout/Header';
import MacNavBar from '../components/MacNavBar';
import MacFeatureCards from '../components/MacFeatureCards';
import Footer from '../components/layout/Footer';
import MacLineupSegment from '../components/MacLineupSegment';
import MacEssentials from '../components/MacEssentials';
import MacSignificantOthers from '../components/MacSignificantOthers';
import { macData } from '../data/ProductData';

function Accordion() {
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

const Mac = () => {
  // Video control
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-white">
     
      <MacNavBar navItems={macData.navItems} />
      <main className="flex-1">
        {/* Section tiêu đề và slogan */}
        <section className="max-w-7xl mx-auto w-full flex flex-row justify-between items-start py-16">
          <div>
            <h1 className="text-7xl font-bold text-gray-900">Mac</h1>
          </div>
          <div className="text-2xl font-semibold text-gray-900 text-right flex flex-col justify-center">
            <span>If you can dream it,</span>
            <span>Mac can do it.</span>
          </div>
        </section>

        {/* Section video */}
        <section className="relative max-w-7xl mx-auto w-full flex justify-center items-center bg-[#faf7f4] px-8 py-0 video-section-responsive" style={{borderRadius: 24, overflow: 'hidden'}}>
          <video
            ref={videoRef}
            src="/images/xlarge.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[500px] object-cover video-element-responsive"
            style={{borderRadius: 24}}
          />
          {/* Nút pause/play */}
          <button
            onClick={handleTogglePlay}
            className="absolute bottom-6 right-6 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
          >
            {isPlaying ? (
              // Pause icon
              <svg width="24" height="24" fill="none" stroke="#444" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="6" y="5" width="4" height="14" rx="1" fill="#444"/>
                <rect x="14" y="5" width="4" height="14" rx="1" fill="#444"/>
              </svg>
            ) : (
              // Play icon
              <svg width="24" height="24" fill="none" stroke="#444" strokeWidth="2" viewBox="0 0 24 24">
                <polygon points="6,4 20,12 6,20" fill="#444"/>
              </svg>
            )}
          </button>
          <style>{`
            @media only screen and (max-width: 833px) {
              .video-section-responsive {
                padding-top: 72px !important;
                padding-left: 19px !important;
                padding-right: 19px !important;
                --r-localeswitcher-height: 135px;
                border-radius: 24px !important;
                overflow: hidden;
              }
              .video-element-responsive {
                border-radius: 24px !important;
              }
            }
          `}</style>
        </section>

        {/* Các section khác */}
        <MacFeatureCards cards={macData.featureCards} title="Get to know Mac." />
        <MacLineupSegment segments={macData.lineupSegments} title="Explore the lineup." />
        <MacSignificantOthers items={macData.significantOthers} title="Significant others." />
        <MacEssentials items={macData.essentials} title="Mac essentials." />
      </main>

    </div>
  );
};

export default Mac;
