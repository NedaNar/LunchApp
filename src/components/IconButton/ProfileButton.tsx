import styles from './iconButton.module.scss';
import ProfileCarretIcon from '../../assets/iconbuttonsvg/ProfileCarretIcon.svg?react';

interface ProfileButtonProps {
  onClick: () => void;
}

function ProfileButton({ onClick }: ProfileButtonProps) {
  return (
    <button
      aria-label="Profile Options"
      type="button"
      className={`${styles.positioning} ${styles['profile-button']}`}
      onClick={onClick}>
      <ProfileCarretIcon />
    </button>
  );
}

export default ProfileButton;

// import { useState } from 'react';
// import styles from './iconButton.module.scss';
// import ProfileCarretIcon from '../../assets/iconbuttonsvg/ProfileCarretIcon.svg?react';
// import Dropdown from '../Dropdown/Dropdown';

// interface ProfileButtonProps {
//   onClick: () => void;
//   dropdownOptions: string[];
// }

// function ProfileButton({ onClick, dropdownOptions }: ProfileButtonProps) {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const handleDropdownToggle = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleOptionSelect = (option: string) => {
//     alert(option);
//     handleDropdownToggle();
//   };

//   return (
//     <div className={styles.profileButtonWrapper}>
//       <button
//         aria-label="Profile Options"
//         type="button"
//         className={`${styles.positioning} ${styles['profile-button']}`}
//         onClick={onClick}>
//         <ProfileCarretIcon />
//       </button>
//       {dropdownVisible && <Dropdown options={dropdownOptions} onSelect={handleOptionSelect} />}
//     </div>
//   );
// }

// export default ProfileButton;
