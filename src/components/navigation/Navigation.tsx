// Use CASE:
// import { useState } from 'react';
// import Navigation from './components/navigation/Navigation';
// const [collapsed, setCollapsed] = useState(false);
// <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />

// import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';
import NavigationItem from './NavigationItem';
import { NavigationItemId, RoutePath, NavigationItemTitle } from '../../types/navigationEnums';
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
        <Link to={RoutePath.ROOT} className={styles.navLogo}>
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
              to={RoutePath.MENU}
            />
          </li>
          <li>
            <NavigationItem
              id={NavigationItemId.LUNCH}
              title={NavigationItemTitle.LUNCH}
              to={RoutePath.LUNCH}
            />
          </li>
          <li>
            <NavigationItem
              id={NavigationItemId.ORDERS}
              title={NavigationItemTitle.ORDERS}
              to={RoutePath.ORDERS}
            />
          </li>
          <li>
            <NavigationItem
              id={NavigationItemId.RATINGS}
              title={NavigationItemTitle.RATINGS}
              to={RoutePath.RATINGS}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
