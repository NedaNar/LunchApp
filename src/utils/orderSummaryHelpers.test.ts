import { CartItem, MealItem } from '../components/OrderSummary/cartContext';
import { calculateAndFormatTotalCartPrice, groupMealByDay } from './orderSummaryHelpers';

enum DishType {
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

const mockCartData: CartItem[] = [
  { selectedDay: 'Monday', meal: { title: 'test', dishType: DishType.Bowl, price: 10 } },
  { selectedDay: 'Monday', meal: { title: 'test2', dishType: DishType.Burger, price: 12 } },
];

describe('groupMealByDay', () => {
  it('should group cart items into meal items where key is weekday', () => {
    expect(groupMealByDay(mockCartData)).toMatchObject({
      Monday: [
        { dishType: DishType.Bowl, price: 10, title: 'test' },
        { title: 'test2', dishType: DishType.Burger, price: 12 },
      ] as MealItem[],
    });
  });
});

describe('calculateAndFormatTotalCartPrice', () => {
  it('should sum all prices of cart items and format price output number', () => {
    expect(calculateAndFormatTotalCartPrice(mockCartData)).toEqual('22.00');
  });
});
