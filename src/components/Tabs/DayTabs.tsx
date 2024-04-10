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

  const handleTabChange = (index: number) => {
    onTabChange(workdays[index]);
  };

  return <Tabs tabs={workdays} onTabChange={handleTabChange} />;
}

export default DayTabs;
