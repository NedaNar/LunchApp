import styles from './dropdown.module.scss';
import LogOutIcon from '../../assets/static/icons/icon_logout.svg?react';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

function Dropdown({ options, onSelect }: DropdownProps) {
  const handleClick = (option: string) => {
    onSelect(option);
  };

  return (
    <div className={styles.dropdownWrapper}>
      {options.map((option) => (
        <button
          className={`${styles.dropdownButton}`}
          type="button"
          key={option}
          onClick={() => handleClick(option)}>
          <LogOutIcon />
          {option}
        </button>
      ))}
    </div>
  );
}

export default Dropdown;
