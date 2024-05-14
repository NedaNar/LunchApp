import { useEffect, useMemo, useRef, useState } from 'react';
import CartContext, { CartItem, MealItem } from './cartContext';
import ToastNotification, {
  ToastRefObject,
} from '../Notifications/ToastNotification/ToastNotification';
import { checkForFridayMeal, generateUniqueId } from '../../utils/orderSummaryHelpers';
import { NotificationType } from '../../utils/notificationUtils';
import { STOP_ORDERS_HOUR, getCurrentWeekdayName } from '../../utils/dateUtils';
import { LocalStorageKeys } from '../../types/localStorageEnums';

export default function OrderSummaryContextWrapper({
  children,
  cartExpanded,
  setCartExpanded,
}: {
  children: React.ReactNode;
  cartExpanded: boolean;
  setCartExpanded: (value: boolean) => void;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.CART_ITEMS) ?? '[]')
  );
  const cartToast = useRef<ToastRefObject>(null);

  const cart = useMemo(
    () => ({
      items: cartItems,
      setCartItems,
      expanded: cartExpanded,
      setExpanded: setCartExpanded,

      addToCart: (item: { selectedDay: string; meal: MealItem }) => {
        setCartItems((prev: CartItem[]) => {
          if (checkForFridayMeal(prev, item)) {
            cartToast.current?.showToast(
              `On Fridays you can only order one soup and/or one side.`,
              NotificationType.INFO
            );
            return prev;
          }
          const items = [...prev, { ...item, id: generateUniqueId() }];
          localStorage.setItem(LocalStorageKeys.CART_ITEMS, JSON.stringify(items));
          cartToast.current?.showToast(
            `${item.meal.title} has been added to your cart. Excellent choice!`,
            NotificationType.SUCCESS
          );
          return items;
        });
      },
      removeFromCart: (toRemoveItem: MealItem) => {
        setCartItems((prev) => {
          const items = prev.filter((item) => item.id !== toRemoveItem.orderId);
          localStorage.setItem(LocalStorageKeys.CART_ITEMS, JSON.stringify(items));
          cartToast.current?.showToast(
            `${toRemoveItem.title} has been removed from your cart.`,
            NotificationType.WARNING
          );
          return items;
        });
      },
    }),
    [cartItems, cartExpanded]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      if (date.getHours() >= STOP_ORDERS_HOUR) {
        const today = getCurrentWeekdayName();
        const todayItems = cartItems.filter((item) => item.selectedDay === today);
        if (todayItems.length > 0) {
          cartToast.current?.showToast(
            `Todays items have been removed from your cart.`,
            NotificationType.WARNING
          );
          setCartItems([]);
          localStorage.setItem(LocalStorageKeys.CART_ITEMS, JSON.stringify([]));
        }
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ToastNotification toastRef={cartToast} />
      <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
    </>
  );
}
