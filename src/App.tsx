import { AccentButtonM } from './components/iconbuttons/AccentButtonM';
import { AccentButtonS } from './components/iconbuttons/AccentButtonS';
import { OutlinedButtonM } from './components/iconbuttons/OutlinedButtonM';
import { OutlinedButtonS } from './components/iconbuttons/OutlinedButtonS';
import { TertiaryButtonM } from './components/iconbuttons/TertiaryButtonM';
import { TertiaryButtonS } from './components/iconbuttons/TertiaryButtonS';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Sourcery for FrontEnd 2024</h1>
      <p>You can delete all this HTML code and start working on your Lunch App</p>
      <AccentButtonM />
      <AccentButtonS />
      <OutlinedButtonM />
      <OutlinedButtonS />
      <TertiaryButtonM />
      <TertiaryButtonS />
    </div>
  );
}
