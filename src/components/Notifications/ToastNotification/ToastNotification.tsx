import React, { useImperativeHandle, useRef, useState } from 'react';
import styles from './toastNotification.module.scss';
import InfoIcon from '../../../assets/static/icons/icon_info-outline.svg?react';
import SuccessIcon from '../../../assets/static/icons/icon_check-circle-outline.svg?react';
import WarningIcon from '../../../assets/static/icons/icon_error-outline.svg?react';
import IconButton, { IconButtonIcon, IconButtonType } from '../../IconButton/IconButton';
import { NOTIFICATION_TIMEOUT, NotificationType } from '../../../utils/notificationUtils';

interface Notification {
  text: string;
  type: NotificationType;
  isClosing: boolean;
}

// USAGE
// const toastRef = useRef<any>();
// const showNotification = () => {
//   toastRef.current.showToast({ text: "someText", type: NotificationType.INFO });
// };
// <ToastNotification ref={toastRef} />

const ToastNotification = React.forwardRef<void>((_, ref: React.Ref<void>) => {
  const [notification, setNotification] = useState<Notification | null>(null);
  const autoCloseTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = (timeout: NodeJS.Timeout | null) => timeout && clearTimeout(timeout);

  const removeNotification = () => {
    setNotification((prevNotification) => ({
      ...prevNotification!,
      isClosing: true,
    }));

    closeTimeout.current = setTimeout(() => {
      setNotification(null);
    }, 300);
  };

  const handleClick = () => {
    clearTimer(autoCloseTimeout.current);
    removeNotification();
  };

  useImperativeHandle(ref, () => ({
    showToast({ text, type }: { text: string; type: NotificationType }) {
      clearTimer(closeTimeout.current);
      clearTimer(autoCloseTimeout.current);

      setNotification({ text, type, isClosing: false });

      autoCloseTimeout.current = setTimeout(removeNotification, NOTIFICATION_TIMEOUT);
    },
  }));

  return (
    <div>
      {notification && (
        <div
          className={`${styles.container} ${styles[notification.type]} ${notification.isClosing ? styles.slideOut : ''}`}>
          {notification.type === NotificationType.INFO && <InfoIcon className={styles.icon} />}
          {notification.type === NotificationType.SUCCESS && (
            <SuccessIcon className={styles.icon} />
          )}
          {notification.type === NotificationType.WARNING && (
            <WarningIcon className={styles.icon} />
          )}
          <span className={styles.text}>{notification.text}</span>
          <div className={styles.verticalLine} />
          <IconButton
            type={IconButtonType.TERTIARY}
            icon={IconButtonIcon.CLOSE}
            onClick={() => handleClick()}
          />
        </div>
      )}
    </div>
  );
});

export default ToastNotification;
