import { getCurrentDay } from '../../utils/dateUtils';
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
  const workdays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const currentDayIndex = workdays.indexOf(getCurrentDay());

  const disabledTabs =
    currentDayIndex !== -1
      ? Array.from({ length: currentDayIndex }, (_, i) => i)
      : Array.from({ length: 5 }, (_, i) => i);

  const handleTabChange = (index: number) => {
    onTabChange(workdays[index]);
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
