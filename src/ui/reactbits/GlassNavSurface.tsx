/**
 * GlassNavSurface
 * Pure ReactBits GlassSurface with default settings
 */

import React, { ReactNode } from 'react';
import GlassSurface from './GlassSurface/GlassSurface';

interface GlassNavSurfaceProps {
  children: ReactNode;
  className?: string;
}

export function GlassNavSurface({ 
  children, 
  className = '', 
}: GlassNavSurfaceProps) {
  return (
    <GlassSurface
      width="100%"
      height={64}
      borderRadius={50}
      className={className}
      // Use ReactBits defaults - no custom overrides
    >
      {children}
    </GlassSurface>
  );
}

export default GlassNavSurface;