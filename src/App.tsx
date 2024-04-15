import styles from './App.module.scss';
import FoodCard from './components/FoodCard/FoodCard';
import { DishType } from './components/FoodCard/helpers';
import './styles/index.scss';

export function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Sourcery for FrontEnd 2024</h1>
      <p>You can delete all this HTML code and start working on your Lunch App</p>
      <hr />
      <br />
      <br />
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
  );
}
