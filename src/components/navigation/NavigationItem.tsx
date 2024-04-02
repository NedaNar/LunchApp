// import React from 'react';
import styles from './navigationItem.module.scss';
import icon_menu from '../../assets/static/icons/icon_menu.svg';
import icon_restaurant from '../../assets/static/icons/icon_restaurant.svg';
import icon_grading from '../../assets/static/icons/icon_grading.svg';
import icon_star from '../../assets/static/icons/icon_star.svg';

interface NavigationItemProps {
  id: 'menu' | 'lunch' | 'orders' | 'ratings';
  // icon?: 'icon_menu' | 'icon_restaurant' | 'icon_grading' | 'icon_star';
  name: string;
  to: string;
}

export default function NavigationItem({ id, name, to }: NavigationItemProps) {
  const active = to === '/';
  let iconComponent: JSX.Element | null = null;

  switch (id) {
    case 'menu':
      iconComponent = <img src={icon_menu} alt="Menu Icon" className="nav_icon" />;
      break;
    case 'lunch':
      iconComponent = <img src={icon_restaurant} alt="Restaurant Icon" className="nav_icon" />;
      break;
    case 'orders':
      iconComponent = <img src={icon_grading} alt="Grading Icon" className="nav_icon" />;
      break;
    case 'ratings':
      iconComponent = <img src={icon_star} alt="Star Icon" className="nav_icon" />;
      break;
    default:
      break;
  }

  return (
    <div
      id="list__item"
      className={`${styles.list__item} ${active ? styles['list__item--active'] : ''}`}>
      <div id="navigation__item__title" className={styles.navigation__item__title}>
        {iconComponent}
        <span>{name}</span>
      </div>
    </div>
  );
}
