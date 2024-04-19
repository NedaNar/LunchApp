// import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
// import UserProfile from './components/UserProfile/UserProfile';
// import Navigation from './components/navigation/Navigation';
import Dialog from './components/Dialog/Dialog';

export function App() {
  return (
    <div className={styles.container}>
      {/* <UserProfile />
      <Navigation />
      <Outlet /> */}
      <Dialog />
    </div>
  );
}
