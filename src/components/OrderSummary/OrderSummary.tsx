import { useContext, useState, useEffect } from 'react';
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
import usePut from '../../api/useDataPutting';
import { Endpoint } from '../../api/endpoints';
import { UserData } from '../../api/apiModel';
import { SessionStorageKeys } from '../../types/sessionStorageEnums';

export default function OrderSummary() {
  const { items, expanded, setExpanded, removeAllItems } = useContext(cartContext);
  const { data } = useFetch<UserData[]>(Endpoint.USERS);

  const mappedMealsByDay = groupMealByDay(items);
  const totalPrice = calculateAndFormatTotalCartPrice(items);

  const [orderStatus, setOrderStatus] = useState<null | boolean>(null);
  const { putData, error, responseData } = usePut<UserData[]>(Endpoint.USERS);

  const handleCheckout = async () => {
    const loggedInUserId = JSON.parse(sessionStorage.get(SessionStorageKeys.TOKEN)).id;
    const user = data?.find((u) => u.id === loggedInUserId);
    if (!user) return;

    if ((user.balance ?? 0) < Number(totalPrice)) return setOrderStatus(false);

    const updatedUserData: UserData = {
      ...user,
      balance: user.balance - Number(totalPrice),
      orders: Object.keys(mappedMealsByDay).map((day) => ({
        weekDay: day,
        mealIds: mappedMealsByDay[day].map((meal) => Number(meal.id)),
      })),
    };

    const updatedData = data?.map((user) => (user.id === user.id ? updatedUserData : user)) ?? [];

    putData(updatedData);
    removeAllItems();
  };

  useEffect(() => {
    if (responseData !== null) setOrderStatus(true);
    if (error) setOrderStatus(false);
  }, [responseData, error]);

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
