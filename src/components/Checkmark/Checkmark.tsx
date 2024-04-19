import { useState } from 'react';
import styles from './checkmark.module.scss';

export interface CheckmarkProps {
  label: string;
  error?: boolean;
  disabled?: boolean;
  id: string;
}

function Checkmark({ label, error = false, disabled = false, id }: CheckmarkProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    if (!error) {
      setIsChecked((prev) => !prev);
    }
  };

  return (
    <div
      className={`${styles.checkboxWrapper} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}>
      <label htmlFor={`${id}-checkbox`}>
        <input
          defaultChecked={false}
          onChange={handleChange}
          type="checkbox"
          id={`${id}-checkbox`}
          className={isChecked ? styles.checked : ''}
          checked={isChecked}
          aria-checked={isChecked}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkmark;

// Use case:
// <Checkmark label='Label text' id='label-text' />
// <Checkmark label='Label text' id='label-text' disabled />
// <Checkmark label='Label text' id='label-text' error />
