import { useState } from 'react';
import styles from './navigation.module.scss';
import NavigationItem from './NavigationItem';
import LogoHorizontal from '../../assets/static/logo/logo_horizontal.svg?react';
import LogoVertical from '../../assets/static/logo/logo_vertical.svg?react';

export default function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles['sidebar--collapsed'] : ''}`}>
      <button
        type="button"
        className={styles.sidebar__toggle}
        onClick={() => setCollapsed((old) => !old)}>
        {`${collapsed ? '->' : '<-'}`}
      </button>

      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          {collapsed ? (
            <LogoVertical className={styles.logo} title="Logo" />
          ) : (
            <LogoHorizontal className={styles.logo} title="Logo" />
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
