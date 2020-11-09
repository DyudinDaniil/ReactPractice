import React from 'react';
import profile from './Profile.module.css';
import UserPosts from './UserPosts/UserPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={profile.content}>
            <ProfileInfo />
            <UserPosts postsData={props.state.postsData} />
        </div>
    );
}

export default Profile;