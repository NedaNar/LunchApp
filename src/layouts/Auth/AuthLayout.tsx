import { Outlet } from 'react-router-dom';
// import LoginPage from '../../pages/LoginPage/LoginPage';

export default function AuthLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 300, height: 300 }} />
      <Outlet />
      {/* <LoginPage /> */}
      <p>čia yra AuthLayout</p>
    </div>
  );
}
