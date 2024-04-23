import loginImage from '../../assets/static/login-screen-images/login-screen-image_light-orange-background.png';
import cloudImage from '../../assets/static/login-screen-images/food-cloud-image.png';
import styles from './authenticationPage.module.scss';
import logo from '../../assets/static/logo/logo_horizontal.svg';

export default function LoginPage() {
  return (
    <div className={styles.layout}>
      <img className={styles.image} src={loginImage} alt="Two people thinking about food" />
      <div className={styles.loginForm}>
        <img className={styles.logo} src={logo} alt="Lunch App" />
        <img className={styles.cloudImage} src={cloudImage} alt="Hovering Cloud" />
      </div>
    </div>
  );
}
