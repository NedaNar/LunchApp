import { useState, useEffect } from 'react';
import useFetch, { Endpoint } from '../../api/useDataFetching';
import FoodCard from '../../components/FoodCard/FoodCard';
import DayTabs from '../../components/Tabs/DayTabs';
import styles from './foodMenuPage.module.scss';
import { MealData, RatingData, VendorData } from '../../api/apiModel';
import {
  NotificationType,
  StaticNotification,
} from '../../components/StaticNotification/StaticNotification';
import { getCurrentDay } from '../../utils/dateUtils';

function FoodCardsLayout() {
  const [filteredMeals, setFilteredMeals] = useState<MealData[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>(getCurrentDay());

  const {
    data: mealData,
    loading: mealLoading,
    error: mealError,
  } = useFetch<MealData[]>(Endpoint.MEALS);

  const { data: vendorData, loading: vendorLoading } = useFetch<VendorData[]>(Endpoint.VENDORS);

  const {
    data: ratingData,
    loading: ratingLoading,
    error: ratingError,
  } = useFetch<RatingData[]>(Endpoint.RATINGS);

  const filterMeals = (day: string) => {
    if (mealData == null) return;
    setFilteredMeals(mealData.filter((meal) => meal.weekDays.includes(day)));
  };

  useEffect(() => {
    filterMeals(getCurrentDay());
  }, [mealData]);

  const handleTabChange = (day: string) => {
    setSelectedDay(day);
    filterMeals(day);
  };

  const canOrder = () => getCurrentDay() !== selectedDay || new Date().getHours() < 11;

  const getVendor = (vendorId: number) => {
    const vendor = vendorData?.find((item) => item.id === vendorId.toString());
    return vendor ? vendor.name : '';
  };

  const getRating = (mealId: string) => {
    const ratings = ratingData?.filter((item) => item.mealId.toString() === mealId);

    if (ratingError) return '';
    if (!ratings || ratings.length === 0) return 'Not rated';

    const totalRating = ratings.reduce((acc, curr) => acc + curr.rating.rating, 0);
    return totalRating / ratings.length;
  };

  return (
    <>
      <DayTabs onTabChange={handleTabChange} />
      <div className={styles.container}>
        {(mealLoading || vendorLoading || ratingLoading) && (
          <StaticNotification text="Loading..." type={NotificationType.INFO} />
        )}
        {mealError && (
          <StaticNotification text="Error getting meals." type={NotificationType.WARNING} />
        )}
        {!(mealLoading || vendorLoading || ratingLoading) &&
          !mealError &&
          filteredMeals?.length === 0 && (
            <StaticNotification text="No dishes ready for today." type={NotificationType.WARNING} />
          )}
        {!(mealLoading || vendorLoading || ratingLoading) && !mealError && !canOrder() && (
          <StaticNotification text="Orders no longer accepted." type={NotificationType.INFO} />
        )}
        {!(mealLoading || vendorLoading || ratingLoading) && !mealError && canOrder() && (
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
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default FoodCardsLayout;
