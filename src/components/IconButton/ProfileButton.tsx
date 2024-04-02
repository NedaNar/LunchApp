/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import styles from './iconButton.module.scss';
import ProfileCarretIcon from '../../assets/iconbuttonsvg/ProfileCarretIcon.svg?react';

// interface ProfileButtonProps {
//     onClick: () => void;
// }

const ProfileButton: React.FC = function ProfileButton() {
  // ProfileButtonProps
  return (
    <button
      aria-label="Profile Options"
      type="button"
      className={`${styles.positioning} ${styles['profile-button']}`}
      // onClick={onClick}
    >
      <ProfileCarretIcon />
    </button>
  );
};

export default ProfileButton;
