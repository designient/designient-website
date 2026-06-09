import type { Metadata } from 'next'
import { BangaloreCityPageContent } from '../../components/city/BangaloreCityPageContent'
import { CityPageSchemas } from '../../components/city/CityPageSchemas'
import { CoursePageShell, CourseMobilePricingBar } from '../../components/course/layout'

export const metadata: Metadata = {
 title: 'UI/UX Design Course in Bangalore – Designient School of Masterminds',
 description: 'Master UI/UX design with hands-on training, mentor-led learning, and placement support in Bangalore. Apply for the 10-week UI/UX Design Pro programme.',
 keywords: [
 'UI/UX design course Bangalore',
 'UX course Bangalore',
 'design training Bengaluru',
 'UI/UX bootcamp Bangalore',
 'design course Bangalore',
 'AI automation course Bangalore online',
 'AI product design course Bangalore online',
 ],
 openGraph: {
 title: 'UI/UX Design Course in Bangalore – Designient',
 description: 'Master UI/UX design with hands-on training and placement support in Bangalore. Apply for the 10-week UI/UX Design Pro programme.',
 url: 'https://designient.com/ui-ux-design-course-in-bangalore',
 type: 'website',
 },
 alternates: {
 canonical: 'https://designient.com/ui-ux-design-course-in-bangalore',
 },
 robots: {
 index: true,
 follow: true,
 },
}

export default function BangaloreCityPage() {
 return (
 <CoursePageShell
 structuredData={
 <CityPageSchemas
 cityName="Bangalore"
 cityUrl="https://designient.com/ui-ux-design-course-in-bangalore"
 />
 }
 >
 <CourseMobilePricingBar courseSlug="ui-ux-design-pro" courseName="UI UX Design Pro" />
 <BangaloreCityPageContent />
 </CoursePageShell>
 )
}
