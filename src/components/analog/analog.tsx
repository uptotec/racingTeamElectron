import * as React from 'react';

import { metricsPayloadDataType } from '../../../electron/payload.type';
import styles from './analog.module.css';
import Meter from './meter';
import VerticalProgress from './verticalProgress';
import HorizontalProgress from './horizontalProgress';

const Analog: React.FC<metricsPayloadDataType> = ({
  speed,
  battery,
  voltage,
  current,
  temp,
}) => {
  return (
    <div className={styles.Analog}>
      <div className={`${styles.Meter} ${styles.SpeedMeterShadow}`}>
        <Meter value={speed} type="s" />
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 50,
            marginTop: 60,
          }}
        >
          <VerticalProgress
            progress={(voltage / 10) * 100}
            endValue={10}
            title="voltage"
          />
          <VerticalProgress
            progress={(current / 100) * 100}
            endValue={100}
            title="current"
          />
        </div>
        <HorizontalProgress
          progress={(temp / 100) * 100}
          endValue={100}
          title="Temprature"
        />
      </div>

      <div className={`${styles.Meter} ${styles.BatteryMeterShadow}`}>
        <Meter value={battery} type="b" />
      </div>
    </div>
  );
};

export default Analog;
