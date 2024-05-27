import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './mainLayout.module.scss';
import '../../styles/index.scss';
import Navigation from '../../components/Navigation/Navigation';
import UserProfile from '../../components/UserProfile/UserProfile';
import LogoHorizontal from '../../assets/static/logo/logo_horizontal.svg?react';
import AccountIcon from '../../assets/static/icons/icon_account.svg?react';
import Footer from '../../components/Footer/Footer';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import OrderSummaryContextWrapper from '../../components/OrderSummary/OrderSummaryContextWrapper';

export default function MainLayout() {
  // This const is needed in parent element for navigation state
  const [collapsed, setCollapsed] = useState(false);
  const [cartExpanded, setCartExpanded] = useState(true);

  return (
    <div className={styles.container}>
      <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />

      <header className={styles.headerLine}>
        <LogoHorizontal className={styles.logo} title="logo" />
        <AccountIcon className={styles.account} title="Account information" />
      </header>
      <OrderSummaryContextWrapper cartExpanded={cartExpanded} setCartExpanded={setCartExpanded}>
        <aside className={styles.rightSide}>
          <article className={styles.userProfile}>
            <UserProfile />
          </article>

          <article className={styles.order}>
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
      </OrderSummaryContextWrapper>
      <footer className={collapsed ? styles['footer--collapsed'] : styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
