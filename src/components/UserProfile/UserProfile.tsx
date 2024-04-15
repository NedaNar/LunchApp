import ProfileButton from '../IconButton/ProfileButton';
import IconButton, { IconButtonIcon, IconButtonType } from '../IconButton/IconButton';
import useDataFetching from '../DataFetching/useDataFetching';
import styles from './userProfile.module.scss';

interface Order {
  weekDay: string;
  mealIds: number[];
}

interface OrderHistoryItem {
  date: string;
  mealIds: number[];
}

interface UserData {
  name: string;
  surname: string;
  img?: string;
  balance: number;
  orders: Order[];
  orderHistory: OrderHistoryItem[];
}

function UserProfile() {
  const { data, loading } = useDataFetching<UserData>('user');

  if (loading) return <h1>LOADING...</h1>;

  if (!data) return null;

  const orderCount = data.orders.length;

  const handleClick = () => {};

  return (
    <div className={styles.userProfile}>
      <div className={styles.profileSection}>
        {data.img && (
          <div className={styles.profileAvatar}>
            <img src={data.img} style={{ borderRadius: '50%' }} alt="User Avatar" />
          </div>
        )}
        <ProfileButton onClick={handleClick} />
        <p className={styles.username}>
          {data.name} {data.surname}
        </p>
      </div>
      <div className={styles.balanceSection}>
        <div className={styles.balance}>
          <p>Balance</p>
          <p>€{data.balance}</p>
        </div>
        <div className={styles.line} />
        <div className={styles.cartOrders}>
          <IconButton type={IconButtonType.OUTLINED} icon={IconButtonIcon.CART} />
          <p className={styles.circle}> {orderCount}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
