import React from 'react';
import './global.css';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';

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
