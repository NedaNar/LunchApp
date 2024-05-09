// import { useState } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
// import styles from './App.module.scss';
// import './styles/index.scss';
// // import Navigation from './components/navigation/Navigation';
// // import Header from './components/Header/Header';
// import Navigation from './components/navigation/Navigation';
// import { Button, ButtonAppearance, ButtonSize } from './components/RegularButton/Button';
// import UserProfile from './components/UserProfile/UserProfile';

// export function App() {
//   // This const is needed in parent element for navigation state
//   const [collapsed, setCollapsed] = useState(false);

//   // this is a temporary solution to handle logout
//   const navigate = useNavigate();
//   const handleLogOut = () => {
//     sessionStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div className={styles.container}>
//       <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />
//       <div>
//         {/* div for any element in layout */}

//         {/* this is a temporary solution to handle logout */}
//         <div className={styles.logOut}>
//           <Button
//             text="Log Out"
//             appearance={ButtonAppearance.PRIMARY}
//             size={ButtonSize.SMALL}
//             onClick={handleLogOut}
//           />
//         </div>

//         <div className={styles.userProfile}>
//           <UserProfile />
//         </div>
//       </div>
//       <div className={collapsed ? styles['content--collapsed'] : styles.content}>
//         <Outlet />
//         {/* <Outlet> allows to render 'child route' elements, so components can be placed on page  */}
//       </div>
//     </div>
//   );
// }

export default function App() {}
