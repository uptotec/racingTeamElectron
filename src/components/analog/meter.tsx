import * as React from 'react';
import Speedometer, { Arc, Needle, Progress, Marks } from 'react-speedometer';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Meter: React.FC<{ value: number; type: 'b' | 's' }> = ({
  value,
  type,
}) => {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Speedometer
      value={value}
      width={windowSize.innerWidth * 0.32}
      min={0}
      max={type === 's' ? 180 : 100}
    >
      {/* <Background opacity={0.1} /> */}
      <Arc arcWidth={windowSize.innerWidth * 0.03} opacity={0.5} />
      <Needle
        circleRadius={0}
        baseWidth={windowSize.innerWidth * 0.02}
        baseOffset={20}
        offset={windowSize.innerWidth * 0.06}
        color={type === 's' ? '#29a7e2' : '#0f2070'}
      />
      <Progress
        arcWidth={windowSize.innerWidth * 0.03}
        color={type === 's' ? '#29a7e2' : '#0f2070'}
      />
      <Marks
        numbersRadius={windowSize.innerWidth * 0.04}
        lineOpacity={0}
        fontSize={windowSize.innerWidth * 0.01}
        step={type === 's' ? 10 : 5}
      />
    </Speedometer>
  );
};

export default Meter;
