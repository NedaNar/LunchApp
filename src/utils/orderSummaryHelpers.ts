import { CartItem, MealItem } from '../components/OrderSummary/cartContext';

interface ReduceAccumulator {
  [key: string]: MealItem[];
}

export function groupMealByDay(items: CartItem[]) {
  return items.reduce((acc, item) => {
    if (acc[item.selectedDay] === undefined) {
      acc[item.selectedDay] = [];
    }

    acc[item.selectedDay].push(item.meal);

    return acc;
  }, {} as ReduceAccumulator);
}

export function calculateAndFormatTotalCartPrice(items: CartItem[]) {
  return items.reduce((sum, item) => item.meal.price + sum, 0).toFixed(2);
}
