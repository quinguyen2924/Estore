import React, { useState, useRef } from 'react';
import { FaPlay } from "react-icons/fa";

const VideoSection = ({ 
  videoSrc, 
  label, 
  title, 
  subtitle,
  heading,
  description,
  buttonText
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
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
    <section className="relative">
      {/* Video Section */}
      <div className="relative h-screen">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={videoSrc}
        />
        {/* Pause Button */}
        <button 
          onClick={togglePlay}
          className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            {isPlaying ? (
              <>
                <span className="block w-1 h-4 bg-white mr-1"></span>
                <span className="block w-1 h-4 bg-white"></span>
              </>
            ) : (
              <FaPlay className="text-white" />
            )}
          </div>
        </button>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <div className="max-w-[1400px] px-4">
            <div className="text-center mb-4">
              <span className="text-sm font-medium">{label}</span>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2">
                {title}
              </h2>
              <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-5 gap-16">
            <div className="col-span-2">
              <h3 className="text-[32px] leading-[1.3] font-semibold text-black max-w-[20ch]">
                {heading}
              </h3>
            </div>
            <div className="col-span-3 flex flex-col items-start">
              <p className="text-xl leading-relaxed text-[#86868b] mb-12 font-medium w-[500px]">
                {description}
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F56300] text-white hover:bg-[#E65A00] transition-colors">
                <span className="text-lg font-medium">{buttonText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
