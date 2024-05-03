import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './iconButton.module.scss';
import ProfileCarretIcon from '../../assets/iconbuttonsvg/ProfileCarretIcon.svg?react';
import Dropdown from '../Dropdown/Dropdown';

interface ProfileButtonProps {
  onClick: () => void;
  dropdownOptions: string[];
}

function ProfileButton({ onClick, dropdownOptions }: ProfileButtonProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionSelect = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
    handleDropdownToggle();
  };

  return (
    <div className={styles.profileButtonWrapper} ref={dropdownRef}>
      <button
        aria-label="Profile Options"
        type="button"
        className={`${styles.positioning} ${styles['profile-button']}`}
        onClick={() => {
          onClick();
          handleDropdownToggle();
        }}>
        <ProfileCarretIcon />
      </button>
      {dropdownVisible && <Dropdown options={dropdownOptions} onSelect={handleOptionSelect} />}
    </div>
  );
}

export default ProfileButton;
