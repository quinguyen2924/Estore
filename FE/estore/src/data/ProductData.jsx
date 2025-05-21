export const macData = {
  navItems: [
    {
      label: 'MacBook Pro',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="12" width="28" height="14" rx="2" stroke="#222" strokeWidth="1.5"/>
          <rect x="10" y="28" width="20" height="2" rx="1" fill="#222"/>
          <rect x="12" y="16" width="16" height="2" rx="1" fill="#222"/>
        </svg>
      ),
      link: '/mac/macbook-pro'
    },
    {
      label: 'MacBook Air',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="12" width="28" height="14" rx="2" stroke="#222" strokeWidth="1.5"/>
          <rect x="10" y="28" width="20" height="2" rx="1" fill="#222"/>
          <rect x="12" y="16" width="16" height="2" rx="1" fill="#222"/>
        </svg>
      ),
      link: '/mac/macbook-air'
    },
    { title: 'iMac', link: '/mac/imac' },
    { title: 'Mac mini', link: '/mac/mac-mini' },
    { title: 'Mac Studio', link: '/mac/mac-studio' },
    { title: 'Mac Pro', link: '/mac/mac-pro' },
    { title: 'Displays', link: '/mac/displays' },
  ],
  laptops: [
    {
      name: "MacBook Air 13\" and 15\"",
      chip: "M4 chip",
      desc: "Strikingly thin and fast so you can work, play, or create anywhere.",
      price: "From $999 or $83.25/mo. for 12 mo.**",
      img: "/images/Mac/product_tile_mba_13_15__fx2g3qlubdym_large.png",
      isNew: true,
    },
    {
      name: "MacBook Pro 14\" and 16\"",
      chip: "M3 Pro chip",
      desc: "Mind-blowing. Head-turning.",
      price: "From $1999 or $166.58/mo. for 12 mo.**",
      img: "/images/Mac/product_tile_mbp_14_16__fx2g3qlubdym_large.png",
      isNew: true,
    }
  ],
  featureCards: [
    {
      title: 'MacBook Air',
      description: 'Supercharged by M2',
      image: '/images/macbook-air.jpg',
      link: '/mac/macbook-air'
    },
    {
      title: 'MacBook Pro',
      description: 'Supercharged by M2 Pro and M2 Max',
      image: '/images/macbook-pro.jpg',
      link: '/mac/macbook-pro'
    },
    // Add more feature cards as needed
  ],
  lineupSegments: {
    laptops: [
      {
        name: "MacBook Air 13\" and 15\"",
        chip: "M4 chip",
        desc: "Strikingly thin and fast so you can work, play, or create anywhere.",
        price: "From $999 or $83.25/mo. for 12 mo.**",
        img: "/images/Mac/product_tile_mba_13_15__fx2g3qlubdym_large.png",
        isNew: true
      },
      {
        name: "MacBook Pro 14\" and 16\"",
        chip: "M3 Pro chip",
        desc: "Mind-blowing. Head-turning.",
        price: "From $1999 or $166.58/mo. for 12 mo.**",
        img: "/images/Mac/product_tile_mbp_14_16__fx2g3qlubdym_large.png",
        isNew: true
      }
    ],
    desktops: [
      {
        name: "iMac",
        chip: "M3 chip",
        desc: "The all-in-one for everyone.",
        price: "From $1299 or $108.25/mo. for 12 mo.**",
        img: "/images/Mac/imac.png",
        isNew: false
      },
      {
        name: "Mac mini",
        chip: "M2 chip",
        desc: "Small in size. Big on performance.",
        price: "From $599 or $49.91/mo. for 12 mo.**",
        img: "/images/Mac/mac-mini.png",
        isNew: false
      },
      {
        name: "Mac Studio",
        chip: "M2 Ultra chip",
        desc: "Supercharged by M2 Ultra.",
        price: "From $1999 or $166.58/mo. for 12 mo.**",
        img: "/images/Mac/mac-studio.png",
        isNew: false
      },
      {
        name: "Mac Pro",
        chip: "M2 Ultra chip",
        desc: "Supercharged by M2 Ultra.",
        price: "From $6999 or $583.25/mo. for 12 mo.**",
        img: "/images/Mac/mac-pro.png",
        isNew: false
      }
    ],
    displays: [
      {
        name: "Pro Display XDR",
        chip: "32-inch Retina 6K",
        desc: "The best display ever built.",
        price: "From $4999",
        img: "/images/Mac/pro-display-xdr.png",
        isNew: false
      },
      {
        name: "Studio Display",
        chip: "27-inch 5K",
        desc: "A perfect match for Mac.",
        price: "From $1599",
        img: "/images/Mac/studio-display.png",
        isNew: false
      }
    ]
  },
  essentials: [
    {
      title: 'AppleCare+',
      description: 'Get unlimited repairs for accidental damage protection.',
      image: '/images/applecare.jpg',
      link: '/applecare'
    },
    {
      title: 'Apple Trade In',
      description: 'Trade in your eligible device for credit toward your next purchase.',
      image: '/images/trade-in.jpg',
      link: '/trade-in'
    },
    // Add more essentials as needed
  ],
  significantOthers: [
    {
      title: 'Mac and Apple Watch',
      content: `Unlock your Mac automatically when you're wearing your Apple Watch. Use Apple Pay on your Mac and confirm with your watch. And get notifications and calls from your iPhone right on your Mac and Apple Watch.`,
      image: '/images/Mac/Screenshot 2025-05-19 183153.png',
    },
    {
      title: 'Apple One',
      description: 'Bundle up to six Apple services. And enjoy more for less.',
      image: '/images/apple-one.jpg',
      link: '/apple-one'
    },
    {
      title: 'Apple Music',
      description: 'Over 100 million songs. All ad-free.',
      image: '/images/apple-music.jpg',
      link: '/apple-music'
    },
    // Add more significant others as needed
  ]
};

export const ipadData = {
  navItems: [
    {
      label: 'iPad Pro',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="12" width="28" height="14" rx="2" stroke="#222" strokeWidth="1.5"/>
          <rect x="10" y="28" width="20" height="2" rx="1" fill="#222"/>
          <rect x="12" y="16" width="16" height="2" rx="1" fill="#222"/>
        </svg>
      ),
    },
    {
      label: 'iPad Air',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="12" width="28" height="14" rx="2" stroke="#222" strokeWidth="1.5"/>
          <rect x="10" y="28" width="20" height="2" rx="1" fill="#222"/>
          <rect x="12" y="16" width="16" height="2" rx="1" fill="#222"/>
        </svg>
      ),
    },
    {
      label: 'iPad',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="12" width="28" height="14" rx="2" stroke="#222" strokeWidth="1.5"/>
          <rect x="10" y="28" width="20" height="2" rx="1" fill="#222"/>
          <rect x="12" y="16" width="16" height="2" rx="1" fill="#222"/>
        </svg>
      ),
    },
    {
      label: 'iPad mini',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="12" width="28" height="14" rx="2" stroke="#222" strokeWidth="1.5"/>
          <rect x="10" y="28" width="20" height="2" rx="1" fill="#222"/>
          <rect x="12" y="16" width="16" height="2" rx="1" fill="#222"/>
        </svg>
      ),
    },
    {
      label: 'Apple Pencil',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 5L35 20L20 35L5 20L20 5Z" stroke="#222" strokeWidth="1.5"/>
          <path d="M20 5L35 20" stroke="#222" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      label: 'Keyboards',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="14" width="24" height="12" rx="2" stroke="#222" strokeWidth="1.5"/>
          <rect x="12" y="18" width="4" height="4" rx="1" fill="#222"/>
          <rect x="18" y="18" width="4" height="4" rx="1" fill="#222"/>
          <rect x="24" y="18" width="4" height="4" rx="1" fill="#222"/>
        </svg>
      ),
    }
  ],
  featureCards: [
    {
      title: 'iPad Pro',
      description: 'Supercharged by M2',
      image: '/images/ipad/ipad-pro.jpg',
      link: '/ipad/ipad-pro'
    },
    {
      title: 'iPad Air',
      description: 'Colorful. Powerful. Wonderful.',
      image: '/images/ipad/ipad-air.jpg',
      link: '/ipad/ipad-air'
    },
    {
      title: 'iPad',
      description: 'Lovable. Drawable. Magical.',
      image: '/images/ipad/ipad.jpg',
      link: '/ipad/ipad'
    },
    {
      title: 'iPad mini',
      description: 'Small wonder.',
      image: '/images/ipad/ipad-mini.jpg',
      link: '/ipad/ipad-mini'
    }
  ],
  lineupSegments: {
    laptops: [
      {
        name: "iPad Pro 11\" and 12.9\"",
        chip: "M2 chip",
        desc: "Supercharged by M2",
        price: "From $799 or $66.58/mo. for 12 mo.**",
        img: "/images/ipad/ipad-pro.png",
        isNew: true
      },
      {
        name: "iPad Air",
        chip: "M1 chip",
        desc: "Colorful. Powerful. Wonderful.",
        price: "From $599 or $49.91/mo. for 12 mo.**",
        img: "/images/ipad/ipad-air.png",
        isNew: false
      }
    ],
    desktops: [
      {
        name: "iPad",
        chip: "A14 Bionic chip",
        desc: "Lovable. Drawable. Magical.",
        price: "From $449 or $37.41/mo. for 12 mo.**",
        img: "/images/ipad/ipad.png",
        isNew: false
      },
      {
        name: "iPad mini",
        chip: "A15 Bionic chip",
        desc: "Small wonder.",
        price: "From $499 or $41.58/mo. for 12 mo.**",
        img: "/images/ipad/ipad-mini.png",
        isNew: false
      }
    ],
    displays: [
      {
        name: "Apple Pencil",
        chip: "2nd generation",
        desc: "The perfect companion for iPad.",
        price: "From $129",
        img: "/images/ipad/apple-pencil.png",
        isNew: false
      },
      {
        name: "Magic Keyboard",
        chip: "Trackpad included",
        desc: "A perfect typing experience.",
        price: "From $299",
        img: "/images/ipad/magic-keyboard.png",
        isNew: false
      }
    ]
  },
  significantOthers: [
    {
      title: 'Apple Pencil',
      content: 'The perfect companion for iPad. Draw, sketch, and write with precision and ease.',
      image: '/images/ipad/apple-pencil.png'
    },
    {
      title: 'Magic Keyboard',
      content: 'A perfect typing experience and built-in trackpad.',
      image: '/images/ipad/magic-keyboard.png'
    },
    {
      title: 'Smart Keyboard Folio',
      content: 'A lightweight keyboard that protects your iPad.',
      image: '/images/ipad/smart-keyboard.png'
    }
  ],
  essentials: [
    {
      title: 'AppleCare+',
      content: 'Get unlimited repairs for accidental damage protection.',
      image: '/images/ipad/applecare.jpg'
    },
    {
      title: 'Apple Trade In',
      content: 'Trade in your eligible device for credit toward your next purchase.',
      image: '/images/ipad/trade-in.jpg'
    }
  ]
}; 