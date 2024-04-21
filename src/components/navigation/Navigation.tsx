// Use CASE:
// import Navigation from './components/navigation/Navigation';
// <Navigation />

import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';
import NavigationItem from './NavigationItem';
import {
  NavigationItemId,
  NavigationItemPath,
  NavigationItemTitle,
} from '../../types/navigationEnums';
import LogoHorizontal from '../../assets/static/logo/logo_horizontal.svg?react';
import LogoVertical from '../../assets/static/logo/logo_vertical.svg?react';
import IconButton, { IconButtonSize, IconButtonType } from '../IconButton/IconButton';

interface NavigationProps {
  collapsed: boolean;
  setCollapsed: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export default function Navigation({ collapsed, setCollapsed }: NavigationProps) {
  // const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`${styles.sidebar} ${collapsed ? styles['sidebar--collapsed'] : styles['sidebar--expanded']}`}>
      <div
        className={`${styles.sidebarToggle} ${collapsed ? styles['sidebarToggle--collapsed'] : styles['sidebarToggle--expanded']}`}>
        <IconButton
          onClick={() => setCollapsed((prev) => !prev)}
          size={IconButtonSize.SMALL}
          type={IconButtonType.ACCENT}
        />
      </div>

      <nav className={styles.nav}>
        {/* linkas dummy laikinas pakeisti į  Link to={NavigationItemPath.ROOT} */}
        <Link to="/dummy" className={styles.navLogo}>
          {collapsed ? (
            <LogoVertical className={styles.logo} title="logo" />
          ) : (
            <LogoHorizontal className={styles.logo} title="logo" />
          )}
        </Link>

        <ul className={styles.navList}>
          <li>
            <NavigationItem
              id={NavigationItemId.MENU}
              title={NavigationItemTitle.MENU}
              to={NavigationItemPath.MENU}
            />
          </li>
          <li>
            <NavigationItem
              id={NavigationItemId.LUNCH}
              title={NavigationItemTitle.LUNCH}
              to={NavigationItemPath.LUNCH}
            />
          </li>
          <li>
            <NavigationItem
              id={NavigationItemId.ORDERS}
              title={NavigationItemTitle.ORDERS}
              to={NavigationItemPath.ORDERS}
            />
          </li>
          <li>
            <NavigationItem
              id={NavigationItemId.RATINGS}
              title={NavigationItemTitle.RATINGS}
              to={NavigationItemPath.RATINGS}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
