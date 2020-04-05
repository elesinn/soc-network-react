import React, {useEffect} from 'react';
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

const ProfileContainer = (props) => {


    useEffect(() => {
        let userId = props.match.params.userId
        let autorizedUserId = props.autorizedUserId

        console.log('useEffect', props)

        if (!userId) {
            userId = autorizedUserId
        }

        props.getStatus(userId);
    }, [props.match.params.userId,props.autorizedUserId])


    return (
        <div>
            <Profile status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return ({
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId
    })
}

export default compose(
    connect(mapStateToProps, {getStatus, updateStatus}),
    withRouter
)(ProfileContainer);