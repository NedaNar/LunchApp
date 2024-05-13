import { useState, useMemo, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './mainLayout.module.scss';
import '../../styles/index.scss';
import Navigation from '../../components/Navigation/Navigation';
import UserProfile from '../../components/UserProfile/UserProfile';
import LogoHorizontal from '../../assets/static/logo/logo_horizontal.svg?react';
import AccountIcon from '../../assets/static/icons/icon_account.svg?react';
import Footer from '../../components/Footer/Footer';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import CartContext, { CartItem, MealItem } from '../../components/OrderSummary/cartContext';
import { generateUniqueId } from '../../utils/orderSummaryHelpers';
import ToastNotification, {
  ToastRefObject,
} from '../../components/Notifications/ToastNotification/ToastNotification';
import { NotificationType } from '../../utils/notificationUtils';

export default function MainLayout() {
  // This const is needed in parent element for navigation state
  const [collapsed, setCollapsed] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem('cartItems') ?? '[]')
  );
  const [cartExpanded, setCartExpanded] = useState(true);

  const cartToast = useRef<ToastRefObject>(null);

  // const showToast = (meal: string) => {
  //   cartToast.current?.showToast(
  //     `${meal} has been added to your cart. Excellent choice!`,
  //     NotificationType.SUCCESS
  //   );
  // };

  const cart = useMemo(
    () => ({
      items: cartItems,
      setCartItems,
      expanded: cartExpanded,
      setExpanded: setCartExpanded,

      addToCart: (item: { selectedDay: string; meal: MealItem }) => {
        setCartItems((prev: CartItem[]) => {
          const items = [...prev, { ...item, id: generateUniqueId() }];
          localStorage.setItem('cartItems', JSON.stringify(items));
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
          localStorage.setItem('cartItems', JSON.stringify(items));
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
  // _________________________________________________________

  return (
    <div className={styles.container}>
      <ToastNotification toastRef={cartToast} />

      <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />

      <header className={styles.headerLine}>
        <LogoHorizontal className={styles.logo} title="logo" />
        <AccountIcon className={styles.account} title="Acount information" />
      </header>
      <CartContext.Provider value={cart}>
        <aside className={styles.rightSide}>
          <article className={styles.userProfile}>
            <UserProfile />
          </article>

          <article className="order">
            <OrderSummary />
          </article>
        </aside>
        <main
          className={`${collapsed ? styles['content--collapsed'] : styles.content} ${cartExpanded ? styles['content--cartExpanded'] : styles.content}`}>
          <div className={styles.pageContent}>
            <Outlet />
            {/* <Outlet> allows to render 'child route' elements, so components can be placed on page  */}
          </div>
        </main>
      </CartContext.Provider>
      <footer className={collapsed ? styles['footer--collapsed'] : styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
