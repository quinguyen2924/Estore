import { useState } from 'react';

function Footer() {
  const [expandedSection, setExpandedSection] = useState(null);

  const footerSections = [
    {
      title: 'Mua Sắm và Tìm Hiểu',
      links: [
        { name: 'Cửa Hàng', path: '/' },
        { name: 'Mac', path: '/mac' },
        { name: 'iPad', path: '/ipad' },
        { name: 'iPhone', path: '/iphone' },
        { name: 'Watch', path: '/watch' },
        { name: 'AirPods', path: '/airpods' },
        { name: 'TV & Nhà', path: '/tv-home' },
        { name: 'AirTag', path: '/airtag' },
        { name: 'Phụ Kiện', path: '/accessories' },
      ]
    },
    {
      title: 'Dịch Vụ',
      links: [
        { name: 'Apple Music', path: '/apple-music' },
        { name: 'Apple TV+', path: '/apple-tv-plus' },
        { name: 'Apple Arcade', path: '/apple-arcade' },
        { name: 'iCloud', path: '/icloud' },
        { name: 'Apple One', path: '/apple-one' },
        { name: 'Apple Books', path: '/apple-books' },
        { name: 'Apple Podcasts', path: '/apple-podcasts' },
        { name: 'App Store', path: '/app-store' },
      ]
    },
    {
      title: 'Tài Khoản',
      links: [
        { name: 'Quản Lý Tài Khoản Apple Của Bạn', path: '/account' },
        { name: 'Tài Khoản Apple Store', path: '/store-account' },
        { name: 'iCloud.com', path: 'https://www.icloud.com' },
      ]
    },
    {
      title: 'Apple Store',
      links: [
        { name: 'Tìm Cửa Hàng', path: '/find-store' },
        { name: 'Genius Bar', path: '/genius-bar' },
        { name: 'Today at Apple', path: '/today-at-apple' },
        { name: 'Trại Hè Apple', path: '/apple-camp' },
        { name: 'Ứng Dụng Apple Store', path: '/apple-store-app' },
        { name: 'Apple Trade In', path: '/trade-in' },
        { name: 'Tài Chính', path: '/financing' },
        { name: 'Tình Trạng Đơn Hàng', path: '/order-status' },
        { name: 'Hỗ Trợ Mua Hàng', path: '/shopping-help' },
      ]
    },
    {
      title: 'Dành Cho Doanh Nghiệp',
      links: [
        { name: 'Apple và Doanh Nghiệp', path: '/business' },
        { name: 'Mua Sắm Cho Doanh Nghiệp', path: '/business-shop' },
      ]
    },
    {
      title: 'Cho Giáo Dục',
      links: [
        { name: 'Apple và Giáo Dục', path: '/education' },
        { name: 'Mua Hàng Cho Bậc Đại Học', path: '/education-shop' },
      ]
    },
    {
      title: 'Giá Trị Cốt Lõi Của Apple',
      links: [
        { name: 'Trợ Năng', path: '/accessibility' },
        { name: 'Môi Trường', path: '/environment' },
        { name: 'Quyền Riêng Tư', path: '/privacy' },
        { name: 'Trách Nhiệm Nhà Cung Cấp', path: '/supplier-responsibility' },
      ]
    },
    {
      title: 'Về Apple',
      links: [
        { name: 'Newsroom', path: '/newsroom' },
        { name: 'Lãnh Đạo Của Apple', path: '/leadership' },
        { name: 'Cơ Hội Nghề Nghiệp', path: '/careers' },
        { name: 'Nhà Đầu Tư', path: '/investors' },
        { name: 'Đạo Đức & Tuân Thủ', path: '/ethics' },
        { name: 'Sự Kiện', path: '/events' },
        { name: 'Liên Hệ Apple', path: '/contact' },
      ]
    },
  ];

  const toggleSection = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };

  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-sm">
      {/* Main Footer Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Legal Notes */}
        <div className="border-b border-[#d2d2d7] pb-5 mb-5">
          <p className="text-xs leading-relaxed">
            Giá hiển thị đã bao gồm tất cả các khoản thuế. Giao hàng miễn phí cho tất cả đơn hàng.
          </p>
        </div>

        {/* Desktop Footer Navigation */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.path} className="hover:underline text-xs">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Footer Navigation */}
        <div className="md:hidden">
          {footerSections.map((section, index) => (
            <div key={index} className="border-b border-[#d2d2d7]">
              <button
                className="w-full py-3 flex justify-between items-center text-[#1d1d1f] font-semibold"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <span>
                  {expandedSection === index ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              {expandedSection === index && (
                <ul className="pb-3 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.path} className="block py-1 text-xs hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* More Ways to Shop */}
        <div className="mt-8 border-b border-[#d2d2d7] pb-5">
          <p className="mb-2">
            Xem thêm cách để mua hàng: <a href="/find-store" className="text-[#0066cc] hover:underline">Tìm cửa hàng bán lẻ</a> gần bạn. Hoặc gọi 1800-1192.
          </p>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-5 flex flex-col md:flex-row md:justify-between text-xs">
          <div className="mb-4 md:mb-0">
            <p>Bản quyền © 2025 Apple Inc. Bảo lưu mọi quyền.</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="/privacy" className="hover:underline">Chính Sách Quyền Riêng Tư</a>
            <a href="/terms" className="hover:underline">Điều Khoản Sử Dụng</a>
            <a href="/sales-refunds" className="hover:underline">Bán Hàng và Hoàn Tiền</a>
            <a href="/legal" className="hover:underline">Pháp Lý</a>
            <a href="/sitemap" className="hover:underline">Sơ Đồ Trang Web</a>
          </div>
          <div className="mt-4 md:mt-0">
            <p>Việt Nam</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
