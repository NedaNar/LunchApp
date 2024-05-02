import styles from './dropdown.module.scss';

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
        <button type="button" key={option} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Dropdown;
