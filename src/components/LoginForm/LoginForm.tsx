import { FormEvent, useRef, useState } from 'react';
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

interface LoginUser {
  username: string | null;
  password: string | null;
}

function LoginForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const navigate = useNavigate();

  const res = useFetch<LoginUserData>(Endpoint.USER);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginUser: LoginUser = {
      username: emailInputRef.current?.value ?? null,
      password: passwordInputRef.current?.value ?? null,
    };

    try {
      if (!res || !res.data) {
        alert('No data from database was received');
        return;
      }

      const { data } = res;

      if (data.userName === loginUser.username && data.password === loginUser.password) {
        const token = JSON.stringify({
          username: res.data?.userName,
          password: res.data?.password,
        });
        localStorage.setItem('token', token);
        navigate('/');
      } else {
        setError('Username or password You have provided are incorrect. Please try again.');
        setShowDialog(true);
      }
    } catch (fetchError) {
      setError('Error fetching data');
      alert(fetchError);
    }

    if (emailInputRef.current) {
      emailInputRef.current.value = '';
    }
    if (passwordInputRef.current) {
      passwordInputRef.current.value = '';
    }
  };

  return (
    <>
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
                  inputRef={emailInputRef}
                  label="Email"
                  name="Email"
                  type="email"
                  placeholder="example@gmail.com"
                />
                <Input
                  inputRef={passwordInputRef}
                  label="Password"
                  name="Password"
                  type="password"
                />
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
      <div className={styles.notification}>
        {showDialog && (
          <Dialog
            title="Failed to Log In"
            // eslint-disable-next-line
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
