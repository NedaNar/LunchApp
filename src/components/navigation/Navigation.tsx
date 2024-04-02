import { useState } from 'react';
import styles from './navigation.module.scss';
import NavigationItem from './NavigationItem';
import logo_horizontal from '../../assets/static/logo/logo_horizontal.svg';
import logo_vertical from '../../assets/static/logo/logo_vertical.svg';

export default function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles['sidebar--collapsed'] : ''}`}>
      <button
        type="button"
        className={styles.sidebar__toggle}
        onClick={() => setCollapsed((left) => !left)}>
        {`${collapsed ? 'to right' : 'to left'}`}
      </button>

      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          <img
            src={collapsed ? logo_vertical : logo_horizontal}
            alt="Logo"
            className={styles.logo}
          />
        </div>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <NavigationItem id="menu" name="Food Menu" to="#" />
          </li>
          <li className={styles.nav__item}>
            <NavigationItem id="lunch" name="Available Lunch" to="#" />
          </li>
          <li className={styles.nav__item}>
            <NavigationItem id="orders" name="Your Orders" to="#" />
          </li>
          <li className={styles.nav__item}>
            <NavigationItem id="ratings" name="Ratings" to="#" />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
