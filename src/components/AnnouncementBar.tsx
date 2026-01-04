import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content/site';
import styles from './AnnouncementBar.module.css';

interface AnnouncementBarProps {
  isHidden?: boolean;
}

export function AnnouncementBar({ isHidden = false }: AnnouncementBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const announcements = siteContent.announcements;

  // Rotate announcements every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  const current = announcements[currentIndex];

  return (
    <div className={`${styles.bar} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.content}>
        <span className={styles.text}>{current.text}</span>
        {current.link && current.linkText && (
          <Link to={current.link} className={styles.link}>
            {current.linkText}
          </Link>
        )}
      </div>
    </div>
  );
}