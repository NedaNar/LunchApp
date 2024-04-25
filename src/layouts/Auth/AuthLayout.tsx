import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import loginImage from '../../assets/static/login-screen-images/login-screen-image_light-orange-background.png';
import cloudImage from '../../assets/static/login-screen-images/food-cloud-image.png';
import styles from './authLayout.module.scss';
import logo from '../../assets/static/logo/logo_horizontal.svg';
import TabButton from '../../components/Tabs/TabButton';

export default function AuthLayout() {
  const [selectedTab, setSelectedTab] = useState('Login');

  const handleTabClick = (tabText: string) => {
    setSelectedTab(tabText);
  };
  return (
    <div className={styles.layout}>
      <img className={styles.image} src={loginImage} alt="Two people thinking about food" />
      <div className={styles.loginForm}>
        <img className={styles.logo} src={logo} alt="Lunch App" />
        <img className={styles.cloudImage} src={cloudImage} alt="Hovering Cloud" />
        <div className={styles.tabs}>
          <Link to="/login">
            <TabButton
              text="Login"
              onClick={() => handleTabClick('Login')}
              selected={selectedTab === 'Login'}
            />
          </Link>
          <Link to="/register">
            <TabButton
              text="Register"
              onClick={() => handleTabClick('Register')}
              selected={selectedTab === 'Register'}
            />
          </Link>
        </div>
        <div className={styles.pageContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
