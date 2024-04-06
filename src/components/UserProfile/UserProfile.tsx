import styles from "./userProfile.module.scss";
import ProfileButton from "../IconButton/ProfileButton";
import IconButton, { IconButtonIcon, IconButtonType } from '../IconButton/IconButton';
import db from "../../../data/db.json";

const UserProfile = () => {
    const { name, surname, balance, img, orders } = db.user;
    const orderCount = orders.length;

    const handleClick = () => { }

    return (
        <div className={styles.userProfile}>
            <div className={styles.profileSection}>
            <img src={img} alt="User Avatar" />
                <ProfileButton onClick={handleClick} className={styles.profileButton} />
                <p className={styles.username}>{name} {surname}</p>
            </div>
            <div className={styles.balanceSection}>
                <h2>Balance</h2>
                <h2>€{balance}</h2>
                <div className={styles.line}></div>
                <div className={styles.cartOrders}>
                    <IconButton type={IconButtonType.OUTLINED} icon={IconButtonIcon.CART} />
                    <p className={styles.circle}> {orderCount}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
