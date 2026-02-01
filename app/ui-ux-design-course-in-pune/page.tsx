import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { QuickApplyProvider } from '../../components/course/QuickApplyContext'
import { PuneCityPageContent } from '../../components/city/PuneCityPageContent'
import { CityPageSchemas } from '../../components/city/CityPageSchemas'

export const metadata: Metadata = {
  title: 'UI/UX Design Course in Pune – Weekend Batch | Designient',
  description: 'A weekend-focused UI/UX design course in Pune for working professionals and career switchers. Designient supports Pune learners through weekend batches.',
  keywords: ['UI/UX design course Pune', 'UX course Pune', 'weekend design course Pune', 'UI/UX bootcamp Pune', 'design course Pune'],
  openGraph: {
    title: 'UI/UX Design Course in Pune – Weekend Batch | Designient',
    description: 'Weekend-focused UI/UX design course in Pune for working professionals and career switchers.',
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
    <QuickApplyProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        <CityPageSchemas
          cityName="Pune"
          cityUrl="https://designient.com/ui-ux-design-course-in-pune"
          isPune
        />
        <Header />
        <main id="main-content" role="main" className="pt-24 md:pt-32">
          <PuneCityPageContent />
        </main>
        <Footer />
      </div>
    </QuickApplyProvider>
  )
}
