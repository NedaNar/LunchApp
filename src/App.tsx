import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
import Navigation from './components/navigation/Navigation';

export function App() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Outlet />
    </div>
  );
}
