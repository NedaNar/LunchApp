import { useContext, useState } from 'react';
import axios from 'axios';
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
import Dialog, { DialogIcon } from '../Dialog/Dialog';
import useFetch from '../../api/useDataFetching';
import { Endpoint } from '../../api/endpoints';
import { UserData } from '../../api/apiModel';

export default function OrderSummary() {
  const { items, expanded, setExpanded, removeAllItems } = useContext(cartContext);
  const { data } = useFetch<UserData>(Endpoint.USERS);

  const mappedMealsByDay = groupMealByDay(items);
  const totalPrice = calculateAndFormatTotalCartPrice(items);

  const [orderStatus, setOrderStatus] = useState<null | boolean>(null);

  const handleCheckout = async () => {
    if ((data?.balance ?? 0) < Number(totalPrice)) return setOrderStatus(false);

    try {
      const updatedData = {
        ...data,
        orders: Object.keys(mappedMealsByDay).map((day) => ({
          weekDay: day,
          mealIds: mappedMealsByDay[day].map((meal) => Number(meal.id)),
        })),
      };

      await axios.patch('http://localhost:3002/user', JSON.stringify(updatedData));
      removeAllItems();
      return setOrderStatus(true);
    } catch (error) {
      // handle error here
    }
    return setOrderStatus(false);
  };

  return (
    <>
      {orderStatus && (
        <Dialog
          primaryButtonText="OK"
          onClose={() => setOrderStatus(null)}
          title="Order Confirmed!"
          icon={DialogIcon.SUCCESS}
          onPrimaryButtonClick={() => setOrderStatus(null)}
          isCloseButtonVisible>
          Your order has been successfully processed.
        </Dialog>
      )}

      {orderStatus === false && (
        <Dialog
          primaryButtonText="OK"
          onClose={() => setOrderStatus(null)}
          title="Not enough balance!"
          icon={DialogIcon.WARNING}
          onPrimaryButtonClick={() => setOrderStatus(null)}
          isCloseButtonVisible>
          You do not have enough balance available to complete this order.
        </Dialog>
      )}

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
          {!items.length ? (
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
          <PressAndHoldButton onConfirm={handleCheckout} />
        </footer>
      </aside>
    </>
  );
}
