import React from 'react';
import {Grid, Image, List} from 'semantic-ui-react'
import userPhoto from '../../../assets/images/patrick.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({status, updateStatus}) => {
    return (
        <div>
            <Grid columns={2}>
                    <Grid.Column>
                        <Image src={userPhoto} size='medium' />
                    </Grid.Column>
                    <Grid.Column>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                        <List>
                            <List.Item><b>Apples</b> Apples</List.Item>
                            <List.Item><b>Apples</b> Lorem ipsum dolor sit</List.Item>
                            <List.Item><b>Lorem ipsum dolor.</b></List.Item>
                        </List>
                    </Grid.Column>
            </Grid>
        </div>
    );
};

export default ProfileInfo;