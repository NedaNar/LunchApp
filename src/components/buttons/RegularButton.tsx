import styles from './regularButton.module.scss';
import addIcon from '../images/AddFilled.png';
import arrowIcon from '../images/ArrowForwardFilled.png';

interface ButtonProps {
  text: string;
  color: 'primary' | 'secondary' | 'tertiary';
  size: 'large' | 'medium' | 'small' | 'xsmall';
  icon?: 'add' | 'arrow' | 'none';
  disabled?: boolean;
  onClick: () => void;
}

function Button({ text, color, size, onClick, icon = 'none', disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styles.btn} ${styles[`btn--${color}`]} ${styles[`btn--${size}`]} ${styles[`btn--${icon}`]}`}
      disabled={disabled}>
      {icon === 'add' && <img src={addIcon} alt="add icon" />}
      <span>{text}</span>
      {icon === 'arrow' && <img src={arrowIcon} alt="arrow icon" />}
    </button>
  );
}

export default Button;
