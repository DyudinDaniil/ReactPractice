import React from 'react';
import posts from './UserPosts.module.css';
import Post from './Post/Post';

const UserPosts = () => {
    return (
        <div className={posts.content}>
            <Post message='It is my first post'/>
            <Post message='How are you?'/>
        </div>
    );
}

export default UserPosts;