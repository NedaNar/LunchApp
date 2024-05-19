import { useContext } from 'react';
import useFetch from '../../api/useDataFetching';
import { UserData } from '../../api/apiModel';
import CartContext from '../OrderSummary/cartContext';
import ProfileButton from '../IconButton/ProfileButton';
import IconButton, { IconButtonIcon, IconButtonType } from '../IconButton/IconButton';
import styles from './userProfile.module.scss';
import LogOutIcon from '../../assets/static/icons/icon_logout.svg?react';
import useAuth from '../LoginForm/AuthenticationLogic/useAuth';
import { Endpoint } from '../../api/endpoints';

function UserProfile() {
  const token = useAuth();
  const { data, loading, error } = useFetch<UserData>(Endpoint.USERS, token.id);
  const cart = useContext(CartContext);

  if (loading) return <h1>LOADING...</h1>;

  if (error) return <h1>Error fetching data</h1>;

  if (!data) return null;

  const formattedBalance = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  })
    .format(data.balance)
    .replace('.', ',');

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
          <IconButton
            buttonRef={cart.toggleSummaryRef}
            onClick={() => cart.setExpanded(true)}
            type={IconButtonType.OUTLINED}
            icon={IconButtonIcon.CART}
          />
          {cart.items.length !== 0 ? <p className={styles.circle}> {cart.items.length}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
