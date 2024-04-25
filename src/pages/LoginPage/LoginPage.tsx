import { Input } from '../../components/Input/Input';
// import styles from './loginPage.module.scss';

export default function LoginPage() {
  return (
    <div>
      <Input label="Email" name="email" type="email" placeholder="test@gmail.com" />
      <Input label="Password" name="password" type="password" placeholder="Password" />
    </div>
  );
}
