import React from 'react';
import './global.css';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Content from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="wrap">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
