'use client';

import React from 'react';
import NavigationFramerComponent from '@/framer/section/navigation';

const Navigation = NavigationFramerComponent as any;

const Navbar = () => {
  // Use Responsive if available, otherwise fallback to the default export
  const NavComponent = Navigation?.Responsive || Navigation;

  if (!NavComponent) {
    return (
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[854px] px-6">
        <div className="w-full h-[56px] bg-red-500/20 backdrop-blur-xl border border-red-500/20 rounded-full flex items-center justify-center text-white text-xs">
          Navigation Loading Error
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[854px] px-6">
      <NavComponent 
        className="!w-full !max-w-none !h-[56px]"
        style={{ 
          backdropFilter: 'blur(16px)', 
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.06)',
          padding: '4px 18px',
          background: 'rgba(5, 5, 5, 0.4)',
          borderRadius: '100px',
          overflow: 'hidden'
        }} 
      />
    </div>
  );
};

export default Navbar;
