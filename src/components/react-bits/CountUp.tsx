'use client';

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  precision?: number;
  suffix?: string;
  separator?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  precision = 0,
  suffix = "",
  separator = ",",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) => {
    const formatted = latest.toFixed(precision);
    if (separator) {
      return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, separator) + suffix;
    }
    return formatted + suffix;
  });

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        animate(motionValue, to, { duration });
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [inView, to, duration, delay, motionValue]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });
  }, [displayValue]);

  return <span ref={ref}>{from}{suffix}</span>;
}
