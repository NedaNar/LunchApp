import { useLocation, Link } from 'react-router-dom';
import { NavigationItemPath } from '../../types/navigationEnums';
import styles from './notFoundPage.module.scss';
import BurnIcon from './burnIcon.svg?react';

export function NotFoundPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.errorMessage}>
      <h1>Oops!</h1>
      <h2> 404 Page not found </h2>
      <h2>&quot; {currentPath} &quot;</h2>
      <BurnIcon className={styles.errorImage} title="error image" width={120} />
      <div className={styles.rootPathLink}>
        <Link to={NavigationItemPath.ROOT}> Go to LunchApp </Link>{' '}
      </div>
    </div>
  );
}
