import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import FoodMenuPage from './pages/FoodMenuPage/FoodMenuPage';
import AvailableLunchPage from './pages/AvailableLunchPage/AvailableLunchPage';
import YourOrdersPage from './pages/YourOrdersPage/YourOrdersPage';
import RatingsPage from './pages/RatingsPage/RatingsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { NavigationItemPath } from './types/navigationEnums';

export const router = createBrowserRouter([
  {
    path: NavigationItemPath.ROOT,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: NavigationItemPath.MENU,
        element: <FoodMenuPage />,
      },
      {
        path: NavigationItemPath.LUNCH,
        element: <AvailableLunchPage />,
      },
      {
        path: NavigationItemPath.ORDERS,
        element: <YourOrdersPage />,
      },
      {
        path: NavigationItemPath.RATINGS,
        element: <RatingsPage />,
      },
    ],
  },
]);