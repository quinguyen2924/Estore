import HomePage from '../pages/Home/HomePage';
import Stores from '../pages/Stores';
import Mac from '../pages/Mac';

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
];

export default publicRoutes; 