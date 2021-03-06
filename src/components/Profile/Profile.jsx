import React from 'react';
import profile from './Profile.module.css';
import UserPosts from './UserPosts/UserPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AddPost from "./AddPost/AddPost";

const Profile = (props) => {
    return (
        <div className={profile.content}>
            <ProfileInfo />
            <AddPost dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
            <UserPosts postsData={props.profilePage.postsData} />
        </div>
    );
}

export default Profile;