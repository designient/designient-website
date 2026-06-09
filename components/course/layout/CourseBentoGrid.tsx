'use client'

import React from 'react'
import { motion } from 'framer-motion'

export type BentoSpan = '1x1' | '2x1' | '1x2' | '2x2'

export type CourseBentoItem = {
  id: string
  span?: BentoSpan
  children: React.ReactNode
  className?: string
}

type CourseBentoGridProps = {
  items: CourseBentoItem[]
  className?: string
}

const spanClasses: Record<BentoSpan, string> = {
  '1x1': 'col-span-1 row-span-1',
  '2x1': 'col-span-1 sm:col-span-2 row-span-1',
  '1x2': 'col-span-1 row-span-1 sm:row-span-2',
  '2x2': 'col-span-1 sm:col-span-2 row-span-1 sm:row-span-2',
}

export function CourseBentoGrid({ items, className = '' }: CourseBentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-fr ${className}`.trim()}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className={`rounded-2xl border bg-white p-5 md:p-6 ${spanClasses[item.span ?? '1x1']} ${item.className ?? ''}`}
          style={{ borderColor: 'var(--border-default)' }}
        >
          {item.children}
        </motion.div>
      ))}
    </div>
  )
}
