// import React from 'react';
import styles from './navigation.module.scss';
import NavigationItem from './NavigationItem';
import logo_horizontal from '../../assets/static/logo/logo_horizontal.svg';
// import logo_vertical from '../../assets/static/logo/logo_vertical.svg';

export default function Navigation() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          <img src={logo_horizontal} width={77} alt="logo_horizontal" />
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
