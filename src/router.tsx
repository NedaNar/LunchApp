import { createBrowserRouter } from 'react-router-dom';
// import { App } from './App';
import FoodMenuPage from './pages/FoodMenuPage/FoodMenuPage';
import AvailableLunchPage from './pages/AvailableLunchPage/AvailableLunchPage';
import YourOrdersPage from './pages/YourOrdersPage/YourOrdersPage';
import RatingsPage from './pages/RatingsPage/RatingsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { NavigationItemPath } from './types/navigationEnums';
import DummyPage from './pages/DummyPage/DummyPage';
import MainLayout from './layouts/Main/MainLayout';
import AuthLayout from './layouts/Auth/AuthLayout';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/LoginPage/RegisterPage';

export const router = createBrowserRouter([
  // šių routų reikės kai bus AuthLayout
  {
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },

  // Šie routai turės būti apsaugoti
  {
    path: NavigationItemPath.ROOT,
    element: <MainLayout />,
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
