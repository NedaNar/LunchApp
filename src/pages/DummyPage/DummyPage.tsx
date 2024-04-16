import styles from './dummyPage.module.scss';
import IconButton, {
  IconButtonSize,
  IconButtonType,
  IconButtonIcon,
} from '../../components/IconButton/IconButton';
import ProfileButton from '../../components/IconButton/ProfileButton';
import {
  Button,
  ButtonAppearance,
  ButtonSize,
  ButtonIcon,
} from '../../components/RegularButton/Button';
import DayTabs from '../../components/Tabs/DayTabs';

export default function DummyPage() {
  const handleClick = () => {};
  // const handleTabChange = (day: string) => {
  //   console.log('Selected day :', day);
  // };

  return (
    <div className={styles.dummyPage}>
      <div className={`${styles.comp} ${styles.buttonContainer}`}>
        <h2>Regular Buttons</h2>
        <Button
          text="Click me"
          appearance={ButtonAppearance.PRIMARY}
          size={ButtonSize.LARGE}
          icon={ButtonIcon.ADD}
          onClick={() => {}}
        />
        <Button
          text="Click me"
          appearance={ButtonAppearance.SECONDARY}
          size={ButtonSize.MEDIUM}
          icon={ButtonIcon.ARROW}
          onClick={() => {}}
        />
        <Button
          text="Click me"
          appearance={ButtonAppearance.TERTIARY}
          size={ButtonSize.SMALL}
          icon={ButtonIcon.NONE}
          onClick={() => {}}
        />
      </div>

      <div className={`${styles.comp} ${styles.buttonContainer}`}>
        <h2>Icon Buttons</h2>
        <IconButton />
        <IconButton size={IconButtonSize.SMALL} />
        <IconButton type={IconButtonType.OUTLINED} icon={IconButtonIcon.LOOP} />{' '}
        <IconButton
          type={IconButtonType.OUTLINED}
          size={IconButtonSize.SMALL}
          icon={IconButtonIcon.LOOP}
        />
        <IconButton type={IconButtonType.TERTIARY} icon={IconButtonIcon.CLOSE} />{' '}
        <IconButton
          type={IconButtonType.TERTIARY}
          size={IconButtonSize.SMALL}
          icon={IconButtonIcon.CLOSE}
        />
        <ProfileButton onClick={handleClick} />
      </div>

      <div className={styles.comp}>
        <h2>Tabs</h2>
        <DayTabs onTabChange={handleClick} />
      </div>
    </div>
  );
}
