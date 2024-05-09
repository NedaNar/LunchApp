import { DishType } from '../components/FoodCard/helpers';

interface Order {
  weekDay: string;
  mealIds: number[];
}

interface OrderHistoryItem {
  date: string;
  mealIds: number[];
}

export interface LoginUserData {
  email?: string | null;
  password?: string | null;
  id?: string | null;
}

export interface UserData {
  id: string;
  userName: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  balance: number;
  img?: string;
  orders: Order[];
  orderHistory: OrderHistoryItem[];
}

export interface MealData {
  id: string;
  vendorId: number;
  title: string;
  description: string;
  price: number;
  orderCount: number;
  weekDays: string[];
  vegetarian: boolean;
  spicy: boolean;
  mealType: string;
  dishType: DishType;
}

export interface VendorData {
  id: string;
  name: string;
}

interface Rating {
  userId: number;
  rating: number;
  comment: string;
}

export interface RatingData {
  mealId: number;
  rating: Rating;
  id: string;
}
