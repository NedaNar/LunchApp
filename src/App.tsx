// import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
// import UserProfile from './components/UserProfile/UserProfile';
// import Navigation from './components/navigation/Navigation';
import LoginPage from './pages/LoginPage/LoginPage';

export function App() {
  return (
    <div className={styles.container}>
      {/* <UserProfile />
      <Navigation />
      <Outlet /> */}
      <LoginPage />
    </div>
  );
}
