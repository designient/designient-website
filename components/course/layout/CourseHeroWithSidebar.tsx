'use client'

import React from 'react'
import { PageHero } from '../../layout/PageHero'
import { CourseStickyPricingCard } from './CourseStickyPricingCard'
import type { CoursePricingData } from '../../../data/coursePricing'
import type { CourseEmiConfig } from '../../../data/localizedPricingTypes'

type CourseHeroWithSidebarProps = {
  courseSlug: keyof CoursePricingData | 'ai-automation-live' | 'ai-product-design-live'
  courseName: string
  duration?: string
  features?: string[]
  emiConfig?: CourseEmiConfig
  children: React.ReactNode
  align?: 'center' | 'left'
}

export function CourseHeroWithSidebar({
  courseSlug,
  courseName,
  duration,
  features = [],
  emiConfig,
  children,
  align = 'center',
}: CourseHeroWithSidebarProps) {
  return (
    <PageHero size="course" align={align}>
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-8 min-w-0">{children}</div>
          <div className="hidden lg:block lg:col-span-4 min-w-0">
            <CourseStickyPricingCard
              courseSlug={courseSlug}
              courseName={courseName}
              duration={duration}
              features={features}
              emiConfig={emiConfig}
              variant="sidebar"
            />
          </div>
        </div>
      </div>
    </PageHero>
  )
}
