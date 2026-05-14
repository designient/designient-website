import type { Metadata } from 'next'
import { courses } from '../../lib/courseData'
import { CoursePageTemplate } from '../../components/course/CoursePageTemplate'

const course = courses['ui-ux-design-master']

export const metadata: Metadata = {
  title: course.metaTitle,
  description: course.metaDescription,
  openGraph: {
    title: course.ogTitle,
    description: course.metaDescription,
    url: course.canonicalUrl,
    images: [{ url: '/favicon-designient.png', width: 512, height: 512, alt: course.title }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: course.ogTitle,
    description: course.metaDescription,
  },
  alternates: { canonical: course.canonicalUrl },
  robots: { index: true, follow: true },
}

export default function MasterCoursePage() {
  return <CoursePageTemplate course={course} />
}
