// USECASE:
// npm install uuid

import { v4 as uuidv4 } from 'uuid';
import { DishType } from '../components/FoodCard/helpers';
import { CartItem, MealItem } from '../components/OrderSummary/cartContext';
import { Order, UserData } from '../api/apiModel';

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
    .toFixed(2);
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
  // const existingOrdersMap = new Map(
  //   existingOrders.map((order) => [order.weekDay, order.mealIds])
  // );
  // for (const day of Object.keys(mappedMealsByDay)) {
  //   const newMealIds = mappedMealsByDay[day].map((meal) => Number(meal.id));
  //   const existingMealIds = existingOrdersMap.get(day) || [];
  //   const mergedMealIds = [...new Set([...existingMealIds, ...newMealIds])];
  //   existingOrdersMap.set(day, mergedMealIds);
  // }

  // const updatedOrders = Array.from(existingOrdersMap.entries()).map(([weekDay, mealIds]) => ({
  //   weekDay,
  //   mealIds,
  // }));

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
