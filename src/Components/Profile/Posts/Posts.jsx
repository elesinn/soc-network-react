import React from 'react';
import AddPostForm from "./AddPostForm/AddPostForm";
import {Divider, Header, Icon} from "semantic-ui-react";
import Post from "./Post/Post";
import ReduxPostForm from "./AddPostForm/AddPostForm";

const Posts = (props) => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <Divider/>
            <ReduxPostForm/>
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='file text' />
                    Posts
                </Header>
            </Divider>

            <div>
                {postsElements}
            </div>
        </div>
    );
};

export default Posts;