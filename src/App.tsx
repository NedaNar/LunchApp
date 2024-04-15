import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import FoodCard from './components/FoodCard/FoodCard';
import { DishType } from './components/FoodCard/helpers';
import './styles/index.scss';
import Navigation from './components/navigation/Navigation';

export function App() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Outlet />
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
