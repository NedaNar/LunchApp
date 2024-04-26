import { FormEvent } from 'react';
import { Input } from '../Input/Input';
import { Button, ButtonAppearance, ButtonSize, ButtonIcon } from '../RegularButton/Button';
import styles from './loginForm.module.scss';

function LoginForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.loginFormWrapper}>
      <header className={styles.loginFormHeader}>
        <h1>Login</h1>
        <p>Lunch won’t order itself</p>
      </header>
      <div className={styles.loginFormBody}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <Input label="Email" name="Email" type="email" placeholder="example@gmail.com" />
            <Input label="Password" name="Password" type="password" />
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
        </form>
        <Button
          text="Log In"
          appearance={ButtonAppearance.PRIMARY}
          size={ButtonSize.MEDIUM}
          icon={ButtonIcon.ARROW}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default LoginForm;
