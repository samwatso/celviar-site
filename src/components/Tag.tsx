import React from 'react';
import styles from './Tag.module.css';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  size?: 'sm' | 'md';
  className?: string;
}

export function Tag({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}: TagProps) {
  return (
    <span className={`${styles.tag} ${styles[variant]} ${styles[size]} ${className}`}>
      {children}
    </span>
  );
}
