import React, { useRef, useState } from 'react';
import Header from '../components/layout/Header';
import MacNavBar from '../components/MacNavBar';
import ProductFeatureCards from '../components/MacFeatureCards';
import Footer from '../components/layout/Footer';
import MacEssentials from '../components/MacEssentials';
import MacSignificantOthers from '../components/MacSignificantOthers';
import { watchData } from '../data/ProductData';
import IpadLineupSegment from '../components/IpadLineupSegment'; // Có thể đổi tên nếu cần

const Watch = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MacNavBar navItems={watchData.navItems} />
      <main>
        {/* Title Section */}
        <section className="max-w-7xl mx-auto w-full flex flex-row justify-between items-start py-16">
          <div>
            <h1 className="text-7xl font-bold text-gray-900">Apple Watch</h1>
          </div>
          <div className="text-2xl font-semibold text-gray-900 text-right flex flex-col justify-center">
            <span>The ultimate device</span>
            <span>for a healthy life.</span>
          </div>
        </section>

        {/* Video Section */}
        <section className="w-full max-w-7xl mx-auto py-16 px-4">
          <div className="relative">
            <video
              ref={videoRef}
              src="/images/Watch/xlarge (1).mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[500px] object-cover"
              style={{ borderRadius: 24 }}
            />
            <button
              onClick={handlePlayPause}
              className="absolute bottom-8 right-8 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              {isPlaying ? (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </section>

        {/* Feature Cards */}
        <ProductFeatureCards cards={watchData.featureCards} title="Get to know Apple Watch." />

        {/* Lineup Segment */}
        <IpadLineupSegment segments={watchData.lineupSegments} title="Explore the Apple Watch lineup." />

        {/* Significant Others */}
        <MacSignificantOthers items={watchData.significantOthers} title="Made for each other." />

        {/* Essentials */}
        <MacEssentials items={watchData.essentials} title="Apple Watch essentials." />
      </main>
      <Footer />
    </div>
  );
};

export default Watch;
