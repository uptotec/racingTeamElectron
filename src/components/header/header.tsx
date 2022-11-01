import React from 'react';

import styles from './header.module.css';
import logo from '../../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontSize: 22, fontWeight: 'bold' }}>3:26:59</p>
        <p style={{ fontSize: 12, fontWeight: 'bold' }}>Lap 3</p>
      </div>
      <div>
        <img src={logo} style={{ width: '200px' }} />
      </div>
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold' }}>
          <span style={{ color: '#BEBEBE' }}>Last</span> <span>2:01:37</span>
        </p>
        <p style={{ fontWeight: 'bold' }}>
          <span style={{ color: '#BEBEBE' }}>Best</span> <span>2:01:37</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
