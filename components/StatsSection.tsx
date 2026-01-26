'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
{
  value: 95,
  suffix: '%',
  label: 'Completion / Satisfaction'
},
{
  value: 500,
  suffix: '+',
  label: 'Students'
},
{
  value: 8,
  suffix: '+',
  label: 'Years'
},
{
  value: 150,
  suffix: '+',
  label: 'Internships'
}];

function AnimatedNumber({ value, suffix, startAnimation }: { value: number; suffix: string; startAnimation: boolean }) {
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
      {displayValue}{suffix}
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
    <section
      ref={sectionRef}
      className="py-12 md:py-16"
      style={{
        backgroundColor: '#8458B3'
      }}>

      <div className="max-w-container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="text-center flex flex-col justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">

              <motion.div
              className="font-display tracking-wide mb-2"
              style={{
                color: '#f2d53c',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)'
              }}
              initial={{
                scale: 0
              }}
              whileInView={{
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.15 + 0.3,
                duration: 0.6,
                type: 'spring',
                stiffness: 200,
                damping: 15
              }}>

                <AnimatedNumber value={stat.value} suffix={stat.suffix} startAnimation={isVisible} />
              </motion.div>
              <motion.div
              className="font-body uppercase tracking-wider font-bold"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: 'clamp(0.6875rem, 1.8vw, 1rem)'
              }}
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.15 + 0.5,
                duration: 0.6
              }}>

                {stat.label}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}