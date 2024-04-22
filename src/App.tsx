import styles from './App.module.scss';
import './styles/index.scss';
import LoginPage from './pages/LoginPage/LoginPage';

export function App() {
  return (
    <div className={styles.container}>
      <LoginPage />
    </div>
  );
}
