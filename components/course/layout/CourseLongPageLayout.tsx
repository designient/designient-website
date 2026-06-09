'use client'

import React from 'react'
import { CourseSectionNav, type SectionNavItem } from './CourseSectionNav'

type CourseLongPageLayoutProps = {
  navItems: SectionNavItem[]
  children: React.ReactNode
}

export function CourseLongPageLayout({ navItems, children }: CourseLongPageLayoutProps) {
  return (
    <div className="relative">
      <div className="max-w-[1440px] mx-auto flex gap-6 xl:gap-10">
        <div className="flex-1 min-w-0">{children}</div>
        <aside className="hidden xl:block w-48 flex-shrink-0 pr-4 md:pr-6 lg:pr-8">
          <CourseSectionNav items={navItems} />
        </aside>
      </div>
    </div>
  )
}
