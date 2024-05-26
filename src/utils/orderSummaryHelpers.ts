import { v4 as uuidv4 } from 'uuid';
import { CartItem, MealItem } from '../components/OrderSummary/cartContext';
import { Order, UserData } from '../api/apiModel';
import { formatCurrency } from './generalHelpers';

interface ReduceAccumulator {
  [key: string]: MealItem[];
}

export enum DishType {
  Thai = 'thai',
  Burger = 'burger',
  Bowl = 'bowl',
  Sandwich = 'sandwich',
  Steak = 'steak',
  Tacos = 'tacos',
  Salad = 'salad',
  Pizza = 'pizza',
  Soup = 'soup',
  Pasta = 'pasta',
  Wrap = 'wrap',
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
export function calculateAndFormatTotalCartPrice(items: CartItem[], format = true) {
  const total = items.reduce(
    (sum, item) => (item.selectedDay !== FREE_MEEL_DAY ? item.meal.price + sum : sum),
    0
  );
  return format ? formatCurrency(total) : total;
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

export function mergeUserOrders(existingOrders: Order[], items: CartItem[]) {
  const mergedOrders = [...existingOrders];
  items.forEach((item) => {
    const maybeIndex = mergedOrders.findIndex((order) => order.weekDay === item.selectedDay);
    if (maybeIndex > -1) {
      mergedOrders[maybeIndex].mealIds.push(Number(item.meal.id));
    } else {
      mergedOrders.push({ weekDay: item.selectedDay, mealIds: [Number(item.meal.id)] });
    }
  });

  return mergedOrders;
}

export function calculateNewBalance(user: UserData, totalPrice: number) {
  return Number((user.balance - totalPrice).toFixed(2));
}
