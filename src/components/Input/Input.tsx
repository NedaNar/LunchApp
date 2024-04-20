import styles from './input.module.scss';
import SearchIcon from '../../assets/static/icons/icon_search.svg?react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  disabled?: boolean;
  icon?: boolean;
  label: string;
  name: string;
}

export function Input({
  error = false,
  disabled = false,
  icon = false,
  label,
  name,
  ...rest
}: InputProps) {
  return (
    <div className={`${styles.wrapper} ${disabled ? styles.wrapperDisabled : ''}`}>
      {icon && <SearchIcon className={styles.inputIcon} />}
      <label htmlFor={name} className={`${styles.label} ${disabled ? styles.labelDisabled : ''}`}>
        {label}
      </label>
      <input
        id={name}
        {...rest}
        disabled={disabled}
        className={`${styles.input} ${error ? styles.inputError : ''} ${icon ? styles.inputIconPlaceholder : ''}`}
      />
    </div>
  );
}

// USE CASE
// import { Input } from './components/Input/Input';

// <Input label="Your string for label" name="string for label-name and input-id"/>
// You can pass states:   error | disabled
//   <Input label="Your label" name="string" error />
//   you can pass all props from HTML <input> element attributes: type | placeholder | autofocus | value | pattern | and all others
//   <Input label="Your label" name="string" disable placeholder="text in place holder" />
