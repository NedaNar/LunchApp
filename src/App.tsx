import RegularButton from './components/buttons/RegularButton';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Sourcery for FrontEnd 2024</h1>
      <p>You can delete all this HTML code and start working on your Lunch App</p>
      <RegularButton text="Button" color="primary" size="large" icon="add" onClick={() => {}} />
      <RegularButton text="Button" color="secondary" size="medium" onClick={() => {}} />
      <RegularButton text="Button" color="tertiary" size="small" onClick={() => {}} icon="arrow" />
      <RegularButton text="Button" color="primary" size="xsmall" icon="arrow" onClick={() => {}} />
    </div>
  );
}
