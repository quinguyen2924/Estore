import React from 'react';
import { FaApple } from "react-icons/fa";
function HomePage() {
  return (
    <div className="bg-white w-full">
      {/* Hero Banner - iPhone 16 */}
      <section className="relative py-8 md:py-12 text-center w-full bg-gray-50 mb-2">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2">iPhone</h2>
          <p className="text-2xl md:text-3xl text-[#1d1d1f] mb-4">Meet the iPhone 16 family.</p>
          <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
          <a href="#" className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0055b3] transition-colors text-lg">Learn more</a>
          <a href="#" className="bg-white text-[#0066cc] border border-[#0066cc] px-5 py-2 rounded-full hover:bg-gray-50 transition-colors text-lg">Shop Iphone</a>
          </div>
          <p className="text-1xl md:text-2xl mb-4">
            <span className="bg-gradient-to-r from-[#0066cc] via-[#9933cc] to-[#ff2d55] text-transparent bg-clip-text font-medium">Built for Apple Intelligence.</span>
          </p>
          <div className="mt-6 md:mt-10 flex justify-center">
            <img 
              src="./images/herobanner_image.webp" 
              alt="iPhone 16" 
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Apple Watch Series 10 */}
      <section className="relative py-8 md:py-12 text-center bg-gray-50 text-black w-full mb-2">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">
            <FaApple className="mr-1" />
            <span>WATCH</span>
          </h2>
          <h3 className="text-4xl md:text-2xl font-bold mb-2">SERIES 10</h3>
          <p className="text-2xl md:text-3xl mb-4">Thinstant classic.</p>
          <div className="flex justify-center space-x-6 font-medium">
            <a href="#" className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0055b3] transition-colors text-lg">Learn more</a>
            <a href="#" className="bg-white text-[#0066cc] border border-[#0066cc] px-5 py-2 rounded-full hover:bg-gray-50 transition-colors text-lg">Buy</a>
          </div>
          <div className="mt-6 md:mt-10 flex justify-center">
            <img 
              src="./images/applewatch_home.jpg" 
              alt="Apple Watch Series 10" 
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* MacBook Air */}
      <section className="relative py-8 md:py-12 text-center w-full mb-2" style={{background: 'linear-gradient(to bottom, #D6EDF6 0%, #ffffff 100%)'}}>
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2">MacBook Air</h2>
          <div className="text-2xl md:text-3xl text-[#1d1d1f] mb-4">
            <p>Sky blue color.</p>
            <p>Sky high performance with M4.</p>
          </div>
          <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
          <a href="#" className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0055b3] transition-colors text-lg">Learn more</a>
          <a href="#" className="bg-white text-[#0066cc] border border-[#0066cc] px-5 py-2 rounded-full hover:bg-gray-50 transition-colors text-lg">Buy</a>
          </div>
          <div className="mt-6 md:mt-10 flex justify-center">
            <img 
              src="./images/macair_home.png" 
              alt="MacBook Air" 
              className="w-full max-w-2xl mx-auto"
            />
          </div>
          <p className="text-1xl md:text-2xl mt-4">
            <span className="bg-gradient-to-r from-[#0066cc] via-[#9933cc] to-[#ff2d55] text-transparent bg-clip-text font-medium">Built for Apple Intelligence.</span>
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-6 md:py-8 w-full mb-2">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* WWDC25 */}
            <div className="bg-[#f5f5f7] p-6 text-center">
              <div className="mt-6 flex justify-center">
                <img 
                  src="./images/WDC25.png" 
                  alt="WWDC25" 
                  className="w-full max-w-xs mx-auto"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-[#1d1d1f]">Apple Worldwide Developers Conference.</h3>
                <p className="text-xl text-[#1d1d1f] mb-4">Join us online June 9–13.</p>
                <div className="flex justify-center">
                  <a href="#" className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0055b3] transition-colors text-lg">Learn more</a>
                </div>
              </div>
            </div>

            {/* iPad Air */}
            <div className="p-6 text-center" style={{background: 'linear-gradient(to bottom, #D6EDF6 0%, #ffffff 100%)'}}>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#1d1d1f] mb-1">iPad <span className="font-normal text-[#0066cc]">air</span></h3>
                <p className="text-xl text-[#1d1d1f] mb-4">Now supercharged by the M3 chip.</p>
                <div className="flex justify-center space-x-6 font-medium mb-4">
                  <a href="#" className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0055b3] transition-colors text-lg">Learn more</a>
                  <a href="#" className="bg-white text-[#0066cc] border border-[#0066cc] px-5 py-2 rounded-full hover:bg-gray-50 transition-colors text-lg">Buy</a>
                </div>
              </div>
              <div className="mt-2 flex justify-center">
                <img 
                  src="./images/iPad_air_home.png" 
                  alt="iPad Air" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <p className="text-1xl md:text-lg mt-4">
                <span className="bg-gradient-to-r from-[#0066cc] via-[#9933cc] to-[#ff2d55] text-transparent bg-clip-text font-medium">Built for Apple Intelligence.</span>
              </p>
            </div>

            {/* AirPods Pro 2 */}
            <div className="bg-black p-6 text-center text-white relative h-[400px] overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="./images/airpod2_home.jpg" 
                  alt="AirPods Pro 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-4xl font-bold mb-1">AirPods Pro 2</h3>
                <p className="text-xl mb-4">Now with a Hearing Aid feature.<sup>1</sup></p>
                <div className="flex justify-center space-x-6 font-medium">
                  <a href="#" className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0055b3] transition-colors text-lg">Learn more</a>
                  <a href="#" className="bg-[#333333] text-white border border-[#666666] px-5 py-2 rounded-full hover:bg-[#444444] transition-colors text-lg">Buy</a>
                </div>
              </div>
            </div>

            {/* Accessibility */}
            <div className="bg-[#f5f5f7] p-6 text-center relative h-[400px] overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="./images/accessibility_home.jpg" 
                  alt="Accessibility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-4xl font-bold text-white mb-1">Accessibility</h3>
                <p className="text-xl text-white mb-4">Innovation that's accessible by design.</p>
                <div className="flex justify-center">
                  <a href="#" className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0055b3] transition-colors text-lg">Learn more</a>
                </div>
              </div>
            </div>

            {/* TTrade in*/}
            <div className="bg-[#f5f5f7] p-6 text-center">
              <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">Trợ Năng</h3>
              <p className="text-xl text-[#1d1d1f] mb-4">Sáng tạo phục vụ mọi người.</p>
              <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
                <a href="#" className="hover:underline">Tìm hiểu thêm</a>
              </div>
              <div className="mt-6 flex justify-center">
                <img 
                  src="https://www.apple.com/v/home/be/images/promos/accessibility/promo_accessibility__fy0y10gn8uaa_large.jpg" 
                  alt="Trợ Năng" 
                  className="w-full max-w-xs mx-auto"
                />
              </div>
            </div>

            {/* Card */}
            <div className="bg-[#f5f5f7] p-6 text-center">
              <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">Mac Studio</h3>
              <div className="text-xl text-[#1d1d1f] mb-4">
                <p>M4 Max và M3 Ultra.</p>
                <p>Chọn siêu năng lực của bạn.</p>
              </div>
              <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
                <a href="#" className="hover:underline">Tìm hiểu thêm</a>
                <a href="#" className="hover:underline">Mua</a>
              </div>
              <div className="mt-6 flex justify-center">
                <img 
                  src="https://www.apple.com/v/home/be/images/promos/mac-studio/promo_mac_studio__gkz4p8n1omi6_large.jpg" 
                  alt="Mac Studio" 
                  className="w-full max-w-xs mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apple TV+ Promotion */}
      <section className="py-6 md:py-8 bg-black text-white w-full mb-2">
        <div className="w-full text-center">
          <div className="mb-4">
            <img 
              src="https://www.apple.com/v/home/be/images/logos/tv-plus/logo_light__cfvl40z2nzau_large.png" 
              alt="Apple TV+" 
              className="h-12 mx-auto"
            />
          </div>
          <p className="text-sm mt-4">
            Apple TV+ yêu cầu đăng ký thuê bao.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-3 bg-[#f5f5f7] text-[#6e6e73] text-xs w-full">
        <div className="max-w-5xl mx-auto px-4">
          <p>Một số tính năng có thể thay đổi. Một số tính năng, ứng dụng và dịch vụ chỉ khả dụng ở một số khu vực hoặc ngôn ngữ.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
