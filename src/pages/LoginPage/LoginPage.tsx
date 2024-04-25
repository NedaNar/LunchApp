import { Input } from '../../components/Input/Input';

export default function LoginPage() {
  return (
    <div className="pageContent">
      <Input label="Email" name="email" type="email" placeholder="test@gmail.com" />
      <Input label="Password" name="password" type="password" placeholder="Password" />
    </div>
  );
}
