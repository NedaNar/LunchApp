import styles from './dialog.module.scss';
import { Button, ButtonAppearance, ButtonSize } from '../RegularButton/Button';
import IconButton, { IconButtonType, IconButtonIcon } from '../IconButton/IconButton';
import InfoDialogIcon from '../../assets/static/icons/icon_infoDialog.svg?react';
import SuccessDialogIcon from '../../assets/static/icons/icon_successDialog.svg?react';
import WarningDialogIcon from '../../assets/static/icons/icon_warningDialog.svg?react';

export enum DialogTitle {
  INFO = 'Informative statement.',
  SUCCESS = 'We’ve got your lunch order!',
  WARNING = 'You’re about to cancel your order.',
}

export enum DialogIcon {
  INFO,
  SUCCESS,
  WARNING,
}

export enum DialogSummary {
  INFO = 'Explanation on what is going on.',
  SUCCESS = 'Your order is placed successfully. You can view your lunch for the week in <strong>Your Order.</strong>',
  WARNING = 'Are you sure you want to cancel your order for Wednesday?',
}

export enum DialogButton {
  INFO = 'Button',
  SUCCESS = 'Cool, Thanks!',
  WARNING = 'Yes, Cancel',
}

export interface DialogProps {
  title: DialogTitle;
  icon: DialogIcon;
  summary: DialogSummary;
  outlinedButton?: boolean;
  buttonText: DialogButton;
}

function Dialog({ title, icon, summary, outlinedButton = false, buttonText }: DialogProps) {
  const showIcon = (iconType: DialogIcon) => {
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

  const getSummary = (summaryType: DialogSummary) => {
    switch (summaryType) {
      case DialogSummary.INFO:
        return 'Explanation on what is going on.';
      case DialogSummary.SUCCESS:
        return (
          <>
            <p>Your order is placed successfully.</p>
            <p>You can view your lunch for the week in</p>
            <p>
              <span>Your Order.</span>
            </p>
          </>
        );
      case DialogSummary.WARNING:
        return 'Are you sure you want to cancel your order for Wednesday?';
      default:
        return '';
    }
  };

  return (
    <dialog open className={styles.dialogWrapper}>
      <div className={styles.dialogBody}>
        <div className={styles.dialogHeader}>
          <p>{title}</p>
          <IconButton type={IconButtonType.TERTIARY} icon={IconButtonIcon.CLOSE} />
        </div>
        <div className={styles.dialogSubBody}>
          <figure>{showIcon(icon)}</figure>
          <p className={styles.dialogSummary}>{getSummary(summary)}</p>
        </div>
      </div>
      <div className={styles.dialogButtonWrapper}>
        {outlinedButton && (
          <Button
            text="No, Keep"
            appearance={ButtonAppearance.SECONDARY}
            size={ButtonSize.MEDIUM}
            onClick={() => {}}
          />
        )}
        <Button
          text={buttonText}
          appearance={ButtonAppearance.PRIMARY}
          size={ButtonSize.MEDIUM}
          onClick={() => {}}
        />
      </div>
    </dialog>
  );
}

export default Dialog;

// Use case:
// import Dialog, {DialogTitle, DialogIcon, DialogSummary, DialogButton } from './components/Dialog/Dialog';
// <Dialog
//    title={DialogTitle.INFO}
//    icon={DialogIcon.INFO}
//    summary={DialogSummary.INFO}
//    buttonText={DialogButton.INFO}
//    outlinedButton
//    />
