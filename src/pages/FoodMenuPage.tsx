import FoodCard from '../components/FoodCard/FoodCard';
import { DishType } from '../components/FoodCard/helpers';

export default function FoodMenuPage() {
  return (
    <>
      <h1>Food Menu page</h1>
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
    </>
  );
}
