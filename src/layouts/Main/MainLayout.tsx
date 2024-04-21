import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './mainLayout.module.scss';
import Navigation from '../../components/navigation/Navigation';
import UserProfile from '../../components/UserProfile/UserProfile';

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={styles.userprofile}>
        <UserProfile />
      </div>

      <div className={collapsed ? styles.contentCollapsed : styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
