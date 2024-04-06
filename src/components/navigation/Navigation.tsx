import { useState } from 'react';
import styles from './navigation.module.scss';
import NavigationItem from './NavigationItem';
import LogoHorizontal from '../../assets/static/logo/logo_horizontal.svg?react';
import LogoVertical from '../../assets/static/logo/logo_vertical.svg?react';
import IconButton, { IconButtonSize, IconButtonType } from '../IconButton/IconButton';

export default function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <aside
      className={`${styles.sidebar} ${collapsed ? styles['sidebar--collapsed'] : styles['sidebar--expanded']}`}>
      <div
        className={`${styles.sidebar__toggle} ${collapsed ? styles['sidebar__toggle--collapsed'] : styles['sidebar__toggle--expanded']}`}>
        <IconButton
          onClick={() => setCollapsed((old) => !old)}
          size={IconButtonSize.SMALL}
          type={IconButtonType.ACCENT}
        />
      </div>

      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          {collapsed ? (
            <LogoVertical className={styles.logo} title="logo" />
          ) : (
            <LogoHorizontal className={styles.logo} title="logo" />
          )}
        </div>
        <ul className={styles.nav__list}>
          <li>
            <NavigationItem id="menu" name="Food Menu" to="/menu" />
          </li>
          <li>
            <NavigationItem id="lunch" name="Available Lunch" to="/lunch" />
          </li>
          <li>
            <NavigationItem id="orders" name="Your Orders" to="/orders" />
          </li>
          <li>
            <NavigationItem id="ratings" name="Ratings" to="/ratings" />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
