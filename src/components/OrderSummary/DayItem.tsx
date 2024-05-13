import { useContext } from 'react';
import styles from './orderSummary.module.scss';
import DeleteIcon from '../../assets/static/icons/icon_delete.svg?react';
import { getFoodIcon } from '../FoodCard/helpers';
import cartContext, { MealItem } from './cartContext';

export interface DayItemsProps {
  day: string;
  items: MealItem[];
}

export default function DayItems({ day, items }: DayItemsProps) {
  const cart = useContext(cartContext);
  return (
    <section className={styles.dayItems}>
      <header className={styles.dayItemsHeader}>
        <p className={styles.dayItemsHeaderDay}>{day}</p>
        <div className={styles.separator} />
      </header>
      <div className={styles.dayItemsList}>
        {items.map((item) => (
          <div key={item.orderId} className={styles.dayItemsListItem}>
            <div className={styles.dayItemsListItemContent}>
              <figure>{getFoodIcon(item.dishType)}</figure>

              <div className={styles.dayItemsListItemContentText}>
                <p>vendor</p>
                <span>{item.title}</span>
              </div>
            </div>
            <div className={styles.dayItemsListItemRight}>
              <p>€{item.price}</p>
              <DeleteIcon onClick={() => cart.removeFromCart(item)} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
