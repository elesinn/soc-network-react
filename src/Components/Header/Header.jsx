import React from "react";
import {Image} from "semantic-ui-react";
import style from './Header.module.css'
import userPhoto from '../../assets/images/patrick.png'

const Header = () => {
    return (
        <header className={`${style.header} card`}>
            <div className={style.headerTitle}>
                <h2>Best social network</h2>
            </div>
            <div className={style.userInfo}>
                <Image size='mini' circular src={userPhoto} verticalAlign='middle' /> <span>Nikolay</span>
            </div>
        </header>
    )
}

export default Header