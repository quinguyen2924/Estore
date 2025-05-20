import React, { useRef, useState } from 'react';
import MacNavBar from '../components/MacNavBar';
import MacFeatureCards from '../components/MacFeatureCards';
import MacLineupSegment from '../components/MacLineupSegment';
import MacEssentials from '../components/MacEssentials';
import MacSignificantOthers from '../components/MacSignificantOthers';

const Ipad = () => {
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
      <MacNavBar />
      <main className="flex-1">
        {/* Section tiêu đề và slogan sát container */}
        <section className="max-w-7xl mx-auto w-full flex flex-row justify-between items-start py-16">
          <div>
            <h1 className="text-7xl font-bold text-gray-900">iPad</h1>
          </div>
          <div className="text-2xl font-semibold text-gray-900 text-right flex flex-col justify-center">
            <span>Your next computer</span>
            <span>is not a computer.</span>
          </div>
        </section>

        {/* Section video bo góc và cách hai bên trên cả desktop và mobile */}
        <section className="relative max-w-7xl mx-auto w-full flex justify-center items-center bg-[#faf7f4] px-8 py-0 video-section-responsive" style={{borderRadius: 24, overflow: 'hidden'}}>
          <video
            ref={videoRef}
            src="/images/ipad-hero.mp4"
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

        {/* Section feature cards */}
        <MacFeatureCards />
        
        {/* Section lineup segment switch */}
        <MacLineupSegment />
        
        {/* Section Significant others */}
        <MacSignificantOthers />
        
        {/* Section Mac essentials */}
        <MacEssentials />
      </main>
    </div>
  );
};

// Data
const features = [
  {
    title: "Powerful Performance",
    description: "The A-series chip delivers incredible performance for everything you do."
  },
  {
    title: "All-day Battery Life",
    description: "Up to 10 hours of battery life for all your daily tasks."
  },
  {
    title: "Apple Pencil",
    description: "Draw, sketch, and take notes with precision and ease."
  },
  {
    title: "Magic Keyboard",
    description: "Type comfortably with the perfect keyboard for iPad."
  },
  {
    title: "iPadOS",
    description: "A powerful operating system designed specifically for iPad."
  },
  {
    title: "Pro Apps",
    description: "Professional-grade apps that take full advantage of iPad's capabilities."
  }
];

const ipadModels = [
  {
    name: "iPad Pro",
    description: "Supercharged by M2",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "iPad Air",
    description: "Colorful. Powerful. Wonderful.",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "iPad",
    description: "Lovable. Drawable. Magical.",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "iPad mini",
    description: "Mega power. Mini sized.",
    image: "/placeholder.svg?height=400&width=400"
  }
];

const accessories = [
  {
    name: "Apple Pencil",
    description: "The most natural way to work on iPad.",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Magic Keyboard",
    description: "The perfect typing experience.",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Smart Folio",
    description: "Protect your iPad in style.",
    image: "/placeholder.svg?height=400&width=400"
  }
];

export default Ipad; 