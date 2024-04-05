import styles from "./userProfile.module.scss";
import ProfileButton from "../IconButton/ProfileButton";
import IconButton, { IconButtonIcon, IconButtonType } from '../IconButton/IconButton';
import { useEffect, useState } from "react";


const UserProfile = () => {


    // const [data,setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect = () => { }

    const handleClick = () => { }

    return (
        <div className={styles.userProfile}>
            <div className={styles.profileSection}>
                <ProfileButton onClick={handleClick}/>
                <p className={styles.username}>Ernestas Grabliauskas</p>
            </div>
            <div className={styles.balanceSection}>
                <h2>Balance</h2>
                <h2>€64,32</h2>
            <IconButton type={IconButtonType.OUTLINED} icon={IconButtonIcon.CART} />
            </div>
        </div>
    )
}

export default UserProfile;
