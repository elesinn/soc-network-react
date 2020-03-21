import React from "react";
import {Image} from "semantic-ui-react";
import style from './Header.module.css'
import userPhoto from '../../assets/images/patrick.png'

const Header = ({login, isAuth}) => {
    debugger
    return (
        <header className={`${style.header} card`}>
            <div className={style.headerTitle}>
                <h2>Best social network</h2>
            </div>
            <div className={style.userInfo}>
            {!isAuth &&
                <span>Please Log In</span>
            }
            {isAuth &&
               <><Image size='mini' circular src={userPhoto} verticalAlign='middle'/> <span>{login}</span></>
            }
            </div>
        </header>
    )
}

export default Header