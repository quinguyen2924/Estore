"use client"

import { useState } from "react"

// Mock data cho các sản phẩm
const products = [
  { name: "iPhone", icon: "/images/Support/iphone_support.png" },
  { name: "Mac", icon: "/images/Support/mac_support.png" },
  { name: "iPad", icon: "/images/Support/ipad_support.png" },
  { name: "Watch", icon: "/images/Support/watch_support.png" },
  { name: "Vision", icon: "/images/Support/vision_support.png" },
  { name: "AirPods", icon: "/images/Support/airpod_support.png" },
  { name: "TV", icon: "/images/Support/tv_support.png" },
]

const quickLinks = [
  { title: "Forgot Apple Account password", icon: "/images/Support/pass.svg" },
  { title: "Apple Repair", icon: "/images/Support/repair.svg" },
  { title: "Billing and subscriptions", icon: "/images/Support/bling.svg" },
]

const supportPrograms = [
  "iPhone 14 Plus Service Program for Rear Camera Issue",
  "iPhone 12 and iPhone 12 Pro Service Program for No Sound Issues",
  "15-inch MacBook Pro Battery Recall Program",
  "Apple Three-Prong AC Wall Plug Adapter Recall Program",
]

export default function SupportPage() {
  // State cho search (sau này tích hợp API dễ dàng)
  const [search, setSearch] = useState("")

  return (
    <div className="bg-[#f5f5f7] min-h-screen py-0">
      <HeroBanner />
      <div className="max-w-5xl mx-auto px-4">
        <HeroSection />
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <ProductGrid products={products} />
        <QuickLinks links={quickLinks} />
        <SearchSection search={search} setSearch={setSearch} />
        <YouTubeSection />
        <MySupportSection />
        <AppleCareSection />
        <LongevitySection />
        <WarningsSection />
        <SupportProgramsSection />
      </div>
      <div className="w-full">
        <GetSupportSection />
      </div>
    </div>
  )
}

function HeroBanner() {
  return (
    <div className="w-full mb-10 mt-0">
      <img
        src="/images/Support/herro_banner.png"
        alt="Apple Support Hero Banner"
        className="w-full h-[320px] object-cover object-center rounded-3xl shadow-md bg-gray"
        style={{ maxWidth: "100vw", aspectRatio: "3/1" }}
      />
    </div>
  )
}

function HeroSection({}) {
  return (
    <section className="mb-8 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Apple Support</h1>
    </section>
  )
}

function ProductGrid({ products }) {
  return (
    <section className="mb-10">
      <div className="flex flex-row flex-wrap justify-center gap-8 items-end">
        {products.map((product) => (
          <div key={product.name} className="flex flex-col items-center group cursor-pointer min-w-[80px]">
            <img
              src={product.icon || "/placeholder.svg"}
              alt={product.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-gray-800 font-medium text-sm group-hover:text-blue-600 transition text-center">
              {product.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

function QuickLinks({ links }) {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {links.map((link) => (
          <div
            key={link.title}
            className="flex-1 bg-white rounded-2xl shadow p-8 flex flex-col items-center gap-4 hover:shadow-lg transition cursor-pointer min-w-[220px]"
          >
            <img src={link.icon || "/placeholder.svg"} alt={link.title} className="w-8 h-8 object-contain mb-2" />
            <span className="font-medium text-blue-700 text-base text-center">{link.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function SearchSection({ search, setSearch }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Search for more topics</h2>
      <div className="flex justify-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Support"
          className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-lg shadow-sm"
        />
      </div>
    </section>
  )
}

function YouTubeSection() {
  return (
    <section className="mb-8">
      <div className="bg-white rounded-2xl shadow p-8 w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2 text-center">Apple Support on YouTube</h2>
        <p className="text-gray-600 mb-4 text-center">
          Check out our official YouTube channel to get the most out of the latest features, devices, and services.
        </p>
        <img
          src="/images/Support/support_youtube.png"
          alt="Apple Support YouTube"
          className="w-full max-w-lg rounded-xl mb-4"
        />
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Visit Apple Support on YouTube &rarr;
        </a>
      </div>
    </section>
  )
}

function GetSupportSection() {
  return (
    <section className="mb-8 max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-white rounded-2xl shadow p-8 flex-1 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-center">Get Support</h2>
          <p className="text-gray-600 mb-4 text-center">
            Give us a few details and we'll offer the best solution. Connect by phone, chat, email, and more.
          </p>
          <img src="/images/Support/get_support.png" alt="Get Support" className="w-full max-w-xs rounded-xl mb-4" />
          <button className="bg-black text-white px-6 py-2 rounded-full font-medium shadow hover:bg-gray-800 transition">
            Start now
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex-1 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-center">Apple Support app</h2>
          <p className="text-gray-600 mb-4 text-center">
            Get help for all of your Apple products in one place, or connect with an expert.
          </p>
          <img
            src="/images/Support/app_support.png"
            alt="Apple Support App"
            className="w-full max-w-xs rounded-xl mb-4"
          />
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Download &rarr;
            </a>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Get to know the Apple Support app
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function MySupportSection() {
  return (
    <section className="mb-8">
      <div className="bg-white rounded-2xl shadow p-8 w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2 text-center">My Support</h2>
        <p className="text-gray-600 mb-4 text-center">
          Get warranty information, check your coverage status, or look up an existing repair.
        </p>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Sign in with your Apple Account &rarr;
        </a>
      </div>
    </section>
  )
}

function AppleCareSection() {
  return (
    <section className="mb-8">
      <div className="bg-white rounded-2xl shadow p-8 w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2 text-center">AppleCare+</h2>
        <p className="text-gray-600 mb-4 text-center">
          Get unlimited repairs for accidental damage protection, 24/7 priority access to Apple experts, and more.
        </p>
        <img src="/images/Support/apple_care.png" alt="AppleCare+" className="w-full max-w-xs rounded-xl mb-4" />
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Learn more &rarr;
        </a>
      </div>
    </section>
  )
}

function LongevitySection() {
  return (
    <section className="mb-8">
      <div className="bg-white rounded-2xl shadow p-8 w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2 text-center">Designing for longevity</h2>
        <p className="text-gray-600 mb-4 text-center">
          At Apple, we are always working to create the best experience for our customers, which is why we design
          products that last. Designing for longevity is a company-wide effort, informing our earliest decisions long
          before the first prototype is built and guided by historical customer-use data and predictions on future
          usage. It requires striking a balance between durability and repairability while not compromising on safety,
          security, and privacy.
        </p>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View (PDF)
        </a>
      </div>
    </section>
  )
}

function WarningsSection() {
  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-white rounded-2xl shadow p-8 flex-1">
          <h3 className="text-lg font-semibold mb-2">Beware of counterfeit parts</h3>
          <p className="text-gray-600 mb-2">
            Some counterfeit and third party power adapters and batteries may not be designed properly and could result
            in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend
            visiting an Apple Store or Apple Authorized Service Provider. If you need a replacement adapter to charge
            your Apple device, we recommend getting an Apple power adapter.
          </p>
          <p className="text-gray-600 mb-2">
            Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly.
            Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Learn more &rarr;
          </a>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex-1">
          <h3 className="text-lg font-semibold mb-2">Be aware of gift card scams</h3>
          <p className="text-gray-600 mb-2">
            Be aware of scams involving Apple Gift Cards, App Store & iTunes Gift Cards, and Apple Store Gift Cards.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Learn more &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}

function SupportProgramsSection() {
  return (
    <section className="mb-8 text-left">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Apple Service Programs</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            iPhone 14 Plus Service Program for Rear Camera Issue
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            iPhone 12 and iPhone 12 Pro Service Program for No Sound Issues
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            15-inch MacBook Pro Battery Recall Program
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Apple Three-Prong AC Wall Plug Adapter Recall Program
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            See all programs &rarr;
          </a>
        </li>
      </ul>
    </section>
  )
}
