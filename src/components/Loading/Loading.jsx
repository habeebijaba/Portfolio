import React from 'react';
import styles from './page.module.css'

const LoadingComponent = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      <h3 className={styles.loadingText}>Loading...</h3>
    </div>
  );
};

export default LoadingComponent;
