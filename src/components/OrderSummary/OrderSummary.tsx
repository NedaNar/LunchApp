import { useState } from 'react';
import styles from './orderSummary.module.scss';
import CloseIcon from '../../assets/static/icons/icon_close.svg?react';
import BasketIcon from '../../assets/static/supporting-illustrations/basket.svg?react';
// import DeleteIcon from '../../assets/static/icons/icon_delete.svg?react';

function EmptyCard() {
  return (
    <div className={styles.emptyCart}>
      <BasketIcon />
      <p className={styles.emptyCartText}>Your cart is empty</p>
    </div>
  );
}

export default function OrderSummary() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`${styles.orderSummary} ${expanded ? styles.orderSummaryExpanded : ''}`}>
      <article className={styles.orderSummaryTitle}>
        <h1 className={styles.orderSummaryTitleText}>Order Summary</h1>
        <CloseIcon onClick={() => setExpanded(false)} />
      </article>
      <section className={styles.orderSummaryList}>
        <EmptyCard />
      </section>
      <section className={styles.orderSummaryFooter}>
        <div className={styles.separator} />
        <div className={styles.orderSummaryFooterContent}>
          <article className={styles.orderSummaryFooterContentPrice}>
            <p className={styles.orderSummaryFooterContentPriceText}>Total Price</p>
            <span className={styles.orderSummaryFooterContentPriceAmount}>€0</span>
          </article>
          <div className={styles.orderSummaryButton}>button place</div>
        </div>
      </section>
    </aside>
  );
}
