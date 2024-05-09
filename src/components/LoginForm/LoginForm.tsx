import { FormEvent, useState, useRef } from 'react';
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
import { SessionStorageKeys } from '../../types/sessionStorageEnums';
import { RoutePath } from '../../types/navigationEnums';
import ToastNotification, {
  ToastRefObject,
} from '../Notifications/ToastNotification/ToastNotification';
import { NotificationType } from '../../utils/notificationUtils';

interface LoginUser {
  email: string;
  password: string;
}

function LoginForm() {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const navigate = useNavigate();
  const toastRef = useRef<ToastRefObject>(null);

  const { data } = useFetch<LoginUserData>(Endpoint.USER);

  const showNotification = (errorText: string) => {
    if (toastRef.current) {
      toastRef.current.showToast(errorText, NotificationType.WARNING);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginUser: LoginUser = {
      email: emailInput,
      password: passwordInput,
    };

    try {
      if (!data) {
        showNotification('No data from database was received');
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
        showNotification('Email or password You have provided are incorrect. Please try again.');
      }
    } catch (fetchError) {
      showNotification('Error fetching data');
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
                    showNotification('Logic for reset password button will be added shortly');
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
      <ToastNotification toastRef={toastRef} />
    </>
  );
}

export default LoginForm;
