'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 95, suffix: '%', label: 'Placement Rate' },
  { value: 8, prefix: '₹', suffix: 'L', label: 'Average Package' },
  { value: 150, suffix: '+', label: 'Students Placed' },
];

function AnimatedNumber({
  value,
  suffix,
  prefix = '',
  startAnimation,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  startAnimation: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(value, increment * step);
      setDisplayValue(Math.floor(current));

      if (step >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [startAnimation, value]);

  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 section-band-accent">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="text-center flex flex-col justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px]"
            >
              <motion.div
                className="font-display tracking-wide mb-2 inline-block px-4 py-2 rounded-full"
                style={{
                  color: 'var(--color-accent)',
                  border: '1.5px solid var(--color-accent)',
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.6, type: 'spring', stiffness: 200, damping: 15 }}
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  startAnimation={isVisible}
                />
              </motion.div>
              <motion.div
                className="font-body uppercase tracking-wider font-bold"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(0.6875rem, 1.8vw, 1rem)',
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
