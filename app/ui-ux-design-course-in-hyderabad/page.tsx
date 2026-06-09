import type { Metadata } from 'next'
import { HyderabadCityPageContent } from '../../components/city/HyderabadCityPageContent'
import { CityPageSchemas } from '../../components/city/CityPageSchemas'
import { CoursePageShell, CourseMobilePricingBar } from '../../components/course/layout'

export const metadata: Metadata = {
 title: 'UI/UX Design Course in Hyderabad – Designient School of Masterminds',
 description: 'Learn UI/UX design with industry-focused training, real projects, and career support in Hyderabad. Apply for the 10-week UI/UX Design Pro programme.',
 keywords: [
 'UI/UX design course Hyderabad',
 'UX course Hyderabad',
 'design training Hyderabad',
 'UI/UX bootcamp Hyderabad',
 'design course Hyderabad',
 'AI automation course Hyderabad online',
 'AI product design course Hyderabad online',
 ],
 openGraph: {
 title: 'UI/UX Design Course in Hyderabad – Designient',
 description: 'Learn UI/UX design with industry-focused training and career support in Hyderabad.',
 url: 'https://designient.com/ui-ux-design-course-in-hyderabad',
 type: 'website',
 },
 alternates: {
 canonical: 'https://designient.com/ui-ux-design-course-in-hyderabad',
 },
 robots: {
 index: true,
 follow: true,
 },
}

export default function HyderabadCityPage() {
 return (
 <CoursePageShell
 structuredData={
 <CityPageSchemas
 cityName="Hyderabad"
 cityUrl="https://designient.com/ui-ux-design-course-in-hyderabad"
 />
 }
 >
 <CourseMobilePricingBar courseSlug="ui-ux-design-pro" courseName="UI UX Design Pro" />
 <HyderabadCityPageContent />
 </CoursePageShell>
 )
}
