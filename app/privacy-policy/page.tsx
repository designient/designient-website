import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Designient Technologies Private Limited',
  description: 'Privacy policy for Designient Technologies Private Limited. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Designient',
    description: 'Privacy policy for Designient Technologies Private Limited.',
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
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" role="main">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a' }}>
              Privacy Policy
            </h1>
            <p className="font-body text-lg" style={{ color: '#4a4a4a' }}>
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              Designient Technologies Private Limited (&quot;Designient&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our services, including our UI/UX design courses, website, and related services.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This Privacy Policy should be read in conjunction with our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link> and <Link href="/cancellation-refund-policy" className="text-[#8458B3] underline">Cancellation & Refund Policy</Link>. By using our services, you consent to the data practices described in this policy.
            </p>
          </div>

          {/* Section: Information We Collect */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Information We Collect
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Enroll in our courses</li>
                <li className="font-body">Submit enquiry forms or contact us</li>
                <li className="font-body">Make payments</li>
                <li className="font-body">Participate in surveys or provide feedback</li>
                <li className="font-body">Communicate with us via email, WhatsApp, or phone</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Personal Information:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Name:</strong> Your full name as provided during enrollment or enquiry</li>
                <li className="font-body"><strong>Email Address:</strong> Your email address for communication and account management</li>
                <li className="font-body"><strong>Phone Number:</strong> Your contact number for course-related communications</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Course-Related Information:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Course Preferences:</strong> Information about courses you are interested in or have enrolled in</li>
                <li className="font-body"><strong>Enquiry Details:</strong> Details provided in enquiry forms, including your questions, goals, and requirements</li>
                <li className="font-body"><strong>Enrollment Information:</strong> Course selection, batch preferences, and enrollment status</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Communication Records:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Records of communications via email, WhatsApp, phone calls, or other channels</li>
                <li className="font-body">Support tickets and customer service interactions</li>
                <li className="font-body">Feedback, testimonials, and reviews (with your consent)</li>
              </ul>
            </div>
          </section>

          {/* Section: Payments */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Payments
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Payment Processing:</strong>
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Payments for our courses are processed via third-party payment gateways and service providers, including:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Razorpay (for Indian students)</li>
                <li className="font-body">Skydo (for international students)</li>
                <li className="font-body">PayPal Business</li>
                <li className="font-body">Bank Transfer services</li>
                <li className="font-body">UPI payment processors</li>
                <li className="font-body">Cash in Hand (at our physical locations only)</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Cash payments, where accepted, are offline transactions and do not fall under Razorpay&apos;s payment processing or policies.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Important:</p>
                <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                  <strong>Designient does not store, process, or have access to your card details, banking information, or sensitive payment credentials.</strong> All payment information is handled directly by the respective payment gateways and service providers, which are subject to their own privacy policies and security standards.
                </p>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We may retain payment transaction records (such as transaction IDs, amounts, and payment status) for accounting, record-keeping, and refund processing purposes, but we do not store your payment card or banking details.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Payment Gateway Disclaimer:</p>
                <p className="font-body leading-relaxed mb-2" style={{ color: '#4a4a4a' }}>
                  Payments made through Razorpay, Skydo, PayPal, banks, UPI, and other payment gateways are subject to the respective payment gateway&apos;s terms and conditions.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: '#4a4a4a' }}>
                  <strong>Designient Technologies Private Limited is not responsible for payment failures, delays, or technical issues caused by payment gateways, banks, or third-party service providers.</strong> Approved refunds are initiated through the original payment method. Actual credit timelines depend on the payment gateway and banking systems involved.
                </p>
                <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                  <strong>Note:</strong> Cash payments, where accepted, are offline transactions and do not fall under Razorpay&apos;s payment processing or policies.
                </p>
              </div>
            </div>
          </section>

          {/* Section: How We Use Your Information */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              How We Use Your Information
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Process your enrollment and manage your course participation</li>
                <li className="font-body">Communicate with you about course updates, schedules, and important announcements</li>
                <li className="font-body">Respond to your enquiries and provide customer support</li>
                <li className="font-body">Process payments and manage billing</li>
                <li className="font-body">Send you course materials, resources, and access credentials</li>
                <li className="font-body">Improve our services and develop new offerings</li>
                <li className="font-body">Comply with legal obligations and enforce our policies</li>
              </ul>
            </div>
          </section>

          {/* Section: Communication Consent */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Communication Consent
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                By providing your contact information and enrolling in our courses, you consent to receive communications from Designient via:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Email:</strong> Course updates, announcements, payment confirmations, and important policy changes</li>
                <li className="font-body"><strong>WhatsApp:</strong> Quick updates, reminders, and support communications</li>
                <li className="font-body"><strong>Phone Calls:</strong> Important announcements, support, and course-related discussions</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                You may opt out of marketing communications at any time by contacting us or using the unsubscribe options provided in our communications. However, you may continue to receive essential course-related and transactional communications even if you opt out of marketing messages.
              </p>
            </div>
          </section>

          {/* Section: Testimonials & Portfolio Use */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Testimonials & Portfolio Use
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient may use student testimonials, feedback, and portfolio work for promotional and marketing purposes, but only with explicit written consent from the student.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Your Rights:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">You have the right to refuse consent for use of your testimonials, feedback, or portfolio work</li>
                <li className="font-body">You can request removal of your content from our platforms at any time</li>
                <li className="font-body">You may specify conditions for usage, such as anonymization or restriction to specific platforms</li>
                <li className="font-body">You can withdraw your consent at any time by contacting us</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                If you provide consent, your testimonials, feedback, or portfolio work may be used on our website, social media, marketing materials, and other promotional channels. We will always attribute your work appropriately unless you request anonymity.
              </p>
            </div>
          </section>

          {/* Section: Certificate Verification */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Certificate Verification
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient operates a certificate verification system to allow employers, institutions, and other parties to verify the authenticity of certificates issued by us.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Public Display:</strong>
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Certificate data, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Student name</li>
                <li className="font-body">Course name and completion date</li>
                <li className="font-body">Certificate number or verification code</li>
                <li className="font-body">Certificate status (valid, revoked, etc.)</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                may be displayed publicly on our certificate verification system for verification and authenticity purposes. This allows third parties to verify certificates by entering the certificate number or verification code.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                By accepting a certificate from Designient, you consent to this public display of certificate information for verification purposes. If you have concerns about this, please contact us before accepting your certificate.
              </p>
            </div>
          </section>

          {/* Section: Data Security */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Data Security
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient implements reasonable security practices and procedures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Security Measures:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Encryption of sensitive data in transit and at rest</li>
                <li className="font-body">Secure servers and databases</li>
                <li className="font-body">Access controls and authentication mechanisms</li>
                <li className="font-body">Regular security assessments and updates</li>
                <li className="font-body">Employee training on data protection</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Important Notice:</p>
                <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                  While we implement reasonable security practices, <strong>no method of transmission over the internet or electronic storage is 100% secure.</strong> Therefore, we cannot guarantee absolute security of your personal information. You acknowledge that you provide your information at your own risk.
                </p>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                In the event of a data breach that may affect your personal information, we will notify you and relevant authorities as required by applicable law.
              </p>
            </div>
          </section>

          {/* Section: Data Sharing & Disclosure */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Data Sharing & Disclosure
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Service Providers:</strong> With third-party service providers who assist us in operating our business (e.g., payment processors, email services, hosting providers), subject to confidentiality agreements</li>
                <li className="font-body"><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li className="font-body"><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our students or others</li>
                <li className="font-body"><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to affected users</li>
                <li className="font-body"><strong>With Your Consent:</strong> When you have explicitly consented to sharing</li>
              </ul>
            </div>
          </section>

          {/* Section: Data Retention */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Data Retention
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Factors that determine retention periods include:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Legal and regulatory requirements</li>
                <li className="font-body">Accounting and financial record-keeping needs</li>
                <li className="font-body">Ongoing business relationships and course completion records</li>
                <li className="font-body">Dispute resolution and legal claims</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                When personal information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies.
              </p>
            </div>
          </section>

          {/* Section: Your Rights */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Your Rights
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Access:</strong> Request access to your personal information</li>
                <li className="font-body"><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li className="font-body"><strong>Deletion:</strong> Request deletion of your personal information, subject to legal and contractual obligations</li>
                <li className="font-body"><strong>Objection:</strong> Object to processing of your personal information</li>
                <li className="font-body"><strong>Withdraw Consent:</strong> Withdraw consent for use of testimonials, portfolio work, or marketing communications</li>
                <li className="font-body"><strong>Data Portability:</strong> Request transfer of your data to another service provider (where applicable)</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                To exercise these rights, please contact us at <Link href="mailto:hello@designient.com" className="text-[#8458B3] underline">hello@designient.com</Link>. We will respond to your request within a reasonable timeframe.
              </p>
            </div>
          </section>

          {/* Section: Cookies & Tracking */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Cookies & Tracking Technologies
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Our website may use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie preferences through your browser settings.
              </p>
            </div>
          </section>

          {/* Section: Children&apos;s Privacy */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Children&apos;s Privacy
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Our services are intended for individuals who are at least 18 years of age. We do not knowingly collect personal information from children under 18 without parental or guardian consent. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>
          </section>

          {/* Section: Updates to Privacy Policy */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Updates to Privacy Policy
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient reserves the right to modify this Privacy Policy at any time. We will notify you of significant changes via email or through our communication channels. The &quot;Last Updated&quot; date at the top of this page indicates when this Privacy Policy was last revised.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section: Contact */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Contact Us
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-body mb-2" style={{ color: '#1a1a1a' }}>
                  <strong>Designient Technologies Private Limited</strong>
                </p>
                <p className="font-body mb-2" style={{ color: '#4a4a4a' }}>
                  2-108/2/79, Street No 2, Boduppal<br />
                  Hyderabad, Telangana 500092, India
                </p>
                <p className="font-body mb-2" style={{ color: '#4a4a4a' }}>
                  <strong>Email:</strong> <Link href="mailto:hello@designient.com" className="text-[#8458B3] underline">hello@designient.com</Link>
                </p>
                <p className="font-body" style={{ color: '#4a4a4a' }}>
                  <strong>Website:</strong> <Link href="https://designient.com" className="text-[#8458B3] underline">https://designient.com</Link>
                </p>
              </div>
            </div>
          </section>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/terms-and-conditions" className="font-body text-[#8458B3] underline hover:no-underline">
              Terms and Conditions
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
