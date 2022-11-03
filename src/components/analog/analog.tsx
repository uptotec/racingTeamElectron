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
            progress={(voltage / 20) * 100}
            endValue={20}
            title="Voltage"
          />
          <VerticalProgress
            progress={(current / 100) * 100}
            endValue={100}
            title="Current"
          />
        </div>
        <HorizontalProgress
          progress={(temp / 200) * 100}
          endValue={200}
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
