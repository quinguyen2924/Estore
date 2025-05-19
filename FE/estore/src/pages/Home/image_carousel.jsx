"use client"

import { useState, useEffect, useCallback } from "react"

export default function ImageCarousel({ slides, autoPlayInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Function to go to a specific slide
  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentIndex) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500) // Match this with the CSS transition duration
    },
    [currentIndex, isTransitioning],
  )

  // Function to go to the next slide
  const goToNext = useCallback(() => {
    if (isTransitioning) return
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    setIsTransitioning(true)
    setCurrentIndex(newIndex)
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match this with the CSS transition duration
  }, [currentIndex, slides.length, isTransitioning])

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    // Set up interval for auto-advancing slides
    const slideInterval = setInterval(goToNext, autoPlayInterval)

    // Clean up interval when component unmounts
    return () => clearInterval(slideInterval)
  }, [goToNext, autoPlayInterval])

  // Handle click on CTA button without triggering the parent link
  const handleCtaClick = (e, action) => {
    e.preventDefault()
    e.stopPropagation()
    if (action) action()
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[500px] md:h-[600px] w-full">
        {/* Previous and Next Slide Previews */}
        {slides.length > 1 && (
          <>
            <div className="absolute left-0 top-0 h-full w-[10%] z-0 opacity-40 transition-opacity duration-500">
              <div className="h-full w-full relative">
                <img
                  src={slides[(currentIndex - 1 + slides.length) % slides.length].image || "/placeholder.svg"}
                  alt="Previous slide preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-[10%] z-0 opacity-40 transition-opacity duration-500">
              <div className="h-full w-full relative">
                <img
                  src={slides[(currentIndex + 1) % slides.length].image || "/placeholder.svg"}
                  alt="Next slide preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </>
        )}

        {/* Slides Container */}
        <div className="absolute left-[10%] right-[10%] h-full z-10 overflow-hidden">
          {/* All Slides */}
          <div className="relative h-full w-full">
            {slides.map((slide, index) => (
              <a
                key={slide.id}
                href={slide.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute top-0 left-0 h-full w-full transition-all duration-500 ease-in-out block ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-full pointer-events-none"
                }`}
                onClick={(e) => {
                  // If no URL is provided, prevent default behavior
                  if (!slide.url) e.preventDefault()
                }}
              >
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title || `Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />

                {/* Content Overlay */}
                {(slide.title || slide.subtitle || slide.cta) && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                    {slide.title && <h2 className="text-5xl font-bold mb-2">{slide.title}</h2>}
                    {slide.subtitle && <p className="text-lg mb-4">{slide.subtitle}</p>}
                    {slide.cta && (
                      <button
                        onClick={(e) => handleCtaClick(e, slide.cta.action)}
                        className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {slide.cta.text}
                      </button>
                    )}
                    {slide.logo && (
                      <img
                        src={slide.logo || "/placeholder.svg"}
                        alt="Logo"
                        className="absolute bottom-6 right-6 h-8"
                      />
                    )}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-3 mt-4 pb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                goToSlide(index)
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
