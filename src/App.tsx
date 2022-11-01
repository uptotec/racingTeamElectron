import * as React from 'react';

import './App.css';
import Analog from './components/analog/analog';
import Digital from './components/digital/digital';
import Header from './components/header/header';
import Indicators from './components/indicators/indicators';

export const App: React.FC = () => {
  const [view, setView] = React.useState(false);
  return (
    <div className="App">
      <Header />
      {view ? <Digital /> : <Analog />}
      <button style={{ color: '#000' }} onClick={() => setView(!view)}>
        switch
      </button>
      <Indicators />
    </div>
  );
};
