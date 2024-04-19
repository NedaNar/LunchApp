import styles from './foodMenuPage.module.scss';
import FoodCard from '../../components/FoodCard/FoodCard';
import { DishType } from '../../components/FoodCard/helpers';

export default function FoodMenuPage() {
  return (
    <>
      <h1> This is Food Menu Page</h1>

      {/* div tag below with className={styles.containar} added for temporary styling, and can be changed or removed */}
      <div className={styles.containar}>
        <FoodCard
          vendor="Tasty Bites"
          title="Pho Rice Noodle Soup with Tofu"
          description="Rice udon noodles in  shiitake stock, fried shredded tofu. Garnish..."
          price={5.65}
          picture={DishType.Bowl}
          isVegetarian
          isSpicy
          rating={5.0}
        />
      </div>
    </>
  );
}
