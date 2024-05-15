import { createContext } from 'react';
import { DishType } from '../FoodCard/helpers';

export interface MealItem {
  dishType: DishType;
  title: string;
  orderId?: string;
  price: number;
  id: string;
  vendor: string;
}

export interface CartItem {
  selectedDay: string;
  id?: string;
  meal: MealItem;
}

export interface CartContext {
  items: CartItem[];
  expanded: boolean;
  addToCart: (meal: CartItem) => void;
  removeFromCart: (toRemoveItem: MealItem) => void;
  setExpanded: (value: boolean) => void;
  removeAllItems: () => void;
}

export default createContext({
  items: [],
  removeAllItems: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  expanded: true,
  setExpanded: () => {},
} as CartContext);
