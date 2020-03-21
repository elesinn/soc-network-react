import React, {useEffect} from 'react';
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

const ProfileContainer = (props) => {
    const userId = props.match.params.userId
    useEffect(() => {
        console.log('useEffect', props.status)
        props.getStatus(userId);
    }, [userId])


    return (
        <div>
            <Profile status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return ({
        status: state.profilePage.status
    })
}

export default compose(
    connect(mapStateToProps, {getStatus, updateStatus}),
    withRouter
    )(ProfileContainer);