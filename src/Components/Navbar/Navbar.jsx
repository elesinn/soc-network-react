import React from "react";
import style from './Navbar.module.css'
import {Menu} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className={`${style.navbar} card`}>

        <Menu secondary vertical>
                <Menu.Item
                    as={NavLink}
                    to="/profile"
                    name='profile'
                    // active={activeItem === 'account'}
                    // onClick={() => {
                    //     alert("hello")
                    // }}
                />
                <Menu.Item
                    as={NavLink}
                    name='messages'
                    to="/dialogs"
                    // active={activeItem === 'account'}
                    // onClick={() => {
                    //     alert("hello")
                    // }}
                />
                <Menu.Item
                    as={NavLink}
                    name='users'
                    to="/users"
                    // active={activeItem === 'account'}
                    // onClick={() => {
                    //     alert("hello")
                    // }}
                />
        </Menu>

    </div>
}

export default Navbar