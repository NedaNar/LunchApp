import { useEffect, useState } from 'react';
import { getCurrentWeekdayName } from '../../utils/dateUtils';
import Tabs from './Tabs';

// USAGE
// const handleTabChange = (day: string) => {
//   console.log('Selected day :', day);
// };
// <DayTabs onTabChange={handleTabChange}/>

interface DayTabsProps {
  onTabChange: (day: string) => void;
}

function DayTabs({ onTabChange }: DayTabsProps) {
  const PHONE_MAX_WIDTH = 599;

  const workdaysLong = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const workdaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const [isPhoneScreen, setisPhoneScreen] = useState(false);
  const [workdays, setWorkdays] = useState(workdaysLong);

  const handleResize = () => setisPhoneScreen(window.innerWidth <= PHONE_MAX_WIDTH);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setWorkdays(isPhoneScreen ? workdaysShort : workdaysLong);
  }, [isPhoneScreen]);

  const currentDayIndex = workdaysLong.indexOf(getCurrentWeekdayName());

  const disabledTabs =
    currentDayIndex !== -1
      ? Array.from({ length: currentDayIndex }, (_, i) => i)
      : Array.from({ length: 5 }, (_, i) => i);

  const handleTabChange = (index: number) => {
    onTabChange(workdaysLong[index]);
  };

  return (
    <Tabs
      tabs={workdays}
      onTabChange={handleTabChange}
      preselectedTab={currentDayIndex}
      disabledTabs={disabledTabs}
    />
  );
}

export default DayTabs;
