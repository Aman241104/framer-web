'use client';

import React from 'react';
import FooterFramerComponent from '@/framer/section/footer';

const FooterFramer = FooterFramerComponent as any;

export const Footer = () => {
  const FooterComponent = FooterFramer?.Responsive || FooterFramer;

  if (!FooterComponent) return null;

  return (
    <div className="w-full relative z-10 flex justify-center pt-24 pb-12">
      <FooterComponent className="w-full max-w-[1240px]" />
    </div>
  );
};
