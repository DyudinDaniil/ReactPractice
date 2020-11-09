import React from 'react';
import teams from './Teams.module.css';
import Team from './Team/Team';

const Teams = (props) => {
    let teamsElements = props.state.teamsData.map(team => <Team name={team.name} sub={team.sub} posts={team.posts} />)

    return (
        <div className={teams.content}>
            {teamsElements}
        </div>
    );
}

export default Teams;