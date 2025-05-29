"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react"

// Product Card Component
export function ProductCard({ product, showColors = false }) {
  return (
    <div className="w-full bg-gray-50 rounded-2xl p-6">
      <div className="aspect-[3/4] bg-gray-50 rounded-xl mb-4 flex items-center justify-center relative">
        {product.isNew && <span className="absolute top-3 left-3 text-xs text-orange-600 font-medium">New</span>}
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-3/4 h-3/4 object-contain"
        />
      </div>
      {showColors && product.colors && product.colors.length > 0 && (
        <div className="flex gap-1 mb-3 justify-center">
          {product.colors.slice(0, 6).map((color, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full border border-gray-300"
              style={{ backgroundColor: color === "transparent" ? "#f3f4f6" : color }}
            />
          ))}
          {product.colors.length > 6 && <span className="text-xs text-gray-500 ml-1">+</span>}
        </div>
      )}
      <h3 className="text-sm font-medium text-gray-900 mb-2 text-center leading-tight">{product.name}</h3>
      <p className="text-sm font-semibold text-gray-900 text-center">{product.price}</p>
    </div>
  )
}

// Product Carousel Component
export function ProductCarousel({ title, products, showColors = false, linkText = "Shop all" }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 3
  const totalSlides = Math.ceil(products.length / itemsPerSlide)

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0))
  }

  const getCurrentSlideProducts = () => {
    const startIndex = currentSlide * itemsPerSlide
    return products.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{title}</h2>

      <div className="relative">
        {/* Left Arrow */}
        {totalSlides > 1 && currentSlide > 0 && (
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}

        {/* Right Arrow */}
        {totalSlides > 1 && currentSlide < totalSlides - 1 && (
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        )}

        {/* Products Container - Show 3 products per slide */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            {getCurrentSlideProducts().map((product) => (
              <ProductCard key={product.id} product={product} showColors={showColors} />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 mb-4">
          {Array(totalSlides)
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full mx-1 transition-colors ${
                  i === currentSlide ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
        </div>
      )}

      {/* Shop All Link */}
      <div className="text-center">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          {linkText} {title.toLowerCase()} →
        </button>
      </div>
    </div>
  )
}

// Category Grid Component
export function CategoryGrid({ categories, isExpanded, onToggleExpanded, shouldShowToggle, activeTab }) {
  const getVisibleCategories = () => {
    if (isExpanded) {
      return categories
    } else {
      return categories.slice(0, 5)
    }
  }

  const renderIcon = (icon) => {
    if (icon.startsWith('/')) {
      return <img src={icon} alt="category icon" className="w-10 h-10 object-contain" />
    }
    return <span className="text-2xl">{icon}</span>
  }

  return (
    <div className="mb-8">
      {activeTab === "category" && isExpanded && (
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4 text-left">Accessories</h3>
        </div>
      )}

      {/* Centered Categories Grid - Max 5 per row */}
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-8 max-w-3xl">
          {getVisibleCategories().map((category, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center mb-3 mx-auto hover:bg-gray-100 transition-colors cursor-pointer">
                {renderIcon(category.icon)}
              </div>
              <p className="text-sm text-gray-700 max-w-[100px] leading-tight">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Show more/less button */}
      {shouldShowToggle && (
        <div className="text-center mt-8">
          <button
            onClick={onToggleExpanded}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 mx-auto"
          >
            {isExpanded ? (
              <>
                Show less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show more <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}
