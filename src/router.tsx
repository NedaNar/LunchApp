import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import FoodMenuPage from './pages/FoodMenuPage';
import AvailableLunchPage from './pages/AvailableLunchPage';
import YourOrdersPage from './pages/YourOrdersPage';
import RatingsPage from './pages/RatingsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { NavigationItemPath } from './types/navigationEnums';
import DummyPage from './pages/DummyPage/DummyPage';

export const router = createBrowserRouter([
  {
    path: NavigationItemPath.ROOT,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      // laikinas DummyPage
      {
        path: '/dummy',
        element: <DummyPage />,
      },

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
