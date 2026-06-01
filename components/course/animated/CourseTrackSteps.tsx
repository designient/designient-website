'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { motionEase, viewportOnce } from './motion'

type CourseTrackStepsProps = {
  children: React.ReactNode
}

export function CourseTrackSteps({ children }: CourseTrackStepsProps) {
  return <ol className="learning-path-steps list-none p-0 m-0">{children}</ol>
}

type CourseTrackStepProps = {
  children: React.ReactNode
  index: number
  active?: boolean
}

export function CourseTrackStep({ children, index, active = false }: CourseTrackStepProps) {
  return (
    <motion.li
      className="learning-path-step relative pl-11 py-4 first:pt-1 last:pb-1"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ delay: index * 0.09, duration: 0.45, ease: motionEase }}
    >
      <span
        className="absolute left-0 top-[1.125rem] flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold font-display z-[1]"
        style={{
          backgroundColor: active ? 'var(--color-accent)' : 'var(--bg-base)',
          color: active ? 'var(--text-on-accent)' : 'var(--text-secondary)',
          border: active ? '2px solid var(--color-accent)' : '2px solid var(--border-default)',
          boxShadow: active ? '0 0 16px rgba(240, 255, 66, 0.45)' : 'none',
        }}
        aria-hidden="true"
      >
        {index + 1}
      </span>
      <div className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {children}
      </div>
    </motion.li>
  )
}
