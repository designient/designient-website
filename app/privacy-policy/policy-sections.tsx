import type { ReactNode } from 'react'
import Link from 'next/link'

const tableClass = 'w-full text-sm border-collapse my-4'
const thClass = 'font-body font-semibold text-left p-3 border'
const tdClass = 'font-body p-3 border align-top'

const tableStyle = { borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }
const thStyle = { ...tableStyle, backgroundColor: 'var(--bg-subtle)', color: 'var(--text-primary)' }
const linkClass = 'text-[var(--color-primary)] underline hover:no-underline'

const h2Style = { fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }
const h3Style = { color: 'var(--text-primary)' }
const bodyStyle = { color: 'var(--text-secondary)' }

const REGISTERED_ADDRESS =
  '2-108/2/79, Street No 2, Boduppal, Hyderabad, Telangana 500092, India'

function DataField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
      <strong style={{ color: 'var(--text-primary)' }}>{label}</strong> {children}
    </p>
  )
}

function ToolTable({ rows }: { rows: { tool: string; policy: string; href?: string }[] }) {
  return (
    <table className={tableClass} style={tableStyle}>
      <thead>
        <tr>
          <th className={thClass} style={thStyle}>Tool</th>
          <th className={thClass} style={thStyle}>Privacy Policy</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.tool}>
            <td className={tdClass} style={tableStyle}>{row.tool}</td>
            <td className={tdClass} style={tableStyle}>
              {row.href ? (
                <a href={row.href} className={linkClass} target="_blank" rel="noopener noreferrer">
                  {row.policy}
                </a>
              ) : (
                row.policy
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function PrivacyPolicyContent() {
  return (
    <>
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Introduction
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={bodyStyle}>
            This Privacy Policy explains how Designient Technologies Private Limited, operating as Designient School of
            Masterminds (&quot;Designient,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;), collects, uses,
            stores, shares, and protects the personal data of individuals (&quot;You&quot; or &quot;Your&quot;) who
            interact with our website at designient.com, enroll in our courses, register for our workshops, or
            communicate with us in any capacity.
          </p>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            By submitting any form on designient.com, enrolling in any course, or registering for any workshop, you
            acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of
            your data as described herein.
          </p>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            If you do not agree with this Privacy Policy, do not use designient.com or any Designient service.
          </p>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            This Privacy Policy is published in compliance with the Digital Personal Data Protection Act 2023, the
            Information Technology Act 2000, and the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules
            2021. It should be read together with our{' '}
            <Link href="/terms-and-conditions" className={linkClass}>
              Terms and Conditions
            </Link>{' '}
            and{' '}
            <Link href="/cancellation-refund-policy" className={linkClass}>
              Cancellation &amp; Refund Policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 1 — Who We Are and How to Contact Us
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={bodyStyle}>
            <strong style={{ color: 'var(--text-primary)' }}>Data Fiduciary (as defined under DPDPA 2023):</strong>
            <br />
            Designient Technologies Private Limited
            <br />
            Operating as Designient School of Masterminds
          </p>
          <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Grievance Officer and Data Protection Contact:
            </p>
            <p className="font-body mb-1" style={bodyStyle}>Mohammed Fyros Shabrin Sultana</p>
            <p className="font-body mb-1" style={bodyStyle}>
              Email: <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>
            </p>
            <p className="font-body mb-1" style={bodyStyle}>
              Phone: <a href="tel:+919353000320" className={linkClass}>+91 9353 000 320</a>
            </p>
            <p className="font-body" style={bodyStyle}>
              Address: Designient Technologies Private Limited, {REGISTERED_ADDRESS}
            </p>
          </div>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            For any privacy-related question, request, or complaint, email{' '}
            <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link> with subject
            line: Privacy — [Your Query]. We will respond within 7 working days.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 2 — What Data We Collect and Why
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.1 Inquiry and Application Data</h3>
            <DataField label="What we collect:">
              When you submit an inquiry, consultation request, or course application through any form on
              designient.com, we collect your full name, email address, phone number (including country code), WhatsApp
              number (including country code), course interest, and any additional information you voluntarily provide.
            </DataField>
            <DataField label="Why we collect it:">
              To respond to your inquiry, assess your application for application-based courses, send you enrollment
              offers and course information, and communicate with you about Designient programs.
            </DataField>
            <DataField label="Lawful basis under DPDPA 2023:">
              Consent given at the time of form submission, and legitimate interest in responding to a service enquiry.
            </DataField>
            <DataField label="Collected at:">
              Homepage inquiry form,{' '}
              <Link href="/apply-now" className={linkClass}>Apply Now page</Link> (/apply-now), individual course pages, and{' '}
              <Link href="/contact-us" className={linkClass}>contact page</Link> (/contact-us).
            </DataField>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.2 Enrollment and Payment Data</h3>
            <DataField label="What we collect:">
              Upon enrollment, we collect your full name, email address, phone number, payment confirmation data, course
              selected, cohort dates, and GSTIN (where provided for B2B invoicing).
            </DataField>
            <DataField label="Why we collect it:">
              To process your enrollment, issue your invoice and tax receipt, communicate course logistics, confirm your
              seat, and maintain enrollment records required under the Companies Act 2013 and Income Tax Act 1961.
            </DataField>
            <DataField label="Lawful basis:">Performance of a contract (the enrollment agreement between you and Designient).</DataField>
            <div className="rounded-lg p-4 my-3 border-l-4" style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--color-warning)' }}>
              <p className="font-body leading-relaxed" style={bodyStyle}>
                <strong style={{ color: 'var(--text-primary)' }}>Important note on payment data:</strong> Designient does
                not store, hold, copy, or retain your payment instrument data including card numbers, CVV, expiry dates, or
                bank account credentials. All payment data is processed exclusively by Razorpay Software Private Limited.
                See Section 5 for details of what Razorpay independently collects.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.3 Course Delivery Data</h3>
            <DataField label="What we collect:">
              During a course, we collect session attendance records, deliverable submission records, feedback submitted
              during live sessions, and communication records between students and mentors via the course platform.
            </DataField>
            <DataField label="Why we collect it:">
              To deliver the course, assess guarantee eligibility, provide mentor feedback, and issue certificates upon
              completion.
            </DataField>
            <DataField label="Lawful basis:">Performance of a contract.</DataField>
            <DataField label="Retention:">
              7 years from last interaction for enrollment, payment, and course completion records. See Section 8 for the
              full retention schedule.
            </DataField>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.4 Free Workshop Registration Data</h3>
            <DataField label="What we collect:">
              When you register for AI Automation Live or AI Product Design Live, we collect your full name, email
              address, and optionally your phone number and the workshop you are registering for.
            </DataField>
            <DataField label="Why we collect it:">
              To send you workshop confirmation details, Zoom link, reminders, and follow-up content related to the
              workshop topic.
            </DataField>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Marketing list:</strong> Upon registration, you may be
              added to Designient&apos;s marketing communications list. You may unsubscribe at any time using the link in
              any email. Registration does not constitute enrollment in or obligation to purchase any paid course.
            </p>
            <DataField label="Lawful basis:">Consent given at registration.</DataField>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.5 Newsletter Subscription Data</h3>
            <DataField label="What we collect:">Your email address when you subscribe via the footer form.</DataField>
            <DataField label="Why we collect it:">To send you the Designient newsletter.</DataField>
            <DataField label="Lawful basis:">Consent. You may unsubscribe at any time.</DataField>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.6 Team Enrollment Inquiry Data</h3>
            <DataField label="What we collect:">
              Company name, contact person name and email address, phone number, team size, and relevant details provided
              in the inquiry.
            </DataField>
            <DataField label="Why we collect it:">
              To process team enrollment inquiries, prepare agreements, and issue invoices.
            </DataField>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Marketing:</strong> We do not use team enrollment company
              contact data for marketing purposes unless the contact has separately subscribed.
            </p>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              Individual employee data of team members enrolled through a corporate team enrollment is collected and used
              in the same way as individual course enrollment data under Section 2.2.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.7 Website Usage and Analytics Data</h3>
            <DataField label="What we collect:">
              Pages visited and time spent, referral source, device and browser type, IP address (anonymised where
              applicable), and interaction data (button clicks, form submissions — not form content).
            </DataField>
            <DataField label="Why we collect it:">
              To understand how students and visitors use our website, improve our content and user experience, and measure
              the effectiveness of our marketing.
            </DataField>
            <DataField label="Tools used:">
              Google Tag Manager and Meta (Facebook) Pixel. These are third-party tools that may collect data as described
              in their respective privacy policies. See Section 5.
            </DataField>
            <DataField label="Cookies:">See Section 3.</DataField>
            <DataField label="Lawful basis:">
              Legitimate interest in website improvement and marketing effectiveness, subject to your cookie consent
              choices.
            </DataField>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.8 Certificate Verification Data</h3>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              The certificate verification service at{' '}
              <Link href="/verify" className={linkClass}>designient.com/verify</Link> stores certificate hash codes and
              the name of the certificate holder to enable third-party verification of Designient credentials. This data is
              retained indefinitely to maintain the integrity of the verification service.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 3 — Cookies
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>3.1 Designient&apos;s Own Cookies</h3>
            <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
              Designient uses cookies on designient.com for the following purposes:
            </p>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Essential cookies:</strong> Required for the website to
              function. Cannot be disabled. These include session management and form security tokens.
            </p>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Analytics cookies (Google Tag Manager):</strong> Collect
              anonymised data about page visits, referral sources, and user behaviour to help us improve our website. You
              can decline these through the cookie consent banner.
            </p>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Advertising cookies (Meta Pixel):</strong> Used to measure
              the effectiveness of our advertising on Facebook and Instagram and to serve relevant ads to users who have
              visited our website. You can decline these through the cookie consent banner.
            </p>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              You can manage cookie preferences through our cookie consent banner (shown on first visit) or through your
              browser settings. Declining analytics and advertising cookies does not affect your ability to use
              designient.com or submit any form.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>3.2 Razorpay&apos;s Cookies During Payment</h3>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              When you proceed to payment on designient.com, Razorpay Software Private Limited may independently set
              cookies on your browser for transaction security, fraud prevention, and payment service improvement purposes.
              These cookies are set by Razorpay, not by Designient, and are governed by Razorpay&apos;s Privacy Policy at{' '}
              <a href="https://razorpay.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">
                razorpay.com/privacy
              </a>
              . Disabling Razorpay&apos;s cookies may prevent your payment from completing successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 4 — How We Use Your Data
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>4.1 Course Inquiry and Application Data</h3>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              We use this data to respond to your inquiry, assess your application, send enrollment offers and course
              information, communicate course updates, process payments, and send relevant marketing communications about
              Designient courses. You may unsubscribe from marketing communications at any time. Application reviews are
              conducted by human Designient staff — no automated decisions are made about your eligibility for any course.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>4.2 Enrollment and Payment Data</h3>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              We use this data to confirm and manage your enrollment, issue invoices and tax receipts, deliver the
              course, assess guarantee eligibility, issue certificates, and maintain records required by law.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>4.3 Workshop Registration Data</h3>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              We use this data to send workshop confirmation details, reminders, follow-up content, and to add you to our
              general marketing list (with unsubscribe available in every communication).
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>4.4 Marketing Communications</h3>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              Enrolled students and workshop registrants are added to Designient&apos;s marketing communications list on
              an opt-out basis. You may unsubscribe at any time using the unsubscribe link in any email. Unsubscribing from
              marketing communications does not affect course-related transactional communications (session reminders,
              payment receipts, cohort updates).
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>4.5 Analytics and Improvement</h3>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              We use anonymised, aggregated website usage data to understand how visitors interact with designient.com and
              to improve our content, course pages, and conversion flows. This data cannot identify you individually.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 5 — Third-Party Data Processors and Their Roles
        </h2>
        <p className="font-body leading-relaxed mb-6" style={bodyStyle}>
          Designient shares your personal data with the following third-party processors, each of whom processes data
          solely for the purpose of delivering services to Designient. Each processor is required to handle your data in
          accordance with applicable law.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.1 Razorpay Software Private Limited — Payment Processing</h3>
            <DataField label="Role:">Processes all INR course fee payments made on designient.com.</DataField>
            <DataField label="Data shared:">
              Your name, email address, phone number, and payment instrument details are collected and processed directly
              by Razorpay during checkout.
            </DataField>
            <DataField label="Independent data collection:">
              Razorpay independently collects and stores your payment information including card details, mobile number,
              email address, and billing address through the Razorpay checkout interface. This data is governed solely by
              Razorpay&apos;s Privacy Policy.
            </DataField>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Razorpay may:</strong> Send you transaction confirmation
              alerts by SMS and email independently of Designient. Share your transaction data with acquiring banks, the
              Reserve Bank of India, and regulatory agencies as required under applicable Indian law. Use aggregated,
              anonymised transaction data for its own analytics and business purposes.
            </p>
            <p className="font-body leading-relaxed mb-1" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Razorpay data contact:</strong>{' '}
              <a href="mailto:dpo@razorpay.com" className={linkClass}>dpo@razorpay.com</a>
            </p>
            <p className="font-body leading-relaxed mb-1" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Razorpay Privacy Policy:</strong>{' '}
              <a href="https://razorpay.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">
                razorpay.com/privacy
              </a>
            </p>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Razorpay Grievances:</strong>{' '}
              <a href="https://razorpay.com/grievances" className={linkClass} target="_blank" rel="noopener noreferrer">
                razorpay.com/grievances
              </a>
            </p>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Payment data deletion:</strong> For deletion of payment data
              held by Razorpay, contact Razorpay directly at{' '}
              <a href="https://razorpay.com/support" className={linkClass} target="_blank" rel="noopener noreferrer">
                razorpay.com/support
              </a>
              . Designient does not hold payment instrument data and cannot action Razorpay&apos;s data deletion on your
              behalf.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.2 HubSpot Inc. — CRM and Lead Management</h3>
            <DataField label="Role:">
              Stores and manages inquiry, application, and enrollment contact records. Used for follow-up communications,
              lead tracking, and cohort management.
            </DataField>
            <DataField label="Data shared:">
              Name, email address, phone number, WhatsApp number, course interest, enrollment status, and communication
              history.
            </DataField>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>HubSpot Privacy Policy:</strong>{' '}
              <a href="https://legal.hubspot.com/privacy-policy" className={linkClass} target="_blank" rel="noopener noreferrer">
                legal.hubspot.com/privacy-policy
              </a>
              {' · '}
              <strong style={{ color: 'var(--text-primary)' }}>HubSpot DPA:</strong>{' '}
              <a href="https://legal.hubspot.com/dpa" className={linkClass} target="_blank" rel="noopener noreferrer">
                legal.hubspot.com/dpa
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.3 Resend — Transactional Email Delivery</h3>
            <DataField label="Role:">
              Delivers all transactional emails sent by Designient including enrollment confirmations, course reminders,
              certificate notifications, and workshop details.
            </DataField>
            <DataField label="Data shared:">Name and email address.</DataField>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Resend Privacy Policy:</strong>{' '}
              <a href="https://resend.com/legal/privacy-policy" className={linkClass} target="_blank" rel="noopener noreferrer">
                resend.com/legal/privacy-policy
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.4 Google — Analytics</h3>
            <DataField label="Role:">
              Google Tag Manager and Google Analytics collect anonymised website usage data as described in Section 2.7.
            </DataField>
            <DataField label="Data shared:">
              Anonymised browsing behaviour, device type, referral source, IP address (anonymised).
            </DataField>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Google Privacy Policy:</strong>{' '}
              <a href="https://policies.google.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">
                policies.google.com/privacy
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.5 Meta Platforms Inc. — Advertising Analytics</h3>
            <DataField label="Role:">
              Meta Pixel tracks anonymised conversion events on designient.com to measure advertising effectiveness on
              Facebook and Instagram.
            </DataField>
            <DataField label="Data shared:">
              Anonymised interaction events (page views, form submissions — not form content).
            </DataField>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Meta Privacy Policy:</strong>{' '}
              <a href="https://www.facebook.com/privacy/policy" className={linkClass} target="_blank" rel="noopener noreferrer">
                facebook.com/privacy/policy
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 6 — Third-Party Tools Used by Students During Courses
        </h2>
        <p className="font-body leading-relaxed mb-6" style={bodyStyle}>
          Students enrolled in Designient courses are required to create their own accounts with and use certain
          third-party tools as part of the curriculum. Designient does not hold, access, or control student credentials for
          these tools and is not responsible for the data practices of these third-party platforms. Students should review
          the privacy policy of each tool before creating an account.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>Design Track Tools</h3>
            <ToolTable
              rows={[
                { tool: 'Figma / FigJam AI', policy: 'figma.com/privacy', href: 'https://www.figma.com/privacy/' },
                { tool: 'Bolt', policy: 'bolt.new (refer to current privacy policy)' },
                { tool: 'Perplexity', policy: 'perplexity.ai/privacy', href: 'https://www.perplexity.ai/privacy' },
                { tool: 'Claude (Anthropic)', policy: 'anthropic.com/privacy', href: 'https://www.anthropic.com/privacy' },
                { tool: 'Google Workspace', policy: 'policies.google.com/privacy', href: 'https://policies.google.com/privacy' },
              ]}
            />
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>AI Automation Accelerator Tools</h3>
            <ToolTable
              rows={[
                { tool: 'Zapier', policy: 'zapier.com/privacy', href: 'https://zapier.com/privacy' },
                { tool: 'n8n (cloud)', policy: 'n8n.io/privacy', href: 'https://n8n.io/privacy/' },
                { tool: 'Make', policy: 'make.com/en/privacy-notice', href: 'https://www.make.com/en/privacy-notice' },
                { tool: 'Airtable', policy: 'airtable.com/privacy', href: 'https://www.airtable.com/privacy' },
                { tool: 'ManyChat', policy: 'manychat.com/privacy', href: 'https://manychat.com/privacy' },
                { tool: 'Relevance AI', policy: 'relevanceai.com/privacy', href: 'https://relevanceai.com/privacy' },
                { tool: 'Claude API (Anthropic)', policy: 'anthropic.com/privacy', href: 'https://www.anthropic.com/privacy' },
              ]}
            />
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>AI Product Design Course Tools</h3>
            <ToolTable
              rows={[
                { tool: 'Perplexity', policy: 'perplexity.ai/privacy', href: 'https://www.perplexity.ai/privacy' },
                { tool: 'Claude (Anthropic)', policy: 'anthropic.com/privacy', href: 'https://www.anthropic.com/privacy' },
                { tool: 'FigJam AI / Figma', policy: 'figma.com/privacy', href: 'https://www.figma.com/privacy/' },
                { tool: 'Bolt or v0.dev', policy: 'bolt.new / v0.dev (refer to current policies)' },
              ]}
            />
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>API Costs</h3>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              Some tools — specifically the Claude API — are paid services that students access on their own accounts. API
              usage costs are the student&apos;s responsibility. Designient does not reimburse API costs.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>Self-Hosted n8n</h3>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              Students who choose to self-host n8n are responsible for the security and data practices of their own server
              environment. Designient provides guidance as an educational resource only and has no access to data stored on
              any student&apos;s self-hosted instance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 7 — Student-Built Automation Systems
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={bodyStyle}>
            Students enrolled in the AI Automation Accelerator build automation workflows that may collect, process, and
            store personal data from third parties in a commercial or professional context. These automation systems are
            built and operated by the student independently. Designient has no access to and is not responsible for the
            data collected, processed, or stored by student-built automation workflows.
          </p>
          <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
            Students who build automation workflows that collect personal data from third parties are solely responsible
            for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3" style={bodyStyle}>
            <li className="font-body">Having a lawful basis for collecting that data under applicable law including DPDPA 2023</li>
            <li className="font-body">Informing individuals whose data is collected about how it will be used</li>
            <li className="font-body">Securing the automation system and any data it stores</li>
            <li className="font-body">Complying with data retention and deletion obligations</li>
            <li className="font-body">
              Compliance with WhatsApp&apos;s Business Policy and ManyChat&apos;s terms of service where WhatsApp automation
              is deployed
            </li>
          </ul>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            Designient&apos;s curriculum includes responsible data handling guidance as part of the AI Automation
            Accelerator. This guidance is educational in nature and does not constitute legal advice.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 8 — Data Retention
        </h2>
        <p className="font-body leading-relaxed mb-4" style={bodyStyle}>
          Designient retains personal data for the following periods:
        </p>
        <table className={tableClass} style={tableStyle}>
          <thead>
            <tr>
              <th className={thClass} style={thStyle}>Data Type</th>
              <th className={thClass} style={thStyle}>Retention Period</th>
              <th className={thClass} style={thStyle}>Reason</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Inquiry and application data (non-enrolled)', '24 months from last interaction', 'CRM management, follow-up'],
              ['Enrollment records', '7 years from last interaction', 'Companies Act 2013, Income Tax Act 1961'],
              ['Payment records and invoices', '7 years from last interaction', 'GST Act, Income Tax Act 1961'],
              ['Course delivery records (attendance, deliverables)', '7 years from last interaction', 'Guarantee eligibility, legal compliance'],
              ['Certificate issuance records', 'Indefinitely', 'Certificate verification service integrity'],
              ['Workshop registration data', '7 years from last interaction', 'Consistent with general retention'],
              ['Marketing list (enrolled students)', 'Until unsubscribe', 'Opt-out model'],
              ['Marketing list (workshop registrants)', 'Until unsubscribe or 7 years', 'Opt-out model'],
              ['Team enrollment records and invoices', '7 years from enrollment agreement', 'Companies Act 2013, GST Act'],
              ['Website analytics data', '26 months (Google Analytics default)', 'Website improvement'],
            ].map(([type, period, reason]) => (
              <tr key={type}>
                <td className={tdClass} style={tableStyle}>{type}</td>
                <td className={tdClass} style={tableStyle}>{period}</td>
                <td className={tdClass} style={tableStyle}>{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="font-body leading-relaxed mt-4" style={bodyStyle}>
          After the applicable retention period, data is either permanently deleted or irreversibly anonymised. You may
          request earlier deletion as described in Section 9.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 9 — Your Rights Under DPDPA 2023
        </h2>
        <p className="font-body leading-relaxed mb-4" style={bodyStyle}>
          Under the Digital Personal Data Protection Act 2023, you have the following rights in relation to personal data
          held by Designient:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-4" style={bodyStyle}>
          <li className="font-body">
            <strong style={{ color: 'var(--text-primary)' }}>Right of access:</strong> You may request a summary of the
            personal data Designient holds about you and the purposes for which it is being processed.
          </li>
          <li className="font-body">
            <strong style={{ color: 'var(--text-primary)' }}>Right to correction:</strong> You may request correction of any
            inaccurate or incomplete personal data.
          </li>
          <li className="font-body">
            <strong style={{ color: 'var(--text-primary)' }}>Right to erasure:</strong> You may request deletion of your
            personal data. Designient will delete data that is not required to be retained under applicable law. Data that
            Designient is legally required to retain (enrollment records, payment records, tax invoices) will be anonymised
            rather than deleted where full deletion is not permissible.
          </li>
          <li className="font-body">
            <strong style={{ color: 'var(--text-primary)' }}>Right to grievance redressal:</strong> You may raise a grievance
            with Designient&apos;s Grievance Officer as described in Section 1 and Section 10.
          </li>
          <li className="font-body">
            <strong style={{ color: 'var(--text-primary)' }}>Right to nominate:</strong> You may nominate another individual
            to exercise your data rights on your behalf in the event of your death or incapacity.
          </li>
          <li className="font-body">
            <strong style={{ color: 'var(--text-primary)' }}>Right to withdraw consent:</strong> Where processing is based
            on your consent (marketing communications, workshop registration), you may withdraw consent at any time.
            Withdrawal does not affect the lawfulness of processing before withdrawal.
          </li>
        </ul>
        <div className="rounded-lg p-4 mb-4 border-l-4" style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--color-warning)' }}>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            <strong style={{ color: 'var(--text-primary)' }}>Limitation — Razorpay data:</strong> For personal data collected
            and stored independently by Razorpay Software Private Limited during the payment process (including card
            details, transaction records, and payment instrument data), rights requests must be submitted directly to
            Razorpay at{' '}
            <a href="https://razorpay.com/support" className={linkClass} target="_blank" rel="noopener noreferrer">
              razorpay.com/support
            </a>{' '}
            or{' '}
            <a href="mailto:dpo@razorpay.com" className={linkClass}>dpo@razorpay.com</a>. Designient does not hold this data
            and cannot action Razorpay&apos;s data rights requests on your behalf.
          </p>
        </div>
        <p className="font-body leading-relaxed" style={bodyStyle}>
          <strong style={{ color: 'var(--text-primary)' }}>How to exercise your rights:</strong> Email{' '}
          <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link> with subject line:
          Privacy Request — [Right You Are Exercising] — [Your Name]. Designient will respond within 7 working days of
          receipt.
        </p>
      </section>

      {/* Section 10 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 10 — Grievance Redressal
        </h2>
        <p className="font-body leading-relaxed mb-4" style={bodyStyle}>
          In compliance with the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021, Designient has
          designated a Grievance Officer for privacy-related complaints. See our dedicated{' '}
          <Link href="/grievance-redressal" className={linkClass}>Grievance Redressal</Link> page for the full complaint process.
        </p>
        <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: 'var(--bg-subtle)' }}>
          <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Grievance Officer:</p>
          <p className="font-body mb-1" style={bodyStyle}>Mohammed Fyros Shabrin Sultana</p>
          <p className="font-body mb-1" style={bodyStyle}>Designient Technologies Private Limited</p>
          <p className="font-body mb-1" style={bodyStyle}>
            Email: <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>
          </p>
          <p className="font-body mb-1" style={bodyStyle}>
            Phone: <a href="tel:+919353000320" className={linkClass}>+91 9353 000 320</a>
          </p>
          <p className="font-body" style={bodyStyle}>Address: {REGISTERED_ADDRESS}</p>
        </div>
        <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
          Designient will acknowledge all privacy-related grievances within 2 working days and provide a substantive
          response within 5 working days of receipt.
        </p>
        <p className="font-body leading-relaxed" style={bodyStyle}>
          If your grievance is not resolved to your satisfaction, you may escalate to the appropriate authority under the
          Digital Personal Data Protection Act 2023.
        </p>
      </section>

      {/* Section 11 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 11 — Data Security
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={bodyStyle}>
            Designient implements reasonable technical and organisational security measures to protect personal data from
            unauthorised access, disclosure, alteration, or destruction. These include access controls, encrypted data
            transmission (HTTPS), and restricted internal access to personal data on a need-to-know basis.
          </p>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            However, no internet transmission or electronic storage is completely secure. Designient cannot guarantee
            absolute security of data transmitted to or from designient.com. In the event of a data breach that is likely to
            result in harm to you, Designient will notify you and the Data Protection Board of India (once constituted) as
            required under the DPDPA 2023.
          </p>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            Designient is not responsible for any intercepted information sent via the internet beyond Designient&apos;s
            reasonable control.
          </p>
        </div>
      </section>

      {/* Section 12 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 12 — Children&apos;s Data
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={bodyStyle}>
            Designient&apos;s courses and services are directed at individuals aged 18 years and older. Designient does not
            knowingly collect personal data from individuals under the age of 18 without verifiable parental or guardian
            consent.
          </p>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            Under the DPDPA 2023, processing of data of a child (person under 18 years) requires verifiable parental consent.
            If you are under 18 and wish to enroll in a Designient course, your parent or legal guardian must provide consent
            and complete the enrollment on your behalf.
          </p>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            If Designient becomes aware that it has collected personal data from a child without appropriate consent, it
            will delete that data promptly.
          </p>
        </div>
      </section>

      {/* Section 13 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 13 — Transfers of Personal Data
        </h2>
        <p className="font-body leading-relaxed" style={bodyStyle}>
          Designient does not transfer personal data outside India except as necessary for the provision of services by
          processors listed in Section 5 (specifically HubSpot, Resend, Google, and Meta, which operate internationally).
          Where such transfers occur, Designient ensures the processor is bound by contractual obligations that provide
          equivalent protection to Indian data protection law.
        </p>
      </section>

      {/* Section 14 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 14 — Changes to This Privacy Policy
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={bodyStyle}>
            Designient may update this Privacy Policy from time to time. Where changes materially affect how we use your
            personal data, we will notify enrolled students by email at least 14 calendar days before the changes take
            effect. Minor changes (formatting, clarifications, typographical corrections) take effect immediately upon
            publication.
          </p>
          <p className="font-body leading-relaxed" style={bodyStyle}>
            The &quot;Last updated&quot; date at the top of this policy reflects the date of the most recent version. Your
            continued use of designient.com after any change constitutes acceptance of the updated Privacy Policy.
          </p>
        </div>
      </section>

      {/* Section 15 */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Section 15 — Governing Law and Jurisdiction
        </h2>
        <p className="font-body leading-relaxed" style={bodyStyle}>
          This Privacy Policy is governed by the laws of India. Any dispute arising out of or in connection with this
          Privacy Policy shall be subject to the exclusive jurisdiction of the competent Courts and Tribunals having
          jurisdiction in Hyderabad, Telangana, India.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Contact Details
        </h2>
        <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-subtle)' }}>
          <p className="font-body mb-2" style={{ color: 'var(--text-primary)' }}>
            <strong>Brand name:</strong> Designient School of Masterminds
          </p>
          <p className="font-body mb-2" style={bodyStyle}>
            <strong>Legal entity:</strong> Designient Technologies Private Limited
          </p>
          <p className="font-body mb-2" style={bodyStyle}>
            <strong>Registered:</strong> Companies Act 2013, Hyderabad, Telangana, India
          </p>
          <p className="font-body mb-2" style={bodyStyle}>
            <strong>Registered address:</strong> {REGISTERED_ADDRESS}
          </p>
          <p className="font-body mb-2" style={bodyStyle}>
            <strong>Primary contact:</strong>{' '}
            <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>
          </p>
          <p className="font-body mb-2" style={bodyStyle}>
            <strong>Phone:</strong>{' '}
            <a href="tel:+919353000320" className={linkClass}>+91 9353 000 320</a>
          </p>
          <p className="font-body" style={bodyStyle}>
            <strong>Grievance Officer:</strong> Mohammed Fyros Shabrin Sultana — hello@designient.com
          </p>
        </div>
      </section>
    </>
  )
}
