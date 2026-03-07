'use client';

import React from 'react';
import FooterFramerComponent from '@/framer/section/footer';

const FooterFramer = FooterFramerComponent as any;

export const Footer = () => {
  const FooterComponent = FooterFramer?.Responsive || FooterFramer;

  if (!FooterComponent) return null;

  return (
    <footer className="relative z-10 flex justify-center pb-8 pt-12">
      <FooterComponent className="w-full max-w-[1200px] relative z-10" />
    </footer>
  );
};
