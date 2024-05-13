import useFetch from '../../api/useDataFetching';
import { UserData } from '../../api/apiModel';
import ProfileButton from '../IconButton/ProfileButton';
import IconButton, { IconButtonIcon, IconButtonType } from '../IconButton/IconButton';
import styles from './userProfile.module.scss';
import LogOutIcon from '../../assets/static/icons/icon_logout.svg?react';
import useAuth from '../LoginForm/AuthenticationLogic/useAuth';
import { Endpoint } from '../../api/endpoints';

function UserProfile() {
  const token = useAuth();

  const { data, loading, error } = useFetch<UserData>(Endpoint.USERS, token.id);

  if (loading) return <h1>LOADING...</h1>;

  if (error) return <h1>Error fetching data</h1>;

  if (!data) return null;

  const orderCount = data.orders.length;

  const formattedBalance = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(data.balance);

  const handleClick = () => {};

  return (
    <div className={styles.userProfile}>
      <div className={styles.profileSection}>
        {data.img && (
          <div className={styles.profileAvatar}>
            <img src={data.img} alt="User Avatar" />
          </div>
        )}
        {!data.img && <div className={styles.emptyAvatar} />}
        <div className={styles.dropdown}>
          <ProfileButton
            onClick={handleClick}
            dropdownOptions={[{ value: 'Log Out', icon: <LogOutIcon /> }]}
          />
        </div>
        <p className={styles.username}>
          {data.name} {data.surname}
        </p>
      </div>
      <div className={styles.balanceSection}>
        <div className={styles.balance}>
          <p>Balance</p>
          <p>{formattedBalance}</p>
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
