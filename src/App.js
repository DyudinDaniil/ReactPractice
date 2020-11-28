import React from 'react';
import './global.css';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Messages from './components/Messages/Messages';
import Teams from './components/Teams/Teams';
import Music from './components/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <div className="wrap">
          <Menu />
          <div className="content">
            <Route path='/profile' render={() => <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
            />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/messages' render={() => <Messages state={props.state.messagesPage} />} />
            <Route path='/teams' render={() => <Teams state={props.state.teamsPage} />} />
            <Route path='/music' render={() => <Music />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
