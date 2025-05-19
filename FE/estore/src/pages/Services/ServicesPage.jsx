import {
    VideoPlayer,
    ShowsCarousel,
    MusicPlayer,
    MusicCarousel,
    ArcadePlayer,
    ArcadeCarousel,
    FitnessPlayer,
    FitnessCarousel,
  } from "./client_component"
  
  export default function ServicesPage() {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Services Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-5xl mx-auto py-12 px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="white" className="w-12 h-12">
                <path d="M27.85,23.13a4.36,4.36,0,0,0-2.59.87,4.76,4.76,0,0,0-1.77,2.63,4.74,4.74,0,0,0-1.78-2.63,4.34,4.34,0,0,0-2.58-.87,4.42,4.42,0,0,0-3.14,1.26,4.76,4.76,0,0,0-1.29,3.57,7.46,7.46,0,0,0,1.16,3.84,11.84,11.84,0,0,0,1.6,2.15A19.65,19.65,0,0,0,20,36.68a.69.69,0,0,0,.74,0,19.65,19.65,0,0,0,2.55-1.73,11.84,11.84,0,0,0,1.6-2.15,7.46,7.46,0,0,0,1.16-3.84,4.76,4.76,0,0,0-1.29-3.57A4.42,4.42,0,0,0,27.85,23.13Z" />
                <path d="M18,0a18,18,0,1,0,18,18A18,18,0,0,0,18,0Zm0,33.75A15.75,15.75,0,1,1,33.75,18,15.77,15.77,0,0,1,18,33.75Z" />
                <path d="M24.38,12.85H11.62a1.13,1.13,0,0,0,0,2.25H24.38a1.13,1.13,0,0,0,0-2.25Z" />
                <path d="M24.38,17.39H11.62a1.13,1.13,0,0,0,0,2.25H24.38a1.13,1.13,0,0,0,0-2.25Z" />
                <path d="M17.55,21.93H11.62a1.13,1.13,0,0,0,0,2.25h5.93a1.13,1.13,0,0,0,0-2.25Z" />
              </svg>
            </div>
            <span className="text-xs mt-2">Apple One</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="white" className="w-12 h-12">
                <path d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm0,33.75A15.75,15.75,0,1,1,33.75,18,15.77,15.77,0,0,1,18,33.75Z" />
                <path d="M25.7,17.19l-10.05-6A1.5,1.5,0,0,0,13.5,12.45v12a1.5,1.5,0,0,0,2.25,1.3l10-6a1.5,1.5,0,0,0,0-2.55Z" />
              </svg>
            </div>
            <span className="text-xs mt-2">Apple TV+</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="white" className="w-12 h-12">
                <path d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm0,33.75A15.75,15.75,0,1,1,33.75,18,15.77,15.77,0,0,1,18,33.75Z" />
                <path d="M24.38,12.85H11.62a1.13,1.13,0,0,0,0,2.25H24.38a1.13,1.13,0,0,0,0-2.25Z" />
                <path d="M24.38,17.39H11.62a1.13,1.13,0,0,0,0,2.25H24.38a1.13,1.13,0,0,0,0-2.25Z" />
                <path d="M17.55,21.93H11.62a1.13,1.13,0,0,0,0,2.25h5.93a1.13,1.13,0,0,0,0-2.25Z" />
              </svg>
            </div>
            <span className="text-xs mt-2">Apple Music</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="white" className="w-12 h-12">
                <path d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm0,33.75A15.75,15.75,0,1,1,33.75,18,15.77,15.77,0,0,1,18,33.75Z" />
                <path d="M24.59,16.25a1.5,1.5,0,0,0-1.5-1.5H12.91a1.5,1.5,0,0,0-1.5,1.5v7.5a1.5,1.5,0,0,0,1.5,1.5H23.09a1.5,1.5,0,0,0,1.5-1.5Z" />
                <path d="M24.59,10.75a1.5,1.5,0,0,0-1.5-1.5H12.91a1.5,1.5,0,0,0-1.5,1.5v1.5a1.5,1.5,0,0,0,1.5,1.5H23.09a1.5,1.5,0,0,0,1.5-1.5Z" />
              </svg>
            </div>
            <span className="text-xs mt-2">Apple Arcade</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="white" className="w-12 h-12">
                <path d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm0,33.75A15.75,15.75,0,1,1,33.75,18,15.77,15.77,0,0,1,18,33.75Z" />
                <path d="M18,9a9,9,0,1,0,9,9A9,9,0,0,0,18,9Zm0,15.75A6.75,6.75,0,1,1,24.75,18,6.76,6.76,0,0,1,18,24.75Z" />
                <path d="M18,13.5a4.5,4.5,0,1,0,4.5,4.5A4.5,4.5,0,0,0,18,13.5Zm0,6.75A2.25,2.25,0,1,1,20.25,18,2.25,2.25,0,0,1,18,20.25Z" />
              </svg>
            </div>
            <span className="text-xs mt-2">Apple Fitness+</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="white" className="w-12 h-12">
                <path d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm0,33.75A15.75,15.75,0,1,1,33.75,18,15.77,15.77,0,0,1,18,33.75Z" />
                <path d="M24.38,12.85H11.62a1.13,1.13,0,0,0,0,2.25H24.38a1.13,1.13,0,0,0,0-2.25Z" />
                <path d="M24.38,17.39H11.62a1.13,1.13,0,0,0,0,2.25H24.38a1.13,1.13,0,0,0,0-2.25Z" />
                <path d="M17.55,21.93H11.62a1.13,1.13,0,0,0,0,2.25h5.93a1.13,1.13,0,0,0,0-2.25Z" />
              </svg>
            </div>
            <span className="text-xs mt-2">Apple News+</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="white" className="w-12 h-12">
                <path d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm0,33.75A15.75,15.75,0,1,1,33.75,18,15.77,15.77,0,0,1,18,33.75Z" />
                <circle cx="18" cy="18" r="3.75" />
                <path d="M25.5,18a7.5,7.5,0,0,1-15,0h-3a10.5,10.5,0,0,0,21,0Z" />
              </svg>
            </div>
            <span className="text-xs mt-2">Apple Podcasts</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="white" className="w-12 h-12">
                <path d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm0,33.75A15.75,15.75,0,1,1,33.75,18,15.77,15.77,0,0,1,18,33.75Z" />
                <path d="M24.38,12.85H11.62a1.13,1.13,0,0,0,0,2.25H24.38a1.13,1.13,0,0,0,0-2.25Z" />
                <path d="M24.38,17.39H11.62a1.13,1.13,0,0,0,0,2.25H24.38a1.13,1.13,0,0,0,0-2.25Z" />
                <path d="M17.55,21.93H11.62a1.13,1.13,0,0,0,0,2.25h5.93a1.13,1.13,0,0,0,0-2.25Z" />
              </svg>
            </div>
            <span className="text-xs mt-2">Apple Books</span>
          </div>
        </div>
  
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center px-4 py-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Meet the A-list of entertainment.</h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Award-winning movies. Binge-worthy shows. Your favorite music mastered in Spatial Audio. The most epic
            collection of mobile games. And the world's largest library of 4K Ultra HD fitness content. The best
            entertainment and experiences live here — only on Apple.
          </p>
        </div>
  
        {/* Apple One Section */}
        <div className="bg-zinc-900 py-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-6">
            <div className="flex items-center">
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 38 38" fill="white">
                <path d="M31.36,25.75a4.86,4.86,0,0,0-2.88,1,5.36,5.36,0,0,0-2,2.93,5.29,5.29,0,0,0-2-2.93,4.84,4.84,0,0,0-2.88-1,4.94,4.94,0,0,0-3.51,1.41,5.32,5.32,0,0,0-1.44,4,8.16,8.16,0,0,0,1.29,4.28,13.32,13.32,0,0,0,1.79,2.4,21.92,21.92,0,0,0,2.85,1.93.77.77,0,0,0,.82,0,21.92,21.92,0,0,0,2.85-1.93,13.32,13.32,0,0,0,1.79-2.4,8.16,8.16,0,0,0,1.29-4.28,5.32,5.32,0,0,0-1.44-4A4.94,4.94,0,0,0,31.36,25.75Z" />
                <path d="M19,0A19,19,0,1,0,38,19,19,19,0,0,0,19,0Zm0,35.63A16.63,16.63,0,1,1,35.63,19,16.64,16.64,0,0,1,19,35.63Z" />
                <path d="M27.5,14.31H12.5a1.19,1.19,0,1,0,0,2.38H27.5a1.19,1.19,0,1,0,0-2.38Z" />
                <path d="M27.5,19.31H12.5a1.19,1.19,0,1,0,0,2.38H27.5a1.19,1.19,0,1,0,0-2.38Z" />
                <path d="M20.19,24.31H12.5a1.19,1.19,0,1,0,0,2.38h7.69a1.19,1.19,0,1,0,0-2.38Z" />
              </svg>
              <span className="text-2xl md:text-3xl font-medium ml-2">One</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-medium">
                Get up to six services in one subscription with Apple One.
              </h2>
            </div>
            <button className="px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-colors">
              Learn more
            </button>
          </div>
        </div>
  
        {/* Background Image Section */}
        <div
          className="h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}
        >
          {/* This is where the image of the person in the office would be */}
        </div>
  
        {/* Apple TV+ Section */}
        <VideoPlayer />
        <ShowsCarousel />
  
        {/* Apple Music Section */}
        <MusicPlayer />
        <MusicCarousel />
  
        {/* Apple Arcade Section */}
        <ArcadePlayer />
        <ArcadeCarousel />
  
        {/* Apple Fitness+ Section */}
        <FitnessPlayer />
        <FitnessCarousel />
      </div>
    )
  }
  