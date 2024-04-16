import Header from '../components/Header/Header';
// import DayTabs from '../components/Tabs/DayTabs';

export default function FoodMenuPage() {
  // const handleTabChange = (day: string) => {
  //   // console.log('Selected day :', day);
  // };
  return (
    <>
      <Header page="lunchMenu" />
      {/* <div className="meals"><DayTabs onTabChange={handleTabChange} /></div> */}
      <div className="order">Order Summary</div>
    </>
  );
}
