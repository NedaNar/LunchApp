import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
import UserProfile from './components/UserProfile/UserProfile';
import Navigation from './components/navigation/Navigation';
import { Input } from './components/Input/Input';

export function App() {
  return (
    <div className={styles.container}>
      <UserProfile />
      <Navigation />
      <Outlet />
      <div>
        <Input label="Sting for label" name="inputName" />
        <Input label="Error textfield" name="error" error />
        <Input label="Disabled" name="disable" placeholder="gsgdsjkdsr" disabled />
        <Input label="Search" name="serchInput" icon />
      </div>
    </div>
  );
}
