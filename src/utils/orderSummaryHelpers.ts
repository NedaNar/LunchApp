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

// -------------------------------------------------------------------------
// ____________________________example______________________________________
// ____________generic function for "groupMealByDay function"_______________
//

// interface Item<T = any> {
//   [key: string]: T;
// }

// interface MapItems<T> {
//   [key: string]: Item<T>[];
// }

// export function mapItemsToSomethings<T extends Item>(
//   array: T[],
//   key: keyof T,
//   targetKey: keyof T
// ): MapItems<T> {
//   return array.reduce((acc: MapItems<T>, item) => {
//     const itemKey = String(item[key]);
//     if (acc[itemKey] === undefined) {
//       acc[itemKey] = [];
//     }
//     acc[itemKey].push(item[targetKey]);

//     return acc;
//   }, {});
// }

// generic function call example
// const mappedMealsByDay = mapItemsToSomethings(items, 'selectedDay', 'meal');

// -------------------------------------------------------------------------------------
