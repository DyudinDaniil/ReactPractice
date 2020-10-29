import React from 'react';
import posts from './UserPosts.module.css';
import Post from './Post/Post';

const UserPosts = () => {
    let postsData = [
        {id: 1, message: 'It is my first post', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 10}
    ]

    let postsElements = postsData.map(post => <Post message={post.message} />)

    return (
        <div className={posts.content}>
            {postsElements}
        </div>
    );
}

export default UserPosts;