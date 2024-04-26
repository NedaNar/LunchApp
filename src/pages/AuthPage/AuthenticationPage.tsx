import { Outlet, useLocation } from 'react-router-dom';
import loginImage from '../../assets/static/login-screen-images/login-screen-image_light-orange-background.png';
import styles from './authenticationPage.module.scss';
import logo from '../../assets/static/logo/logo_horizontal.svg';
import AuthTabs from './AuthTabs';
import { NavigationItemPath } from '../../types/navigationEnums';

function AuthenticationPage() {
  const location = useLocation();
  const preselectedTab = location.pathname === NavigationItemPath.REGISTER ? 1 : 0;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={loginImage} alt="Two people thinking about food" />
      <div className={styles.loginForm}>
        <img className={styles.logo} src={logo} alt="Lunch App" />
        <div className={styles.tabs}>
          <AuthTabs preselectedTab={preselectedTab} />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthenticationPage;
