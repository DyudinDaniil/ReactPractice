import React from 'react';
import team from './Team.module.css';

const Team = (props) => {
    return (
        <div className={team.content}>
            <a href="#" className={team.ind}>
                <div className={team.ind__img}>
                    <img src="" alt=""/>
                </div>
                <div className={team.ind__name}>
                    {props.name}
                </div>
            </a>

            <ul className={team.info}>
                <li className={team.info__sub}>
                    Subscribers: {props.sub}
                </li>
                <li className={team.info__posts}>
                    Posts: {props.posts}
                </li>
                <li className={team.info__link}>
                    <a href="#">Join +</a>
                </li>
            </ul>
        </div>
    );
}

export default Team;