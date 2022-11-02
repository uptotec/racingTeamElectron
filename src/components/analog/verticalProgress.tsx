import React from 'react';

import styles from './analog.module.css';

const VerticalProgress: React.FC<{
  progress: number;
  endValue: number;
  title: string;
}> = ({ progress, endValue, title }) => {
  const ratios = [0, 0.25, 0.5, 0.75, 1];
  const color =
    title === 'voltage' ? styles.SkyblueColor : styles.DarkblueColor;
  const shadow =
    title === 'voltage' ? styles.SkyblueShadow : styles.DarkblueShadow;

  return (
    <div className={styles.MetricsContainer}>
      <div className={styles.Metrics}>
        <div className={styles.MetricsValues}>
          <span>{endValue * ratios[4]}</span>
          <span>{endValue * ratios[3]}</span>
          <span>{endValue * ratios[2]}</span>
          <span>{endValue * ratios[1]}</span>
          <span>{endValue * ratios[0]}</span>
        </div>
        <div className={`${styles.progress} ${styles.vertical} ${shadow}`}>
          <div
            style={{ height: `${progress}%` }}
            className={`${styles.progressBar} ${color} ${shadow}`}
          ></div>
        </div>
      </div>
      <p className={styles.MetricsTitle}>{title}</p>
    </div>
  );
};

export default VerticalProgress;
