import React, { useRef, useState } from 'react';
import Header from '../components/layout/Header';
import MacNavBar from '../components/MacNavBar';
import MacFeatureCards from '../components/MacFeatureCards';
import Footer from '../components/layout/Footer';

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
      <Header />
      <MacNavBar />
      {/* Section tiêu đề và slogan sát container */}
      <section className="max-w-7xl mx-auto w-full flex flex-row justify-between items-start py-16">
        <div>
          <h1 className="text-7xl font-bold text-gray-900">Mac</h1>
        </div>
        <div className="text-2xl font-semibold text-gray-900 text-right flex flex-col justify-center">
          <span>If you can dream it,</span>
          <span>Mac can do it.</span>
        </div>
      </section>
      {/* Section video bo góc và cách hai bên trên cả desktop và mobile */}
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
      {/* Section feature cards */}
      <MacFeatureCards />
      <main className="flex-1">
        {/* Các section khác của trang Mac sẽ đặt ở đây */}
        <div className="max-w-7xl mx-auto py-16 text-center text-gray-400 text-xl">
          (Nội dung trang Mac sẽ hiển thị ở đây)
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mac;
