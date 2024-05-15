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

const mockCart1Data: CartItem[] = [
  {
    selectedDay: 'Monday',
    id: 'order-xxx',
    meal: { title: 'test1', orderId: 'order-xxx', dishType: DishType.Bowl, price: 5 },
  },
  {
    selectedDay: 'Monday',
    id: 'order-xxx',
    meal: { title: 'test2', orderId: 'order-xxx', dishType: DishType.Burger, price: 10 },
  },
  {
    selectedDay: 'Friday',
    id: 'order-xxx',
    meal: { title: 'test3', orderId: 'order-xxx', dishType: DishType.Pizza, price: 13.556 },
  },
];

describe('groupMealByDay', () => {
  it('should group cart items into meal items where key is weekday', () => {
    expect(groupMealByDay(mockCart1Data)).toMatchObject({
      Monday: [
        { dishType: DishType.Bowl, price: 5, title: 'test1' },
        { title: 'test2', orderId: 'order-xxx', dishType: DishType.Burger, price: 10 },
      ] as MealItem[],
      Friday: [
        { title: 'test3', orderId: 'order-xxx', dishType: DishType.Pizza, price: 13.556 },
      ] as MealItem[],
    });
  });
});

describe('calculateAndFormatTotalCartPrice', () => {
  it('should sum all prices of cart items and format price output number', () => {
    expect(calculateAndFormatTotalCartPrice(mockCart1Data)).toEqual('28.56');
  });
});

describe('calculateAndFormatTotalCartPrice', () => {
  const mockCartData: CartItem[] = [
    {
      selectedDay: 'Monday',
      id: 'order-xxx',
      meal: { title: 'test6', orderId: 'order-xxx', dishType: DishType.Burger, price: 5.554 },
    },
    {
      selectedDay: 'Friday',
      id: 'order-xxx',
      meal: { title: 'test7', orderId: 'order-xxx', dishType: DishType.Pizza, price: 0 },
    },
  ];

  it('should sum all prices of cart items and format price output number', () => {
    expect(calculateAndFormatTotalCartPrice(mockCartData)).toEqual('5.55');
  });
});

describe('groupMealByDay', () => {
  const mockCartData: CartItem[] = [
    {
      selectedDay: 'Monday',
      id: 'order-xxx',
      meal: { title: 'test5', orderId: 'order-xxx', dishType: DishType.Bowl, price: 5 },
    },
    {
      selectedDay: 'Sunday',
      id: 'order-xxx',
      meal: { title: 'test5', orderId: 'order-xxx', dishType: DishType.Pasta, price: 5 },
    },
  ];

  it('if selectedDay dosent match data do not push data into array', () => {
    expect(groupMealByDay(mockCartData)).toMatchObject({
      Monday: [{ dishType: DishType.Bowl, price: 5, title: 'test5' }] as MealItem[],
    });
  });
});

describe('groupMealByDay', () => {
  const mockCartData: CartItem[] = [
    {
      selectedDay: '',
      id: 'order-xxx',
      meal: { title: 'test5', orderId: 'order-xxx', dishType: DishType.Bowl, price: 5 },
    },
    {
      selectedDay: '',
      id: 'order-xxx',
      meal: { title: 'test5', orderId: 'order-xxx', dishType: DishType.Pasta, price: 5 },
    },
  ];

  it('if selectedDay is undefined do not push data into array', () => {
    expect(groupMealByDay(mockCartData)).toMatchObject({});
  });
});
