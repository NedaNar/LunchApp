import { DishType } from '../components/FoodCard/helpers';
import { CartItem, MealItem } from '../components/OrderSummary/cartContext';

interface ReduceAccumulator {
  [key: string]: MealItem[];
}

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
  return `order-${Math.random().toString(16).slice(2)}`;
}
export function calculateAndFormatTotalCartPrice(items: CartItem[]) {
  return items
    .reduce((sum, item) => (item.selectedDay !== 'Friday' ? item.meal.price + sum : sum), 0)
    .toFixed(2);
}

export function checkForFridayMeal(
  items: CartItem[],
  newItem: { selectedDay: string; meal: MealItem }
): boolean {
  if (newItem.selectedDay === 'Friday') {
    if (newItem.meal.dishType === DishType.Soup) {
      return (
        items.filter(
          (cartItem) =>
            cartItem.meal.dishType === DishType.Soup && cartItem.selectedDay === 'Friday'
        ).length > 0
      );
    }
    return (
      items.filter(
        (cartItem) => cartItem.meal.dishType !== DishType.Soup && cartItem.selectedDay === 'Friday'
      ).length > 0
    );
  }

  return false;
}
