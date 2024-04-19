import { useLocation } from 'react-router-dom';
import styles from './notFoundPage.module.scss';
import BurnIcon from './burnIcon.svg?react';
import Navigation from '../../components/navigation/Navigation';

export function NotFoundPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.errorPageLayout}>
      <div className={styles.navContainer}>
        <Navigation />
      </div>
      <div className={styles.errorMessageContainer}>
        <h1>Oops!</h1>
        <h2> 404 Page not found </h2>
        <h2>&quot; {currentPath} &quot;</h2>
        <BurnIcon className={styles.errorImage} title="error image" width={120} />
      </div>
    </div>
  );
}
