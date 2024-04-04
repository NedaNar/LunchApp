import styles from './button.module.scss';
import AddIcon from '../../assets/static/icons/icon_add.svg?react';
import ArrowIcon from '../../assets/static/icons/icon_arrow-forward.svg?react';

// USE CASE
// import { Button, ButtonAppearance, ButtonSize, ButtonIcon } from './components/buttons/Button';
// <Button
//   text="Click me"
//   appearance={ButtonAppearance.PRIMARY}
//   size={ButtonSize.LARGE}
//   icon={ButtonIcon.ADD}
//   onClick={() => {}}
// />;

enum ButtonAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

enum ButtonSize {
  XSMALL = 'xsmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

enum ButtonIcon {
  ADD = 'add',
  ARROW = 'arrow',
  NONE = 'none',
}

interface ButtonProps {
  text: string;
  appearance: ButtonAppearance;
  size: ButtonSize;
  icon?: ButtonIcon;
  disabled?: boolean;
  onClick: () => void;
}

function Button({
  text,
  appearance,
  size,
  onClick,
  icon = ButtonIcon.NONE,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styles.btn} ${styles[appearance]} ${styles[size]} ${styles[icon]}`}
      disabled={disabled}>
      {icon === ButtonIcon.ADD && <AddIcon />}
      <span>{text}</span>
      {icon === ButtonIcon.ARROW && <ArrowIcon />}
    </button>
  );
}

export { Button, ButtonAppearance, ButtonSize, ButtonIcon };
