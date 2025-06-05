import React from 'react';
import { FaApple } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import VideoSection from '../../components/VideoSection';

const VisionPage = () => {
  const entertainmentSection = {
    videoSrc: "./images/Vision/large.mp4",
    label: "Entertainment",
    title: "The ultimate theater.",
    subtitle: "Wherever you are.",
    heading: "A new dimension for entertainment.",
    description: "Apple Vision Pro can transform any room into your personal theater. Expand your movies, shows, and games to your perfect size and experience them in Spatial Audio. Apple Immersive Video puts you in the center of the action with vivid-lifelike immersion. And with more pixels than a 4K TV for each eye, you can enjoy stunning content wherever you are — on a long flight or the couch at home.",
    buttonText: "+ Learn more about entertainment"
  };

  const productivitySection = {
    videoSrc: "./images/Vision/productivity.mp4",
    label: "Productivity",
    title: "A workspace with infinite space.",
    subtitle: "Limitless.",
    heading: "Discover new ways to work.",
    description: "Apple Vision Pro gives you limitless space to do your best work. Organize everything you need anywhere around you, in any way you like. Write, express yourself, and get things done effortlessly with Apple Intelligence — all with groundbreaking privacy protections.5 Seamlessly bring in your Mac workflows using Mac Virtual Display. And connect a Magic Keyboard, a Magic Trackpad, and other Bluetooth accessories to expand how you navigate.",
    buttonText: "+ Learn more about productivity"
  };
  const photos_and_videoSection = {
    videoSrc: "./images/Vision/photoandvideo.mp4",
    label: "Photos and Video",
    title: "Be in the moment.",
    subtitle: "All over again.",
    heading: "Your memories come alive.",
    description: "Apple Vision Pro is Apple’s first 3D camera. You can capture magical spatial photos and spatial videos in 3D, then relive those cherished moments like never before with immersive Spatial Audio. Your existing library of photos and videos looks incredible at remarkable scale — and now you can transform your 2D photos into spatial photos with just a tap. Even panoramas wrap around you — making you feel like you’re standing right where you took them. You can also take spatial videos with iPhone 16 Pro, iPhone 16, or iPhone 15 Pro, as well as spatial photos with iPhone 16 Pro or iPhone 16, then view them on Apple Vision Pro.",
    buttonText: "+ Learn more about photos and video"
  }
  const connecttionSection = {
    videoSrc: "./images/Vision/connection.mp4",
    label: "Connection",
    title: "Share quality time.",
    subtitle: "And space.",
    heading: "A more engaging way to get together.",
    description: "Apple Vision Pro makes it easy to connect with the people you care about, no matter where they are. Share a virtual space with friends and family, or invite them to join you in your favorite apps. With FaceTime, you can have lifelike conversations with friends and family, even if they’re not wearing Apple Vision Pro. And with SharePlay, you can watch movies, listen to music, or play games together in real time.",
    buttonText: "+ Learn more about connection"
  }
  const appsSection = {
    videoSrc: "./images/Vision/apps.mp4",
    label: "Apps",
    title: "Do what you love.",
    subtitle: "Reimagine how you do it.",
    heading: "A world of apps. A world of dicovery.",
    description: "Apple Vision Pro brings your favorite apps to life in a whole new way. With the power of visionOS, you can interact with your apps in a more natural and intuitive way. You can use your hands, voice, and eyes to control your apps, making it easier than ever to get things done. And with the App Store, you can discover new apps that are designed specifically for Apple Vision Pro.",
    buttonText: "+ Learn more about apps"
  };
  const visionOSSection = {
    videoSrc: "./images/Vision/visionos.mp4",
    label: "visionOS",
    title: "A new era of computing.",
    subtitle: "Welcome to visionOS.",
    heading: "The world’s first spatial operating system.",
    description: "visionOS is the world’s first spatial operating system, designed specifically for Apple Vision Pro. It brings together the best of iOS and macOS, with a new set of features that make it easy to interact with your apps in a more natural and intuitive way. With visionOS, you can use your hands, voice, and eyes to control your apps, making it easier than ever to get things done. And with the App Store, you can discover new apps that are designed specifically for Apple Vision Pro.",
    buttonText: "+ Learn more about visionOS"
  };
  return (
    <div className="bg-white w-full min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Container with max width */}
        <div className="absolute inset-0 max-w-[1800px] mx-auto">
          <img
            src="./images/Vision/hero_vision.jpg"
            alt="Person wearing Apple Vision Pro"
            className="w-full h-full object-contain object-center max-h-[90vh]"
            style={{
              marginTop: '40px'
            }}
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{ marginTop: '60vh' }}>
          {/* Apple Vision Pro Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">              <FaApple className="h-10 w-10 text-black mr-3" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-black">Vision Pro</h1>
            </div>
          </div>

          {/* Call to Action Links */}
          <div className="space-y-4">
            <div>
              <a
                href="#"
                className="text-[#F56300] hover:text-orange-600 text-xl md:text-2xl font-normal transition-colors duration-200 block"
              >
                Book a demo {">"}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-[#F56300] hover:text-orange-600 text-xl md:text-2xl font-normal transition-colors duration-200 block"
              >
                Learn more about visionOS 2 {">"}
              </a>
            </div>
          </div>
        </div>
      </section>      {/* Content Section */}
      <section className="relative min-h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="./images/Vision/x1fba949bf_large.mp4"
          />
          {/* Pause Button */}
          <button 
            className="absolute top-4 right-4 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
            aria-label="Pause video"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="block w-1.5 h-5 bg-white mr-1"></span>
              <span className="block w-1.5 h-5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 bg-black/30">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
              Apple Vision Pro seamlessly blends digital content with your physical space.
            </h2>
            
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
              So you can work, watch, relive memories, and connect in ways never before possible.
            </p>
            
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-12">
              The era of spatial computing is here.
            </p>
            
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F56300] text-[#F56300] hover:bg-[#F56300] hover:text-white transition-colors bg-black/30 backdrop-blur-sm">
              <span className="text-xl font-medium flex items-center gap-2">
                <FaRegPlayCircle size={24} />
                Watch the film
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Vision Pro Hardware Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Logo */}
          <div className="flex items-center justify-center mb-16">
            <FaApple className="h-12 w-12 text-black" />
            <h2 className="text-6xl font-medium text-black">Vision Pro</h2>
          </div>

          {/* Main Image */}
          <div className="relative">
            <img
              src="./images/Vision/visionpro.jpg"
              alt="Apple Vision Pro"
              className="w-full object-cover"
            />
            
            {/* Take a closer look button */}
            <div className="flex justify-center mt-8">
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-black hover:bg-black hover:text-white transition-colors">
                <span className="text-xl">+</span>
                <span className="text-lg font-medium">Take a closer look</span>
              </button>
            </div>
          </div>
        </div>
      </section>      {/* Entertainment Section */}
      <VideoSection {...entertainmentSection} />

      {/* Productivity Section */}
      <VideoSection {...productivitySection} />
      
      {/* Photos and Video Section */}
      <VideoSection {...photos_and_videoSection} />

      {/* Connection Section */}
      <VideoSection {...connecttionSection} />

      {/* Apps Section */}
      <VideoSection {...appsSection} />

      {/*Vision OS*/}
      <VideoSection {...visionOSSection} />

    </div>
  );
};

export default VisionPage;
