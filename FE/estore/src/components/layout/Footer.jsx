import { useState } from 'react';
import { FaApple } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

function Footer() {
  const [expandedSection, setExpandedSection] = useState(null);
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbMap = {
    "mac": "Mac",
    "ipad": "iPad",
    "iphone": "iPhone",
    "watch": "Watch",
    "vision": "Vision",
    "airpods": "AirPods",
    "tv-home": "TV & Home",
    "airtag": "AirTag",
    "accessories": "Accessories",
    "gift-cards": "Gift Cards",
    // ... thêm các mapping khác nếu cần
  };

  const footerSections = [
    {
      title: 'Shop and Learn',
      links: [
        { name: 'Store', path: '/' },
        { name: 'Mac', path: '/mac' },
        { name: 'iPad', path: '/ipad' },
        { name: 'iPhone', path: '/iphone' },
        { name: 'Watch', path: '/watch' },
        { name: 'Vision', path: '/vision' },
        { name: 'AirPods', path: '/airpods' },
        { name: 'TV & Home', path: '/tv-home' },
        { name: 'AirTag', path: '/airtag' },
        { name: 'Accessories', path: '/accessories' },
        { name: 'Gift Cards', path: '/gift-cards' },
      ]
    },
    {
      title: 'Apple Wallet',
      links: [
        { name: 'Wallet', path: '/wallet' },
        { name: 'Apple Card', path: '/apple-card' },
        { name: 'Apple Pay', path: '/apple-pay' },
        { name: 'Apple Cash', path: '/apple-cash' },
      ]
    },
    {
      title: 'Account',
      links: [
        { name: 'Manage Your Apple Account', path: '/account' },
        { name: 'Apple Store Account', path: '/store-account' },
        { name: 'iCloud.com', path: 'https://www.icloud.com' },
      ]
    },
    {
      title: 'Entertainment',
      links: [
        { name: 'Apple One', path: '/apple-one' },
        { name: 'Apple TV+', path: '/apple-tv-plus' },
        { name: 'Apple Music', path: '/apple-music' },
        { name: 'Apple Arcade', path: '/apple-arcade' },
        { name: 'Apple Fitness+', path: '/apple-fitness-plus' },
        { name: 'Apple News+', path: '/apple-news-plus' },
        { name: 'Apple Podcasts', path: '/apple-podcasts' },
        { name: 'Apple Books', path: '/apple-books' },
        { name: 'App Store', path: '/app-store' },
      ]
    },
    {
      title: 'Apple Store',
      links: [
        { name: 'Find a Store', path: '/find-store' },
        { name: 'Genius Bar', path: '/genius-bar' },
        { name: 'Today at Apple', path: '/today-at-apple' },
        { name: 'Group Reservations', path: '/reservations' },
        { name: 'Apple Camp', path: '/apple-camp' },
        { name: 'Apple Store App', path: '/apple-store-app' },
        { name: 'Certified Refurbished', path: '/refurbished' },
        { name: 'Apple Trade In', path: '/trade-in' },
        { name: 'Financing', path: '/financing' },
        { name: 'Carrier Deals at Apple', path: '/carrier-deals' },
        { name: 'Order Status', path: '/order-status' },
        { name: 'Shopping Help', path: '/shopping-help' },
      ]
    },
    {
      title: 'For Business',
      links: [
        { name: 'Apple and Business', path: '/business' },
        { name: 'Shop for Business', path: '/business-shop' },
      ]
    },
    {
      title: 'For Education',
      links: [
        { name: 'Apple and Education', path: '/education' },
        { name: 'Shop for K-12', path: '/education-k12' },
        { name: 'Shop for College', path: '/education-college' },
      ]
    },
    {
      title: 'For Healthcare',
      links: [
        { name: 'Apple in Healthcare', path: '/healthcare' },
        { name: 'Mac in Healthcare', path: '/healthcare-mac' },
        { name: 'Health on Apple Watch', path: '/healthcare-watch' },
        { name: 'Health Records on iPhone and iPad', path: '/healthcare-records' },
      ]
    },
    {
      title: 'For Government',
      links: [
        { name: 'Shop for Government', path: '/government' },
        { name: 'Shop for Veterans and Military', path: '/government-military' },
      ]
    },
    {
      title: 'Apple Values',
      links: [
        { name: 'Accessibility', path: '/accessibility' },
        { name: 'Education', path: '/education-initiative' },
        { name: 'Environment', path: '/environment' },
        { name: 'Inclusion and Diversity', path: '/diversity' },
        { name: 'Privacy', path: '/privacy' },
        { name: 'Racial Equity and Justice', path: '/racial-equity-justice' },
        { name: 'Supply Chain', path: '/supplier-responsibility' },
      ]
    },
    {
      title: 'About Apple',
      links: [
        { name: 'Newsroom', path: '/newsroom' },
        { name: 'Apple Leadership', path: '/leadership' },
        { name: 'Career Opportunities', path: '/careers' },
        { name: 'Investors', path: '/investors' },
        { name: 'Ethics & Compliance', path: '/ethics' },
        { name: 'Events', path: '/events' },
        { name: 'Contact Apple', path: '/contact' },
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
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-[#6e6e73] text-sm">
          <FaApple className="text-xl" />
          
          {pathnames.length > 0 && (
            <>
              {pathnames.map((value, idx) => {
                const to = `/${pathnames.slice(0, idx + 1).join('/')}`;
                return (
                  <span key={to} className="flex items-center">
                    <span className="mx-2">{'>'}</span>
                    {idx === pathnames.length - 1 ? (
                      <span className="text-[#1d1d1f] font-semibold">
                        {breadcrumbMap[value] || value.charAt(0).toUpperCase() + value.slice(1)}
                      </span>
                    ) : (
                      <Link to={to} className="hover:underline">
                        {breadcrumbMap[value] || value.charAt(0).toUpperCase() + value.slice(1)}
                      </Link>
                    )}
                  </span>
                );
              })}
            </>
          )}
        </div>
        {/* Desktop Footer Navigation */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 text-left">
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{section.title}</h3>
              <ul className="space-y-2 w-full text-left">
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
                className="w-full py-3 flex justify-between items-center text-[#1d1d1f] font-semibold text-left"
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
                    <li key={link.name} className="text-left">
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
            More ways to shop: <a href="/find-store" className="text-[#0066cc] hover:underline">Find an Apple Store</a> or <a href="/other-retailer" className="text-[#0066cc] hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE (1-800-692-7753).
          </p>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-5 flex flex-col md:flex-row md:justify-between text-xs">
          <div className="mb-4 md:mb-0">
            <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Use</a>
            <a href="/sales-refunds" className="hover:underline">Sales and Refunds</a>
            <a href="/legal" className="hover:underline">Legal</a>
            <a href="/sitemap" className="hover:underline">Site Map</a>
          </div>
          <div className="mt-4 md:mt-0">
            <p>United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
