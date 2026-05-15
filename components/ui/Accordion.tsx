'use client'

import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'

export interface AccordionItem {
  id: string
  label?: string
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  /** Show small amber label above title (e.g., "Week 1-2") */
  withLabel?: boolean
  /** Allow multiple open at once */
  multi?: boolean
  className?: string
}

export function Accordion({ items, withLabel = false, multi = false, className = '' }: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpen((prev) => {
      const next = new Set(multi ? prev : [])
      if (prev.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className={`divide-y divide-white/[0.06] ${className}`}>
      {items.map((item) => {
        const isOpen = open.has(item.id)
        return (
          <div key={item.id} className="group">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${item.id}`}
              className="w-full flex items-start justify-between gap-6 py-6 text-left transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-md"
            >
              <div className="flex-1 min-w-0">
                {withLabel && item.label ? (
                  <span className="block text-[11px] font-medium tracking-[0.12em] uppercase text-amber mb-1.5">
                    {item.label}
                  </span>
                ) : null}
                <span className="block font-medium text-ivory text-[17px] leading-snug">
                  {item.title}
                </span>
              </div>
              <span
                className={`flex-shrink-0 mt-1 w-8 h-8 rounded-full border border-white/10 grid place-items-center text-silver transition-all duration-300 ${
                  isOpen ? 'rotate-180 border-amber text-amber' : ''
                }`}
                aria-hidden="true"
              >
                {isOpen ? <X size={14} strokeWidth={1.5} /> : <Plus size={14} strokeWidth={1.5} />}
              </span>
            </button>
            <div
              id={`acc-panel-${item.id}`}
              className={`grid transition-all duration-400 ease-out-expo ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-12 text-cloud text-[15.5px] leading-[1.7]">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
