import React from 'react';
import HomePage from '../pages/Home/HomePage';
import Stores from '../pages/Stores';
import Mac from '../pages/Mac';
import Services from '../pages/Services/ServicesPage';
import Ipad from '../pages/Ipad';
import Support from '../pages/Support/SupportPage';
import Iphone from '../pages/Iphone';
import Watch from '../pages/Watch';
import AirPods from '../pages/AirPods';

const publicRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/store',
    element: <Stores />,
  },
  {
    path: '/mac',
    element: <Mac />,
  },
  {
    path: '/ipad',
    element: <Ipad />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/support',
    element: <Support />,
  },
  {
    path: '/iphone',
    element: <Iphone />,
  },
  {
    path: '/watch',
    element: <Watch />,
  },
  {
    path: '/airpods',
    element: <AirPods />,
  }
];

export default publicRoutes; 