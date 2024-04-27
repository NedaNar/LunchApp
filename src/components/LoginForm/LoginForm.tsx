import { FormEvent, useRef } from 'react';
import { Input } from '../Input/Input';
import {
  Button,
  ButtonAppearance,
  ButtonSize,
  ButtonIcon,
  ButtonType,
} from '../RegularButton/Button';
import styles from './loginForm.module.scss';

function LoginForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(`Email: ${emailInputRef} password: ${passwordInputRef}`)
  };

  return (
    <div className={styles.loginFormWrapper}>
      <header className={styles.loginFormHeader}>
        <h1>Login</h1>
        <p>Lunch won’t order itself</p>
      </header>
      <div className={styles.loginFormBody}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formInputWrap}>
            <div className={styles.inputWrapper}>
              <Input
                ref={emailInputRef}
                label="Email"
                name="Email"
                type="email"
                placeholder="example@gmail.com"
              />
              <Input ref={passwordInputRef} label="Password" name="Password" type="password" />
            </div>
            <div className={styles.forgotPasswordBtn}>
              <button
                type="button"
                onClick={() => {
                  alert('Logic for reset password button will be added');
                }}>
                Forgot Password?
              </button>
            </div>
          </div>
          <Button
            text="Log In"
            appearance={ButtonAppearance.PRIMARY}
            size={ButtonSize.MEDIUM}
            icon={ButtonIcon.ARROW}
            onClick={() => {}}
            buttonType={ButtonType.SUBMIT}
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
