import React from 'react';
import posts from './UserPosts.module.css';
import Post from './Post/Post';

const UserPosts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message} />)

    return (
        <div className={posts.content}>
            {postsElements}
        </div>
    );
}

export default UserPosts;