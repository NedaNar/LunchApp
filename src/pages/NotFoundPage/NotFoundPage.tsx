import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './notFoundPage.module.scss';
import BurnIcon from './burnIcon.svg?react';
import Navigation from '../../components/navigation/Navigation';

export function NotFoundPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={collapsed ? styles.contentCollapsed : styles.content}>
        <div className={styles.errorMessage}>
          <h1>Oops!</h1>
          <h2> 404 Page not found </h2>
          <h2>&quot; {currentPath} &quot;</h2>
          <BurnIcon className={styles.errorImage} title="error image" width={120} />
        </div>
      </div>
    </div>
  );
}
