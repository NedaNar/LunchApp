import { createContext } from 'react';
import { DishType } from '../FoodCard/helpers';

export interface MealItem {
  dishType: DishType;
  title: string;
  orderId?: string;
  price: number;
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
  toggleSummaryRef: React.RefObject<HTMLButtonElement> | null;
}

export default createContext({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  expanded: true,
  setExpanded: () => {},
  toggleSummaryRef: null,
} as CartContext);
