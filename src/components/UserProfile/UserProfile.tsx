import React from 'react';
import styles from "./userProfile.module.scss";
import ProfileButton from "../IconButton/ProfileButton";
import IconButton, { IconButtonIcon, IconButtonType } from '../IconButton/IconButton';
import useDataFetching from "../DataFetching/useDataFetching";

const UserProfile = () => {
    const { data, loading, error } = useDataFetching("user");


    if (loading) return <h1>LOADING...</h1>;

    if (error) {
        console.log(error);
        return <h1>Error fetching data</h1>;
    }


    if (!data) return null;


    const orderCount = data.orders.length;

    const handleClick = () => {};

    return (
        <div className={styles.userProfile}>
            <div className={styles.profileSection}>
                {data.img && <img src={data.img} alt="User Avatar" />}
                <ProfileButton onClick={handleClick} className={styles.profileButton} />
                <p className={styles.username}>{data.name} {data.surname}</p>
            </div>
            <div className={styles.balanceSection}>
                <p>Balance</p>
                <p>€{data.balance}</p>
                <div className={styles.line}></div>
                <div className={styles.cartOrders}>
                    <IconButton type={IconButtonType.OUTLINED} icon={IconButtonIcon.CART} />
                    <p className={styles.circle}> {orderCount}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
