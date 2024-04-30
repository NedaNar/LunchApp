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
import PrivateRoutes from './components/LoginForm/AuthenticationLogic/PrivateRoutes';
import DummyPage from './components/Dummy/DummyPage';

export const router = createBrowserRouter([
  {
    path: RoutePath.ROOT,
    element: <PrivateRoutes element={<App />} />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: RoutePath.MENU,
        element: <PrivateRoutes element={<FoodMenuPage />} />,
      },
      {
        path: RoutePath.LUNCH,
        element: <PrivateRoutes element={<AvailableLunchPage />} />,
      },
      {
        path: RoutePath.ORDERS,
        element: <PrivateRoutes element={<YourOrdersPage />} />,
      },
      {
        path: RoutePath.RATINGS,
        element: <PrivateRoutes element={<RatingsPage />} />,
      },
      {
        path: '/dummy',
        element: <PrivateRoutes element={<DummyPage />} />,
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
