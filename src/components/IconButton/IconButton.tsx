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

export interface IconButtonProps {
  size?: IconButtonSize;
  type?: IconButtonType;
  icon: IconButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

function IconButton({
  size = IconButtonSize.MEDIUM,
  type = IconButtonType.ACCENT,
  icon,
  disabled,
  onClick,
}: IconButtonProps) {
  const buttonClassName = `${styles.iconButton} ${styles[type]} ${styles[size]} ${disabled ? styles.disabled : ''}`;

  const showIcon = (iconType: IconButtonType) => {
    switch (iconType) {
      case IconButtonType.ACCENT:
        return (
          <AccentIcon
            width={size === IconButtonSize.MEDIUM ? 8 : 6}
            height={size === IconButtonSize.MEDIUM ? 12 : 10}
          />
        );
      case IconButtonType.OUTLINED:
        return (
          <OutlinedIcon
            width={size === IconButtonSize.MEDIUM ? 22 : 18}
            height={size === IconButtonSize.MEDIUM ? 16 : 12}
          />
        );
      case IconButtonType.TERTIARY:
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
// import IconButton, { IconButtonSize, IconButtonType } from './components/IconButton/IconButton';

// <IconButton size={IconButtonSize.SMALL} icon={IconButtonType.ACCENT} />
// <IconButton type={IconButtonType.OUTLINED} size={IconButtonSize.MEDIUM} icon={IconButtonType.OUTLINED} />
// <IconButton type={IconButtonType.OUTLINED} size={IconButtonSize.SMALL} icon={IconButtonType.OUTLINED} />
// <IconButton type={IconButtonType.TERTIARY} size={IconButtonSize.MEDIUM} icon={IconButtonType.TERTIARY} />
// <IconButton type={IconButtonType.TERTIARY} size={IconButtonSize.SMALL} icon={IconButtonType.TERTIARY} />
