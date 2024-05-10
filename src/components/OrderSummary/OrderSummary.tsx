import { useContext } from 'react';
import styles from './orderSummary.module.scss';
import cartContext from './cartContext';
import EmptyCart from './EmptyCart';
import DayItems from './DayItem';
import { calculateAndFormatTotalCartPrice, groupMealByDay } from '../../utils/orderSummaryHelpers';
import PressAndHoldButton from '../PressAndHoldButton/PressAndHoldButton';
import IconButton, {
  IconButtonSize,
  IconButtonType,
  IconButtonIcon,
} from '../IconButton/IconButton';

export default function OrderSummary() {
  const { items, expanded, setExpanded } = useContext(cartContext);

  const mappedMealsByDay = groupMealByDay(items);
  const totalPrice = calculateAndFormatTotalCartPrice(items);

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
          Object.keys(mappedMealsByDay).map((day) => (
            <DayItems day={day} items={mappedMealsByDay[day]} />
          ))
        )}
      </section>
      <footer className={styles.orderSummaryFooter}>
        <div className={styles.separator} />
        <div className={styles.orderSummaryFooterContent}>
          <article className={styles.orderSummaryFooterContentPrice}>
            <p className={styles.orderSummaryFooterContentPriceText}>Total Price</p>
            <span className={styles.orderSummaryFooterContentPriceAmount}>€{totalPrice}</span>
          </article>
        </div>
        <PressAndHoldButton onConfirm={() => {}} />
      </footer>
    </aside>
  );
}
