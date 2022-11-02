import React from 'react';
import styles from './analog.module.css';

const Analog: React.FC = () => {
  return (
    <div className={styles.Analog}>
      <div className={`${styles.Meter} ${styles.SpeedMeterShadow}`}>
        <p className={styles.MeterTitle}>SPEED</p>
      </div>
      <div className={styles.Metrics}>
        <div>
          <p className={styles.MetricsTitle}>Voltage</p>
        </div>
        <div>
          <p className={styles.MetricsTitle}>Current</p>
        </div>
        <div>
          <p className={styles.MetricsTitle}>Temprature</p>
        </div>
        <div>
          <p className={styles.MetricsTitle}>Range</p>
        </div>
      </div>
      <div className={`${styles.Meter} ${styles.BatteryMeterShadow}`}>
        <p className={styles.MeterTitle}>Battery</p>
      </div>
    </div>
  );
};

export default Analog;
