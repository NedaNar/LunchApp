import styles from './App.module.scss';
import IconButton, { IconButtonSize, IconButtonType } from './components/IconButton/IconButton';
import ProfileButton from './components/IconButton/ProfileButton';
import './styles/index.scss';

export function App() {
  const handleClick = () => {};

  return (
    <div className={styles.container}>
      <h1>Welcome to Sourcery for FrontEnd 2024</h1>
      <p>You can delete all this HTML code and start working on your Lunch App</p>
      <IconButton icon={IconButtonType.ACCENT} />
      <IconButton size={IconButtonSize.SMALL} icon={IconButtonType.ACCENT} />
      <IconButton
        type={IconButtonType.OUTLINED}
        size={IconButtonSize.MEDIUM}
        icon={IconButtonType.OUTLINED}
      />
      <IconButton
        type={IconButtonType.OUTLINED}
        size={IconButtonSize.SMALL}
        icon={IconButtonType.OUTLINED}
      />
      <IconButton
        type={IconButtonType.TERTIARY}
        size={IconButtonSize.MEDIUM}
        icon={IconButtonType.TERTIARY}
      />
      <IconButton
        type={IconButtonType.TERTIARY}
        size={IconButtonSize.SMALL}
        icon={IconButtonType.TERTIARY}
      />
      <ProfileButton onClick={handleClick} />
    </div>
  );
}
