import * as React from 'react';
import styles from './digital.module.css';
import { SwiperSlide } from 'swiper/react';
import { metricsPayloadDataType } from '../../../electron/payload.type';

const Digital: React.FC<metricsPayloadDataType> = ({
  speed,
  battery,
  voltage,
  current,
  temp,
  range,
}) => {
  return (
    <SwiperSlide className={styles.Digital}>
      <div className={`${styles.Meter} ${styles.SpeedMeterShadow}`}>
        <p className={styles.SpeedMeterValue}>{Math.round(speed)}</p>
        <p className={styles.MeterTitle}>SPEED</p>
      </div>
      <div className={styles.Metrics}>
        <div>
          <p className={styles.MetricsValue}>{voltage}</p>
          <p className={styles.MetricsTitle}>Voltage</p>
        </div>
        <div>
          <p className={styles.MetricsValue}>{current}</p>
          <p className={styles.MetricsTitle}>Current</p>
        </div>
        <div>
          <p className={styles.MetricsValue}>{temp}</p>
          <p className={styles.MetricsTitle}>Temprature</p>
        </div>
        <div>
          <p className={styles.MetricsValue}>{range}</p>
          <p className={styles.MetricsTitle}>Range</p>
        </div>
      </div>
      <div className={`${styles.Meter} ${styles.BatteryMeterShadow}`}>
        <p className={styles.BatteryMeterValue}>{Math.round(battery)}</p>
        <p className={styles.MeterTitle}>Battery</p>
      </div>
    </SwiperSlide>
  );
};

export default Digital;
