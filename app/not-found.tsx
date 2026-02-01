import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Designient',
  description: 'The page you are looking for could not be found. Explore our UI/UX design courses or return to the homepage.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  const helpfulLinks = [
    { name: 'UI/UX Design Pro Course', path: '/ui-ux-design-pro', description: 'Our comprehensive 3-month design course' },
    { name: 'All Courses', path: '/courses', description: 'Explore all our UI/UX design programs' },
    { name: 'About Us', path: '/about-us', description: 'Learn about Designient School' },
    { name: 'FAQs', path: '/faqs', description: 'Find answers to common questions' },
    { name: 'Contact Us', path: '/contact-us', description: 'Get in touch with our team' },
  ]

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main id="main-content" role="main" className="pt-24 md:pt-32">
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              {/* 404 Icon */}
              <div
                className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(132, 88, 179, 0.1)' }}
              >
                <span
                  className="font-display font-bold"
                  style={{ color: '#8458B3', fontSize: '2.5rem' }}
                >
                  404
                </span>
              </div>

              {/* Heading */}
              <h1
                className="font-display font-bold mb-4"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  lineHeight: '1.2'
                }}
              >
                Page Not Found
              </h1>

              {/* Description */}
              <p
                className="font-body text-lg mb-8"
                style={{
                  color: '#4a4a4a',
                  lineHeight: '1.7'
                }}
              >
                Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                Don&apos;t worry, let&apos;s get you back on track.
              </p>

              {/* Primary CTA */}
              <Link
                href="/"
                className="inline-block px-8 py-4 rounded-full font-body font-bold text-white transition-all hover:opacity-90 mb-12"
                style={{ backgroundColor: '#8458B3' }}
              >
                Back to Homepage
              </Link>

              {/* Helpful Links */}
              <div className="mt-12">
                <h2
                  className="font-display font-semibold mb-6"
                  style={{
                    color: '#1a1a1a',
                    fontSize: '1.25rem'
                  }}
                >
                  Or explore these pages:
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {helpfulLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="block p-4 rounded-lg border-2 transition-all hover:border-purple-500 text-left"
                      style={{
                        backgroundColor: '#f9fafb',
                        borderColor: '#e5e7eb'
                      }}
                    >
                      <h3
                        className="font-display font-semibold mb-1"
                        style={{ color: '#8458B3', fontSize: '1rem' }}
                      >
                        {link.name}
                      </h3>
                      <p
                        className="font-body text-sm"
                        style={{ color: '#6b7280' }}
                      >
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Help */}
              <p
                className="font-body text-sm mt-12"
                style={{ color: '#6b7280' }}
              >
                Need help? Reach us at{' '}
                <a
                  href="mailto:hello@designient.com"
                  className="font-semibold hover:underline"
                  style={{ color: '#8458B3' }}
                >
                  hello@designient.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
