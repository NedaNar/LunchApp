import { useRef } from 'react';
import styles from './dummyPage.module.scss';
import Checkmark from '../Checkmark/Checkmark';
import ToastNotification, {
  ToastRefObject,
} from '../Notifications/ToastNotification/ToastNotification';
import { NotificationType } from '../../utils/notificationUtils';
import { Button, ButtonAppearance, ButtonSize } from '../RegularButton/Button';
// import Dialog, { DialogIcon } from '../Dialog/Dialog';

function DummyPage() {
  const toastRef = useRef<ToastRefObject>(null);
  const showNotification = (type: NotificationType) => {
    toastRef.current!.showToast('This is a notification example', type);
  };

  return (
    <div className={styles.dummyContainer}>
      <h1>Sprint No. 3</h1>
      <div className={styles.checkmarkWrapper}>
        <h2>Checkmarks</h2>
        <Checkmark label="Label text" id="label-text" />
        <Checkmark label="Label text" id="label-text" disabled />
        <Checkmark label="Label text" id="label-text" error />
      </div>
      <div className={styles.dialogWrapper}>
        {/* <Dialog
                    title='You’re about to cancel your order.'
                    icon={DialogIcon.WARNING}
                    children={(
                        <>
                            <p>Are you sure you want to cancel your order for <span>Wednesday</span>?</p>
                        </>
                    )}
                    primaryButtonText='Yes, Cancel'
                    onPrimaryButtonClick={() => {}}
                    onClose={() => {}}
                    secondaryButton
                /> */}
        {/* <Dialog
                    title='You’re about to cancel your order.'
                    icon={DialogIcon.INFO}
                    children={(
                        <>
                            <p>Are you sure you want to cancel your order for <span>Wednesday</span>?</p>
                        </>
                    )}
                    primaryButtonText='Yes, Cancel'
                    onPrimaryButtonClick={() => {}}
                    onClose={() => {}}
                    secondaryButton
                    isCloseButtonVisible
                /> */}
        {/* <Dialog
                    title='You’re about to cancel your order.'
                    icon={DialogIcon.SUCCESS}
                    children={(
                        <>
                            <p>Are you sure you want to cancel your order for <span>Wednesday</span>?</p>
                        </>
                    )}
                    primaryButtonText='Yes, Cancel'
                    onPrimaryButtonClick={() => { }}
                    onClose={() => { }}
                    secondaryButton
                    isCloseButtonVisible
                /> */}
      </div>
      <div>
        <h2>Notifications</h2>
        <Button
          text="Error notification"
          appearance={ButtonAppearance.PRIMARY}
          size={ButtonSize.LARGE}
          onClick={() => showNotification(NotificationType.WARNING)}
        />
        <Button
          text="Success notification"
          appearance={ButtonAppearance.PRIMARY}
          size={ButtonSize.LARGE}
          onClick={() => showNotification(NotificationType.SUCCESS)}
        />
        <ToastNotification toastRef={toastRef} />
      </div>
    </div>
  );
}

export default DummyPage;
