import loginImage from '../../assets/static/login-screen-images/login-screen-image_light-orange-background.png';
import cloudImage from '../../assets/static/login-screen-images/food cloud image.png';
import styles from './loginPage.module.scss';
import logo from '../../assets/static/logo/logo_horizontal.svg';

export default function LoginPage() {
  return (
    <div className={styles.layout}>
      <img className={styles.image} src={loginImage} alt="Two people thinking about food" />
      <div className={styles.loginForm}>
        <img className={styles.logo} src={logo} alt="Lunch App" />
        <h2>Login</h2>
        <h3>Lunch won&apos;t order itself</h3>
        <img className={styles.cloudImage} src={cloudImage} alt="Hovering Cloud" />
        <form>
          <p>User name</p>
          <input type="text" placeholder="Username" required />
          <p>Password</p>
          <input type="password" placeholder="Password" required />
          <div className={styles.forgotPassword}>
            <button type="button">Forgot Password?</button>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
