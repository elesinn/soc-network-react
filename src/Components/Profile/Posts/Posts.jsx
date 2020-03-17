import React from 'react';
import AddPostForm from "./AddPostForm/AddPostForm";
import {Divider, Header, Icon} from "semantic-ui-react";
import Post from "./Post/Post";
import ReduxPostForm from "./AddPostForm/AddPostForm";

const Posts = React.memo((props) => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <Divider/>
            <ReduxPostForm onSubmit={onAddPost}/>
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
});

export default Posts;