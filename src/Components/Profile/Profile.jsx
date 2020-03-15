import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {Divider,Header, Icon} from "semantic-ui-react";

const Profile = () => {
    return (
        <div>
            <div><ProfileInfo/></div>
            <div><Posts/></div>
        </div>
    );
};

export default Profile;