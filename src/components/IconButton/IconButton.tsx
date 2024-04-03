import styles from './iconButton.module.scss';
import AccentIcon from '../../assets/iconbuttonsvg/AccentIcon.svg?react';
import OutlinedIcon from '../../assets/iconbuttonsvg/OutlinedIcon.svg?react';
import TertiaryIcon from '../../assets/iconbuttonsvg/TertiaryIcon.svg?react';

export enum IconButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export enum IconButtonType {
  ACCENT = 'accent',
  OUTLINED = 'outlined',
  TERTIARY = 'tertiary',
}

export enum IconButtonIcon {
  ARROW,
  LOOP,
  CLOSE,
}

export interface IconButtonProps {
  size?: IconButtonSize;
  type?: IconButtonType;
  icon?: IconButtonIcon;
  disabled?: boolean;
  onClick?: () => void;
}

function IconButton({
  size = IconButtonSize.MEDIUM,
  type = IconButtonType.ACCENT,
  icon = IconButtonIcon.ARROW,
  disabled,
  onClick,
}: IconButtonProps) {
  const buttonClassName = `${styles.iconButton} ${styles[type]} ${styles[size]} ${disabled ? styles.disabled : ''}`;

  const showIcon = (iconType: IconButtonIcon) => {
    switch (iconType) {
      case IconButtonIcon.ARROW:
        return (
          <AccentIcon
            width={size === IconButtonSize.MEDIUM ? 8 : 6}
            height={size === IconButtonSize.MEDIUM ? 12 : 10}
          />
        );
      case IconButtonIcon.LOOP:
        return (
          <OutlinedIcon
            width={size === IconButtonSize.MEDIUM ? 22 : 18}
            height={size === IconButtonSize.MEDIUM ? 16 : 12}
          />
        );
      case IconButtonIcon.CLOSE:
        return (
          <TertiaryIcon
            width={size === IconButtonSize.MEDIUM ? 14 : 12}
            height={size === IconButtonSize.MEDIUM ? 14 : 12}
          />
        );
      default:
        return null;
    }
  };

  return (
    <button
      type="button"
      className={`positioning ${buttonClassName}`}
      onClick={onClick}
      disabled={disabled}>
      {showIcon(icon)}
    </button>
  );
}

export default IconButton;

// Use CASE:
// import IconButton, { IconButtonSize, IconButtonType, IconButtonIcon } from './components/IconButton/IconButton';

// <IconButton />
// <IconButton disabled />
// <IconButton size={IconButtonSize.SMALL} />
// <IconButton type={IconButtonType.OUTLINED} size={IconButtonSize.MEDIUM} icon={IconButtonIcon.LOOP} />
// <IconButton type={IconButtonType.OUTLINED} size={IconButtonSize.SMALL} icon={IconButtonIcon.LOOP} />
// <IconButton type={IconButtonType.TERTIARY} size={IconButtonSize.MEDIUM} icon={IconButtonIcon.CLOSE} />
// <IconButton type={IconButtonType.TERTIARY} size={IconButtonSize.SMALL} icon={IconButtonIcon.CLOSE} />
