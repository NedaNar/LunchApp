import { useState, useMemo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
import Navigation from './components/Navigation/Navigation';
import { Button, ButtonAppearance, ButtonSize } from './components/RegularButton/Button';
import UserProfile from './components/UserProfile/UserProfile';
import OrderSummary from './components/OrderSummary/OrderSummary';
import CartContext, { CartItem } from './contexts/cartContext';

export function App() {
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

  // this is a temporary solution to handle logout
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />
      <CartContext.Provider value={cart}>
        <div>
          {/* div for any element in layout */}

          {/* this is a temporary solution to handle logout */}
          <div className={styles.logOut}>
            <Button
              text="Log Out"
              appearance={ButtonAppearance.PRIMARY}
              size={ButtonSize.SMALL}
              onClick={handleLogOut}
            />
          </div>

          <aside className={styles.rightSide}>
            <div className={styles.userProfile}>
              <UserProfile />
            </div>
            <OrderSummary />
          </aside>
        </div>

        <div
          className={`${collapsed ? styles['content--collapsed'] : styles.content} ${cartExpanded ? styles['content--cartExpanded'] : styles.content}`}>
          <Outlet />
          {/* <Outlet> allows to render 'child route' elements, so components can be placed on page  */}
        </div>
      </CartContext.Provider>
    </div>
  );
}
