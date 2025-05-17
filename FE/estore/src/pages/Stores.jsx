import React, { useRef, useState, useEffect } from 'react';

const productList = [
  { name: "Mac", img: "/images/Stores/store-card-13-mac-nav-202310.jpg" },
  { name: "iPhone", img: "/images/Stores/store-card-13-iphone-nav-202309.jpg" },
  { name: "iPad", img: "/images/Stores/store-card-13-ipad-nav-202405.jpg" },
  { name: "Apple Watch", img: "/images/Stores/store-card-13-watch-nav-202409.png" },
  { name: "Apple Vision Pro", img: "/images/Stores/store-card-13-vision-pro-nav-202401.png" },
  { name: "AirPods", img: "/images/Stores/store-card-13-airpods-nav-202209.jpg" },
  { name: "AirTag", img: "/images/Stores/store-card-13-airtags-nav-202108.png" },
  { name: "Apple TV 4K", img: "/images/Stores/store-card-13-appletv-nav-202210.jpg" },
  { name: "HomePod", img: "/images/Stores/store-card-13-homepod-nav-202301.jpg" },
  { name: "Accessories", img: "/images/Stores/store-card-13-accessories-nav-202503.png" },
  { name: "Apple Gift Card", img: "/images/Stores/store-card-13-holiday-giftcards-asit-agc-nav-202111.png" },
];

function ProductCarousel() {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollRef.current) {
        setShowArrows(scrollRef.current.scrollWidth > scrollRef.current.clientWidth);
      }
    };
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-white py-4 w-full">
      {showArrows && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-[#e9e9eb] hover:bg-[#d4d4d7] transition-colors"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 no-scrollbar w-full justify-center items-center"
        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {productList.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[100px]">
            <img src={item.img} alt={item.name} className="w-20 h-20 object-contain mb-2" />
            <span className="text-sm font-semibold text-gray-900">{item.name}</span>
          </div>
        ))}
      </div>
      {showArrows && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-[#e9e9eb] hover:bg-[#d4d4d7] transition-colors"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}

// Carousel card data (có thể dùng lại ảnh hoặc thêm mới)
const cardList = [
  { img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyOWVOMytmanI1M0ZTQWR1RjlDMWJpNXFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVbk15N0N0R0lhUGhlMG1Tdmc3RjZVQ09NTUhYNlZ6OGxKNWpBMHlTSTlldko" },
  { img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-pro-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXUHpnd0VsRWFiaWRaRHRaUXBvNTNkaTN3cldHSVhIZCtHM2xVUWV5dTAvVlU4amgyYkZNZC9iNVQ4S1VDT21ldVlKWlgzZzdyUXEzcGE2bUxYbWVvdHFROE5HdXpXTzl3cVdSci8xOTZVOXo" },
  { img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXRFJ0OFRiWngrNGllYTMvQ1dlWDBQZjZXYXJlRUd1cTBYTnRnbTNlazIvMzRHeXB5TnVsU3R6Qjd0Y2JzbURyWEdJV2RaUklyUnViT0c4OGJXRWhUTnArYWpGdS9XeFgvbS9ITnNYOEhYaG4" },
  { img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-pride-202505?wid=800&hei=1000&fmt=png-alpha&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vdDYvU0ZacGROckNJUjJGMTk0bnRxaHFTRjNxbmh1UnU2R29ibGdpZUFXc3V5NVU0QmM2b3hmeWJWTTVtN1o5ZnNZK25GTnpvbUY1UTI4WmI2VjkwM1YrYWpGdS9XeFgvbS9ITnNYOEhYaG4" },
  { img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vbGtrQjBqdmhJbWlLcCtlQTMwc01SdjkvamYzRzRvcFlnajNacmhEOC9BeDE1UUxLT2t0cW42N3FvQzVqaGhrVVlSek45NHpYUG91NnZ3YmlDQlpUYnArYWpGdS9XeFgvbS9ITnNYOEhYaG4" },
  { img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXSzRWdVVUSklyLzFIUnk0cUZLSXhCWFRScHZrVGpHeDlzdWlveXRWTHp6UlJSeXJaL3JqNm9jc2psYU5Qelh0TnBVbkFCTnNoWjVEWkE2SURLL0ZUc2RITWhFWEVpNkNSNHRRNkh1eDBJS1E" },
  { img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-202503?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXQUs0eUd5eURRc1MxSHJvV1NyOEwyZFR5T0hac1V4Mzl2bFB3cFFJNlo2NWdsbGZlRHV0Q3JlbHJxWXRlWjZpMm4xU2w0TkJQWUczYmhEbjM5ZUUxREU" },
  { img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXTzBZbG1KSFRCNEs3N1J2VHI2VE83eVcvVW04SmttNWI1emkwWW5tcUh6OTczTGJ1bkVZOVdxMC9CSUwydmQ4a0lXL2VyS2UzTWpqR2RTME5WUFdGQ1dQbHh6UVl4cENBaFg1MFlxNlFlK1k" },
];

function ProductCardCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -350 : 350,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-white py-8 w-full">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-[#e9e9eb] hover:bg-[#d4d4d7] transition-colors"
        onClick={() => scroll('left')}
        aria-label="Scroll left"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 no-scrollbar w-full"
        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cardList.map((item, idx) => (
          <div key={idx} className="min-w-[340px] max-w-[340px] h-[420px] bg-white rounded-3xl shadow-lg flex items-center justify-center p-6">
            <img src={item.img} alt="product" className="object-contain max-h-full max-w-full rounded-2xl" />
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-[#e9e9eb] hover:bg-[#d4d4d7] transition-colors"
        onClick={() => scroll('right')}
        aria-label="Scroll right"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

// Thêm style no-scrollbar vào file JSX
const style = `
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

const Stores = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-16 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left: Title & Description */}
          <div className="md:w-2/3 w-full">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="font-bold">Store.</span>
              <span className="font-normal text-gray-700"> The best way to buy the products you love.</span>
            </h1>
          </div>
          {/* Right: Support & Store Info */}
          <div className="md:w-1/3 w-full flex flex-col gap-6 mt-10 md:mt-0">
            {/* Support */}
            <div className="flex items-start gap-3">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309?wid=40&hei=40&fmt=jpeg&qlt=90&.v=1694270821161" alt="Specialist" className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-semibold text-gray-900">Need shopping help?</div>
                <a href="#" className="text-blue-600 hover:underline text-sm">Ask a Specialist <sup>↗</sup></a>
              </div>
            </div>
            {/* Store Info */}
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛍️</span>
              <div>
                <div className="font-semibold text-gray-900">Visit an Apple Store</div>
                <a href="#" className="text-blue-600 hover:underline text-sm">Find one near you <sup>↗</sup></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Inject style for no-scrollbar */}
      <style>{style}</style>
      <ProductCarousel />
      <div className="w-full mt-20 mb-0">
        <h2 className="text-3xl font-semibold text-gray-900 text-left w-full">
          <span className="font-bold">The latest.</span> <span className="font-normal text-gray-700">Take a look at what's new, right now.</span>
        </h2>
      </div>
      <ProductCardCarousel />
      <div className="w-full mt-20 mb-0">
        <h2 className="text-3xl font-semibold text-gray-900 text-left w-full">
          <span className="font-bold">The latest.</span> <span className="font-normal text-gray-700">Help is here. Whenever and however you need it.</span>
        </h2>
      </div>
      <ProductCardCarousel />
      <div className="w-full mt-20 mb-0">
        <h2 className="text-3xl font-semibold text-gray-900 text-left w-full">
          <span className="font-bold">The latest.</span> <span className="font-normal text-gray-700">Accessories. Essentials that pair perfectly with your favorite devices.</span>
        </h2>
      </div>
      <ProductCardCarousel />
      <div className="w-full mt-20 mb-0">
        <h2 className="text-3xl font-semibold text-gray-900 text-left w-full">
          <span className="font-bold">The latest.</span> <span className="font-normal text-gray-700">Loud and clear. Unparalleled choices for rich, high-quality sound.</span>
        </h2>
      </div>
      <ProductCardCarousel />
      {/* Featured Products */}
      
      <div className="w-full border-t border-gray-200 mt-12 pt-4 pb-8 flex items-center px-8 bg-[#f5f5f7]">
  <img
    src="/images/Apple-Logosu.png"
    alt="Apple"
    className="w-5 h-5 mr-2"
    style={{ display: 'inline-block' }}
  />
  <span className="mx-1 text-gray-400">{'>'}</span>
  <a
    href="#"
    className="ml-2 text-sm text-gray-700 hover:underline"
  >
    Apple Store Online
  </a>
</div>
    </div>
  );
};

export default Stores;
