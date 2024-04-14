import { useLocation, Link } from 'react-router-dom';
import { NavigationItemPath } from '../../types/navigationEnums';
import styles from './notFoundPage.module.scss';
import burnIcon from './burnIcon.png';

export function NotFoundPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.errorMessage}>
      <h1>Oops!</h1>
      <h2> 404 Page not found </h2>
      <h2>&quot; {currentPath} &quot;</h2>
      <img src={burnIcon} alt="burnIcon" width={150} />

      <div className={styles.homeLink}>
        <Link to={NavigationItemPath.HOME}> Home page </Link>{' '}
      </div>
    </div>
  );
}
