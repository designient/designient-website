import Link from 'next/link'
import {
 GRIEVANCE_OFFICER_NAME,
 LEGAL_LAST_UPDATED,
 REGISTERED_OFFICE_ADDRESS,
 SUPPORT_EMAIL,
 SUPPORT_PHONE,
 SUPPORT_PHONE_HREF,
} from '../../lib/siteLegal'

const h2Style = { fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', color: 'var(--color-primary)' }
const h3Style = { color: 'var(--text-primary)' }
const bodyStyle = { color: 'var(--text-secondary)' }
const linkClass = 'text-[var(--color-primary)] underline hover:no-underline'

export function GrievanceRedressalPolicyContent() {
 return (
 <>
 <section className="mb-10">
 <h2 className="font-display font-bold mb-4" style={h2Style}>
 Our Commitment
 </h2>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient School of Masterminds is committed to resolving every student and visitor complaint promptly and
 fairly. This page exists in compliance with Rule 3(1)(b) of the Information Technology (Intermediary Guidelines
 and Digital Media Ethics Code) Rules, 2021, and the Consumer Protection Act 2019.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="font-display font-bold mb-4" style={h2Style}>
 Who Is the Grievance Officer?
 </h2>
 <p className="font-body leading-relaxed mb-4" style={bodyStyle}>
 In compliance with the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021 and the Digital
 Personal Data Protection Act 2023, Designient has designated the following individual as Grievance Officer:
 </p>
 <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-subtle)' }}>
 <p className="font-body mb-1" style={bodyStyle}>
 <strong style={{ color: 'var(--text-primary)' }}>Name:</strong> {GRIEVANCE_OFFICER_NAME}
 </p>
 <p className="font-body mb-1" style={bodyStyle}>
 <strong style={{ color: 'var(--text-primary)' }}>Designation:</strong> Grievance Officer
 </p>
 <p className="font-body mb-1" style={bodyStyle}>
 <strong style={{ color: 'var(--text-primary)' }}>Organisation:</strong> Designient Technologies Private Limited
 </p>
 <p className="font-body mb-1" style={bodyStyle}>
 <strong style={{ color: 'var(--text-primary)' }}>Email:</strong>{' '}
 <Link href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</Link>
 </p>
 <p className="font-body mb-1" style={bodyStyle}>
 <strong style={{ color: 'var(--text-primary)' }}>Phone:</strong>{' '}
 <a href={SUPPORT_PHONE_HREF} className={linkClass}>{SUPPORT_PHONE}</a>
 </p>
 <p className="font-body mb-1" style={bodyStyle}>
 <strong style={{ color: 'var(--text-primary)' }}>Address:</strong> {REGISTERED_OFFICE_ADDRESS}
 </p>
 <p className="font-body" style={bodyStyle}>
 <strong style={{ color: 'var(--text-primary)' }}>Working hours:</strong> Monday to Friday, 10am to 6pm IST
 </p>
 </div>
 </section>

 <section className="mb-10">
 <h2 className="font-display font-bold mb-4" style={h2Style}>
 What Complaints Can You Raise Here?
 </h2>
 <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
 You may raise a grievance through this channel for any of the following:
 </p>
 <div className="space-y-4">
 <div>
 <h3 className="font-display font-semibold mb-2" style={h3Style}>Course and enrollment complaints</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Issues with enrollment confirmation, course access, session quality, mentor conduct, certificate delivery, or
 any other matter relating to your experience as a student or applicant.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-2" style={h3Style}>Payment and refund complaints</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Disputes regarding payment processing, refund processing timelines, guarantee claim decisions, or any financial
 transaction involving Designient.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-2" style={h3Style}>Privacy and data complaints</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Concerns about how Designient has collected, stored, used, or shared your personal data. Requests to exercise
 your rights under the Digital Personal Data Protection Act 2023 including access, correction, and erasure.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-2" style={h3Style}>Content complaints</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Concerns about any content on designient.com that you believe is unlawful, defamatory, inaccurate, or in
 violation of your intellectual property rights.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-2" style={h3Style}>Any other complaint</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Any other concern relating to your interaction with Designient or designient.com.
 </p>
 </div>
 </div>
 </section>

 <section className="mb-10">
 <h2 className="font-display font-bold mb-4" style={h2Style}>
 How to Raise a Grievance
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-2" style={h3Style}>Step 1 - Contact the Grievance Officer</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 Email <Link href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</Link> with:
 </p>
 <ul className="list-disc pl-6 space-y-1 mb-3" style={bodyStyle}>
 <li className="font-body">Subject line: Grievance - [Your Name] - [Brief Description]</li>
 <li className="font-body">Your full name</li>
 <li className="font-body">Your contact number</li>
 <li className="font-body">The course or interaction your grievance relates to</li>
 <li className="font-body">A clear description of your complaint and what resolution you are seeking</li>
 <li className="font-body">Any supporting documents or screenshots if relevant</li>
 </ul>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 You may also call <a href={SUPPORT_PHONE_HREF} className={linkClass}>{SUPPORT_PHONE}</a> during working hours
 to raise a grievance verbally. We will follow up in writing.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-2" style={h3Style}>Step 2 - Acknowledgement</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient will acknowledge your grievance within 2 working days of receipt.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-2" style={h3Style}>Step 3 - Resolution</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient will provide a substantive response to your grievance within 5 working days of receipt. Where a
 complaint requires investigation, we may request additional information from you. Complex complaints may
 require up to 15 working days for full resolution - we will inform you if this is the case.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-2" style={h3Style}>Step 4 - Escalation</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 If your grievance is not resolved to your satisfaction within the stated timeline, you may escalate in writing
 to the same contact with subject line: Grievance Escalation - [Your Name] - [Original Grievance Reference].
 </p>
 </div>
 </div>
 </section>

 <section className="mb-10">
 <h2 className="font-display font-bold mb-4" style={h2Style}>
 Payment Disputes via Razorpay
 </h2>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 If your grievance relates to a payment transaction processed by Razorpay Software Private Limited - including
 disputes about payment amounts, failed transactions, or chargeback matters - you may also contact Razorpay
 directly:
 </p>
 <p className="font-body leading-relaxed mb-1" style={bodyStyle}>
 <strong style={{ color: 'var(--text-primary)' }}>Razorpay Grievances Portal:</strong>{' '}
 <a href="https://razorpay.com/grievances" className={linkClass} target="_blank" rel="noopener noreferrer">
 razorpay.com/grievances
 </a>
 </p>
 <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
 <strong style={{ color: 'var(--text-primary)' }}>Razorpay Nodal Officer:</strong>{' '}
 <a href="mailto:nodal-officer@razorpay.com" className={linkClass}>nodal-officer@razorpay.com</a>
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient and Razorpay are separate entities. Payment processing complaints are best resolved by contacting both
 parties in parallel.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="font-display font-bold mb-4" style={h2Style}>
 Data Protection Complaints
 </h2>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 If your grievance relates to the processing of your personal data by Designient, you have the right to escalate
 unresolved complaints to the Data Protection Board of India once constituted under the Digital Personal Data
 Protection Act 2023. See also our{' '}
 <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="font-display font-bold mb-4" style={h2Style}>
 Consumer Protection
 </h2>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 If your grievance relates to a deficiency in service or unfair trade practice, you may also approach the
 appropriate consumer forum under the Consumer Protection Act 2019:
 </p>
 <ul className="list-disc pl-6 space-y-2 mb-3" style={bodyStyle}>
 <li className="font-body">
 <strong>District Consumer Disputes Redressal Commission</strong> - for claims up to Rs 50 lakhs
 </li>
 <li className="font-body">
 <strong>State Consumer Disputes Redressal Commission</strong> - for claims between Rs 50 lakhs and Rs 2 crores
 </li>
 <li className="font-body">
 <strong>National Consumer Disputes Redressal Commission</strong> - for claims above Rs 2 crores
 </li>
 </ul>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient&apos;s primary dispute resolution mechanism is arbitration as stated in the{' '}
 <Link href="/terms-and-conditions" className={linkClass}>Terms and Conditions</Link>. Consumer forum rights are in
 addition to, not in place of, the contractual grievance process.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="font-display font-bold mb-4" style={h2Style}>
 Response Record
 </h2>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient maintains a log of all grievances received and their resolution status in compliance with IT Rules
 2021. This log is available to regulatory authorities on request.
 </p>
 </section>

 <section className="mb-4">
 <h2 className="font-display font-bold mb-4" style={h2Style}>
 Legal Details
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
 <strong>Last updated:</strong> {LEGAL_LAST_UPDATED}
 </p>
 <p className="font-body" style={bodyStyle}>
 <strong>Registered office:</strong> {REGISTERED_OFFICE_ADDRESS}
 </p>
 </div>
 </section>
 </>
 )
}
