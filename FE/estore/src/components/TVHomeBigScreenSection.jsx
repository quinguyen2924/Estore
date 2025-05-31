import React, { useRef, useState, useEffect } from 'react';

const TVHomeBigScreenSection = ({ data }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Assume autoplay starts playing

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('ended', handleEnded);

    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Component will render the section based on the 'data' prop
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center whitespace-pre-line">
        {data.title}
      </h2>

      {/* Main Video Container */}
      <div className="mt-12 w-full max-w-[900px] relative shadow-[10px_10px_20px_rgba(0,0,0,0.5)] overflow-hidden border-4 border-black">
        <video
          ref={videoRef}
          src={data.video}
          alt="On the big screen video"
          className="w-full h-auto object-contain"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Custom Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center focus:outline-none"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            // Pause Icon (Two vertical bars)
            <svg className="w-4 h-4 text-white" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0H4V12H1V0Z" fill="white"/>
              <path d="M6 0H9V12H6V0Z" fill="white"/>
            </svg>
          ) : (
            // Play Icon (Triangle)
            <svg className="w-4 h-4 text-white" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0L9 6L1 12V0Z" fill="white"/>
            </svg>
          )}
        </button>
      </div>

      {/* Services Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-lg px-4 items-stretch">
        {data.services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg">
            <img src={service.icon} alt={service.name} className="w-20 h-20 object-contain mb-4" />

            <p className="mt-2 text-gray-600 whitespace-pre-line flex-grow">{service.description}</p>
            <a href={service.tryItLink} className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200">Try it free</a>
            <a href={service.learnMoreLink} className="mt-1 text-blue-600 hover:underline text-sm">Learn more &gt;</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TVHomeBigScreenSection; 