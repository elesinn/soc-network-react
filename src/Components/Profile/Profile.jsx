import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {Divider,Header, Icon} from "semantic-ui-react";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
    return (
        <div>
            <div><ProfileInfo/></div>
            <div><PostsContainer/></div>
        </div>
    );
};

export default Profile;