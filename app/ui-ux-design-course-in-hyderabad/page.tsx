import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { QuickApplyProvider } from '../../components/course/QuickApplyContext'
import { HyderabadCityPageContent } from '../../components/city/HyderabadCityPageContent'
import { CityPageSchemas } from '../../components/city/CityPageSchemas'

export const metadata: Metadata = {
  title: 'UI/UX Design Course in Hyderabad – Designient School of Masterminds',
  description: 'Learn UI/UX design with industry-focused training, real projects, and career support in Hyderabad. Designient’s core mentoring team is based in Hyderabad.',
  keywords: ['UI/UX design course Hyderabad', 'UX course Hyderabad', 'design training Hyderabad', 'UI/UX bootcamp Hyderabad', 'design course Hyderabad'],
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
    <QuickApplyProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        <CityPageSchemas
          cityName="Hyderabad"
          cityUrl="https://designient.com/ui-ux-design-course-in-hyderabad"
        />
        <Header />
        <main id="main-content" role="main" className="pt-24 md:pt-32">
          <HyderabadCityPageContent />
        </main>
        <Footer />
      </div>
    </QuickApplyProvider>
  )
}
