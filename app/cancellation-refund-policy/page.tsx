import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Designient Technologies Private Limited',
  description: 'Cancellation and refund policy for Designient Technologies Private Limited. Learn about our refund policies for course fees, slot bookings, and advance payments.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/cancellation-refund-policy',
  },
  openGraph: {
    title: 'Cancellation & Refund Policy | Designient',
    description: 'Cancellation and refund policy for Designient Technologies Private Limited.',
    url: 'https://designient.com/cancellation-refund-policy',
    type: 'website',
  },
}

export default function CancellationRefundPolicyPage() {
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
        name: 'Cancellation & Refund Policy',
        item: 'https://designient.com/cancellation-refund-policy',
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
              Cancellation & Refund Policy
            </h1>
            <p className="font-body text-lg" style={{ color: '#4a4a4a' }}>
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This Cancellation & Refund Policy outlines Designient Technologies Private Limited&apos;s (&quot;Designient&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) policies regarding cancellations and refunds for our UI/UX design courses and related services.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This policy should be read in conjunction with our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link>, which govern all aspects of your enrollment and use of our services.
            </p>
          </div>

          {/* Section: General Policy */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              General Policy
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient follows a strict cancellation and refund policy to ensure fairness and consistency for all students. All refunds are governed by the terms outlined in this policy and our Terms and Conditions.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                By enrolling in our courses or making any payment to Designient, you acknowledge that you have read, understood, and agree to be bound by this Cancellation & Refund Policy.
              </p>
            </div>
          </section>

          {/* Section: Slot Booking & Advance Payments */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Slot Booking & Advance Payments
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Important:</p>
                <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                  <strong>Slot booking and advance payments are non-refundable under all circumstances.</strong>
                </p>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                If you choose to make a slot booking or advance payment to secure your place in a course:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">These payments are optional and made at your discretion</li>
                <li className="font-body">Once paid, slot booking and advance payments cannot be refunded for any reason</li>
                <li className="font-body">This applies regardless of whether you proceed with the full course enrollment or not</li>
                <li className="font-body">Slot booking fees cannot be transferred to another batch or course</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Please ensure you are committed to enrolling before making any slot booking or advance payment.
              </p>
            </div>
          </section>

          {/* Section: Course Fees */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Course Fees
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Refunds after course commencement are not guaranteed.</strong> Refunds, if any, are handled strictly on a case-by-case basis at Designient&apos;s sole discretion.
                If you are paying via an installment plan, please note that <strong>installments once paid are non-refundable</strong>, even if you choose to discontinue the course before the next installment due date.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
                <p className="font-body font-semibold mb-3" style={{ color: '#1a1a1a' }}>No Refunds Will Be Provided For:</p>
                <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                  <li className="font-body"><strong>Missed sessions:</strong> If you are unable to attend scheduled sessions, no refund will be provided</li>
                  <li className="font-body"><strong>Dropouts:</strong> If you choose to discontinue the course after it has started, no refund will be provided</li>
                  <li className="font-body"><strong>Dissatisfaction:</strong> Refunds will not be provided due to dissatisfaction with course content, delivery methods, instructors, or learning outcomes</li>
                  <li className="font-body"><strong>Non-attendance:</strong> Failure to attend classes or complete course requirements does not entitle you to a refund</li>
                </ul>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Refund Consideration:</strong>
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                In exceptional circumstances, Designient may consider refund requests after course commencement. Such requests will be evaluated individually based on:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">The specific circumstances of your request</li>
                <li className="font-body">The timing of your request relative to course start date</li>
                <li className="font-body">Your course completion status and attendance record</li>
                <li className="font-body">Any other relevant factors at Designient&apos;s discretion</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                There is no guarantee that any refund request will be approved, even if exceptional circumstances exist.
              </p>
            </div>
          </section>

          {/* Section: Bonuses & Add-ons */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Bonuses & Add-ons
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient may provide various bonuses and add-on resources as part of course enrollment, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Free workshops and bonus modules</li>
                <li className="font-body">Course recordings</li>
                <li className="font-body">Design templates and resources</li>
                <li className="font-body">Tools and software access</li>
                <li className="font-body">Additional learning materials</li>
                <li className="font-body">Other add-on resources</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Important:</p>
                <p className="font-body leading-relaxed mb-2" style={{ color: '#4a4a4a' }}>
                  <strong>All bonuses, add-ons, and supplementary resources are non-refundable.</strong>
                </p>
                <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                  If a refund is approved for your course fees, access to all bonuses, freebies, add-ons, recordings, templates, tools, and extra resources will be immediately revoked. These revoked items cannot be claimed separately and are not eligible for individual refunds.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Payment Processing */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Payment Processing
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                If your refund request is approved by Designient:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Approved refunds are initiated through the original payment method</li>
                <li className="font-body">Actual credit timelines depend on the payment gateway and banking systems involved</li>
                <li className="font-body">Designient will initiate the refund process promptly after approval</li>
                <li className="font-body">You will receive confirmation once the refund has been initiated</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                <strong>Payment Gateway Processing:</strong>
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Different payment methods have different processing times:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body">Razorpay, Skydo, PayPal: Processing time depends on the payment gateway&apos;s policies</li>
                <li className="font-body">Bank Transfer: Processing time depends on your bank&apos;s processing schedule</li>
                <li className="font-body">UPI: Processing time depends on the UPI service provider</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Cash payments, where accepted, are offline transactions and do not fall under Razorpay&apos;s payment processing or policies.
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
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient is not responsible for delays in refund processing that are beyond our control, such as payment gateway delays or bank processing times.
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
                For refund-related queries, requests, or concerns, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-body mb-2" style={{ color: '#1a1a1a' }}>
                  <strong>Email:</strong> <Link href="mailto:hello@designient.com" className="text-[#8458B3] underline">hello@designient.com</Link>
                </p>
                <p className="font-body mb-2" style={{ color: '#4a4a4a' }}>
                  Please include the following information in your refund request:
                </p>
                <ul className="list-disc pl-6 space-y-1" style={{ color: '#4a4a4a' }}>
                  <li className="font-body">Your full name and enrollment details</li>
                  <li className="font-body">Course name and batch information</li>
                  <li className="font-body">Payment transaction ID or receipt number</li>
                  <li className="font-body">Reason for refund request</li>
                  <li className="font-body">Supporting documentation (if applicable)</li>
                </ul>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                We will review your request and respond within a reasonable timeframe. Please note that all refund decisions are final and at Designient&apos;s sole discretion.
              </p>
            </div>
          </section>

          {/* Additional Information */}
          <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#e5e7eb' }}>
            <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This Cancellation & Refund Policy is part of and should be read together with our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link>. In case of any conflict between this policy and the Terms and Conditions, the Terms and Conditions shall prevail.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              Designient reserves the right to modify this Cancellation & Refund Policy at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/terms-and-conditions" className="font-body text-[#8458B3] underline hover:no-underline">
              Terms and Conditions
            </Link>
            <span className="text-gray-400">•</span>
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
