import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input/Input';
import {
  Button,
  ButtonAppearance,
  ButtonSize,
  ButtonIcon,
  ButtonType,
} from '../RegularButton/Button';
import styles from './loginForm.module.scss';
import useFetch, { Endpoint } from '../../api/useDataFetching';
import { LoginUserData } from '../../api/apiModel';
import Dialog from '../Dialog/Dialog';
import { SessionStorageKeys } from '../../types/sessionStorageEnums';
import { RoutePath } from '../../types/navigationEnums';

interface LoginUser {
  email: string;
  password: string;
}

function LoginForm() {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  // temporary solution, later will be changed to [showToast, setShowToast]
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const navigate = useNavigate();

  const { data } = useFetch<LoginUserData>(Endpoint.USER);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginUser: LoginUser = {
      email: emailInput,
      password: passwordInput,
    };

    try {
      if (!data) {
        // this alert is a temporary solution for toast component, since it is not finished yet
        alert('No data from database was received');
        return;
      }

      if (data.email === loginUser.email && data.password === loginUser.password) {
        const token = JSON.stringify({
          email: data?.email,
          username: data?.userName,
        });
        sessionStorage.setItem(SessionStorageKeys.TOKEN, token);
        navigate(RoutePath.MENU);
      } else {
        setError('Email or password You have provided are incorrect. Please try again.');
        // temporary solution, later will be changed to setShowToast
        setShowDialog(true);
      }
    } catch (fetchError) {
      setError('Error fetching data');
      // this alert is a temporary solution for toast component, since it is not finished yet
      alert(fetchError);
    }

    setEmailInput('');
    setPasswordInput('');
  };

  return (
    <>
      <div className={styles.loginFormWrapper}>
        <header className={styles.loginFormHeader}>
          <h1 className={styles.title}>Login</h1>
          <p className={styles.subtitle}>Lunch won’t order itself</p>
        </header>
        <div className={styles.loginFormBody}>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formInputWrap}>
              <div className={styles.inputWrapper}>
                <Input
                  value={emailInput}
                  onChange={(e) => {
                    setEmailInput(e.target.value);
                  }}
                  label="Email"
                  name="Email"
                  type="email"
                  placeholder="example@gmail.com"
                />
                <Input
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                  }}
                  label="Password"
                  name="Password"
                  type="password"
                />
              </div>
              <div className={styles.forgotPassword}>
                <button
                  className={styles.forgotPasswordBtn}
                  type="button"
                  onClick={() => {
                    // this alert is a temporary solution for password reset modal, since it is not finished yet
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
      <div className={styles.notification}>
        {showDialog && (
          // this alert is a temporary solution for toast component, since it is not finished yet
          <Dialog
            title="Failed to Log In"
            // eslint-disable-next-line react/no-children-prop
            children={error}
            primaryButtonText="Try Again"
            isCloseButtonVisible={false}
            onPrimaryButtonClick={() => {
              setShowDialog(false);
            }}
            onClose={() => {
              setShowDialog(false);
            }}
          />
        )}
      </div>
    </>
  );
}

export default LoginForm;
