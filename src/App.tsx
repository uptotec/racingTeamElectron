import * as React from 'react';
import { metricsPayloadDataType } from '../electron/payload.type';

import './App.css';
import Analog from './components/analog/analog';
import Digital from './components/digital/digital';
import Header from './components/header/header';
import Indicators from './components/indicators/indicators';

export const App: React.FC = () => {
  const [view, setView] = React.useState(true);

  const [metrics, setMetrics] = React.useState<metricsPayloadDataType>({
    speed: 0,
    battery: 0,
    voltage: 0,
    current: 0,
    temp: 0,
    range: 0,
  });

  React.useEffect(() => {
    window.Main.on('metrics', (data: metricsPayloadDataType) =>
      setMetrics(data)
    );
  }, []);

  return (
    <div className="App">
      <Header />
      {view ? <Digital {...metrics} /> : <Analog />}
      <button
        style={{ color: '#000', position: 'absolute', top: '15vh' }}
        onClick={() => setView(!view)}
      >
        switch
      </button>
      <Indicators />
    </div>
  );
};
