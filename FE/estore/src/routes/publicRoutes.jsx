import HomePage from '../pages/Home/HomePage';
import Stores from '../pages/Stores';
import Mac from '../pages/Mac';
import Services from '../pages/Services/ServicesPage';

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
    path: '/services',
    element: <Services />,
  },
];

export default publicRoutes; 