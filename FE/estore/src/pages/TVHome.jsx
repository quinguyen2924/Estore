import React, { useEffect, useRef, useState } from 'react';
import MacNavBar from '../components/MacNavBar';
import MacEssentials from '../components/MacEssentials';
import MacSignificantOthers from '../components/MacSignificantOthers';
import { tvHomeData } from '../data/ProductData';
import TVHomeLineupGrid from '../components/TVHomeLineupGrid';
import TVHomeSmartHomeSection from '../components/TVHomeSmartHomeSection';
import TVHomeBigScreenSection from '../components/TVHomeBigScreenSection';

const TVHome = () => {
  const [showHero, setShowHero] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setShowHero(true), 200);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <MacNavBar navItems={tvHomeData.navItems} />
      <main>
        {/* Hero Section */}
        <section
          className="w-full flex flex-col items-center justify-center bg-[#f5f5f7] pt-24 pb-20 overflow-clip"
          style={{ overflowClipMargin: '40px' }}
        >
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ease-out ${showHero ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <img
              src="/images/tv-home/hero__dbphk49ymi2q_large.jpg"
              alt="TV & Home Hero"
              className="mx-auto max-w-[600px] w-full h-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h1 className="mt-8 text-5xl md:text-6xl font-bold text-gray-900 text-center">The future hits home.</h1>
          <p className="mt-6 max-w-2xl text-center text-lg text-gray-600 font-normal">
            Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Elevate movie night with theater-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks, and thermostats using Siri. All with the security and privacy of Apple.
          </p>
        </section>
        {/* Lineup Segment */}
        <TVHomeLineupGrid segments={tvHomeData.lineupSegments} title="Explore TV & Home." />
        {/* Feature Cards / Smart Home Section */}
        <TVHomeSmartHomeSection items={tvHomeData.featureCards} title="Every reason to turn your house into a smart home." />
        {/* Essentials */}
        <TVHomeSmartHomeSection items={tvHomeData.essentials} title="Accessories. Around your home and across your devices." />

        {/* On the big screen section */}
        <TVHomeBigScreenSection data={tvHomeData.onTheBigScreen} />
      </main>
    </div>
  );
};

export default TVHome; 