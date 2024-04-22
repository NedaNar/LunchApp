import { useState, useEffect } from 'react';
import useFetch, { Endpoint } from '../../api/useDataFetching';
import FoodCard from '../../components/FoodCard/FoodCard';
import DayTabs from '../../components/Tabs/DayTabs';
import styles from './foodMenuPage.module.scss';
import { MealData, RatingData, VendorData } from '../../api/apiModel';

export default function FoodMenuPage() {
  const [filteredMeals, setFilteredMeals] = useState<MealData[]>([]);

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

  const getCurrentDay = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  useEffect(() => {
    filterMeals(getCurrentDay());
  }, [mealData]);

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
      <h1>Food Menu page</h1>
      <DayTabs onTabChange={filterMeals} />
      <div className={styles.container}>
        {(mealLoading || vendorLoading || ratingLoading) && <h2>Loading...</h2>}
        {mealError && <h2>Error getting meal data</h2>}
        {!(mealLoading || vendorLoading || ratingLoading) &&
          !mealError &&
          filteredMeals?.length === 0 && <h2>No dishes ready for today</h2>}
        {!(mealLoading || vendorLoading || ratingLoading) && !mealError && (
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
