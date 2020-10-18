import React from 'react';
import profile from './Profile.module.css';
import UserPosts from './UserPosts/UserPosts';

const Profile = () => {
    return (
        <div className={profile.content}>
            <div className={profile.userProfile}>
                <div className={profile.userProfile__main}>
                    <div className={profile.userProfile__photo}>
                        <img src="" alt=""/>
                    </div>
                    <div className={profile.userProfile__nickname}>
                        Nickname
                    </div>
                </div>

                <ul className={profile.userProfile__inf}>
                    <li className={profile.userProfile__inf__item}>
                        <span>Teams: </span>
                        <a href="#" className={profile.userProfile__inf__link}></a>
                    </li>
                    <li className={profile.userProfile__inf__item}>
                        <span>Releases: </span>
                        <a href="#" className={profile.userProfile__inf__link}></a>
                    </li>
                    <li className={profile.userProfile__inf__item}>
                        <span>Projects: </span>
                        <a href="#" className={profile.userProfile__inf__link}></a>
                    </li>
                    <li className={profile.userProfile__inf__item}>
                        <span>Subscribers: </span>
                        <a href="#" className={profile.userProfile__inf__link}></a>
                    </li>
                </ul>
            </div>

            <UserPosts />
        </div>
    );
}

export default Profile;