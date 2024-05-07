import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
import Navigation from './components/navigation/Navigation';
import UserProfile from './components/UserProfile/UserProfile';

export function App() {
  // This const is needed in parent element for navigation state
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />
      <div>
        {/* div for any element in layout */}

        {/* this is a temporary solution to handle logout */}

        <div className={styles.userProfile}>
          <UserProfile />
        </div>
      </div>
      <div className={collapsed ? styles['content--collapsed'] : styles.content}>
        <Outlet />
        {/* <Outlet> allows to render 'child route' elements, so components can be placed on page  */}
      </div>
    </div>
  );
}
