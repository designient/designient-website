'use client'

import React from 'react'
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { QuickApplyProvider } from '../QuickApplyContext'

type CoursePageShellProps = {
  children: React.ReactNode
  structuredData?: React.ReactNode
}

export function CoursePageShell({ children, structuredData }: CoursePageShellProps) {
  return (
    <QuickApplyProvider>
      <div className="min-h-screen bg-base font-sans text-primary">
        {structuredData}
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </div>
    </QuickApplyProvider>
  )
}
