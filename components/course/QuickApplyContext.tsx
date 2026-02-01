'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { QuickApplyModal } from './QuickApplyModal'

interface QuickApplyContextType {
  openModal: (courseSlug?: string, courseName?: string) => void
  closeModal: () => void
}

const QuickApplyContext = createContext<QuickApplyContextType | undefined>(undefined)

export function QuickApplyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [courseSlug, setCourseSlug] = useState<string | undefined>()
  const [courseName, setCourseName] = useState<string | undefined>()

  const openModal = (slug?: string, name?: string) => {
    setCourseSlug(slug)
    setCourseName(name)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <QuickApplyContext.Provider value={{ openModal, closeModal }}>
      {children}
      <QuickApplyModal
        isOpen={isOpen}
        onClose={closeModal}
        courseSlug={courseSlug}
        courseName={courseName}
      />
    </QuickApplyContext.Provider>
  )
}

export function useQuickApply() {
  const context = useContext(QuickApplyContext)
  if (!context) {
    throw new Error('useQuickApply must be used within QuickApplyProvider')
  }
  return context
}
