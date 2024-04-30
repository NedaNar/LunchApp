import styles from './dummyPage.module.scss';
import Checkmark from '../Checkmark/Checkmark';
// import Dialog, { DialogIcon } from '../Dialog/Dialog';

function DummyPage() {
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
    </div>
  );
}

export default DummyPage;
