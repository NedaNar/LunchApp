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
import { Endpoint } from '../../api/endpoints';
import { UserData } from '../../api/apiModel';
import { SessionStorageKeys } from '../../types/sessionStorageEnums';
import usePatch from '../../api/useDataPatching';

export enum OrderStatus {
  SUCCESS = 'success',
  NOT_ENOUGH_BALANCE = 'not_enough_balance',
  ERROR = 'error',
}

export default function OrderSummary() {
  const { items, expanded, setExpanded, removeAllItems, setBalance } = useContext(cartContext);
  const { data } = useFetch<UserData[]>(Endpoint.USERS);

  const mappedMealsByDay = groupMealByDay(items);
  const totalPrice = calculateAndFormatTotalCartPrice(items);

  const [orderStatus, setOrderStatus] = useState<null | OrderStatus>(null);
  const { putData, error, responseData } = usePatch<UserData>(Endpoint.USERS);

  const [intermediateBalance, setIntermediateBalance] = useState<number | null>(null);

  const calculateNewBalance = (user: UserData, totalPrice: number) =>
    Number((user.balance - totalPrice).toFixed(2));

  const handleCheckout = async () => {
    const loggedInUserId = JSON.parse(sessionStorage.getItem(SessionStorageKeys.TOKEN) ?? '{}')?.id;
    const user = data?.find((u) => u.id == loggedInUserId);
    if (!user) return;

    if ((user.balance ?? 0) < Number(totalPrice))
      return setOrderStatus(OrderStatus.NOT_ENOUGH_BALANCE);

    const newBalance = calculateNewBalance(user, Number(totalPrice));
    setIntermediateBalance(newBalance);

    const updatedUserData: UserData = {
      ...user,
      balance: newBalance,
      orders: Object.keys(mappedMealsByDay).map((day) => ({
        weekDay: day,
        mealIds: mappedMealsByDay[day].map((meal) => Number(meal.id)),
      })),
    };

    putData(updatedUserData);
  };

  useEffect(() => {
    if (error && responseData !== null) {
      setOrderStatus(OrderStatus.ERROR);
    }

    if (!error && responseData !== null) {
      setOrderStatus(OrderStatus.SUCCESS);
      removeAllItems();
      setBalance(intermediateBalance ?? 0);
    }
  }, [responseData, error]);

  return (
    <>
      {orderStatus === OrderStatus.SUCCESS && (
        <Dialog
          primaryButtonText="Cool, Thanks!"
          onClose={() => setOrderStatus(null)}
          title="We've got your lunch order!"
          icon={DialogIcon.SUCCESS}
          onPrimaryButtonClick={() => setOrderStatus(null)}
          isCloseButtonVisible>
          <p>Order has been placed successfully.</p>
          <p>
            You can view lunch for the week in <br />
            <b>Your Orders</b>
          </p>
        </Dialog>
      )}

      {orderStatus === OrderStatus.NOT_ENOUGH_BALANCE && (
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

      {orderStatus === OrderStatus.ERROR && (
        <Dialog
          primaryButtonText="OK"
          onClose={() => setOrderStatus(null)}
          title="An error occured!"
          icon={DialogIcon.WARNING}
          onPrimaryButtonClick={() => setOrderStatus(null)}
          isCloseButtonVisible>
          This is on us. Sorry for the inconvenience.
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
