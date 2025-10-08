"use client";

import styles from './countdown.module.css';
import React, { useEffect, useState } from "react";

interface CountdownProps {
  toDate: Date;
  style?: React.CSSProperties;
}

export default function Countdown({ toDate, style }: CountdownProps) {
  const [remainingTime, setRemainingTime] = useState(() => {
    const remaining = toDate.getTime() - Date.now();
    return remaining > 0 ? remaining : 0;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const newRemainingTime = toDate.getTime() - Date.now();
      
      if (newRemainingTime <= 0) {
        setRemainingTime(0);
      } else {
        setRemainingTime(newRemainingTime);
      }
    }, 1000);

    // Cleanup timer on component unmount or when toDate changes
    return () => clearInterval(timer);
  }, [toDate]);

  return (
  <div style={{...style}}>
    <div className={styles.countdown}>
      <div className={styles.block_container}>
        <span className={styles.block_text} key="days">{`${Math.floor(remainingTime / 1000 / 60 / 60 / 24)}`.padStart(2, '0')}</span>
        <div className={styles.block_desc}>Day(s)</div>
      </div>
      <div className={styles.block_container}>
        <div className={styles.block_text}>{`${Math.floor(remainingTime / 1000 / 60 / 60) % 24}`.padStart(2, '0')}</div>
        <div className={styles.block_desc}>Hour(s)</div>
      </div>
      <div className={styles.block_container}>
        <div className={styles.block_text}>{`${Math.floor(remainingTime / 1000 / 60) % 60}`.padStart(2, '0')}</div>
        <div className={styles.block_desc}>Minute(s)</div>
      </div>
      <div className={styles.block_container}>
        <div className={styles.block_text}>{`${Math.floor(remainingTime / 1000 % 60)}`.padStart(2, '0')}</div>
        <div className={styles.block_desc}>Second(s)</div>
      </div>
    </div>
  </div>
  );
}
