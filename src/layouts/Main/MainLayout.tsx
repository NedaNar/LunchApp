import { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './mainLayout.module.scss';
import '../../styles/index.scss';
import Navigation from '../../components/Navigation/Navigation';
import UserProfile from '../../components/UserProfile/UserProfile';
import LogoHorizontal from '../../assets/static/logo/logo_horizontal.svg?react';
import AccountIcon from '../../assets/static/icons/icon_account.svg?react';
import Footer from '../../components/Footer/Footer';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import CartContext, { CartItem } from '../../components/OrderSummary/cartContext';

export default function MainLayout() {
  // This const is needed in parent element for navigation state
  const [collapsed, setCollapsed] = useState(false);

  // This is order summary cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartExpanded, setCartExpanded] = useState(true);

  const cart = useMemo(
    () => ({
      items: cartItems,
      setCartItems,
      expanded: cartExpanded,
      setExpanded: setCartExpanded,
      addToCart: (item: CartItem) => {
        setCartItems((prev: CartItem[]) => [...prev, item]);
      },
    }),
    [cartItems, cartExpanded]
  );

  return (
    <div className={styles.container}>
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

          {/* <article> */}
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
