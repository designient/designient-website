import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer | Designient Technologies Private Limited',
  description: 'Disclaimer for Designient Technologies Private Limited. Learn about our educational services, limitations, and policies regarding course outcomes, testimonials, and third-party tools.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | Designient',
    description: 'Disclaimer for Designient Technologies Private Limited.',
    url: 'https://designient.com/disclaimer',
    type: 'website',
  },
}

export default function DisclaimerPage() {
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
        name: 'Disclaimer',
        item: 'https://designient.com/disclaimer',
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
              Disclaimer
            </h1>
            <p className="font-body text-lg" style={{ color: '#4a4a4a' }}>
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This Disclaimer applies to all services, courses, content, and materials provided by Designient Technologies Private Limited (&quot;Designient&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). Please read this Disclaimer carefully before using our services.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This Disclaimer should be read in conjunction with our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link>, <Link href="/privacy-policy" className="text-[#8458B3] underline">Privacy Policy</Link>, and <Link href="/cancellation-refund-policy" className="text-[#8458B3] underline">Cancellation & Refund Policy</Link>.
            </p>
          </div>

          {/* Section: Educational Purpose */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Educational Purpose
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                All courses, workshops, mentorship sessions, and learning materials provided by Designient are for <strong>educational purposes only</strong>. Our programs are designed to teach UI/UX design principles, methodologies, tools, and best practices.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                While we aim to provide comprehensive and practical education, completion of our courses does not constitute professional certification, licensing, or accreditation unless explicitly stated. Our educational content is intended to enhance your knowledge and skills in UI/UX design.
              </p>
            </div>
          </section>

          {/* Section: No Guarantees */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              No Guarantees
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="font-body font-semibold mb-3" style={{ color: '#1a1a1a' }}>Important Notice:</p>
                <p className="font-body leading-relaxed mb-3" style={{ color: '#4a4a4a' }}>
                  <strong>UI/UX education does not guarantee:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                  <li className="font-body"><strong>Jobs:</strong> Completion of our courses does not guarantee employment or job placement</li>
                  <li className="font-body"><strong>Salaries:</strong> We do not guarantee specific salary levels or compensation</li>
                  <li className="font-body"><strong>Promotions:</strong> Course completion does not guarantee career advancement or promotions</li>
                  <li className="font-body"><strong>Income:</strong> We do not guarantee any level of income or financial success</li>
                </ul>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Learning outcomes and career success depend on various factors, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Individual effort, dedication, and commitment to learning</li>
                <li className="font-body">Skill development and practical application of knowledge</li>
                <li className="font-body">Market conditions and industry demand</li>
                <li className="font-body">Personal circumstances and career goals</li>
                <li className="font-body">Portfolio quality and professional networking</li>
                <li className="font-body">Previous work experience and educational background</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                While we provide placement assistance and career support (as outlined in our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link>), we do not guarantee job placement or employment outcomes.
              </p>
            </div>
          </section>

          {/* Section: Examples & Testimonials */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Examples & Testimonials
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Any success stories, testimonials, case studies, student achievements, or examples shared on our website, in marketing materials, or during course sessions are <strong>illustrative and for informational purposes only</strong>.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Individual results may vary.</strong> Past performance, student outcomes, or success stories do not guarantee similar results for future students. Each individual&apos;s journey, learning pace, and career path is unique.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Testimonials and examples are provided to showcase potential outcomes and experiences, but they should not be interpreted as promises or guarantees of specific results. Your success depends on your own efforts, skills, and circumstances.
              </p>
            </div>
          </section>

          {/* Section: Third-Party Tools & Platforms */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Third-Party Tools & Platforms
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Our courses may reference, demonstrate, or require the use of third-party tools, platforms, software, AI tools, job portals, or external services. These may include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Design software (Figma, Adobe XD, Sketch, etc.)</li>
                <li className="font-body">AI-powered design tools and platforms</li>
                <li className="font-body">Job portals and career platforms</li>
                <li className="font-body">Online learning platforms and resources</li>
                <li className="font-body">Collaboration and project management tools</li>
                <li className="font-body">Other third-party services and applications</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Important:</p>
                <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                  <strong>Designient does not control, endorse, or guarantee the availability, accuracy, performance, or reliability of any third-party tools, platforms, or services.</strong> We are not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2" style={{ color: '#4a4a4a' }}>
                  <li className="font-body">Changes to third-party platform features or pricing</li>
                  <li className="font-body">Service interruptions or technical issues with third-party platforms</li>
                  <li className="font-body">Data loss or security breaches on third-party platforms</li>
                  <li className="font-body">Terms of service or privacy policies of third-party providers</li>
                  <li className="font-body">Any disputes or issues arising from use of third-party services</li>
                </ul>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Students are responsible for reviewing and complying with the terms of service and privacy policies of any third-party tools or platforms they choose to use. Designient recommends that students verify the current status, pricing, and availability of third-party tools independently.
              </p>
            </div>
          </section>

          {/* Section: Content Accuracy */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Content Accuracy
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient strives to provide accurate, up-to-date, and relevant educational content. However, the field of UI/UX design is constantly evolving, and industry practices, tools, and methodologies may change over time.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Website and course content may be updated, modified, or corrected at any time without prior notice.</strong> This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Course curriculum and learning materials</li>
                <li className="font-body">Tool demonstrations and tutorials</li>
                <li className="font-body">Pricing information and course descriptions</li>
                <li className="font-body">Website content and resources</li>
                <li className="font-body">Policy documents and terms</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                While we make reasonable efforts to keep information current, we do not warrant that all content is always accurate, complete, or up-to-date. Students are encouraged to verify important information independently and stay informed about industry developments.
              </p>
            </div>
          </section>

          {/* Section: Limitation */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Limitation
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient provides educational content, guidance, and mentorship to support your learning journey. However, <strong>Designient shall not be held liable for decisions taken by learners based on course content or guidance provided.</strong>
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Career decisions and job applications</li>
                <li className="font-body">Portfolio development and presentation choices</li>
                <li className="font-body">Tool selection and software purchases</li>
                <li className="font-body">Business or freelance decisions</li>
                <li className="font-body">Educational or certification choices</li>
                <li className="font-body">Any other decisions made in reliance on our educational content</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Learners are responsible for making their own informed decisions and should seek professional advice when necessary. Our educational content is provided as guidance and should not be considered as professional, financial, legal, or career advice.
              </p>
            </div>
          </section>

          {/* Section: Contact */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Contact
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                If you have questions or concerns regarding this Disclaimer, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-body mb-2" style={{ color: '#1a1a1a' }}>
                  <strong>Email:</strong> <Link href="mailto:hello@designient.com" className="text-[#8458B3] underline">hello@designient.com</Link>
                </p>
                <p className="font-body" style={{ color: '#4a4a4a' }}>
                  <strong>Website:</strong> <Link href="https://designient.com" className="text-[#8458B3] underline">https://designient.com</Link>
                </p>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#e5e7eb' }}>
            <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This Disclaimer is part of and should be read together with our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link>, <Link href="/privacy-policy" className="text-[#8458B3] underline">Privacy Policy</Link>, and <Link href="/cancellation-refund-policy" className="text-[#8458B3] underline">Cancellation & Refund Policy</Link>. In case of any conflict between this Disclaimer and other policy documents, the Terms and Conditions shall prevail.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              Designient reserves the right to modify this Disclaimer at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
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
            <Link href="/cancellation-refund-policy" className="font-body text-[#8458B3] underline hover:no-underline">
              Cancellation & Refund Policy
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
