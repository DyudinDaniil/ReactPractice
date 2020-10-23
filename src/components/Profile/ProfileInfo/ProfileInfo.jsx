import React from 'react';
import profile from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={profile.content}>
            <div className={profile.userProfile}>
                <div className={profile.main}>
                    <div className={profile.photo}>
                        <img src="" alt=""/>
                    </div>
                    <div className={profile.nickname}>
                        Nickname
                    </div>
                </div>

                <ul className={profile.inf}>
                    <li className={profile.inf__item}>
                        <span>Teams: </span>
                        <a href="#" className={profile.inf__link}></a>
                    </li>
                    <li className={profile.inf__item}>
                        <span>Releases: </span>
                        <a href="#" className={profile.inf__link}></a>
                    </li>
                    <li className={profile.inf__item}>
                        <span>Projects: </span>
                        <a href="#" className={profile.inf__link}></a>
                    </li>
                    <li className={profile.inf__item}>
                        <span>Subscribers: </span>
                        <a href="#" className={profile.unf__link}></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;