import { useState, useEffect } from 'react';
import useFetch, { Endpoint } from '../../api/useDataFetching';
import FoodCard from '../../components/FoodCard/FoodCard';
import DayTabs from '../../components/Tabs/DayTabs';
import styles from './foodMenuPage.module.scss';
import { MealData, RatingData, VendorData } from '../../api/apiModel';
import {
  NotificationType,
  StaticNotification,
} from '../../components/Notifications/StaticNotification/StaticNotification';
import { STOP_ORDERS_HOUR, getCurrentWeekdayName } from '../../utils/dateUtils';
import Filters from '../../components/Filters/Filters';

function FoodCardsLayout() {
  const [filteredMeals, setFilteredMeals] = useState<MealData[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>(getCurrentWeekdayName());

  const { data: mealData, loading, error } = useFetch<MealData[]>(Endpoint.MEALS);
  const { data: vendorData } = useFetch<VendorData[]>(Endpoint.VENDORS);
  const { data: ratingData } = useFetch<RatingData[]>(Endpoint.RATINGS);

  const filterMeals = (searchTerm: string) => {
    const filteredBySearch = mealData?.filter((meal) =>
      meal.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredByDay = filteredBySearch?.filter((meal) => meal.weekDays.includes(selectedDay));
    setFilteredMeals(filteredByDay || []);
  };

  const handleSearchButtonClick = (searchTerm: string) => {
    filterMeals(searchTerm);
  };

  useEffect(() => {
    filterMeals('');
  }, [mealData, selectedDay]);

  const handleTabChange = (day: string) => {
    setSelectedDay(day);
  };

  const canOrder = () =>
    getCurrentWeekdayName() !== selectedDay || new Date().getHours() < STOP_ORDERS_HOUR;

  const getVendor = (vendorId: number) => {
    const vendor = vendorData?.find((item) => item.id === vendorId.toString());
    return vendor ? vendor.name : '';
  };

  const getRating = (mealId: string) => {
    const ratings = ratingData?.filter((item) => item.mealId.toString() === mealId);

    if (!ratings) return '';
    if (!ratings?.length) return 'Not rated';

    const totalRating = ratings.reduce((acc, curr) => acc + curr.rating.rating, 0);
    return totalRating / ratings.length;
  };

  return (
    <>
      <DayTabs onTabChange={handleTabChange} />
      <Filters onSearchButtonClick={handleSearchButtonClick} />
      <div className={styles.cardsContainer}>
        {loading && <StaticNotification text="Loading..." type={NotificationType.INFO} />}
        {error && (
          <StaticNotification text="Error getting meals." type={NotificationType.WARNING} />
        )}
        {!loading && !error && filteredMeals?.length === 0 && (
          <StaticNotification text="No dishes ready for today." type={NotificationType.INFO} />
        )}
        {!loading && !error && filteredMeals?.length !== 0 && !canOrder() && (
          <StaticNotification text="Orders no longer accepted." type={NotificationType.INFO} />
        )}
        {!loading && !error && canOrder() && (
          <div className={styles.mealContainer}>
            {filteredMeals.map((meal) => (
              <FoodCard
                key={meal.id}
                vendor={getVendor(meal.vendorId)}
                title={meal.title}
                description={meal.description}
                price={meal.price}
                picture={meal.dishType}
                isVegetarian={meal.vegetarian}
                isSpicy={meal.spicy}
                rating={getRating(meal.id)}
                weekday={selectedDay}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default FoodCardsLayout;
