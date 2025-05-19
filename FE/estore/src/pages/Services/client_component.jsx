"use client"

import { useState, useRef, useEffect } from "react"
import { Pause, Play } from "lucide-react"

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full">
      <div
        className="relative w-full h-[500px] bg-gradient-to-r from-purple-900 to-blue-900 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jNUjYuI25dBIYcfusZGPeD48BC5ZTu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/20 bg-[radial-gradient(circle,_transparent_20%,_#00008B_120%)] mix-blend-multiply">
          {/* Sparkle effect overlay */}
        </div>

        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="flex items-center space-x-2 mb-4">
            <svg className="w-8 h-8" viewBox="0 0 38 38" fill="white">
              <path d="M19,0A19,19,0,1,0,38,19,19,19,0,0,0,19,0Zm0,35.63A16.63,16.63,0,1,1,35.63,19,16.64,16.64,0,0,1,19,35.63Z" />
              <path d="M25.7,17.19l-10.05-6A1.5,1.5,0,0,0,13.5,12.45v12a1.5,1.5,0,0,0,2.25,1.3l10-6a1.5,1.5,0,0,0,0-2.55Z" />
            </svg>
            <span className="text-white font-medium">Apple TV+</span>
            <button className="bg-white/20 backdrop-blur-sm text-white text-xs px-4 py-1 rounded-full border border-white/40">
              Bundle with ⓵One
            </button>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Stream award-winning
            <br />
            Apple Originals on every screen.
          </h2>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
              Try it free¹
            </button>
            <button className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              Learn more
            </button>
          </div>

          <div className="mt-4 text-white/80 text-sm">LOOT</div>
        </div>

        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-black/50 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
        </button>

        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-black/30 backdrop-blur-sm p-2 rounded-md border border-white/30">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
              <path d="M7 2v20" />
              <path d="M17 2v20" />
              <path d="M2 12h20" />
              <path d="M2 7h5" />
              <path d="M2 17h5" />
              <path d="M17 17h5" />
              <path d="M17 7h5" />
            </svg>
          </button>
          <button className="bg-black/30 backdrop-blur-sm p-2 rounded-md border border-white/30">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export function ShowsCarousel() {
  const carouselRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const shows = [
    {
      id: 1,
      title: "Untitled Show",
      genre: "Drama",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Onside: Major League Soccer",
      genre: "Documentary",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yPWeIAssARuZ1zre616fZkJht218rQ.png",
    },
    {
      id: 3,
      title: "Long Way Home",
      genre: "Documentary",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Carême",
      genre: "Drama",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Severance",
      genre: "Sci-Fi",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "Ted Lasso",
      genre: "Comedy",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 7,
      title: "The Morning Show",
      genre: "Drama",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 8,
      title: "Foundation",
      genre: "Sci-Fi",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    let animationFrameId
    let lastTimestamp = 0
    const normalSpeed = 2.5 // Faster speed when not hovered (pixels per frame)
    const slowSpeed = 0.5 // Slower speed when hovered

    const scrollCarousel = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const deltaTime = timestamp - lastTimestamp

      // Ensure smooth animation by considering time between frames
      const scrollSpeed = isHovered ? slowSpeed : normalSpeed
      const pixelsToScroll = (scrollSpeed * deltaTime) / 16 // Normalize to 60fps

      if (carouselRef.current) {
        // Get current scroll position
        const currentScroll = carouselRef.current.scrollLeft
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth

        // Calculate new position
        let newPosition = currentScroll + pixelsToScroll

        // If we've reached the end, loop back to start with a smooth transition
        if (newPosition >= maxScroll) {
          // When we reach 90% of the way through, start fading in a duplicate at the beginning
          if (newPosition >= maxScroll * 0.9) {
            // Gradually transition back to the start
            const progress = (newPosition - maxScroll * 0.9) / (maxScroll * 0.1)
            newPosition = (1 - progress) * newPosition + progress * 0
          }

          // If completely at the end, reset to beginning
          if (newPosition >= maxScroll) {
            newPosition = 0
          }
        }

        // Apply the scroll
        carouselRef.current.scrollLeft = newPosition
      }

      lastTimestamp = timestamp
      animationFrameId = requestAnimationFrame(scrollCarousel)
    }

    // Start the animation
    animationFrameId = requestAnimationFrame(scrollCarousel)

    // Clean up
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isHovered])

  return (
    <div
      className="relative py-8 bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Apple Originals</h2>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "auto", // Changed from 'smooth' to 'auto' for more precise control
            }}
          >
            {// Duplicate the shows array to create a seamless loop effect
            [...shows, ...shows].map((show, index) => (
              <ShowCard key={`${show.id}-${index}`} show={show} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ShowCard({ show }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex-shrink-0 w-[280px] snap-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[3/2]">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage: `url(${show.image})`,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? "opacity-50" : "opacity-0"
          }`}
        />

        {/* Apple TV+ logo */}
        <div className="absolute top-2 right-2">
          <svg className="w-12 h-6" viewBox="0 0 38 16" fill="white">
            <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
            <path d="M11.43,7.25,7.18,4.6A.75.75,0,0,0,6,5.23v5.3a.75.75,0,0,0,1.12.63l4.25-2.65a.75.75,0,0,0,0-1.26Z" />
            <path d="M19.89,2.55H17.8V13.45h2.09Z" />
            <path d="M28.08,5.45h-2.7l-2,5.76-2-5.76h-2.7l3.28,8h2.82Z" />
            <path d="M28.91,5.45v8h5.18v-2H31v-6Z" />
          </svg>
        </div>

        {/* Watch button on hover */}
        {isHovered && (
          <a href={`/show/${show.id}`} className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-white/90 transition-colors">
              Watch Now
            </button>
          </a>
        )}
      </div>

      <div className="mt-2">
        <h3 className="text-white font-medium">{show.title}</h3>
        <p className="text-gray-400 text-sm">{show.genre}</p>
      </div>
    </div>
  )
}

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full">
      <div
        className="relative w-full h-[400px] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I8s1I1vwkEaccQC71HCB0mJ9jbtZtv.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-red-600 mix-blend-multiply">
          {/* Gradient overlay */}
        </div>

        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-red-600 rounded-xl p-1.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
                <path d="M10,16.5l6-4.5-6-4.5Z" />
              </svg>
            </div>
            <span className="text-white font-medium">Apple Music</span>
            <button className="bg-white/20 backdrop-blur-sm text-white text-xs px-4 py-1 rounded-full border border-white/40">
              Bundle with ⓵One
            </button>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            All music. Highest audio
            <br />
            quality. Zero ads.
          </h2>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
              Try it free²
            </button>
            <button className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              Learn more
            </button>
          </div>
        </div>

        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-black/50 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
        </button>
      </div>
    </div>
  )
}

export function MusicCarousel() {
  const carouselRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const playlists = [
    {
      id: 1,
      title: "Alpha",
      category: "Apple Music",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      title: "Today's Country",
      category: "Apple Music Country",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      title: "New Music Daily",
      category: "Apple Music",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      title: "Seth Rogen: The Zane Lowe Interview",
      category: "The Studio star gets real about his...",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      title: "Today's Hits",
      category: "Apple Music Hits",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      title: "A-List Pop",
      category: "Apple Music Pop",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 7,
      title: "Rap Life",
      category: "Apple Music Hip-Hop",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 8,
      title: "Chill Mix",
      category: "Apple Music For You",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 9,
      title: "Essentials",
      category: "Apple Music Essentials",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    let animationFrameId
    let lastTimestamp = 0
    const normalSpeed = 2 // Faster speed when not hovered (pixels per frame)
    const slowSpeed = 0.4 // Slower speed when hovered

    const scrollCarousel = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const deltaTime = timestamp - lastTimestamp

      // Ensure smooth animation by considering time between frames
      const scrollSpeed = isHovered ? slowSpeed : normalSpeed
      const pixelsToScroll = (scrollSpeed * deltaTime) / 16 // Normalize to 60fps

      if (carouselRef.current) {
        // Get current scroll position
        const currentScroll = carouselRef.current.scrollLeft
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth

        // Calculate new position
        let newPosition = currentScroll + pixelsToScroll

        // If we've reached the end, loop back to start with a smooth transition
        if (newPosition >= maxScroll) {
          // When we reach 90% of the way through, start fading in a duplicate at the beginning
          if (newPosition >= maxScroll * 0.9) {
            // Gradually transition back to the start
            const progress = (newPosition - maxScroll * 0.9) / (maxScroll * 0.1)
            newPosition = (1 - progress) * newPosition + progress * 0
          }

          // If completely at the end, reset to beginning
          if (newPosition >= maxScroll) {
            newPosition = 0
          }
        }

        // Apply the scroll
        carouselRef.current.scrollLeft = newPosition
      }

      lastTimestamp = timestamp
      animationFrameId = requestAnimationFrame(scrollCarousel)
    }

    // Start the animation
    animationFrameId = requestAnimationFrame(scrollCarousel)

    // Clean up
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isHovered])

  return (
    <div
      className="relative py-8 bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Featured Playlists</h2>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "auto",
            }}
          >
            {// Duplicate the playlists array to create a seamless loop effect
            [...playlists, ...playlists].map((playlist, index) => (
              <MusicCard key={`${playlist.id}-${index}`} playlist={playlist} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MusicCard({ playlist }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex-shrink-0 w-[180px] snap-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-square">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage: `url(${playlist.image})`,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? "opacity-50" : "opacity-0"
          }`}
        />

        {/* Apple Music logo */}
        <div className="absolute top-2 right-2">
          <svg className="w-10 h-5" viewBox="0 0 38 16" fill="white">
            <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
            <path d="M11.43,7.25,7.18,4.6A.75.75,0,0,0,6,5.23v5.3a.75.75,0,0,0,1.12.63l4.25-2.65a.75.75,0,0,0,0-1.26Z" />
            <path d="M19.89,2.55H17.8V13.45h2.09Z" />
            <path d="M28.08,5.45h-2.7l-2,5.76-2-5.76h-2.7l3.28,8h2.82Z" />
            <path d="M28.91,5.45v8h5.18v-2H31v-6Z" />
          </svg>
        </div>

        {/* Watch button on hover */}
        {isHovered && (
          <a href={`/playlist/${playlist.id}`} className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-black font-medium px-5 py-1.5 rounded-full hover:bg-white/90 transition-colors text-sm">
              Listen Now
            </button>
          </a>
        )}
      </div>

      <div className="mt-2">
        <h3 className="text-white font-medium text-sm truncate">{playlist.title}</h3>
        <p className="text-gray-400 text-xs truncate">{playlist.category}</p>
      </div>
    </div>
  )
}

export function ArcadePlayer() {
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full">
      <div
        className="relative w-full h-[400px] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yuQLorsNWygzHqPrUu7YE8bI5ZP1tu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-800/30 to-purple-900/30 mix-blend-multiply">
          {/* Gradient overlay */}
        </div>

        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-red-500 rounded-xl p-1.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M12,2a10,10,0,1,0,10,10A10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
                <path d="M15,12H12V7a1,1,0,0,0-2,0v6a1,1,0,0,0,1,1h4a1,1,0,0,0,0-2Z" />
              </svg>
            </div>
            <span className="text-white font-medium">Apple Arcade</span>
            <button className="bg-white/20 backdrop-blur-sm text-white text-xs px-4 py-1 rounded-full border border-white/40">
              Bundle with ⓵One
            </button>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Best collection of mobile
            <br />
            games for every player.
          </h2>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
              Try it free³
            </button>
            <button className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              Learn more
            </button>
          </div>
        </div>

        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-black/50 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
        </button>
      </div>
    </div>
  )
}

export function ArcadeCarousel() {
  const carouselRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const games = [
    {
      id: 1,
      title: "Retro Bowl",
      category: "Sports",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Football Manager 2024 Touch",
      category: "Sports",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "WHAT THE CLASH?",
      category: "Action",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Bloons TD 6+",
      category: "Strategy",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "NBA 2K24 Arcade Edition",
      category: "Sports",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "Sonic Dream Team",
      category: "Action",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 7,
      title: "Asphalt 8: Airborne+",
      category: "Racing",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 8,
      title: "Crossy Road Castle",
      category: "Adventure",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    let animationFrameId
    let lastTimestamp = 0
    const normalSpeed = 2.5 // Faster speed when not hovered (pixels per frame)
    const slowSpeed = 0.5 // Slower speed when hovered

    const scrollCarousel = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const deltaTime = timestamp - lastTimestamp

      // Ensure smooth animation by considering time between frames
      const scrollSpeed = isHovered ? slowSpeed : normalSpeed
      const pixelsToScroll = (scrollSpeed * deltaTime) / 16 // Normalize to 60fps

      if (carouselRef.current) {
        // Get current scroll position
        const currentScroll = carouselRef.current.scrollLeft
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth

        // Calculate new position
        let newPosition = currentScroll + pixelsToScroll

        // If we've reached the end, loop back to start with a smooth transition
        if (newPosition >= maxScroll) {
          // When we reach 90% of the way through, start fading in a duplicate at the beginning
          if (newPosition >= maxScroll * 0.9) {
            // Gradually transition back to the start
            const progress = (newPosition - maxScroll * 0.9) / (maxScroll * 0.1)
            newPosition = (1 - progress) * newPosition + progress * 0
          }

          // If completely at the end, reset to beginning
          if (newPosition >= maxScroll) {
            newPosition = 0
          }
        }

        // Apply the scroll
        carouselRef.current.scrollLeft = newPosition
      }

      lastTimestamp = timestamp
      animationFrameId = requestAnimationFrame(scrollCarousel)
    }

    // Start the animation
    animationFrameId = requestAnimationFrame(scrollCarousel)

    // Clean up
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isHovered])

  return (
    <div
      className="relative py-8 bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Featured Games</h2>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "auto",
            }}
          >
            {// Duplicate the games array to create a seamless loop effect
            [...games, ...games].map((game, index) => (
              <GameCard key={`${game.id}-${index}`} game={game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function GameCard({ game }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex-shrink-0 w-[280px] snap-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[3/2]">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage: `url(${game.image})`,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? "opacity-50" : "opacity-0"
          }`}
        />

        {/* Apple Arcade logo */}
        <div className="absolute top-2 right-2">
          <svg className="w-12 h-6" viewBox="0 0 38 16" fill="white">
            <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
            <path d="M11.43,7.25,7.18,4.6A.75.75,0,0,0,6,5.23v5.3a.75.75,0,0,0,1.12.63l4.25-2.65a.75.75,0,0,0,0-1.26Z" />
            <path d="M19.89,2.55H17.8V13.45h2.09Z" />
            <path d="M28.08,5.45h-2.7l-2,5.76-2-5.76h-2.7l3.28,8h2.82Z" />
            <path d="M28.91,5.45v8h5.18v-2H31v-6Z" />
          </svg>
        </div>

        {/* Watch button on hover */}
        {isHovered && (
          <a href={`/game/${game.id}`} className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-white/90 transition-colors">
              Play Now
            </button>
          </a>
        )}
      </div>

      <div className="mt-2">
        <h3 className="text-white font-medium">{game.title}</h3>
        <p className="text-gray-400 text-sm">{game.category}</p>
      </div>
    </div>
  )
}

export function FitnessPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full">
      <div
        className="relative w-full h-[400px] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mYw9olQkZLItwykj5jIgOTJruDAJjv.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-gray-800/30 mix-blend-multiply">
          {/* Gradient overlay */}
        </div>

        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="11" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="8" fill="none" stroke="#fc3d39" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="#30d158" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-white font-medium">Apple Fitness+</span>
            <button className="bg-white/20 backdrop-blur-sm text-white text-xs px-4 py-1 rounded-full border border-white/40">
              Bundle with ⓵One
            </button>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            From HIIT to Meditation,
            <br />
            there's something for everyone.
          </h2>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
              Try it free⁴
            </button>
            <button className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              Learn more
            </button>
          </div>
        </div>

        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-black/50 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
        </button>
      </div>
    </div>
  )
}

export function FitnessCarousel() {
  const carouselRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const workouts = [
    {
      id: 1,
      title: "Meditation with Gregg",
      category: "Chill Vibes | 6 minutes",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "HIIT with Brian",
      category: "Throwback Hits | 21 minutes",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Meditation with Jessica",
      category: "Chill Vibes | 5 minutes",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Yoga with Jonelle",
      category: "Chill Vibes | 21 minutes",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Strength with Kyle",
      category: "Pure Dance | 30 minutes",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "Pilates with Marimba",
      category: "Upbeat Anthems | 20 minutes",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 7,
      title: "Core with Betina",
      category: "Chill Vibes | 10 minutes",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 8,
      title: "Dance with LaShawn",
      category: "Hip-Hop/R&B | 20 minutes",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    let animationFrameId
    let lastTimestamp = 0
    const normalSpeed = 2.5 // Faster speed when not hovered (pixels per frame)
    const slowSpeed = 0.5 // Slower speed when hovered

    const scrollCarousel = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const deltaTime = timestamp - lastTimestamp

      // Ensure smooth animation by considering time between frames
      const scrollSpeed = isHovered ? slowSpeed : normalSpeed
      const pixelsToScroll = (scrollSpeed * deltaTime) / 16 // Normalize to 60fps

      if (carouselRef.current) {
        // Get current scroll position
        const currentScroll = carouselRef.current.scrollLeft
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth

        // Calculate new position
        let newPosition = currentScroll + pixelsToScroll

        // If we've reached the end, loop back to start with a smooth transition
        if (newPosition >= maxScroll) {
          // When we reach 90% of the way through, start fading in a duplicate at the beginning
          if (newPosition >= maxScroll * 0.9) {
            // Gradually transition back to the start
            const progress = (newPosition - maxScroll * 0.9) / (maxScroll * 0.1)
            newPosition = (1 - progress) * newPosition + progress * 0
          }

          // If completely at the end, reset to beginning
          if (newPosition >= maxScroll) {
            newPosition = 0
          }
        }

        // Apply the scroll
        carouselRef.current.scrollLeft = newPosition
      }

      lastTimestamp = timestamp
      animationFrameId = requestAnimationFrame(scrollCarousel)
    }

    // Start the animation
    animationFrameId = requestAnimationFrame(scrollCarousel)

    // Clean up
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isHovered])

  return (
    <div
      className="relative py-8 bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Featured Workouts</h2>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "auto",
            }}
          >
            {// Duplicate the workouts array to create a seamless loop effect
            [...workouts, ...workouts].map((workout, index) => (
              <WorkoutCard key={`${workout.id}-${index}`} workout={workout} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkoutCard({ workout }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex-shrink-0 w-[280px] snap-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[3/2]">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage: `url(${workout.image})`,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? "opacity-50" : "opacity-0"
          }`}
        />

        {/* Apple Fitness+ logo */}
        <div className="absolute top-2 right-2">
          <svg className="w-12 h-6" viewBox="0 0 38 16" fill="white">
            <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
            <path d="M11.43,7.25,7.18,4.6A.75.75,0,0,0,6,5.23v5.3a.75.75,0,0,0,1.12.63l4.25-2.65a.75.75,0,0,0,0-1.26Z" />
            <path d="M19.89,2.55H17.8V13.45h2.09Z" />
            <path d="M28.08,5.45h-2.7l-2,5.76-2-5.76h-2.7l3.28,8h2.82Z" />
            <path d="M28.91,5.45v8h5.18v-2H31v-6Z" />
          </svg>
        </div>

        {/* Watch button on hover */}
        {isHovered && (
          <a href={`/workout/${workout.id}`} className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-white/90 transition-colors">
              Watch Now
            </button>
          </a>
        )}
      </div>

      <div className="mt-2">
        <h3 className="text-white font-medium">{workout.title}</h3>
        <p className="text-gray-400 text-sm">{workout.category}</p>
      </div>
    </div>
  )
}
