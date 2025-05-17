import { useState } from 'react';
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { HiMiniBars2 } from "react-icons/hi2";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { name: 'Cửa Hàng', path: '/' },
    { name: 'Mac', path: '/mac' },
    { name: 'iPad', path: '/ipad' },
    { name: 'iPhone', path: '/iphone' },
    { name: 'Watch', path: '/watch' },
    { name: 'AirPods', path: '/airpods' },
    { name: 'TV & Nhà', path: '/tv-home' },
    { name: 'Giải Trí', path: '/entertainment' },
    { name: 'Phụ Kiện', path: '/accessories' },
    { name: 'Hỗ Trợ', path: '/support' },
  ];

  // Dropdown content for "Cửa Hàng" menu item
  const storeDropdownContent = {
    columns: [
      {
        title: 'Mua Hàng',
        links: [
          { name: 'Mua Sản Phẩm Mới Nhất', path: '/new' },
          { name: 'Mac', path: '/mac' },
          { name: 'iPad', path: '/ipad' },
          { name: 'iPhone', path: '/iphone' },
          { name: 'Apple Watch', path: '/watch' },
          { name: 'Phụ Kiện', path: '/accessories' },
        ]
      },
      {
        title: 'Liên Kết Nhanh',
        links: [
          { name: 'Tình Trạng Đơn Hàng', path: '/orders' },
          { name: 'Apple Trade In', path: '/trade-in' },
          { name: 'Tài Chính', path: '/finance' },
        ]
      },
      {
        title: 'Mua Tại Cửa Hàng Đặc Biệt',
        links: [
          { name: 'Giáo Dục', path: '/education' },
          { name: 'Doanh Nghiệp', path: '/business' },
        ]
      }
    ]
  };

  return (
    <header className="bg-[#FFFFFF] text-black fixed top-0 left-0 right-0 z-40 shadow-sm">
      {/* Desktop Navigation */}
      <nav className="max-w-5xl mx-auto h-11 hidden md:flex items-center">
        <div className="w-full flex items-center justify-center">
          <ul className="flex items-center justify-between w-full text-xs font-normal">
            <li className="px-2">
              <a href="/" className="flex items-center">
                <FaApple className="h-[18px] w-[18px]" />
              </a>
            </li>
            
            {menuItems.map((item, index) => (
              <li key={item.name} className={`px-2 relative group ${index === 0 ? 'has-dropdown' : ''}`}>
                <a href={item.path} className="hover:text-black/70 transition-colors py-3">
                  {item.name}
                </a>
                
                {/* Dropdown menu for "Cửa Hàng" */}
                {index === 0 && (
                  <div className="fixed left-0 right-0 top-[44px] w-full bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="container mx-auto">
                      <div className="flex justify-center py-8">
                        <div className="grid grid-cols-3 gap-16 w-full max-w-5xl">
                          <div className="flex flex-col items-center">
                            <h3 className="text-sm font-medium mb-4 text-gray-600">Mua Hàng</h3>
                            <ul className="space-y-3 text-center">
                              {storeDropdownContent.columns[0].links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a href={link.path} className="text-sm hover:text-blue-500 transition-colors">
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-col items-center">
                            <h3 className="text-sm font-medium mb-4 text-gray-600">Liên Kết Nhanh</h3>
                            <ul className="space-y-3 text-center">
                              {storeDropdownContent.columns[1].links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a href={link.path} className="text-sm hover:text-blue-500 transition-colors">
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-col items-center">
                            <h3 className="text-sm font-medium mb-4 text-gray-600">Mua Tại Cửa Hàng Đặc Biệt</h3>
                            <ul className="space-y-3 text-center">
                              {storeDropdownContent.columns[2].links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a href={link.path} className="text-sm hover:text-blue-500 transition-colors">
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
            
            <li className="px-2">
              <a href="/search" className="flex items-center">
                <IoIosSearch className="h-[18px] w-[18px]" />
              </a>
            </li>
            
            <li className="px-2">
              <a href="/cart" className="flex items-center">
                <BiShoppingBag className="h-[18px] w-[18px]" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <FaApple className="h-6 w-6" />
        </a>
        
        <div className="flex items-center space-x-5">
          <a href="/search" className="text-black">
            <IoIosSearch className="h-6 w-6" />
          </a>
          <a href="/cart" className="text-black">
            <BiShoppingBag className="h-6 w-6" />
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
          >
            <HiMiniBars2 className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-50 overflow-y-auto pt-16">
          <div className="p-4 flex justify-between absolute top-0 left-0 right-0 bg-white">
            <a href="/" className="text-black">
              <FaApple className="h-6 w-6" />
            </a>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-black"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="px-4 pt-2 pb-8">
            {menuItems.map((item) => (
              <li key={item.name} className="py-3 border-b border-gray-200">
                <a href={item.path} className="text-black text-lg flex justify-between items-center">
                  {item.name}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
