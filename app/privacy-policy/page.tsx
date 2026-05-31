import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import Link from 'next/link'
import { PrivacyPolicyUpdatedSections, PrivacyPolicyRetentionAndRights } from './policy-sections'

export const metadata: Metadata = {
  title: 'Privacy Policy | Designient',
  description: 'How Designient collects, uses, and protects your personal data across courses, workshops, team enrollments, and certificate verification.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Designient',
    description: 'How Designient collects, uses, and protects your personal data across courses, workshops, team enrollments, and certificate verification.',
    url: 'https://designient.com/privacy-policy',
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
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
        name: 'Privacy Policy',
        item: 'https://designient.com/privacy-policy',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-base font-sans text-primary">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" role="main">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-12">
            <h1 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
              Privacy Policy
            </h1>
            <p className="font-body text-lg" style={{ color: 'var(--text-secondary)' }}>
              Last Updated: May 30, 2026
            </p>
          </div>

          <div className="mb-12">
            <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
              Designient Technologies Private Limited (&quot;Designient&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our services, including our UI/UX design courses, AI courses, free workshops, website, and related services.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
              This Privacy Policy should be read in conjunction with our <Link href="/terms-and-conditions" className="text-[var(--color-primary)] underline">Terms and Conditions</Link> and <Link href="/cancellation-refund-policy" className="text-[var(--color-primary)] underline">Cancellation and Refund Policy</Link>. By using our services, you consent to the data practices described in this policy.
            </p>
          </div>

          <PrivacyPolicyUpdatedSections />

          {/* Payments */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              Payments
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Payments for our courses are processed via third-party payment gateways and service providers, including Razorpay (for Indian students), PayPal (for international students), bank transfer, and UPI payment processors.
              </p>
              <div className="rounded-lg p-4 border-l-4" style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--color-primary)' }}>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Designient does not store, process, or have access to your card details, banking information, or sensitive payment credentials.</strong> All payment information is handled directly by the respective payment gateways and service providers, which are subject to their own privacy policies and security standards.
                </p>
              </div>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We may retain payment transaction records (such as transaction IDs, amounts, and payment status) for accounting, record-keeping, and refund processing purposes, but we do not store your payment card or banking details.
              </p>
              <div className="rounded-lg p-4 border-l-4" style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--color-warning)' }}>
                <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Payment Gateway Disclaimer</p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Payments made through Razorpay, PayPal, banks, UPI, and other payment gateways are subject to the respective payment gateway&apos;s terms and conditions. Designient Technologies Private Limited is not responsible for payment failures, delays, or technical issues caused by payment gateways, banks, or third-party service providers.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Approved refunds are initiated through the original payment method. Actual credit timelines depend on the payment gateway and banking systems involved.
                </p>
              </div>
            </div>
          </section>

          {/* Communication Consent */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              Communication Consent
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                By providing your contact information and enrolling in our courses, you consent to receive communications from Designient via email, WhatsApp, and phone calls for course updates, reminders, support, and important announcements.
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                You may opt out of marketing communications at any time by contacting us or using the unsubscribe options provided in our communications. However, you may continue to receive essential course-related and transactional communications even if you opt out of marketing messages.
              </p>
            </div>
          </section>

          {/* Testimonials & Portfolio Use */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              Testimonials & Portfolio Use
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Designient may use student testimonials, feedback, and portfolio work for promotional and marketing purposes, but only with explicit written consent from the student.
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                You have the right to refuse consent, request removal of your content at any time, specify conditions for usage, or withdraw consent by contacting us. If you provide consent, your content may be used on our website, social media, and marketing materials with appropriate attribution unless you request anonymity.
              </p>
            </div>
          </section>

          {/* Certificate Verification */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              Certificate Verification
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Designient operates a certificate verification system at{' '}
                <Link href="/verify" className="text-[var(--color-primary)] underline">/verify</Link>{' '}
                to allow employers, institutions, and other parties to verify the authenticity of certificates issued by us.
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Certificate data — including student name, course name, completion date, certificate number or verification code, and certificate status — may be displayed publicly for verification purposes. By accepting a certificate from Designient, you consent to this public display. If you have concerns, please contact us before accepting your certificate.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              Data Security
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Designient implements reasonable security practices and procedures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction, including encryption in transit and at rest, secure servers, access controls, and employee training on data protection.
              </p>
              <div className="rounded-lg p-4 border-l-4" style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--color-warning)' }}>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  While we implement reasonable security practices, <strong>no method of transmission over the internet or electronic storage is 100% secure.</strong> Therefore, we cannot guarantee absolute security of your personal information.
                </p>
              </div>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                In the event of a data breach that may affect your personal information, we will notify you and relevant authorities as required by applicable law.
              </p>
            </div>
          </section>

          {/* Data Sharing & Disclosure */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              Data Sharing & Disclosure
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li className="font-body"><strong>Service Providers:</strong> With third-party service providers who assist us in operating our business (e.g., payment processors, email services, CRM, hosting providers), subject to confidentiality agreements</li>
                <li className="font-body"><strong>Team Enrollment:</strong> Company contact data submitted through team enrollment inquiries is shared only with Designient staff involved in processing the inquiry and is not used for marketing unless separately consented to. Individual team member data is handled in the same way as individual enrollment data.</li>
                <li className="font-body"><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li className="font-body"><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our students or others</li>
                <li className="font-body"><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to affected users</li>
                <li className="font-body"><strong>With Your Consent:</strong> When you have explicitly consented to sharing</li>
              </ul>
            </div>
          </section>

          <PrivacyPolicyRetentionAndRights />

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              Children&apos;s Privacy
            </h2>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Our services are intended for individuals who are at least 18 years of age. We do not knowingly collect personal information from children under 18 without parental or guardian consent. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Updates to Privacy Policy */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              Updates to Privacy Policy
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Designient reserves the right to modify this Privacy Policy at any time. We will notify you of significant changes via email or through our communication channels. The &quot;Last Updated&quot; date at the top of this page indicates when this Privacy Policy was last revised.
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section 7: Contact */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              7. Contact
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                For any privacy-related queries, requests, or complaints:
              </p>
              <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-subtle)' }}>
                <p className="font-body mb-2" style={{ color: 'var(--text-primary)' }}>
                  <strong>Email:</strong>{' '}
                  <Link href="mailto:hello@designient.com" className="text-[var(--color-primary)] underline">hello@designient.com</Link>
                </p>
                <p className="font-body mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Subject line:</strong> Privacy — [Your Query]
                </p>
                <p className="font-body mb-2" style={{ color: 'var(--text-primary)' }}>
                  <strong>Designient Technologies Private Limited</strong>
                </p>
                <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
                  148, Church St, Haridevpur, Ashok Nagar<br />
                  Bengaluru, Karnataka 560001, India
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/terms-and-conditions" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Terms and Conditions
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/cancellation-refund-policy" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Cancellation and Refund Policy
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/contact-us" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Contact Us
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
