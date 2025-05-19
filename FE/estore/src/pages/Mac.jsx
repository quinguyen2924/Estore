import React, { useRef, useState } from 'react';
import Header from '../components/layout/Header';
import MacNavBar from '../components/MacNavBar';
import MacFeatureCards from '../components/MacFeatureCards';
import Footer from '../components/layout/Footer';
import MacLineupSegment from '../components/MacLineupSegment';

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

function MacEssentials() {
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
      <main className="flex-1">
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
        {/* Section lineup segment switch */}
        <MacLineupSegment />
        {/* Section Accordion */}
        <Accordion />
        {/* Section Mac essentials */}
        <MacEssentials />
        {/* Các section khác của trang Mac sẽ đặt ở đây */}
        <div className="max-w-7xl mx-auto py-16 text-center text-gray-400 text-xl">
          {/* (Nội dung trang Mac sẽ hiển thị ở đây) */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mac;
