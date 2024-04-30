import { Outlet, useNavigate } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
import Navigation from './components/navigation/Navigation';
import { Button, ButtonAppearance, ButtonSize } from './components/RegularButton/Button';

export function App() {
  // this is a temporary solution to handle logout
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <Navigation />
      <Outlet />

      {/* this is a temporary solution to handle logout */}
      <Button
        text="Log Out"
        appearance={ButtonAppearance.PRIMARY}
        size={ButtonSize.LARGE}
        onClick={handleLogOut}
      />
    </div>
  );
}
