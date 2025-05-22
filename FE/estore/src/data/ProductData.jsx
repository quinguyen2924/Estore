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
      title: 'Apple Intelligence and macOS',
      description: 'Easy to use. Easy to love.',
      image: '/images/Mac/mac_intelligence_siri__do2ke43yic02_xlarge.jpg',
      link: '/mac/macbook-air'
    },
    {
      title2: 'Performance and Battery Life',
      description2: 'Go fast. Go far.',
      image: '/images/Mac/mac_performance__dh5hyac1zf8m_xlarge.jpg',
      link: '/mac/macbook-pro'
    },
    {
      title: 'Mac and iPhone',
      description: 'Dream team.',
      image: '/images/Mac/mac_iphone__gh1tblkt6bqm_xlarge.jpg',
      link: '/mac/macbook-pro'
    },
    {
      title: 'Compatibility',
      description: 'Mac runs your favorite apps..',
      image: '/images/Mac/mac_compatibility__cu59oukz81ci_xlarge.jpg',
      link: '/mac/macbook-pro'
    },
    {
      title: 'Privacy and Security',
      description: 'Your business is nobody else’s..',
      image: '/images/Mac/mac_security__gfwda10khdym_xlarge.jpg',
      link: '/mac/macbook-pro'
    },
    {
      title: 'Durability',
      description: 'Built to stand the test of time.',
      image: '/images/Mac/mac_durability__epiwcuk7zkeq_xlarge.jpg',
      link: '/mac/macbook-pro'
    },
    {
      title: 'Apple Values',
      description: 'Our values drive everything we do.',
      image: '/images/Mac/mac_values__c9gck9qi4kia_xlarge.jpg',
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
        img: "/images/Mac/product_tile_mbp_14_16__bkl8zusnkpw2_large.png",
        isNew: true
      }
    ],
    desktops: [
      {
        name: "iMac",
        chip: "M4 chip",
        desc: "A stunning all-in-one desktop for creativity and productivity.",
        price: "From $1299 or $108.25/mo. for 12 mo.**",
        img: "/images/Mac/product_tile_imac_24__inq0od011wuq_large.png",
        isNew: false
      },
      {
        name: "Mac mini",
        chip: "M4 or M4 Pro chip",
        desc: "The mini-est, most affordable Mac with mighty performance.",
        price: "From $599 or $49.91/mo. for 12 mo.**",
        img: "/images/Mac/product_tile_mac_mini__c4284n3j25w2_large.png",
        isNew: false
      },
      {
        name: "Mac Studio",
        chip: "M4 Max or M3 Ultra chip",
        desc: "Powerful performance and extensive connectivity for pro workflows.",
        price: "From $1999 or $166.58/mo. for 12 mo.**",
        img: "/images/Mac/product_tile_mac_studio__c24lhkuq4vee_large.png",
        isNew: true
      },
      {
        name: "Mac Pro",
        chip: "M2 Ultra chip",
        desc: "A pro workstation with PCIe expansion for demanding workflows.",
        price: "From $6999 or $583.25/mo. for 12 mo.**",
        img: "/images/Mac/product_tile_mac_pro__6q3qt8073f6e_large.png",
        isNew: false
      }
    ],
    displays: [
      {
        name: "Pro Display XDR",
        chip: "",
        desc: "From $4999 or $416.58/mo. for 12 mo.**",
        price: "From $4999 or $416.58/mo. for 12 mo.**",
        img: "/images/Mac/product_tile_pro_display__duklzyfwl92e_large.png",
        isNew: false
      },
      {
        name: "Studio Display",
        chip: "",
        desc: "A 5K Retina display with stellar camera and audio.",
        price: "From $1599 or $133.25/mo. for 12 mo.**",
        img: "/images/Mac/product_tile_studio_display__c0gbtkgtsx0m_large.png",
        isNew: false
      }
    ]
  },
  essentials: [
    {
      title: 'Mac accessories',
      description: 'Explore keyboards, mice, and other essentials.',
      image: '/images/Mac/essentials_accessories__dglhsic54owi_xlarge.jpg',
      link: '/applecare'
    },
    {
      title: 'Studio Display',
      description: 'The 27-inch 5K Retina display pairs beautifully with any Mac.',
      image: '/images/Mac/essentials_display__bk3i351qm0c2_xlarge.jpg',
      link: '/trade-in'
    },
    // Add more essentials as needed
  ],
  significantOthers: [
    {
      title: 'Mac and IPhone',
      content: `Answer calls or messages from your iPhone directly on your Mac. See and control what’s on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.`,
      image: '/images/Mac/Screenshot 2025-05-19 182900.png',
    },
    {
      title: 'Mac and iPad',
      content: 'Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start a Final Cut Pro project on your iPad and continue it on your Mac.',
      image: '/images/Mac/Screenshot 2025-05-19 183121.png',
      link: '/apple-one'
    },
    {
      title: 'Mac and Apple Watch',
      content: 'Automatically log in to your Mac when you’re wearing your Apple Watch with Auto Unlock. No password typing required.',
      image: '/images/Mac/Screenshot 2025-05-19 183153.png',
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
  lineupSegments: [
    {
      name: "iPad Pro 11\" and 12.9\"",
      chip: "M2 chip",
      desc: "Supercharged by M2",
      price: "From $799 or $66.58/mo. for 12 mo.**",
      img: "/images/ipad/ipad-pro.png",
      isNew: true,
    },
    {
      name: "iPad Air",
      chip: "M1 chip",
      desc: "Colorful. Powerful. Wonderful.",
      price: "From $599 or $49.91/mo. for 12 mo.**",
      img: "/images/ipad/ipad-air.png",
      isNew: false,
    },
    {
      name: "iPad",
      chip: "A14 Bionic chip",
      desc: "Lovable. Drawable. Magical.",
      price: "From $449 or $37.41/mo. for 12 mo.**",
      img: "/images/ipad/ipad.png",
      isNew: false,
    },
    {
      name: "iPad mini",
      chip: "A15 Bionic chip",
      desc: "Small wonder.",
      price: "From $499 or $41.58/mo. for 12 mo.**",
      img: "/images/ipad/ipad-mini.png",
      isNew: false,
    },
    {
      name: "Apple Pencil",
      chip: "2nd generation",
      desc: "The perfect companion for iPad.",
      price: "From $129",
      img: "/images/ipad/apple-pencil.png",
      isNew: false,
    },
    {
      name: "Magic Keyboard",
      chip: "Trackpad included",
      desc: "A perfect typing experience.",
      price: "From $299",
      img: "/images/ipad/magic-keyboard.png",
      isNew: false,
    },
  ],
  featureCards: [
    {
      title2: 'Apple Intelligence',
      description2: 'Personal, private, powerful.',
      image: '/images/Ipad/fc_apple_intelligence_9c3df7e24.jpg',
      link: '/ipad/ipad-pro'
    },
    {
      title2: 'Productivity',
      description2: 'Your workplace can be any place.',
      image: '/images/Ipad/fc_productivity_1bc824ba6.jpg',
      link: '/ipad/ipad-air'
    },
    {
      title2: 'Creativity',
      description2: 'Take your inner artist out and about..',
      image: '/images/Ipad/fc_creativity_4a558f6f4.jpg',
      link: '/ipad/ipad'
    },
    {
      title2: 'Learning',
      description2: 'Your classroom can be anywhere.',
      image: '/images/Ipad/fc_learning_bc8125962.jpg',
      link: '/ipad/ipad-mini'
    },
    {
      title2: 'Entertainment',
      description2: 'Kick back. Tune in. Game on.',
      image: '/images/Ipad/fc_entertainment_4a87c0f53.jpg',
      link: '/ipad/ipad-mini'
    }
  ],

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