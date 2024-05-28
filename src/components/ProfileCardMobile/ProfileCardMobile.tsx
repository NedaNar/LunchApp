import FocusTrap from 'focus-trap-react';
import styles from './profileCardMobile.module.scss';
import UserProfile from '../UserProfile/UserProfile';
import OrderSummary from '../OrderSummary/OrderSummary';
import IconButton, {
  IconButtonSize,
  IconButtonType,
  IconButtonIcon,
} from '../IconButton/IconButton';

interface ProfileCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileCardMobile({ isOpen, onClose }: ProfileCardProps) {
  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      aria-hidden={!isOpen}
      aria-label="Overlay for profile card"
      role="presentation">
      <FocusTrap focusTrapOptions={{ initialFocus: false }}>
        <div className={styles.modalContent}>
          <div className={styles.closeButtonWrapper}>
            <IconButton
              type={IconButtonType.TERTIARY}
              size={IconButtonSize.MEDIUM}
              icon={IconButtonIcon.CLOSE}
              onClick={onClose}
              aria-label="Close profile card"
            />
          </div>
          <div className={styles.userProfile}>
            <UserProfile />
          </div>
          <div className={styles.orderSummary}>
            <OrderSummary showCloseIcon={false} />
          </div>
        </div>
      </FocusTrap>
    </div>
  );
}
