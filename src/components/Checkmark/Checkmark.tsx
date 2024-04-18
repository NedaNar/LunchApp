import { useState } from 'react';
import styles from './checkmark.module.scss';

export interface CheckmarkProps {
  label: string;
  error?: boolean;
  disabled?: boolean;
}

function Checkmark({ label, error, disabled }: CheckmarkProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    if (!error) {
      setIsChecked((prev) => !prev);
    }
  };

  return (
    <div
      className={`${styles.checkboxWrapper} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}>
      <label htmlFor="checkbox">
        <input
          defaultChecked={false}
          onChange={handleChange}
          type="checkbox"
          id="checkbox"
          className={isChecked ? 'checked' : ''}
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
// <Checkmark label='Label text' />
// <Checkmark label='Label text' disabled />
// <Checkmark label='Label text' error />
