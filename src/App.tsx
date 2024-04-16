// import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import './styles/index.scss';
// import Navigation from './components/navigation/Navigation';
import Header from './components/Header/Header';
// import DayTabs from './components/Tabs/DayTabs';

export function App() {
  // const handleTabChange = (day: string) => {
  //   console.log('Selected day :', day);
  // };
  return (
    <div className={styles.container}>
      {/* <Navigation /> */}
      {/* <Outlet /> */}

      <div className="navigation">Navigacijaaaaaaaaaaa</div>
      <div className="header">
        <Header page="ratings" />
      </div>
      <div className="user">Ernestas Grabliauskas</div>
      <div className="meals">{/* <DayTabs onTabChange={handleTabChange} /> */}</div>
      <div className="order">Order Summary</div>
      <footer className="footer">
        <div className="footer-left">Sourcery Academy</div>
        <div className="footer-middle">Lunch App</div>
        <div className="footer-right">© 2024 Cognizant</div>
      </footer>
    </div>
  );
}
