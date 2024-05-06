import { useContext } from 'react';
import styles from './orderSummary.module.scss';
import CloseIcon from '../../assets/static/icons/icon_close.svg?react';
import BasketIcon from '../../assets/static/supporting-illustrations/basket.svg?react';
import DeleteIcon from '../../assets/static/icons/icon_delete.svg?react';
import { getFoodIcon } from '../FoodCard/helpers';
import cartContext, { MealItem } from '../../contexts/cartContext';

function EmptyCard() {
  return (
    <figure className={styles.emptyCart}>
      <BasketIcon />
      <p className={styles.emptyCartText}>Your cart is empty</p>
    </figure>
  );
}

interface ReduceAccumulator {
  [key: string]: MealItem[];
}

export interface DayItemsProps {
  day: string;
  items: MealItem[];
}

function DayItems({ day, items }: DayItemsProps) {
  return (
    <section className={styles.dayItems}>
      <header className={styles.dayItemsHeader}>
        <p className={styles.dayItemsHeaderDay}>{day}</p>
        <div className={styles.separator} />
      </header>
      <div className={styles.dayItemsList}>
        {items.map((item) => (
          <div className={styles.dayItemsListItem}>
            <div className={styles.dayItemsListItemContent}>
              <figure>{getFoodIcon(item.dishType)}</figure>

              <div className={styles.dayItemsListItemContentText}>
                <p>vendor</p>
                <span>{item.title}</span>
              </div>
            </div>
            <div className={styles.dayItemsListItemRight}>
              <p>€{item.price}</p>
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function OrderSummary() {
  const { items, expanded, setExpanded } = useContext(cartContext);

  const mapped = items.reduce((acc, item) => {
    if (acc[item.selectedDay] === undefined) {
      acc[item.selectedDay] = [];
    }

    acc[item.selectedDay].push(item.meal);

    return acc;
  }, {} as ReduceAccumulator);

  const totalPrice = items.reduce((sum, item) => item.meal.price + sum, 0);

  return (
    <aside className={`${styles.orderSummary} ${expanded ? styles.orderSummaryExpanded : ''}`}>
      <header className={styles.orderSummaryTitle}>
        <h1 className={styles.orderSummaryTitleText}>Order Summary</h1>
        <CloseIcon onClick={() => setExpanded(false)} />
      </header>
      <section className={styles.orderSummaryList}>
        {items.length === 0 ? (
          <EmptyCard />
        ) : (
          Object.keys(mapped).map((day) => <DayItems day={day} items={mapped[day]} />)
        )}
      </section>
      <footer className={styles.orderSummaryFooter}>
        <div className={styles.separator} />
        <div className={styles.orderSummaryFooterContent}>
          <article className={styles.orderSummaryFooterContentPrice}>
            <p className={styles.orderSummaryFooterContentPriceText}>Total Price</p>
            <span className={styles.orderSummaryFooterContentPriceAmount}>
              €{totalPrice.toFixed(2)}
            </span>
          </article>
        </div>
        <div className={styles.orderSummaryButton}>button place</div>
      </footer>
    </aside>
  );
}
