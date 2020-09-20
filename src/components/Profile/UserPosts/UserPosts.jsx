import React from 'react';
import posts from './UserPosts.module.css';
import Post from './Post/Post';

const UserPosts = () => {
    return (
        <div className={posts.content}>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default UserPosts;