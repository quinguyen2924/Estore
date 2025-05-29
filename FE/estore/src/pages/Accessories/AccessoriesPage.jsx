"use client"

import { Search } from "lucide-react"
import { useState } from "react"

// Import data
import {
  productCategories,
  categoryCategories,
  iPhoneAccessories,
  iPadAccessories,
  watchBands,
  macAccessories,
  soundEssentials,
  airTagProducts,
} from "./data"

// Import components
import { ProductCarousel, CategoryGrid } from "./client"

export default function AccessoriesPage() {
  const [activeTab, setActiveTab] = useState("product")
  const [isExpanded, setIsExpanded] = useState(false)

  const getCurrentCategories = () => {
    return activeTab === "product" ? productCategories : categoryCategories
  }

  const shouldShowToggle = () => {
    const categories = getCurrentCategories()
    return categories.length > 5
  }

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setIsExpanded(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Accessorize
              <br />
              in a snap.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find a MagSafe case, wallet, or
              <br />
              charger that's right for you.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Colorful phone cases grid */}
            <div className="bg-orange-400 rounded-2xl p-4 aspect-square flex items-center justify-center">
              <div className="w-16 h-24 bg-black rounded-lg"></div>
            </div>
            <div className="bg-purple-300 rounded-2xl p-4 aspect-square flex items-center justify-center">
              <div className="w-16 h-24 bg-black rounded-lg"></div>
            </div>
            <div className="bg-green-400 rounded-2xl p-4 aspect-square flex items-center justify-center">
              <div className="w-16 h-24 bg-black rounded-lg"></div>
            </div>
            <div className="bg-pink-400 rounded-2xl p-4 aspect-square flex items-center justify-center">
              <div className="w-16 h-24 bg-black rounded-lg"></div>
            </div>
            <div className="bg-gray-200 rounded-2xl p-4 aspect-square flex items-center justify-center">
              <div className="w-16 h-24 bg-black rounded-lg"></div>
            </div>
            <div className="bg-blue-400 rounded-2xl p-4 aspect-square flex items-center justify-center">
              <div className="w-16 h-24 bg-black rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Find the accessories you're looking for:</h2>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search accessories"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Browse options */}
        <div className="flex justify-center gap-8 mb-8 border-b border-gray-200">
          <button
            onClick={() => handleTabChange("product")}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "product"
                ? "text-gray-900 border-gray-900"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Browse by Product
          </button>
          <button
            onClick={() => handleTabChange("category")}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "category"
                ? "text-gray-900 border-gray-900"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Browse by Category
          </button>
        </div>

        {/* Categories Grid */}
        <CategoryGrid
          categories={getCurrentCategories()}
          isExpanded={isExpanded}
          onToggleExpanded={handleToggleExpanded}
          shouldShowToggle={shouldShowToggle()}
          activeTab={activeTab}
        />
      </div>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4">
        <ProductCarousel
          title="Featured iPhone Accessories"
          products={iPhoneAccessories}
          showColors={true}
          linkText="Shop all iPhone accessories"
        />

        <ProductCarousel
          title="Featured iPad Accessories"
          products={iPadAccessories}
          linkText="Shop all iPad accessories"
        />

        <ProductCarousel title="Apple Watch Bands" products={watchBands} linkText="Shop all bands" />

        <ProductCarousel
          title="Featured Mac Accessories"
          products={macAccessories}
          linkText="Shop all Mac accessories"
        />

        <ProductCarousel title="Sound Essentials" products={soundEssentials} linkText="Shop headphones and speakers" />

        <ProductCarousel title="AirTag" products={airTagProducts} linkText="Shop all AirTag accessories" />
      </div>

      {/* Footer info sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">📦</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Fast, free delivery</h3>
            <p className="text-sm text-gray-600">Get free delivery, or pick up available items at an Apple Store.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">💳</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Pay monthly at 0% APR</h3>
            <p className="text-sm text-gray-600">
              You can pay over time when you choose to check out with Apple Card Monthly Installments.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🛡️</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Make them yours</h3>
            <p className="text-sm text-gray-600">
              Mix and match your favorite colors and add a personal engraving for free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
