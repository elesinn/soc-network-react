import React from "react";
import style from './Content.module.css'
import {Route} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import Users from "../Users/Users";
import ProfileContainer from "../Profile/ProfileContainer";

const Content = () => {
    return <div className={`${style.content} card`}>
        <Route path='/dialogs'
               render={() => <Dialogs/>}/>

        <Route path='/profile/:userId?'
               render={() => <ProfileContainer/>}/>

        <Route path='/users'
               render={() => <Users/>}/>
    </div>
}

export default Content
