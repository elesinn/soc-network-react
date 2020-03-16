import React from 'react';

const Post = (props) => {
    return (
        <div>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default Post;