import { useState } from 'react';
import TabButton from './TabButton';
import styles from './tabs.module.scss';

interface TabsProps {
  tabs: string[];
  onTabChange: (index: number) => void;
  defaultSelectedTab?: number;
  isUppercase?: boolean;
}

function Tabs({ tabs, onTabChange, isUppercase, defaultSelectedTab }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState<number | undefined>(defaultSelectedTab);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    onTabChange(index);
  };

  return (
    <div className={`${styles.container}`}>
      <hr className={`${styles.separator}`} />
      <ul className={`${styles.tabs}`}>
        {tabs.map((tab, index) => (
          <TabButton
            key={tab}
            text={isUppercase ? tab.toUpperCase() : tab}
            onClick={() => handleTabClick(index)}
            selected={index === selectedTab}
          />
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
