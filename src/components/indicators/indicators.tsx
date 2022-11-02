import * as React from 'react';

import styles from './indicators.module.css';
import doorsIcon from '../../../assets/doors.png';
import heatIcon from '../../../assets/heat.png';
import seatbeltIcon from '../../../assets/seatbelt.png';
import tempIcon from '../../../assets/temp.png';
import { indicatorPayloadDataType } from '../../../electron/payload.type';

const Indicators: React.FC = () => {
  const [{ doors, seatbelt, smoke, temp }, setIndicators] =
    React.useState<indicatorPayloadDataType>({
      doors: false,
      seatbelt: false,
      smoke: false,
      temp: false,
    });

  const { Indicator, IndicatorDisabled } = styles;

  React.useEffect(() => {
    window.Main.on('indicators', (data: indicatorPayloadDataType) =>
      setIndicators(data)
    );
  }, []);

  return (
    <div className={styles.Indicators}>
      <span>
        <img
          src={doorsIcon}
          className={doors ? Indicator : IndicatorDisabled}
        />
      </span>
      <span>
        <img src={tempIcon} className={temp ? Indicator : IndicatorDisabled} />
      </span>
      <span>
        <img
          src={seatbeltIcon}
          className={seatbelt ? Indicator : IndicatorDisabled}
        />
      </span>
      <span>
        <img src={heatIcon} className={smoke ? Indicator : IndicatorDisabled} />
      </span>
    </div>
  );
};

export default Indicators;
