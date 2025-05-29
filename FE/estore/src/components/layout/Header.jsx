import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { HiMiniBars2 } from "react-icons/hi2";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  
  const menuItems = [
    { name: 'Store', path: '/store' },
    { name: 'Mac', path: '/mac' },
    { name: 'iPad', path: '/ipad' },
    { name: 'iPhone', path: '/iphone' },
    { name: 'Watch', path: '/watch' },
    { name: 'Vision', path: '/vision' },
    { name: 'AirPods', path: '/airpods' },
    { name: 'TV & Home', path: '/tv-home' },
    { name: 'Entertainment', path: '/services' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Support', path: '/support' },
  ];

  // Dropdown content cho tất cả các mục chính
  const dropdownContents = {
    Store: {
      columns: [
        {
          title: 'Shop',
          links: [
            { name: 'Shop the Latest', path: '/new' },
            { name: 'Mac', path: '/mac' },
            { name: 'iPad', path: '/ipad' },
            { name: 'iPhone', path: '/iphone' },
            { name: 'Apple Watch', path: '/watch' },
            { name: 'Apple Vision Pro', path: '/vision-pro' },
            { name: 'Accessories', path: '/accessories' },
          ]
        },
        {
          title: 'Quick Links',
          links: [
            { name: 'Find a Store', path: '/find-store' },
            { name: 'Order Status', path: '/orders' },
            { name: 'Apple Trade In', path: '/trade-in' },
            { name: 'Financing', path: '/finance' },
            { name: 'Personal Setup', path: '/personal-setup' },
          ]
        },
        {
          title: 'Shop Special Stores',
          links: [
            { name: 'Certified Refurbished', path: '/certified-refurbished' },
            { name: 'Education', path: '/education' },
            { name: 'Business', path: '/business' },
            { name: 'Veterans and Military', path: '/veterans-military' },
            { name: 'Government', path: '/government' },
          ]
        }
      ]
    },
    Mac: {
      columns: [
        {
          title: 'Explore Mac',
          links: [
            { name: 'Explore All Mac', path: '/mac' },
            { name: 'MacBook Air', path: '/macbook-air' },
            { name: 'MacBook Pro', path: '/macbook-pro' },
            { name: 'iMac', path: '/imac' },
            { name: 'Mac mini', path: '/mac-mini' },
            { name: 'Mac Studio', path: '/mac-studio' },
            { name: 'Mac Pro', path: '/mac-pro' },
            { name: 'Displays', path: '/displays' },
            { name: 'Compare Mac', path: '/compare-mac' },
            { name: 'Switch to Mac', path: '/switch-to-mac' },
          ]
        },
        {
          title: 'Shop Mac',
          links: [
            { name: 'Shop Mac', path: '/mac' },
            { name: 'Help me choose', path: '/help-me-choose' },
            { name: 'Mac Accessories', path: '/mac-accessories' },
            { name: 'Apple Trade In', path: '/trade-in' },
            { name: 'Financing', path: '/finance' },
          ]
        },
        {
          title: 'More from Mac',
          links: [
            { name: 'Mac Support', path: '/support/mac' },
            { name: 'AppleCare+ for Mac', path: '/applecare-mac' },
            { name: 'macOS Sequoia', path: '/macos-sequoia' },
            { name: 'Apple Intelligence', path: '/apple-intelligence' },
            { name: 'Apps by Apple', path: '/apps-by-apple' },
            { name: 'Continuity', path: '/continuity' },
            { name: 'iCloud+', path: '/icloud-plus' },
            { name: 'Mac for Business', path: '/business' },
            { name: 'Education', path: '/education' },
          ]
        }
      ]
    },
    iPad: {
      columns: [
        {
          title: 'Explore iPad',
          links: [
            { name: 'Explore All iPad', path: '/ipad' },
            { name: 'iPad Pro', path: '/ipad-pro' },
            { name: 'iPad Air', path: '/ipad-air' },
            { name: 'iPad', path: '/ipad' },
            { name: 'iPad mini', path: '/ipad-mini' },
            { name: 'Apple Pencil', path: '/apple-pencil' },
            { name: 'Keyboards', path: '/keyboards' },
            { name: 'Compare iPad', path: '/compare-ipad' },
            { name: 'Why iPad', path: '/why-ipad' },
          ]
        },
        {
          title: 'Shop iPad',
          links: [
            { name: 'Shop iPad', path: '/ipad' },
            { name: 'iPad Accessories', path: '/ipad-accessories' },
            { name: 'Apple Trade In', path: '/trade-in' },
            { name: 'Financing', path: '/finance' },
          ]
        },
        {
          title: 'More from iPad',
          links: [
            { name: 'iPad Support', path: '/support/ipad' },
            { name: 'AppleCare+ for iPad', path: '/applecare-ipad' },
            { name: 'iPadOS 18', path: '/ipados-18' },
            { name: 'Apple inteligence', path: '/apple-inteligence' },
            { name: 'Apps by Apple', path: '/apps-by-apple' },
            { name: 'iCloud+', path: '/icloud-plus' },
            { name: 'Education', path: '/education' },
          ]
        }
      ]
    },
    iPhone: {
      columns: [
        {
          title: 'Explore iPhone',
          links: [
            { name: 'Explore All iPhone', path: '/iphone' },
            { name: 'iPhone 16 Pro', path: '/iphone-16-pro' },
            { name: 'iPhone 16', path: '/iphone-16' },
            { name: 'iPhone 16e', path: '/iphone-16e' },
            { name: 'iPhone 15', path: '/iphone-15' },
            { name: 'Compare iPhone', path: '/compare-iphone' },
            { name: 'Switch from Android', path: '/switch-from-android' },
          ]
        },
        {
          title: 'Shop iPhone',
          links: [
            { name: 'Shop iPhone', path: '/iphone' },
            { name: 'iPhone Accessories', path: '/iphone-accessories' },
            { name: 'Apple Trade In', path: '/trade-in' },
            { name: 'Carrier Deals at Apple', path: '/carrier-deals' },
            { name: 'Financing', path: '/finance' },
          ]
        },
        {
          title: 'More from iPhone',
          links: [
            { name: 'iPhone Support', path: '/support/iphone' },
            { name: 'AppleCare+ for iPhone', path: '/applecare-iphone' },
            { name: 'iOS 18', path: '/ios-18' },
            { name: 'Apple inteligence', path: '/apple-inteligence' },
            { name: 'Apps by Apple', path: '/apps-by-apple' },
            { name: 'iPhone Privacy', path: '/iphone-privacy' },
            { name: 'iCloud+', path: '/icloud-plus' },
            { name: 'Wallet, Pay, Card', path: '/wallet' },
            { name: 'Siri', path: '/siri' },
          ]
        }
      ]
    },
    Watch: {
      columns: [
        {
          title: 'Explore Watch',
          links: [
            { name: 'Explore All Apple Watch', path: '/watch' },
            { name: 'Apple Watch Series 10', path: '/watch-series-10' },
            { name: 'Apple Watch Ultra 2', path: '/watch-ultra-2' },
            { name: 'Apple Watch SE', path: '/watch-se' },    
            { name: 'Apple Watch Nike', path: '/watch-nike' },
            { name: 'Apple Watch Hermes', path: '/watch-hermes' },
            { name: 'Compare Watch', path: '/compare-watch' },
            { name: 'Why Apple Watch', path: '/why-apple-watch' },
          ]
        },
        {
          title: 'Shop Watch',
          links: [
            { name: 'Shop Apple Watch', path: '/watch' },
            { name: 'Apple Watch Studio', path: '/watch-studio' },
            { name: 'Apple Watch Bands', path: '/watch-bands' },
            { name: 'Apple Watch Accessories', path: '/watch-accessories' },
            { name: 'Apple Trade In', path: '/trade-in' },
            { name: 'Financing', path: '/finance' },
          ]
        },
        {
          title: 'More from Watch',
          links: [
            { name: 'Apple Watch Support', path: '/support/watch' },
            { name: 'AppleCare+', path: '/applecare-watch' },
            { name: 'watchOS 11', path: '/watchos-11' },
            { name: 'Apple Watch for your Kids', path: '/watch-for-kids' },
            { name: 'Apps by Apple', path: '/apps-by-apple' },
            { name: 'Apple Fitness+', path: '/fitness-plus' },
          ]
        }
      ]
    },
    Vision: {
      columns: [
        {
          title: 'Explore Vision',
          links: [
            { name: 'Explore Apple Vision Pro', path: '/vision-pro' },
            { name: 'Guided Tour', path: '/guided-tour' },
            { name: 'Tech Specs', path: '/tech-specs' },
          ]
        },
        {
          title: 'Shop Vision',
          links: [
            { name: 'Shop Apple Vision Pro', path: '/vision-pro' },
            { name: 'Apple Vision Pro Accessories', path: '/vision-pro-accessories' },
            { name: 'Book a Demo', path: '/book-a-demo' },
            { name: 'Financing', path: '/finance' },
          ]
        },
        {
          title: 'More from Vision',
          links: [ 
            { name: 'Apple Vision Pro Support', path: '/support/vision-pro' },
            { name: 'AppleCare+', path: '/applecare-vision-pro' },
            { name: 'visionOS 2', path: '/visionos-2' },

          ] 
        }
      ] 
    },
    AirPods: {
      columns: [
        {
          title: 'Explore AirPods',
          links: [
            { name: 'Explore All AirPods', path: '/airpods' },
            { name: 'AirPods 4', path: '/airpods-4' },
            { name: 'AirPods Pro 2', path: '/airpods-pro-2' },
            { name: 'AirPods Max', path: '/airpods-max' },
            { name: 'Compare AirPods', path: '/compare-airpods' },
          ]
        },
        {
          title: 'Shop AirPods',
          links: [
            { name: 'Shop AirPods', path: '/airpods' },
            { name: 'AirPods Accessories', path: '/airpods-accessories' },
          ]
        },
        {
          title: 'More from AirPods',
          links: [
            { name: 'AirPods Support', path: '/support/airpods' },
            { name: 'AppleCare+ for Headphones', path: '/applecare-headphones' },
            { name: 'Hearing Health', path: '/hearing-health' },
            { name: 'Apple Music', path: '/music' },
          ]
        }
      ]
    },
    'TV & Home': {
      columns: [
        {
          title: 'Explore TV & Home',
          links: [
            { name: 'Explore TV & Home', path: '/tv-home' },
            { name: 'Apple TV 4K', path: '/apple-tv-4k' },
            { name: 'HomePod', path: '/homepod' },
            { name: 'HomePod mini', path: '/homepod-mini' },
          ]
        },
        {
          title: 'Shop TV & Home',
          links: [
            { name: 'Shop Apple TV 4K', path: '/apple-tv-4k' },
            { name: 'Shop HomePod', path: '/homepod' },
            { name: 'Shop HomePod mini', path: '/homepod-mini' },
            { name: 'Shop Siri Remote', path: '/siri-remote' },
            { name: 'TV & Home Accessories', path: '/tv-home-accessories' },
          ]
        },
        {
          title: 'More from TV & Home',
          links: [
            { name: 'Apple TV Support', path: '/support/apple-tv' },
            { name: 'HomePod Support', path: '/support/homepod' },
            { name: 'AppleCare+', path: '/applecare' },
            { name: 'Apple TV App', path: '/tv-app' },
            { name: 'Apple TV+', path: '/tv-plus' },
            { name: 'Home App', path: '/home-app' },
            { name: 'Apple Music', path: '/music' },
            { name: 'Siri', path: '/siri' },
            { name: 'AirPlay', path: '/airplay' },
          ]
        }
      ]
    },
    Entertainment: {
      columns: [
        {
          title: 'Explore Entertainment',
          links: [
            { name: 'Explore Entertainment', path: '/entertainment' },
            { name: 'Apple One', path: '/apple-one' },
            { name: 'Apple TV+', path: '/tv-plus' },
            { name: 'Apple Music', path: '/music' },
            { name: 'Apple Arcade', path: '/arcade' },
            { name: 'Apple Fitness+', path: '/fitness-plus' },
            { name: 'Apple News+', path: '/news-plus' },
            { name: 'Apple Podcasts', path: '/podcasts' },
            { name: 'Apple Books', path: '/books' },
            { name: 'App Store', path: '/app-store' },
          ]
        },
        {
          title: 'Support',
          links: [
            { name: 'Apple TV+ Support', path: '/support/tv-plus' },
            { name: 'Apple Music Support', path: '/support/music' },
            
          ]
        }
      ]
    },
    Accessories: {
      columns: [
        {
          title: 'Shop Accessories',
          links: [
            { name: 'Shop All Accessories', path: '/accessories' },
            { name: 'Mac', path: '/mac-accessories' },
            { name: 'iPad', path: '/ipad-accessories' },
            { name: 'iPhone', path: '/iphone-accessories' },
            { name: 'Apple Watch', path: '/watch-accessories' },
            { name: 'Apple Vision Pro', path: '/vision-pro-accessories' },
            { name: 'AirPods', path: '/airpods-accessories' },
            { name: 'TV & Home', path: '/tv-home-accessories' },
          ]
        },
        {
          title: 'Explore Accessories',
          links: [
            { name: 'Made by Apple', path: '/made-by-apple' },
            { name: 'Beats by Dr. Dre', path: '/beats' },
            { name: 'AirTag', path: '/airtag' },
            { name: 'Assistive Technologies', path: '/assistive-technologies' },
          ]
        }
      ]
    },
    Support: {
      columns: [
        {
          title: 'Explore Support',
          links: [
            { name: 'iPhone', path: '/support/iphone' },
            { name: 'Mac', path: '/support/mac' },
            { name: 'iPad', path: '/support/ipad' },
            { name: 'Watch', path: '/support/watch' },
            { name: 'Apple Vision Pro', path: '/support/vision-pro' },
            { name: 'AirPods', path: '/support/airpods' },
            { name: 'Music', path: '/support/music' },
            { name: 'TV', path: '/support/tv' },
          ]
        },
        {
          title: 'Get Help',
          links: [
            { name: 'Community', path: '/community' },
            { name: 'Check Coverage', path: '/coverage' },
            { name: 'Repair', path: '/repair' },
            
          ]
        },
        {
          title: 'Helpful Topics',
          links: [
            { name: 'Get AppleCare+', path: '/applecare' },
            { name: 'Apple Account & Password', path: '/apple-id' },
            { name: 'Billing & Subscriptions', path: '/billing' },
            { name: 'Accessibility', path: '/accessibility' },
          ]
        }
      ]
    },
  };

  useEffect(() => {
    if (!isMenuOpen && mobileSubMenu) {
      const timer = setTimeout(() => {
        setMobileSubMenu(null);
      }, 300); // Thời gian khớp với transition
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen, mobileSubMenu]);

  // Đóng menu mobile khi resize về desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setMobileSubMenu(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-[#FFFFFF] text-black fixed top-0 left-0 right-0 z-40 shadow-sm">
      {/* Desktop & Mobile Bar chỉ hiển thị khi chưa mở menu mobile */}
      {!isMenuOpen && (
        <>
          {/* Desktop Navigation */}
          <nav className="max-w-5xl mx-auto h-11 hidden md:flex items-center">
            <div className="w-full flex items-center justify-center">
              <ul className="flex items-center justify-between w-full text-xs font-normal">
                <li className="px-2">
                  <Link to="/" className="flex items-center">
                    <FaApple className="h-[18px] w-[18px]" />
                  </Link>
                </li>
                
                {menuItems.map((item, index) => (
                  <li key={item.name} className={`px-2 relative group ${dropdownContents[item.name] ? 'has-dropdown' : ''}`}>
                    <Link to={item.path} className="hover:text-black/70 transition-colors py-3">
                      {item.name}
                    </Link>
                    {/* Dropdown menu cho từng mục nếu có */}
                    {dropdownContents[item.name] && (
                      <div className="fixed left-0 right-0 top-[44px] w-full bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="container mx-auto">
                          <div className="flex justify-center py-8">
                            {/* Changed from grid to flexbox to arrange category columns horizontally */}
                            <div className="flex flex-row justify-center gap-16 w-full max-w-5xl">
                              {dropdownContents[item.name].columns.map((col, colIdx) => (
                                // Each 'col' is a vertical column for a category
                                <div className="flex flex-col items-start min-w-[220px]" key={colIdx}>
                                  <h3 className="text-sm font-medium mb-4 text-gray-600">{col.title}</h3>
                                  <ul className="space-y-3 text-left">
                                    {col.links.map((link, linkIndex) => (
                                      <li key={linkIndex}>
                                        <Link to={link.path} className="text-sm hover:text-blue-500 transition-colors">
                                          {link.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
                
                <li className="px-2">
                  <Link to="/search" className="flex items-center">
                    <IoIosSearch className="h-[18px] w-[18px]" />
                  </Link>
                </li>
                
                <li className="px-2">
                  <Link to="/cart" className="flex items-center">
                    <BiShoppingBag className="h-[18px] w-[18px]" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* Mobile Navigation Bar */}
          <div className="md:hidden px-4 py-3 flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <FaApple className="h-6 w-6" />
            </Link>
            
            <div className="flex items-center space-x-5">
              <Link to="/search" className="text-black">
                <IoIosSearch className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="text-black">
                <BiShoppingBag className="h-6 w-6" />
              </Link>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black"
              >
                <HiMiniBars2 className="h-6 w-6" />
              </button>
            </div>
          </div>
        </>
      )}
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          {/* Nút X luôn trên cùng, không bị đè */}
          <div className="absolute top-0 right-0 z-[9999] p-4 bg-white">
            <button 
              onClick={() => { setIsMenuOpen(false); setMobileSubMenu(null); }}
              className="text-black"
              aria-label="Đóng menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full h-full transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            style={{ willChange: 'transform' }}
          >
            {/* Nếu đang ở menu chính */}
            {!mobileSubMenu && (
              <>
                <ul className="px-4 pt-16 pb-8">
                  {menuItems.map((item) => (
                    <li key={item.name} className="py-3 border-b border-gray-200 group">
                      <div className="flex justify-between items-center pl-0">
                        <Link to={item.path} className="text-black text-xl flex-1 text-left leading-relaxed" onClick={() => { setIsMenuOpen(false); setMobileSubMenu(null); }}>
                          {item.name}
                        </Link>
                        {dropdownContents[item.name] ? (
                          <button
                            className="ml-2 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => setMobileSubMenu(item.name)}
                            aria-label="Open submenu"
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {/* Nếu đang ở submenu */}
            {mobileSubMenu && (
              <>
                <div className="p-4 flex absolute top-0 left-0 right-0 bg-white items-center z-[9998]">
                  <button
                    onClick={() => setMobileSubMenu(null)}
                    className="text-black flex items-center mr-auto"
                    aria-label="Back to main menu"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                <div className="px-4 pt-16 pb-8">
                  {dropdownContents[mobileSubMenu] && (
                    <>
                      {dropdownContents[mobileSubMenu].columns.length === 3 ? (
                        <>
                          {/* Cột lớn đầu tiên */}
                          <div className="mb-8">
                            <div className="text-gray-600 text-lg font-medium mb-2 text-left leading-relaxed">{dropdownContents[mobileSubMenu].columns[0].title}</div>
                            <ul className="space-y-2">
                              {dropdownContents[mobileSubMenu].columns[0].links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <Link to={link.path} className="text-black text-xl font-semibold hover:text-blue-500 transition-colors block py-1 text-left leading-relaxed" onClick={() => { setIsMenuOpen(false); setMobileSubMenu(null); }}>
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* 2 cột nhỏ */}
                          <div className="flex flex-row gap-8">
                            {dropdownContents[mobileSubMenu].columns.slice(1).map((col, colIdx) => (
                              <div key={colIdx} className="flex-1">
                                <div className="text-gray-600 text-base font-medium mb-2 text-left leading-relaxed">{col.title}</div>
                                <ul className="space-y-2">
                                  {col.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                      <Link to={link.path} className="text-black text-base hover:text-blue-500 transition-colors block py-1 text-left leading-relaxed" onClick={() => { setIsMenuOpen(false); setMobileSubMenu(null); }}>
                                        {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col gap-6">
                          {dropdownContents[mobileSubMenu].columns.map((col, colIdx) => (
                            <div key={colIdx}>
                              <div className="text-gray-600 text-lg font-medium mb-2 text-left leading-relaxed">{col.title}</div>
                              <ul className="space-y-2">
                                {col.links.map((link, linkIdx) => (
                                  <li key={linkIdx}>
                                    <Link to={link.path} className="text-black text-lg md:text-base hover:text-blue-500 transition-colors block py-1 text-left leading-relaxed" onClick={() => { setIsMenuOpen(false); setMobileSubMenu(null); }}>
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
