import React from 'react';
import profile from './Profile.module.css';
import UserPosts from './UserPosts/UserPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={profile.content}>
            <ProfileInfo />
            <UserPosts />
        </div>
    );
}

export default Profile;