import styles from './navigationItem.module.scss';
import IconMenu from '../../assets/static/icons/icon_menu.svg?react';
import IconRestaurant from '../../assets/static/icons/icon_restaurant.svg?react';
import IconGrading from '../../assets/static/icons/icon_grading.svg?react';
import IconStar from '../../assets/static/icons/icon_star.svg?react';

interface NavigationItemProps {
  name: string;
  to: string;
  id: 'menu' | 'lunch' | 'orders' | 'ratings';
}

export default function NavigationItem({ name, to, id }: NavigationItemProps) {
  const selected = to === '/';
  // 16 row is for visual style test (need to comment 14row)
  // const selected = true;

  let Icon: JSX.Element | null = null;

  switch (id) {
    case 'menu':
      Icon = <IconMenu title="icon" />;
      break;
    case 'lunch':
      Icon = <IconRestaurant title="icon" />;
      break;
    case 'orders':
      Icon = <IconGrading title="icon" />;
      break;
    case 'ratings':
      Icon = <IconStar title="icon" />;
      break;
    default:
      break;
  }

  return (
    <div
      id="navItem__component"
      className={`${styles.navItem__component} ${selected ? styles['navItem__component--selected'] : ''}`}>
      <div id="navItem__component__title" className={styles.navItem__component__title}>
        {Icon}
        <span>{name}</span>
      </div>
    </div>
  );
}
