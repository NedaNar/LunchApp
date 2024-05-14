import styles from './dialog.module.scss';
import { Button, ButtonAppearance, ButtonSize } from '../RegularButton/Button';
import IconButton, { IconButtonType, IconButtonIcon } from '../IconButton/IconButton';
import InfoDialogIcon from '../../assets/static/icons/icon_infoDialog.svg?react';
import SuccessDialogIcon from '../../assets/static/icons/icon_successDialog.svg?react';
import WarningDialogIcon from '../../assets/static/icons/icon_warningDialog.svg?react';

export enum DialogIcon {
  INFO,
  SUCCESS,
  WARNING,
}

export enum DialogSize {
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface DialogProps {
  title: string;
  icon?: DialogIcon;
  children: React.ReactNode;
  secondaryButton?: boolean;
  secondaryButtonText?: string;
  primaryButtonText: string;
  onPrimaryButtonClick: () => void;
  onClose: () => void;
  isCloseButtonVisible?: boolean;
  size?: DialogSize;
}

function Dialog({
  title,
  icon,
  children,
  secondaryButton = false,
  secondaryButtonText = 'No, Keep',
  primaryButtonText,
  onClose,
  onPrimaryButtonClick,
  isCloseButtonVisible = true,
  size = DialogSize.MEDIUM,
}: DialogProps) {
  const showIcon = (iconType?: DialogIcon) => {
    switch (iconType) {
      case DialogIcon.INFO:
        return <InfoDialogIcon />;
      case DialogIcon.SUCCESS:
        return <SuccessDialogIcon />;
      case DialogIcon.WARNING:
        return <WarningDialogIcon />;
      default:
        return null;
    }
  };

  const dialogSubBodyClass = icon ? styles.dialogSubBodyCenter : styles.dialogSubBodyStart;

  return (
    <div className={styles.dialogOverlay}>
      <dialog open className={`${styles.dialogWrapper} ${styles[size]}`}>
        <div className={styles.dialogBody}>
          <header className={styles.dialogHeader}>
            <p>{title}</p>
            {isCloseButtonVisible && (
              <IconButton
                type={IconButtonType.TERTIARY}
                icon={IconButtonIcon.CLOSE}
                onClick={onClose}
              />
            )}
          </header>
          <div className={dialogSubBodyClass}>
            <figure>{showIcon(icon)}</figure>
            <p>{children}</p>
          </div>
        </div>
        <footer className={styles.dialogButtonWrapper}>
          {secondaryButton && (
            <Button
              text={secondaryButtonText}
              appearance={ButtonAppearance.SECONDARY}
              size={ButtonSize.MEDIUM}
              onClick={() => {}}
            />
          )}
          <Button
            text={primaryButtonText}
            appearance={ButtonAppearance.PRIMARY}
            size={ButtonSize.MEDIUM}
            onClick={onPrimaryButtonClick}
          />
        </footer>
      </dialog>
    </div>
  );
}

export default Dialog;

// Since this Dialog component in the future might have more variations
// of text than currently shown in the design, a decision was made to provide
// information through props in this way without enums.
//
// Use case:
// import Dialog, {DialogIcon} from './components/Dialog/Dialog';
//  <Dialog
//    title='You’re about to cancel your order.'
//    icon={DialogIcon.WARNING}
//    children={(
//      <>
//        <p>Are you sure you want to cancel your order for <span>Wednesday</span>?</p>
//      </>
//    )}
//    primaryButtonText='Yes, Cancel'
//    secondaryButton
//    />
