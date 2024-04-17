import styles from './foodMenuPage.module.scss';
import Header from '../../components/Header/Header';
import FoodCard from '../../components/FoodCard/FoodCard';
import { DishType } from '../../components/FoodCard/helpers';

export default function FoodMenuPage() {
  return (
    <>
      <Header page="lunchMenu" />

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
