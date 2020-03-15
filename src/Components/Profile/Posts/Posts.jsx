import React from 'react';
import AddPostForm from "./AddPostForm/AddPostForm";
import {Divider, Header, Icon} from "semantic-ui-react";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            <Divider/>
            <AddPostForm/>
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='file text' />
                    Posts
                </Header>
            </Divider>

            <Post/>
        </div>
    );
};

export default Posts;