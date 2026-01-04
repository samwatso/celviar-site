import React from 'react';
import styles from './Section.module.css';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export function Container({ 
  children, 
  size = 'xl',
  className = '' 
}: ContainerProps) {
  return (
    <div className={`${styles.container} ${styles[`container-${size}`]} ${className}`}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'dark' | 'cream';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  id?: string;
}

export function Section({ 
  children, 
  variant = 'default',
  spacing = 'lg',
  className = '',
  id
}: SectionProps) {
  const dataTheme = variant === 'dark' ? 'dark' : undefined;
  
  return (
    <section 
      id={id}
      className={`${styles.section} ${styles[`section-${variant}`]} ${styles[`spacing-${spacing}`]} ${className}`}
      data-theme={dataTheme}
    >
      {children}
    </section>
  );
}

interface DividerProps {
  variant?: 'gold' | 'light' | 'dark';
  className?: string;
}

export function Divider({ variant = 'gold', className = '' }: DividerProps) {
  return <hr className={`${styles.divider} ${styles[`divider-${variant}`]} ${className}`} />;
}
