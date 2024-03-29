import styles from './regularButton.module.scss';
import AddIcon from '../../assets/static/icons/icon_add.svg?react';
import ArrowIcon from '../../assets/static/icons/icon_arrow-forward.svg?react';
import colorSecondary300 from '../../styles/variables/_colors.module.scss';

interface ButtonProps {
  text: string;
  color: 'primary' | 'secondary' | 'tertiary';
  size: 'large' | 'medium' | 'small' | 'xsmall';
  icon?: 'add' | 'arrow' | 'none';
  disabled?: boolean;
  onClick: () => void;
}

function Button({ text, color, size, onClick, icon = 'none', disabled }: ButtonProps) {
  let iconSize = 24;
  if (size === 'small') {
    iconSize = 18;
  } else if (size === 'xsmall') {
    iconSize = 14;
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styles.btn} ${styles[`btn--${color}`]} ${styles[`btn--${size}`]} ${styles[`btn--${icon}`]}`}
      disabled={disabled}>
      {icon === 'add' && <AddIcon fill={colorSecondary300.colorSecondary300} height={iconSize} />}
      <span>{text}</span>
      {icon === 'arrow' && (
        <ArrowIcon fill={colorSecondary300.colorSecondary300} height={iconSize} width={iconSize} />
      )}
    </button>
  );
}

export default Button;
