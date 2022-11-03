import * as React from 'react';
import Webcam from 'react-webcam';

import './App.css';
import {
  indicatorPayloadDataType,
  metricsPayloadDataType,
  viewPayloadDataType,
} from '../electron/payload.type';
import Analog from './components/analog/analog';
import Digital from './components/digital/digital';
import Header from './components/header/header';
import Indicators from './components/indicators/indicators';

export const App: React.FC = () => {
  const [analog, setAnalog] = React.useState(true);
  const [camera, setCamera] = React.useState(false);

  const [metrics, setMetrics] = React.useState<metricsPayloadDataType>({
    speed: 0,
    battery: 0,
    voltage: 0,
    current: 0,
    temp: 0,
    range: 0,
  });

  const [indicators, setIndicators] = React.useState<indicatorPayloadDataType>({
    doors: false,
    seatbelt: false,
    smoke: false,
    temp: false,
  });

  React.useEffect(() => {
    window.Main.on('metrics', (data: metricsPayloadDataType) =>
      setMetrics(data)
    );

    window.Main.on('view', (data: viewPayloadDataType) => {
      switch (data) {
        case 'analog':
          setCamera(false);
          setAnalog(true);
          break;
        case 'digital':
          setCamera(false);
          setAnalog(false);
          break;
        case 'camera':
          setCamera(true);
      }
    });

    window.Main.on('indicators', (data: indicatorPayloadDataType) =>
      setIndicators(data)
    );
  }, []);

  return (
    <div className="App">
      {camera ? (
        <Webcam width={window.innerWidth} height={window.innerHeight} />
      ) : (
        <>
          <Header />
          {analog ? <Analog {...metrics} /> : <Digital {...metrics} />}
          <Indicators {...indicators} />
        </>
      )}
    </div>
  );
};
