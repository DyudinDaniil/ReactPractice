import React from 'react';
import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.content}>
            {props.message}
        </div>
    );
}

export default Post;