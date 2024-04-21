// import styles from './foodMenuPage.module.scss';
import Header from '../../components/Header/Header';
import FoodCard from '../../components/FoodCard/FoodCard';
import { DishType } from '../../components/FoodCard/helpers';

export default function FoodMenuPage() {
  return (
    <div>
      {/* <h1> This is Food Menu Page</h1> */}
      <div>
        <Header page="lunchMenu" />
      </div>

      <div>
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
    </div>
  );
}
