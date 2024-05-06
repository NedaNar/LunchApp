import { createContext } from 'react';
import { DishType } from '../components/FoodCard/helpers';

export interface MealItem {
  dishType: DishType;
  title: string;
  price: number;
}

export interface CartItem {
  selectedDay: string;
  meal: MealItem;
}

export interface CartContext {
  items: CartItem[];
  expanded: boolean;
  addToCart: (meal: CartItem) => void;
  setExpanded: (value: boolean) => void;
}

export default createContext({
  items: [],
  addToCart: () => {},
  expanded: true,
  setExpanded: () => {},
} as CartContext);
