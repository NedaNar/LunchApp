import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
import UserProfile from './components/UserProfile/UserProfile';
import Navigation from './components/navigation/Navigation';

export function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Sourcery for FrontEnd 2024</h1>
      <UserProfile />
      <Navigation />
      <Outlet />
    </div>
  );
}
