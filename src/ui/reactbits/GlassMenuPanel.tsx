/**
 * GlassMenuPanel
 * Glass panel for mobile navigation dropdown
 * Designed to work with parent-controlled open/close via ESC and click-outside
 */

import React, { ReactNode, useEffect, useRef } from 'react';
import { GlassSurface } from './GlassSurface';

interface GlassMenuPanelProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export function GlassMenuPanel({ 
  children, 
  isOpen, 
  onClose,
  className = '', 
  style 
}: GlassMenuPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        // Small delay to prevent immediate close on open click
        setTimeout(() => onClose(), 0);
      }
    };

    // Delay adding listener to prevent immediate trigger
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Don't render if not open
  if (!isOpen) return null;

  // Check for reduced motion / mobile
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const panelStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: '8px',
    padding: '16px',
    ...style,
  };

  // Always use fallback for menu panel (simpler, more reliable)
  return (
    <div
      ref={panelRef}
      className={`glass-menu-panel ${className}`}
      style={{
        ...panelStyle,
        background: 'rgba(29, 29, 29, 0.92)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        animation: prefersReducedMotion ? 'none' : 'slideDown 200ms ease-out',
      }}
      role="menu"
      aria-orientation="vertical"
    >
      {children}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default GlassMenuPanel;
