import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import FoodMenuPage from './pages/FoodMenuPage/FoodMenuPage';
import AvailableLunchPage from './pages/AvailableLunchPage/AvailableLunchPage';
import YourOrdersPage from './pages/YourOrdersPage/YourOrdersPage';
import RatingsPage from './pages/RatingsPage/RatingsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { RoutePath } from './types/navigationEnums';
import AuthLayout from './layouts/Auth/AuthLayout';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';

export const router = createBrowserRouter([
  {
    path: RoutePath.ROOT,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: RoutePath.MENU,
        element: <FoodMenuPage />,
      },
      {
        path: RoutePath.LUNCH,
        element: <AvailableLunchPage />,
      },
      {
        path: RoutePath.ORDERS,
        element: <YourOrdersPage />,
      },
      {
        path: RoutePath.RATINGS,
        element: <RatingsPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: RoutePath.LOGIN,
        element: <LoginForm />,
      },
      {
        path: RoutePath.REGISTER,
        element: <RegisterForm />,
      },
    ],
  },
]);
