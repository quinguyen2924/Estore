import React from 'react';

function HomePage() {
  return (
    <div className="bg-white w-full">
      {/* Hero Banner - iPhone 16 */}
      <section className="relative py-12 md:py-20 text-center w-full">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2">iPhone</h2>
          <p className="text-2xl md:text-3xl text-[#1d1d1f] mb-4">Giới thiệu dòng iPhone 16.</p>
          <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
            <a href="#" className="hover:underline text-lg">Tìm hiểu thêm</a>
            <a href="#" className="hover:underline text-lg">Mua sắm iPhone</a>
          </div>
          <div className="mt-6 md:mt-10">
            <img 
              src="https://www.apple.com/v/home/be/images/heroes/iphone-16/hero_iphone_16__cw5tpc6g892u_large.jpg" 
              alt="iPhone 16" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Apple Watch Series 10 */}
      <section className="relative py-12 md:py-16 text-center bg-black text-white w-full">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Apple Watch Series 10</h2>
          <p className="text-2xl md:text-3xl mb-4">Mỏng hơn. Mãi đỉnh.</p>
          <div className="flex justify-center space-x-6 text-[#2997ff] font-medium">
            <a href="#" className="hover:underline text-lg">Tìm hiểu thêm</a>
            <a href="#" className="hover:underline text-lg">Mua</a>
          </div>
          <div className="mt-6 md:mt-10">
            <img 
              src="https://www.apple.com/v/home/be/images/heroes/apple-watch-series-10/hero_apple_watch_series_10__fmvg6ub4c8ye_large.jpg" 
              alt="Apple Watch Series 10" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* MacBook Air */}
      <section className="relative py-12 md:py-16 text-center bg-[#f5f5f7] w-full">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2">MacBook Air</h2>
          <div className="text-2xl md:text-3xl text-[#1d1d1f] mb-4">
            <p>Màu xanh da trời.</p>
            <p>Hiệu năng cao ngất trời với M4.</p>
          </div>
          <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
            <a href="#" className="hover:underline text-lg">Tìm hiểu thêm</a>
            <a href="#" className="hover:underline text-lg">Mua</a>
          </div>
          <div className="mt-6 md:mt-10">
            <img 
              src="https://www.apple.com/v/home/be/images/heroes/macbook-air-m4/hero_macbook_air_m4__fhe4hfg6xfiy_large.jpg" 
              alt="MacBook Air" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-8 md:py-12 w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Apple Watch Ultra 2 */}
            <div className="bg-[#f5f5f7] p-8 text-center">
              <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">Apple Watch Ultra 2</h3>
              <p className="text-xl text-[#1d1d1f] mb-4">Màu mới. Không ngừng vươn tới.</p>
              <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
                <a href="#" className="hover:underline">Tìm hiểu thêm</a>
                <a href="#" className="hover:underline">Mua</a>
              </div>
              <div className="mt-6">
                <img 
                  src="https://www.apple.com/v/home/be/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra_2__fmgvj9nvkumy_large.jpg" 
                  alt="Apple Watch Ultra 2" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

            {/* iPad Air */}
            <div className="bg-[#f5f5f7] p-8 text-center">
              <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">iPad Air</h3>
              <p className="text-xl text-[#1d1d1f] mb-4">Nay siêu mạnh mẽ với chip M3.</p>
              <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
                <a href="#" className="hover:underline">Tìm hiểu thêm</a>
                <a href="#" className="hover:underline">Mua</a>
              </div>
              <div className="mt-6">
                <img 
                  src="https://www.apple.com/v/home/be/images/promos/ipad-air/promo_ipadair__el8lylxvg9ua_large.jpg" 
                  alt="iPad Air" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

            {/* MacBook Pro */}
            <div className="bg-[#f5f5f7] p-8 text-center">
              <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">MacBook Pro</h3>
              <p className="text-xl text-[#1d1d1f] mb-4">Một tuyệt tác của trí tuệ.</p>
              <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
                <a href="#" className="hover:underline">Tìm hiểu thêm</a>
                <a href="#" className="hover:underline">Mua</a>
              </div>
              <div className="mt-6">
                <img 
                  src="https://www.apple.com/v/home/be/images/promos/macbook-pro/promo_mbp__ek7p477bkp6q_large.jpg" 
                  alt="MacBook Pro" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

            {/* iPad Pro */}
            <div className="bg-[#f5f5f7] p-8 text-center">
              <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">iPad Pro</h3>
              <p className="text-xl text-[#1d1d1f] mb-4">Mỏng không tưởng. Mạnh không ngờ.</p>
              <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
                <a href="#" className="hover:underline">Tìm hiểu thêm</a>
                <a href="#" className="hover:underline">Mua</a>
              </div>
              <div className="mt-6">
                <img 
                  src="https://www.apple.com/v/home/be/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_large.jpg" 
                  alt="iPad Pro" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

            {/* Trợ Năng */}
            <div className="bg-[#f5f5f7] p-8 text-center">
              <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">Trợ Năng</h3>
              <p className="text-xl text-[#1d1d1f] mb-4">Sáng tạo phục vụ mọi người.</p>
              <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
                <a href="#" className="hover:underline">Tìm hiểu thêm</a>
              </div>
              <div className="mt-6">
                <img 
                  src="https://www.apple.com/v/home/be/images/promos/accessibility/promo_accessibility__fy0y10gn8uaa_large.jpg" 
                  alt="Trợ Năng" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

            {/* Mac Studio */}
            <div className="bg-[#f5f5f7] p-8 text-center">
              <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">Mac Studio</h3>
              <div className="text-xl text-[#1d1d1f] mb-4">
                <p>M4 Max và M3 Ultra.</p>
                <p>Chọn siêu năng lực của bạn.</p>
              </div>
              <div className="flex justify-center space-x-6 text-[#0066cc] font-medium">
                <a href="#" className="hover:underline">Tìm hiểu thêm</a>
                <a href="#" className="hover:underline">Mua</a>
              </div>
              <div className="mt-6">
                <img 
                  src="https://www.apple.com/v/home/be/images/promos/mac-studio/promo_mac_studio__gkz4p8n1omi6_large.jpg" 
                  alt="Mac Studio" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apple TV+ Promotion */}
      <section className="py-8 md:py-12 bg-black text-white w-full">
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
      <section className="py-4 bg-[#f5f5f7] text-[#6e6e73] text-xs w-full">
        <div className="max-w-5xl mx-auto px-4">
          <p>Một số tính năng có thể thay đổi. Một số tính năng, ứng dụng và dịch vụ chỉ khả dụng ở một số khu vực hoặc ngôn ngữ.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
