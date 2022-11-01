import React from 'react';

import styles from './indicators.module.css';
import doors from '../../../assets/doors.png';
import heat from '../../../assets/heat.png';
import seatbelt from '../../../assets/seatbelt.png';
import temp from '../../../assets/temp.png';

const Indicators: React.FC = () => {
  return (
    <div className={styles.Indicators}>
      <span>
        <img src={doors} className={styles.Indicator} />
      </span>
      <span>
        <img src={temp} className={styles.IndicatorDisabled} />
      </span>
      <span>
        <img src={seatbelt} className={styles.Indicator} />
      </span>
      <span>
        <img src={heat} className={styles.IndicatorDisabled} />
      </span>
    </div>
  );
};

export default Indicators;
