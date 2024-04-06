import styles from './App.module.scss';
import Navigation from './components/navigation/Navigation';
import './styles/index.scss';

export function App() {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1>Welcome to Sourcery for FrontEnd 2024</h1>
      <p>You can delete all this HTML code and start working on your Lunch App</p>
    </div>
  );
}
