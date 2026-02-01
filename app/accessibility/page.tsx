import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Designient Technologies Private Limited',
  description: 'Accessibility statement for Designient Technologies Private Limited. Learn about our commitment to making learning accessible to all learners.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/accessibility',
  },
  openGraph: {
    title: 'Accessibility Statement | Designient',
    description: 'Accessibility statement for Designient Technologies Private Limited.',
    url: 'https://designient.com/accessibility',
    type: 'website',
  },
}

export default function AccessibilityPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://designient.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Accessibility Statement',
        item: 'https://designient.com/accessibility',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" role="main">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a' }}>
              Accessibility Statement
            </h1>
            <p className="font-body text-lg" style={{ color: '#4a4a4a' }}>
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This Accessibility Statement outlines Designient Technologies Private Limited&apos;s (&quot;Designient&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) commitment to making our educational services accessible to learners with diverse needs and abilities.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This statement should be read in conjunction with our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link> and <Link href="/privacy-policy" className="text-[#8458B3] underline">Privacy Policy</Link>.
            </p>
          </div>

          {/* Section: Commitment */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Commitment
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient is committed to making learning accessible to as many learners as possible. We believe that quality UI/UX design education should be available to individuals regardless of their abilities, backgrounds, or circumstances.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We recognize that accessibility is an ongoing journey, and we are dedicated to continuously improving our services to better serve all learners. Our goal is to create an inclusive learning environment where everyone can participate, learn, and succeed.
              </p>
            </div>
          </section>

          {/* Section: Learning Accessibility */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Learning Accessibility
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient aims to support accessibility through various means:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Recorded sessions for flexible learning:</strong> We provide recorded sessions where possible, allowing learners to access course content at their own pace, review materials multiple times, and learn at times that suit their schedule</li>
                <li className="font-body"><strong>Written learning materials and slides:</strong> Where applicable, we provide written materials, presentation slides, and documentation to supplement video and live sessions, offering alternative ways to access course content</li>
                <li className="font-body"><strong>Email-based support for accessibility-related requests:</strong> Learners can reach out via email to discuss accessibility needs, request accommodations, or seek alternative formats for course materials</li>
                <li className="font-body"><strong>Multiple communication channels:</strong> We offer various ways to communicate and access support, including email, WhatsApp, and phone calls</li>
                <li className="font-body"><strong>Flexible learning modes:</strong> Our courses are available in Online, Offline, and Hybrid formats, allowing learners to choose the mode that best suits their needs</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We understand that accessibility needs vary from person to person, and we strive to work with learners to find solutions that support their learning journey.
              </p>
            </div>
          </section>

          {/* Section: Limitations */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Limitations
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                While Designient strives to improve accessibility and make our services available to as many learners as possible, we acknowledge that <strong>not all content or experiences may be fully accessible to everyone</strong>.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Some limitations may include:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Live sessions may rely on visual demonstrations or real-time interactions that may not be fully accessible to all learners</li>
                <li className="font-body">Some course materials or tools may require specific technical capabilities or software</li>
                <li className="font-body">Third-party platforms, tools, or software used in courses may have their own accessibility limitations</li>
                <li className="font-body">Certain design tools or software demonstrated in courses may have accessibility constraints</li>
                <li className="font-body">Physical locations (for offline courses) may have accessibility limitations beyond our control</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We are committed to working with learners to address accessibility challenges where feasible. If you encounter accessibility barriers, please reach out to us so we can explore potential solutions.
              </p>
            </div>
          </section>

          {/* Section: Requests & Support */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Requests & Support
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We encourage learners to reach out if they face accessibility challenges or have specific accessibility needs. We are here to help and will work with you to find solutions where possible.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                If you need accessibility accommodations or have questions about accessing our courses, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-body mb-2" style={{ color: '#1a1a1a' }}>
                  <strong>Email:</strong> <Link href="mailto:hello@designient.com" className="text-[#8458B3] underline">hello@designient.com</Link>
                </p>
                <p className="font-body mb-2" style={{ color: '#4a4a4a' }}>
                  When contacting us about accessibility needs, please include:
                </p>
                <ul className="list-disc pl-6 space-y-1" style={{ color: '#4a4a4a' }}>
                  <li className="font-body">A description of the accessibility challenge you&apos;re facing</li>
                  <li className="font-body">The specific course or service you&apos;re interested in</li>
                  <li className="font-body">Any accommodations or alternatives that would help</li>
                  <li className="font-body">Your preferred method of communication</li>
                </ul>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We will review your request and work with you to determine what accommodations or alternatives we can provide. While we cannot guarantee that all requests can be fulfilled, we are committed to exploring options and finding workable solutions.
              </p>
            </div>
          </section>

          {/* Section: Continuous Improvement */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Continuous Improvement
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient is continuously working to improve accessibility based on feedback from learners and feasibility considerations. We regularly review our courses, materials, and processes to identify opportunities for enhancing accessibility.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Our improvement efforts include:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Incorporating accessibility considerations into course design and content development</li>
                <li className="font-body">Seeking feedback from learners about accessibility barriers and needs</li>
                <li className="font-body">Exploring new tools, technologies, and methods to improve accessibility</li>
                <li className="font-body">Training mentors and staff on accessibility awareness and best practices</li>
                <li className="font-body">Updating materials and resources to be more accessible where feasible</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We value your feedback and suggestions for improving accessibility. If you have ideas or recommendations, please share them with us via email. Your input helps us make our services better for everyone.
              </p>
            </div>
          </section>

          {/* Additional Information */}
          <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#e5e7eb' }}>
            <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This Accessibility Statement is part of and should be read together with our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link> and <Link href="/privacy-policy" className="text-[#8458B3] underline">Privacy Policy</Link>.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              Designient reserves the right to modify this Accessibility Statement at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/terms-and-conditions" className="font-body text-[#8458B3] underline hover:no-underline">
              Terms and Conditions
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/privacy-policy" className="font-body text-[#8458B3] underline hover:no-underline">
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/code-of-conduct" className="font-body text-[#8458B3] underline hover:no-underline">
              Code of Conduct
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/contact-us" className="font-body text-[#8458B3] underline hover:no-underline">
              Contact Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/" className="font-body text-[#8458B3] underline hover:no-underline">
              Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
