// Use CASE:
// import Navigation from './components/navigation/Navigation';
// <Navigation />
import { useState } from 'react';
import styles from './navigation.module.scss';
import NavigationItem from './NavigationItem';
import {
  NavigationItemId,
  NavigationItemPath,
  NavigationItemTitle,
} from '../../utils/navigationEnums';
import LogoHorizontal from '../../assets/static/logo/logo_horizontal.svg?react';
import LogoVertical from '../../assets/static/logo/logo_vertical.svg?react';
import IconButton, { IconButtonSize, IconButtonType } from '../IconButton/IconButton';

export default function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
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
        <div className={styles.navLogo}>
          {collapsed ? (
            <LogoVertical className={styles.logo} title="logo" />
          ) : (
            <LogoHorizontal className={styles.logo} title="logo" />
          )}
        </div>
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
