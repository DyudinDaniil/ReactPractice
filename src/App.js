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

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <div className="wrap">
          <Menu />
          <div className="content">
            <Route path='/profile' component={Profile} />
            <Route path='/news' component={News} />
            <Route path='/messages' component={Messages} />
            <Route path='/teams' component={Teams} />
            <Route path='/music' component={Music} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
