import { v4 as uuidv4 } from 'uuid';
import { DishType } from '../components/FoodCard/helpers';
import { CartItem, MealItem } from '../components/OrderSummary/cartContext';

interface ReduceAccumulator {
  [key: string]: MealItem[];
}

export const FREE_MEEL_DAY = 'Friday';

export function groupMealByDay(items: CartItem[]) {
  return items.reduce((acc, item) => {
    if (acc[item.selectedDay] === undefined) {
      acc[item.selectedDay] = [];
    }

    acc[item.selectedDay].push({ ...item.meal, orderId: item.id });

    return acc;
  }, {} as ReduceAccumulator);
}

export function generateUniqueId(): string {
  return `order-${uuidv4()}`;
}
export function calculateAndFormatTotalCartPrice(items: CartItem[]) {
  return items
    .reduce((sum, item) => (item.selectedDay !== FREE_MEEL_DAY ? item.meal.price + sum : sum), 0)
    .toFixed(2)
    .replace('.', ',');
}

export function checkForFridayMeal(
  items: CartItem[],
  newItem: { selectedDay: string; meal: MealItem }
): boolean {
  if (newItem.selectedDay === FREE_MEEL_DAY) {
    if (newItem.meal.dishType === DishType.Soup) {
      return (
        items.filter(
          (cartItem) =>
            cartItem.meal.dishType === DishType.Soup && cartItem.selectedDay === FREE_MEEL_DAY
        ).length > 0
      );
    }
    return (
      items.filter(
        (cartItem) =>
          cartItem.meal.dishType !== DishType.Soup && cartItem.selectedDay === FREE_MEEL_DAY
      ).length > 0
    );
  }

  return false;
}
