import styles from './App.module.scss';
import IconButton, {
  IconButtonSize,
  IconButtonType,
  IconButtonIcon,
} from './components/IconButton/IconButton';
import ProfileButton from './components/IconButton/ProfileButton';
import './styles/index.scss';
import UserProfile from './components/UserProfile/UserProfile';

export function App() {
  const handleClick = () => {};

  return (
    <div className={styles.container}>
      <h1>Welcome to Sourcery for FrontEnd 2024</h1>
      <p>You can delete all this HTML code and start working on your Lunch App</p>
      <IconButton />
      <IconButton size={IconButtonSize.SMALL} />
      <IconButton type={IconButtonType.OUTLINED} icon={IconButtonIcon.LOOP} />
      <IconButton
        type={IconButtonType.OUTLINED}
        size={IconButtonSize.SMALL}
        icon={IconButtonIcon.LOOP}
      />
      <IconButton type={IconButtonType.TERTIARY} icon={IconButtonIcon.CLOSE} />
      <IconButton
        type={IconButtonType.TERTIARY}
        size={IconButtonSize.SMALL}
        icon={IconButtonIcon.CLOSE}
      />
      <ProfileButton onClick={handleClick} />
      <UserProfile/>
    </div>
  );
}
