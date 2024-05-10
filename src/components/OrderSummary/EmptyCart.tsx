import styles from './orderSummary.module.scss';
import BasketIcon from '../../assets/static/supporting-illustrations/basket.svg?react';

export default function EmptyCart() {
  return (
    <figure className={styles.emptyCart}>
      <BasketIcon />
      <p className={styles.emptyCartText}>Your cart is empty</p>
    </figure>
  );
}
