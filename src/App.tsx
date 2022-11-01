import React from 'react';
import ElectronSVG from './electronjs-icon.svg';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ElectronSVG} className="App-logo" alt="logo" />
        <p>RACING TEAM UI.</p>
      </header>
    </div>
  );
};
