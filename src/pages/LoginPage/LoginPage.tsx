import loginImage from '../../assets/static/login-screen-images/login-screen-image_light-orange-background.png';
import styles from './loginPage.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.layout}>
      <img src={loginImage} alt="two people thinking about food" />
      <div className={styles.loginForm} />
    </div>
  );
}
