import React, { ReactNode } from 'react';
import { GradualBlur } from '../ui/reactbits';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {children}
      
      {/* Gradual blur at bottom of every page */}
      <GradualBlur
        target="page"
        position="bottom"
        height="8rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </div>
  );
}