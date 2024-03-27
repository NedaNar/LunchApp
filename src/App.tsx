import styles from './App.module.scss';

export function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Sourcery for FrontEnd 2024</h1>
      <p>You can delete all this HTML code and start working on your Lunch App</p>
      <button type="submit" className={styles.accentButtonM}>
        +
      </button>
      <button type="submit" className={styles.accentButtonS}>
        +
      </button>
      <button type="submit" className={styles.outlinedButtonM}>
        +
      </button>
      <button type="submit" className={styles.outlinedButtonS}>
        +
      </button>
      <button type="submit" className={styles.tertiaryButtonM}>
        +
      </button>
      <button type="submit" className={styles.tertiaryButtonS}>
        +
      </button>
    </div>
  );
}
