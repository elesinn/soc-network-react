import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({status, updateStatus}) => {
    return (
        <div>
            <div><ProfileInfo status={status} updateStatus={updateStatus}/></div>
            <div><PostsContainer/></div>
        </div>
    );
};

export default Profile;