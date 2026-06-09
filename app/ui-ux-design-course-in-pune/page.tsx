import type { Metadata } from 'next'
import { PuneCityPageContent } from '../../components/city/PuneCityPageContent'
import { CityPageSchemas } from '../../components/city/CityPageSchemas'
import { CoursePageShell, CourseMobilePricingBar } from '../../components/course/layout'

export const metadata: Metadata = {
 title: 'UI/UX Design Course in Pune | Designient',
 description: 'UI/UX design programme in Pune for working professionals and career switchers. Apply for the 10-week UI/UX Design Pro programme.',
 keywords: [
 'UI/UX design course Pune',
 'UX course Pune',
 'weekend design course Pune',
 'UI/UX bootcamp Pune',
 'design course Pune',
 'AI automation course Pune online',
 'AI product design course Pune online',
 ],
 openGraph: {
 title: 'UI/UX Design Course in Pune | Designient',
 description: 'UI/UX design programme in Pune for working professionals and career switchers.',
 url: 'https://designient.com/ui-ux-design-course-in-pune',
 type: 'website',
 },
 alternates: {
 canonical: 'https://designient.com/ui-ux-design-course-in-pune',
 },
 robots: {
 index: true,
 follow: true,
 },
}

export default function PuneCityPage() {
 return (
 <CoursePageShell
 structuredData={
 <CityPageSchemas
 cityName="Pune"
 cityUrl="https://designient.com/ui-ux-design-course-in-pune"
 isPune
 />
 }
 >
 <CourseMobilePricingBar courseSlug="ui-ux-design-pro" courseName="UI UX Design Pro" />
 <PuneCityPageContent />
 </CoursePageShell>
 )
}
