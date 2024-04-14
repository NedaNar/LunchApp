import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
// import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import LunchPage from './pages/LunchPage';
import OrdersPage from './pages/OrdersPage';
import RatingsPage from './pages/RatingsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { NavigationItemPath } from './types/navigationEnums';

export const router = createBrowserRouter([
  {
    path: NavigationItemPath.HOME,
    // element: <HomePage />,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: NavigationItemPath.MENU,
        element: <MenuPage />,
      },
      {
        path: NavigationItemPath.LUNCH,
        element: <LunchPage />,
      },
      {
        path: NavigationItemPath.ORDERS,
        element: <OrdersPage />,
      },
      {
        path: NavigationItemPath.RATINGS,
        element: <RatingsPage />,
      },
    ],
  },
]);
