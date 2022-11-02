import styles from './analog.module.css';

const HorizontalProgress: React.FC<{
  progress: number;
  endValue: number;
  title: string;
}> = ({ progress, endValue, title }) => {
  const containerStyles = {
    height: 25,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#00000062',
  };

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#047DCE',
    borderRadius: 'inherit',
  };

  const ratios = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div style={{ marginTop: 20 }}>
      <div className={styles.Metrics} style={{ flexDirection: 'column' }}>
        <div style={containerStyles} className={styles.SkyblueShadow}>
          <div style={fillerStyles}></div>
        </div>
        <div
          className={styles.MetricsValues}
          style={{ flexDirection: 'row', marginTop: 5 }}
        >
          <span>{endValue * ratios[0]}</span>
          <span>{endValue * ratios[1]}</span>
          <span>{endValue * ratios[2]}</span>
          <span>{endValue * ratios[3]}</span>
          <span>{endValue * ratios[4]}</span>
        </div>
      </div>
      <p className={styles.MetricsTitle}>{title}</p>
    </div>
  );
};

export default HorizontalProgress;
