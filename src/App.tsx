import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
// import Navigation from './components/navigation/Navigation';
// import Header from './components/Header/Header';
import Navigation from './components/navigation/Navigation';
// import DayTabs from './components/Tabs/DayTabs';

interface FirstLayoutProps {
  children?: ReactNode;
}

export function App({ children }: FirstLayoutProps) {
  // const handleTabChange = (day: string) => {
  //   console.log('Selected day :', day);
  // };
  return (
    <div className={styles.container}>
      <div className="navigation">
        <Navigation />
      </div>
      <Outlet />
      {children}
      <div className="user">Ernestas Grabliauskas</div>
      <footer className="footer">
        <div className="footer-left">Sourcery Academy</div>
        <div className="footer-middle">Lunch App</div>
        <div className="footer-right">© 2024 Cognizant</div>
      </footer>
    </div>
  );
}
