import styles from './dialog.module.scss';
import { Button, ButtonAppearance, ButtonSize } from '../RegularButton/Button';
import IconButton, { IconButtonType, IconButtonIcon } from '../IconButton/IconButton';
import InfoDialogIcon from '../../assets/static/icons/icon_infoDialog.svg?react';

function Dialog() {
  return (
    <dialog open className={styles.dialogWrapper}>
      <div>
        <div>
          <p>Informative statement.</p>
          <IconButton type={IconButtonType.TERTIARY} icon={IconButtonIcon.CLOSE} />
        </div>
        <div>
          <figure>
            <InfoDialogIcon />
          </figure>
          <p>Explanation on what is going on.</p>
        </div>
      </div>
      <div>
        <Button
          text="Button"
          appearance={ButtonAppearance.PRIMARY}
          size={ButtonSize.MEDIUM}
          onClick={() => {}}
        />
      </div>
    </dialog>
  );
}

export default Dialog;
