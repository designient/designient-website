import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Designient Technologies Private Limited',
  description: 'Terms and conditions for Designient Technologies Private Limited. Read our policies on payments, refunds, course delivery, placements, certificates, and student conduct.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | Designient',
    description: 'Terms and conditions for Designient Technologies Private Limited.',
    url: 'https://designient.com/terms-and-conditions',
    type: 'website',
  },
}

export default function TermsAndConditionsPage() {
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
        name: 'Terms and Conditions',
        item: 'https://designient.com/terms-and-conditions',
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
              Terms and Conditions
            </h1>
            <p className="font-body text-lg" style={{ color: '#4a4a4a' }}>
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              Welcome to Designient Technologies Private Limited (&quot;Designient&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our services, including our UI/UX design courses, mentorship programs, and related educational services.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              By enrolling in our courses, accessing our materials, or using our services, you agree to be bound by these Terms. Please read them carefully before proceeding.
            </p>
          </div>

          {/* Section 1: About Designient */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              1. About Designient
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient Technologies Private Limited is a registered company providing UI/UX design education through Online, Offline, and Hybrid learning modes. We offer mentorship-based learning in small batches to ensure personalized attention and quality education.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Registered Details:</p>
                <p className="font-body" style={{ color: '#4a4a4a' }}>
                  <strong>Legal Entity:</strong> Designient Technologies Private Limited<br />
                  <strong>Registered Address:</strong> 2-108/2/79, Street No 2, Boduppal, Hyderabad, Telangana 500092, India
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Eligibility */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              2. Eligibility
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Our courses are designed for individuals who are:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">At least 18 years of age, or have parental/guardian consent if under 18</li>
                <li className="font-body">Committed to completing the course requirements</li>
                <li className="font-body">Able to meet the technical requirements for online/hybrid courses (if applicable)</li>
                <li className="font-body">Willing to adhere to our code of conduct and policies</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient reserves the right to verify eligibility and may refuse enrollment at our discretion.
              </p>
            </div>
          </section>

          {/* Section 3: Courses & Delivery */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              3. Courses & Delivery
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient offers UI/UX design courses through multiple delivery modes:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Online:</strong> Live sessions conducted via video conferencing</li>
                <li className="font-body"><strong>Offline:</strong> In-person classes at our physical locations</li>
                <li className="font-body"><strong>Hybrid:</strong> Combination of online and offline sessions</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Important Notes:</p>
                <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                  <li className="font-body">Course recordings may be provided at Designient&apos;s discretion</li>
                  <li className="font-body">Access to recordings and course materials is time-limited</li>
                  <li className="font-body">Designient reserves the right to modify curriculum, change mentors, or reschedule batches when required</li>
                  <li className="font-body">Course content, structure, and delivery methods may be updated without prior notice</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Payments & Fees */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              4. Payments & Fees
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Accepted Payment Modes:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Razorpay (for Indian students)</li>
                <li className="font-body">Skydo (for international students)</li>
                <li className="font-body">Bank Transfer</li>
                <li className="font-body">UPI</li>
                <li className="font-body">PayPal Business</li>
                <li className="font-body">Cash in Hand (at our physical locations only)</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Cash payments, where accepted, are offline transactions and do not fall under Razorpay&apos;s payment processing or policies.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Currency:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Indian Rupees (INR) for students in India</li>
                <li className="font-body">US Dollars (USD) for international students</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Slot Booking / Advance Payment:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Slot booking and advance payments are optional</li>
                <li className="font-body">All slot booking and advance payments are non-refundable</li>
                <li className="font-body">Currency conversion charges (if applicable) are borne by the student</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Payment Schedule:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>One-Time Payment:</strong> Fees must be paid in full before course commencement.</li>
                <li className="font-body"><strong>Installment Plans:</strong> If opting for an installment plan, the first installment is due before course commencement (or as specified), and subsequent installments are due by the dates specified in your enrollment agreement.</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient reserves the right to suspend or terminate access to course materials and sessions immediately if installment payments are not made by the due date. Both one-time and installment payments are subject to our refund policy.
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
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Service Responsibility:</p>
                <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                  <strong>Designient Technologies Private Limited is solely responsible for the services provided.</strong> Razorpay acts only as a payment processing platform and does not hold responsibility for course delivery, refunds, or service fulfillment.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Refund & Cancellation */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              5. Refund & Cancellation Policy
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="font-body font-semibold mb-3" style={{ color: '#1a1a1a' }}>No Refunds For:</p>
                <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                  <li className="font-body">Slot booking or advance payments</li>
                  <li className="font-body">Missed sessions</li>
                  <li className="font-body">Student dropouts after course commencement</li>
                  <li className="font-body">Dissatisfaction with course content, delivery, or outcomes</li>
                </ul>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Refunds After Course Start:</strong>
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Refunds after course commencement are considered on a case-by-case basis only, at Designient&apos;s sole discretion. If a refund is approved:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">All bonuses, freebies, add-ons, recordings, templates, tools, and extra resources provided will be revoked</li>
                <li className="font-body">Access to all course materials and platforms will be terminated immediately</li>
                <li className="font-body">These revoked items are non-refundable and cannot be claimed separately</li>
                <li className="font-body">Approved refunds are initiated through the original payment method. Actual credit timelines depend on the payment gateway and banking systems involved</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                To request a refund, please contact us at <Link href="mailto:hello@designient.com" className="text-[#8458B3] underline">hello@designient.com</Link> with your enrollment details and reason for the request.
              </p>
            </div>
          </section>

          {/* Section 6: Placement Assistance */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              6. Placement Assistance
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Important Notice:</p>
                <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                  <strong>Designient does not guarantee job placement or employment.</strong> Placement assistance is provided as a support service and does not constitute a guarantee of employment.
                </p>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Our placement assistance may include:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Resume and portfolio review support</li>
                <li className="font-body">Mock interview sessions</li>
                <li className="font-body">Job referrals and introductions to potential employers</li>
                <li className="font-body">Career guidance and mentorship</li>
                <li className="font-body">Access to job opportunities shared by our network</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Placement assistance is subject to student performance, course completion, and availability of opportunities. Designient is not responsible for the outcome of job applications or interviews conducted through our referral network.
              </p>
            </div>
          </section>

          {/* Section 7: Certificates */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              7. Certificates
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient may issue digital and/or physical certificates upon successful completion of course requirements. Certificates are subject to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Completion of all required assignments and assessments</li>
                <li className="font-body">Minimum attendance requirements (as specified for your course)</li>
                <li className="font-body">Adherence to our code of conduct</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Certificate Verification:</strong>
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Certificates can be verified through our official verification system. Designient reserves the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Revoke certificates in case of misconduct, fraud, or violation of policies</li>
                <li className="font-body">Re-issue certificates if errors are found</li>
                <li className="font-body">Invalidate certificates if course requirements were not met</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                For certificate verification, please visit our <Link href="/verify" className="text-[#8458B3] underline">certificate verification page</Link>.
              </p>
            </div>
          </section>

          {/* Section 8: Student Conduct & Termination */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              8. Student Conduct & Termination
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Students are expected to maintain professional conduct and respect towards instructors, mentors, staff, and fellow students. Designient reserves the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Terminate enrollment immediately for policy violations</li>
                <li className="font-body">Revoke access to all course materials and platforms without refund</li>
                <li className="font-body">Remove students from courses for misconduct, harassment, or disruptive behavior</li>
                <li className="font-body">Take legal action if necessary for serious violations</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Prohibited conduct includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Sharing course materials, recordings, or access credentials with unauthorized persons</li>
                <li className="font-body">Harassment, discrimination, or inappropriate behavior</li>
                <li className="font-body">Plagiarism or academic dishonesty</li>
                <li className="font-body">Misuse of Designient&apos;s intellectual property</li>
                <li className="font-body">Any activity that disrupts the learning environment</li>
              </ul>
            </div>
          </section>

          {/* Section 9: Intellectual Property */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              9. Intellectual Property
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                All course materials, including but not limited to videos, recordings, presentations, templates, tools, documents, and curriculum, are the intellectual property of Designient Technologies Private Limited.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>You may not:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Copy, reproduce, distribute, or share course materials without written permission</li>
                <li className="font-body">Record sessions without authorization</li>
                <li className="font-body">Use course materials for commercial purposes</li>
                <li className="font-body">Create derivative works based on our materials</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Students retain ownership of their own projects, portfolios, and assignments created during the course. However, Designient may request permission to showcase student work for promotional purposes (see Section 10).
              </p>
            </div>
          </section>

          {/* Section 10: Communication & Data Consent */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              10. Communication & Data Consent
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Communication Channels:</strong>
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient may contact you via email, WhatsApp, phone, or other communication channels for:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Course-related updates and announcements</li>
                <li className="font-body">Payment and enrollment confirmations</li>
                <li className="font-body">Support and assistance</li>
                <li className="font-body">Important policy updates</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Testimonials, Feedback & Portfolio Usage:</strong>
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient may use student testimonials, feedback, and portfolio work for promotional purposes only with explicit written consent from the student. You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Refuse consent for use of your testimonials or work</li>
                <li className="font-body">Request removal of your content from our platforms at any time</li>
                <li className="font-body">Specify conditions for usage (e.g., anonymization, specific platforms)</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                For data privacy concerns, please refer to our Privacy Policy or contact us directly.
              </p>
            </div>
          </section>

          {/* Section 11: Limitation of Liability */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              11. Limitation of Liability
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Designient shall not be liable for any indirect, incidental, special, or consequential damages</li>
                <li className="font-body">Our total liability shall not exceed the amount paid by you for the course</li>
                <li className="font-body">We are not responsible for technical issues, internet connectivity problems, or platform outages beyond our control</li>
                <li className="font-body">We do not guarantee specific learning outcomes, job placements, or career advancement</li>
                <li className="font-body">Students are responsible for their own devices, software, and internet connectivity for online/hybrid courses</li>
              </ul>
            </div>
          </section>

          {/* Section 12: Governing Law & Jurisdiction */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              12. Governing Law & Jurisdiction
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Any disputes arising out of or relating to these Terms, our services, or your enrollment shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana, India only.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Both parties agree to submit to the jurisdiction of these courts and waive any objection to venue or forum.
              </p>
            </div>
          </section>

          {/* Section 13: Updates to Terms */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              13. Updates to Terms
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient reserves the right to modify these Terms at any time. We will notify students of significant changes via email or through our communication channels.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Continued use of our services after changes are posted constitutes acceptance of the updated Terms. If you do not agree with the changes, you may discontinue using our services, subject to our refund policy (Section 5).
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                The &quot;Last Updated&quot; date at the top of this page indicates when these Terms were last revised.
              </p>
            </div>
          </section>

          {/* Section 14: Contact Information */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              14. Contact Information
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                If you have any questions, concerns, or requests regarding these Terms, please contact us:
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

          {/* Acknowledgment */}
          <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#e5e7eb' }}>
            <p className="font-body leading-relaxed text-center" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              By enrolling in our courses or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact-us" className="font-body text-[#8458B3] underline hover:no-underline">
              Contact Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/faqs" className="font-body text-[#8458B3] underline hover:no-underline">
              FAQs
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
