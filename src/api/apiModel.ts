interface Order {
  weekDay: string;
  mealIds: number[];
}

interface OrderHistoryItem {
  date: string;
  mealIds: number[];
}

export interface UserData {
  name: string;
  surname: string;
  img?: string;
  balance: number;
  orders: Order[];
  orderHistory: OrderHistoryItem[];
}
