import { useContext } from 'react';
import styles from './orderSummary.module.scss';
import cartContext, { MealItem } from './cartContext';
import EmptyCart from './EmptyCart';
import DayItems from './DayItem';
import PressAndHoldButton from '../PressAndHoldButton/PressAndHoldButton';
import IconButton, {
  IconButtonSize,
  IconButtonType,
  IconButtonIcon,
} from '../IconButton/IconButton';

interface ReduceAccumulator {
  [key: string]: MealItem[];
}

export interface DayItemsProps {
  day: string;
  items: MealItem[];
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
        <IconButton
          type={IconButtonType.TERTIARY}
          size={IconButtonSize.MEDIUM}
          icon={IconButtonIcon.CLOSE}
          onClick={() => setExpanded(false)}
        />
      </header>
      <section className={styles.orderSummaryList}>
        {items.length === 0 ? (
          <EmptyCart />
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
        <PressAndHoldButton onConfirm={() => {}} />
      </footer>
    </aside>
  );
}
