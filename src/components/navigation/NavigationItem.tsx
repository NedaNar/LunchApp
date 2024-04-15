import styles from './navigation.module.scss';
import IconMenu from '../../assets/static/icons/icon_menu.svg?react';
import IconRestaurant from '../../assets/static/icons/icon_restaurant.svg?react';
import IconGrading from '../../assets/static/icons/icon_grading.svg?react';
import IconStar from '../../assets/static/icons/icon_star.svg?react';
import {
  NavigationItemId,
  NavigationItemPath,
  NavigationItemTitle,
} from '../../types/navigationEnums';

interface NavigationItemProps {
  id: NavigationItemId;
  title: NavigationItemTitle;
  to: NavigationItemPath;
}

export default function NavigationItem({ title, to, id }: NavigationItemProps) {
  const selected = to === NavigationItemPath.HOME;

  let Icon: JSX.Element | null = null;

  switch (id) {
    case NavigationItemId.MENU:
      Icon = <IconMenu title="icon" />;
      break;
    case NavigationItemId.LUNCH:
      Icon = <IconRestaurant title="icon" />;
      break;
    case NavigationItemId.ORDERS:
      Icon = <IconGrading title="icon" />;
      break;
    case NavigationItemId.RATINGS:
      Icon = <IconStar title="icon" />;
      break;
    default:
      break;
  }

  return (
    <div className={`${styles.navItem} ${selected ? styles['navItem--selected'] : ''}`}>
      <div className={styles.navTitle}>
        {Icon}
        <span>{title}</span>
      </div>
    </div>
  );
}
