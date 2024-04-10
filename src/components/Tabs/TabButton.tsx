import styles from './tabButton.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  selected?: boolean;
}

function TabButton({ text, onClick, selected = false }: ButtonProps) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <button
        onClick={onClick}
        type="button"
        className={`${styles.btn} ${selected ? styles.selected : ''}`}>
        {text}
      </button>
    </div>
  );
}
export default TabButton;
