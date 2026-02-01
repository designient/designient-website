import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { QuickApplyProvider } from '../../components/course/QuickApplyContext'
import { BangaloreCityPageContent } from '../../components/city/BangaloreCityPageContent'
import { CityPageSchemas } from '../../components/city/CityPageSchemas'

export const metadata: Metadata = {
  title: 'UI/UX Design Course in Bangalore – Designient School of Masterminds',
  description: 'Master UI/UX design with hands-on training, mentor-led learning, and placement support in Bangalore. Weekday and weekend batches for working professionals and students.',
  keywords: ['UI/UX design course Bangalore', 'UX course Bangalore', 'design training Bengaluru', 'UI/UX bootcamp Bangalore', 'design course Bangalore'],
  openGraph: {
    title: 'UI/UX Design Course in Bangalore – Designient',
    description: 'Master UI/UX design with hands-on training and placement support in Bangalore. Weekday and weekend batches.',
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
    <QuickApplyProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        <CityPageSchemas
          cityName="Bangalore"
          cityUrl="https://designient.com/ui-ux-design-course-in-bangalore"
        />
        <Header />
        <main id="main-content" role="main" className="pt-24 md:pt-32">
          <BangaloreCityPageContent />
        </main>
        <Footer />
      </div>
    </QuickApplyProvider>
  )
}
