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

export interface DialogProps {
  title: string;
  icon: DialogIcon;
  description: string;
  outlinedButton?: boolean;
  outlinedButtonText?: string;
  buttonText: string;
}

function Dialog({
  title,
  icon,
  description,
  outlinedButton = false,
  outlinedButtonText = 'No, Keep',
  buttonText,
}: DialogProps) {
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

  return (
    <dialog open className={styles.dialogWrapper}>
      <div className={styles.dialogBody}>
        <div className={styles.dialogHeader}>
          <p>{title}</p>
          <IconButton type={IconButtonType.TERTIARY} icon={IconButtonIcon.CLOSE} />
        </div>
        <div className={styles.dialogSubBody}>
          <figure>{showIcon(icon)}</figure>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.dialogButtonWrapper}>
        {outlinedButton && (
          <Button
            text={outlinedButtonText}
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
// import Dialog, {DialogIcon} from './components/Dialog/Dialog';
//  <Dialog
//    title='You’re about to cancel your order.'
//    icon={DialogIcon.WARNING}
//    description='Are you sure you want to cancel your order for Wednesday?'
//    buttonText='Yes, Cancel'
//    outlinedButton
//    />
