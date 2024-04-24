import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
// import UserProfile from './components/UserProfile/UserProfile';
import Navigation from './components/navigation/Navigation';
// import { Input } from './components/Input/Input';

export function App() {
  return (
    <div className={styles.container}>
      {/* <UserProfile /> */}
      <Navigation />
      {/* <Input label="Your label" name="string" placeholder="disable" disabled />
      <Input label="Your label" name="string" error />
      <Input label="Your label" name="string" icon /> */}
      <Outlet />
    </div>
  );
}
