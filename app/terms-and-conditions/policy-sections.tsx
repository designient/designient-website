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

function DefItem({ term, children }: { term: string; children: ReactNode }) {
 return (
 <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
 <strong style={{ color: 'var(--text-primary)' }}>{term}</strong> {children}
 </p>
 )
}

export function TermsPolicyContent() {
 return (
 <>
 {/* About These Terms */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 About These Terms
 </h2>
 <div className="space-y-4">
 <p className="font-body leading-relaxed" style={bodyStyle}>
 These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Student,&quot; &quot;You,&quot; or &quot;Your&quot;) and Designient Technologies Private Limited, operating the educational platform Designient School of Masterminds (&quot;Designient,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;), in connection with your enrollment in, or inquiry about, any course or workshop offered by Designient.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 By submitting an inquiry form, applying for a course, registering for a workshop, or making a payment toward any Designient course, you agree to be bound by these Terms in their entirety.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 If you do not agree to these Terms, do not submit an inquiry, apply for any course, or make any payment.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 These Terms are published in accordance with Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, read with the Information Technology Act, 2000. This is a computer-generated electronic record and does not require a physical or digital signature to be binding.
 </p>
 </div>
 </section>

 {/* Section 1: Definitions */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 1 | Definitions
 </h2>
 <div className="space-y-1">
 <DefItem term="&quot;Booking Token&quot;">means the non-refundable partial payment required to confirm a seat in an application-based course, as described in Section 4.</DefItem>
 <DefItem term="&quot;Certificate&quot;">means the course completion certificate issued by Designient upon successful completion of a course, as described in Section 11.</DefItem>
 <DefItem term="&quot;Cohort&quot;">means the specific batch of students enrolled in a course for a defined start and end date.</DefItem>
 <DefItem term="&quot;Course&quot;">means any paid educational programme offered by Designient, including the UI UX Design Bootcamp, UI UX Design Pro, UI UX Design Master, AI Automation Accelerator, and AI Product Design Course.</DefItem>
 <DefItem term="&quot;Course Fee&quot;">means the total fee payable by a student for enrollment in a specific course, as published on the relevant course page on designient.com.</DefItem>
 <DefItem term="&quot;Course Materials&quot;">means all content, slides, recordings, templates, guides, Figma files, n8n workflow files, Notion documents, and any other materials provided by Designient to enrolled students in connection with a course.</DefItem>
 <DefItem term="&quot;Deliverable&quot;">means any assignment, project, prototype, case study, automation workflow, or other output required to be submitted by a student during a course.</DefItem>
 <DefItem term="&quot;Diploma&quot;">means the diploma certification issued upon successful completion of the UI UX Design Master course, as described in Section 11.</DefItem>
 <DefItem term="&quot;Force Majeure Event&quot;">has the meaning given to it in Section 13.</DefItem>
 <DefItem term="&quot;Grievance Officer&quot;">means Mohammed Fyros Shabrin Sultana, reachable at hello@designient.com.</DefItem>
 <DefItem term="&quot;Session&quot;">means a single live online class forming part of a course.</DefItem>
 <DefItem term="&quot;Workshop&quot;">means a free educational event offered by Designient, including AI Automation Live and AI Product Design Live.</DefItem>
 </div>
 </section>

 {/* Section 2 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 2 | Eligibility and Agreement
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.1 Age and Capacity</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 You must be 18 years of age or older to enroll in any Designient course or register for any workshop. By submitting an inquiry or application, you confirm that you are 18 years of age or older and legally capable of entering into binding contracts under Indian law.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 If you are under 18 years of age, your parent or legal guardian must complete the enrollment on your behalf and agrees to be bound by these Terms.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.2 Accuracy of Information</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 You agree to provide true, accurate, current, and complete information when submitting any form on designient.com. If you provide information that is untrue, inaccurate, or incomplete, Designient reserves the right to cancel your enrollment without refund, subject to Section 5.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>2.3 Student Code of Conduct</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>By enrolling in a course, you agree to:</p>
 <ul className="list-disc pl-6 space-y-2 mb-3" style={bodyStyle}>
 <li className="font-body">Attend sessions with respect for mentors and fellow students</li>
 <li className="font-body">Not record, screenshot, or capture any live session without prior written permission from Designient</li>
 <li className="font-body">Not share, redistribute, or commercially exploit any Course Materials</li>
 <li className="font-body">Not engage in disruptive, abusive, or harassing behaviour toward any mentor, staff member, or fellow student</li>
 <li className="font-body">Not misrepresent your work, submit plagiarised deliverables, or claim credit for another student&apos;s work</li>
 </ul>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Breach of this code of conduct may result in removal from the course without refund at Designient&apos;s sole discretion.
 </p>
 </div>
 </div>
 </section>

 {/* Section 3 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 3 | Courses and Enrollment Models
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>3.1 Active Course Catalog</h3>
 <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
 Designient currently offers the following courses:
 </p>
 <p className="font-body font-semibold mb-2" style={h3Style}>Design Track:</p>
 <ul className="list-disc pl-6 space-y-1 mb-3" style={bodyStyle}>
 <li className="font-body">UI UX Design Bootcamp | 3 days, open checkout</li>
 <li className="font-body">UI UX Design Pro | 10 weeks, application-based</li>
 <li className="font-body">UI UX Design Master | 6 months, application-based</li>
 </ul>
 <p className="font-body font-semibold mb-2" style={h3Style}>AI Track:</p>
 <ul className="list-disc pl-6 space-y-1 mb-3" style={bodyStyle}>
 <li className="font-body">AI Automation Accelerator | 8 weeks, open checkout</li>
 <li className="font-body">AI Product Design Course | 6 weeks, application-based</li>
 </ul>
 <p className="font-body font-semibold mb-2" style={h3Style}>Free Workshops (no fee, no enrollment obligation):</p>
 <ul className="list-disc pl-6 space-y-1 mb-4" style={bodyStyle}>
 <li className="font-body">AI Automation Live | monthly</li>
 <li className="font-body">AI Product Design Live | monthly</li>
 </ul>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient reserves the right to add, modify, or discontinue courses at any time. Section 14 governs course discontinuation.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>3.2 Open Checkout Enrollment</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 The UI UX Design Bootcamp and AI Automation Accelerator use open checkout enrollment. No application review is required. Your seat is confirmed upon receipt of the full course fee. Designient will send a confirmation to your registered email address within 24 hours of payment.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>3.3 Application-Based Enrollment</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 The UI UX Design Pro, UI UX Design Master, and AI Product Design Course require an application review before enrollment is confirmed.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Submission of an application does not constitute acceptance or guarantee a place in any cohort. Designient reviews applications at its sole discretion and may decline any application without being required to provide reasons.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Accepted applicants receive a written offer by email confirming the cohort dates, course fee, and payment instructions. Enrollment is confirmed only upon payment of the Booking Token as described in Section 4.
 </p>
 </div>
 </div>
 </section>

 {/* Section 4 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 4 | Booking Token Policy
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>4.1 Courses Requiring a Booking Token</h3>
 <table className={tableClass} style={tableStyle}>
 <thead>
 <tr>
 <th className={thClass} style={thStyle}>Course</th>
 <th className={thClass} style={thStyle}>Early Bird Token</th>
 <th className={thClass} style={thStyle}>Standard Token</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td className={tdClass} style={tableStyle}>UI UX Design Pro</td>
 <td className={tdClass} style={tableStyle}>Rs 5,999</td>
 <td className={tdClass} style={tableStyle}>Rs 5,999</td>
 </tr>
 <tr>
 <td className={tdClass} style={tableStyle}>UI UX Design Master</td>
 <td className={tdClass} style={tableStyle}>Rs 9,999</td>
 <td className={tdClass} style={tableStyle}>Rs 9,999</td>
 </tr>
 <tr>
 <td className={tdClass} style={tableStyle}>AI Product Design Course</td>
 <td className={tdClass} style={tableStyle}>Rs 6,499</td>
 <td className={tdClass} style={tableStyle}>Rs 7,999</td>
 </tr>
 </tbody>
 </table>
 <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
 The Booking Token is deducted from the total Course Fee at full payment. It is not an additional charge.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>4.2 Non-Refundability</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 The Booking Token is non-refundable under all circumstances including change of mind, change of personal circumstances, scheduling conflicts, inability to attend, or any other reason. This applies without exception.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>4.3 Cohort Transfer</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 If you are unable to attend the cohort for which your Booking Token was paid, you may request a one-time transfer of your token to a future cohort of the same course. The transfer request must be submitted in writing to{' '}
 <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>{' '}
 at least 7 calendar days before the cohort start date.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 One transfer is permitted per enrollment. If you are unable to attend the transferred cohort for any reason, the token is forfeited with no further transfer options and no refund.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>4.4 Balance Payment</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 For courses with a Booking Token, the balance of the Course Fee is due no later than 7 calendar days before the cohort start date. Failure to pay the balance by this date may result in forfeiture of your seat. The Booking Token is not refunded in this circumstance.
 </p>
 </div>
 </div>
 </section>

 {/* Section 5 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 5 | Payment
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.1 Course Fees</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Course fees are as published on the relevant course page on designient.com at the time of enrollment. Designient reserves the right to update course fees at any time. The fee applicable to you is the fee in effect at the time you pay your Booking Token (for application-based courses) or at the time of full payment (for open checkout courses).
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.2 Payment Methods | India</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 All Indian payments are processed through Razorpay Software Private Limited. Accepted methods include all major credit cards, debit cards, UPI, net banking, and wallets. Designient does not charge any processing fee. Razorpay&apos;s own charges, if any, are governed by Razorpay&apos;s terms.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.3 Payment Methods | International</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Students outside India may pay by PayPal at the published USD price for each course. PayPal handles currency conversion. Designient does not charge any international processing fee. PayPal&apos;s own fees are the student&apos;s responsibility.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.4 EMI</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 Zero-interest instalment payment options are available via Razorpay for the following courses: UI UX Design Pro, UI UX Design Master, AI Automation Accelerator, and AI Product Design Course. Two-month and three-month EMI options are available at checkout, subject to Razorpay eligibility criteria. UI UX Design Master also offers a six-month EMI option. EMI is not available for the UI UX Design Bootcamp.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.5 GST</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Course fees are inclusive of applicable Goods and Services Tax (GST) unless otherwise stated. Designient will issue a tax invoice to enrolled students. Students who require a B2B GST invoice must provide their valid GSTIN before payment. Designient is not responsible for incorrect input tax credit claims arising from a student&apos;s failure to provide accurate GSTIN details before invoice generation.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.6 Payment Data</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 Designient does not store, hold, copy, or retain any student payment instrument data including card numbers, CVV, or bank account credentials. All payment data is processed exclusively by Razorpay. By completing a payment through Razorpay, you acknowledge that your payment information is collected, stored, and processed by Razorpay in accordance with Razorpay&apos;s Privacy Policy at{' '}
 <a href="https://razorpay.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">razorpay.com/privacy</a>.
 Razorpay may send you transaction confirmation alerts by SMS and email independently of Designient.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>5.7 Checkout Consent</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 By completing payment on designient.com, you confirm that you have read and agree to these Terms and Conditions and Designient&apos;s{' '}
 <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>, and you consent to your payment and personal information being shared with Razorpay Software Private Limited for the purpose of processing your transaction.
 </p>
 </div>
 </div>
 </section>

 {/* Section 6 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 6 | Cancellation and Refund Policy
 </h2>
 <div className="space-y-6">
 {[
 {
 title: '6.1 UI UX Design Bootcamp',
 content: (
 <>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Pre-cohort cancellation:</strong> A full refund of the course fee is available if you cancel at least 72 hours before the cohort start time. Email hello@designient.com with your name and cohort date. Cancellations received less than 72 hours before the start time are not eligible for a pre-start refund.</p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Post-cohort:</strong> No refund is available after the cohort has started except under the guarantee in Section 7.1.</p>
 <p className="font-body leading-relaxed" style={bodyStyle}><strong>Refund processing timeline:</strong> 7 working days from written confirmation of approved cancellation to original payment method.</p>
 </>
 ),
 },
 {
 title: '6.2 UI UX Design Pro',
 content: (
 <>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Booking Token:</strong> Rs 5,999 | non-refundable in all circumstances.</p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Pre-cohort withdrawal:</strong> If you have paid the full Course Fee and wish to withdraw, the balance fee (total fee minus Booking Token) is refundable provided the withdrawal request is submitted in writing to hello@designient.com at least 7 calendar days before the cohort start date.</p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Post-cohort:</strong> No refund after the cohort starts except under the guarantee in Section 7.2.</p>
 <p className="font-body leading-relaxed" style={bodyStyle}><strong>Refund processing timeline:</strong> 7 working days from written confirmation.</p>
 </>
 ),
 },
 {
 title: '6.3 UI UX Design Master',
 content: (
 <>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Booking Token:</strong> Rs 9,999 | non-refundable in all circumstances.</p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Pre-cohort withdrawal:</strong> Balance fee (total fee minus Booking Token) refundable with at least 7 calendar days written notice before cohort start.</p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Post-cohort:</strong> No refund after cohort starts except under the guarantee in Section 7.3.</p>
 <p className="font-body leading-relaxed" style={bodyStyle}><strong>Refund processing timeline:</strong> 7 working days from written confirmation.</p>
 </>
 ),
 },
 {
 title: '6.4 AI Automation Accelerator',
 content: (
 <>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>No Booking Token.</strong> Full fee paid at enrollment.</p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Pre-cohort withdrawal:</strong> Full fee minus Rs 2,000 administrative processing fee refundable with at least 7 calendar days written notice before cohort start. The Rs 2,000 administrative fee is inclusive of applicable GST.</p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Post-cohort:</strong> No refund after cohort starts except under the guarantee in Section 7.4.</p>
 <p className="font-body leading-relaxed" style={bodyStyle}><strong>Refund processing timeline:</strong> 7 working days from written confirmation. Rs 2,000 processing fee deducted before refund is issued.</p>
 </>
 ),
 },
 {
 title: '6.5 AI Product Design Course',
 content: (
 <>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Booking Token:</strong> Rs 6,499 (early bird) or Rs 7,999 (standard) | non-refundable in all circumstances.</p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Pre-cohort withdrawal:</strong> Balance fee (total fee minus Booking Token) refundable with at least 7 calendar days written notice before cohort start.</p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}><strong>Post-cohort:</strong> No refund after cohort starts except under the guarantee in Section 7.5.</p>
 <p className="font-body leading-relaxed" style={bodyStyle}><strong>Refund processing timeline:</strong> 7 working days from written confirmation.</p>
 </>
 ),
 },
 ].map((s) => (
 <div key={s.title}>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>{s.title}</h3>
 {s.content}
 </div>
 ))}
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>6.6 Free Workshops</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 No fee is charged for AI Automation Live or AI Product Design Live workshops. No refund policy applies. Designient may cancel, reschedule, or discontinue any workshop at any time without notice. Cancellation of a free workshop creates no liability for Designient.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>6.7 EMI Refunds</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Refunds on EMI transactions are processed on the amount paid to date, not the full EMI plan value. Outstanding EMI instalments not yet debited are cancelled at the point of approved withdrawal. Razorpay&apos;s EMI refund process governs the actual credit timeline to your payment instrument.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>6.8 Refund Method</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 All refunds are processed to the original payment method used at enrollment. Designient does not issue refunds by cash, cheque, or any method other than the original payment instrument.
 </p>
 </div>
 </div>
 </section>

 {/* Section 7 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 7 | Performance Guarantees
 </h2>
 <p className="font-body leading-relaxed mb-6" style={bodyStyle}>
 Each course carries a specific performance guarantee. These guarantees are not automatic | you must meet all eligibility conditions and submit a written claim within the specified window. The guarantee applies only to the specific output described and does not extend to employment outcomes, salary levels, client acquisition, or any commercial result.
 </p>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>7.1 UI UX Design Bootcamp | Full Refund Guarantee</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 If you attend all three days of the bootcamp and do not have a portfolio-worthy prototype, written case study, and certificate by Sunday at 7pm, you are entitled to a full refund of the course fee.
 </p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 <strong>Claim:</strong> Email{' '}
 <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>{' '}
 by Monday midnight following the final session.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 <strong>Eligibility:</strong> Present and actively participating across all three days. Claim submitted by Monday midnight without exception.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>7.2 UI UX Design Pro | 25% Refund Guarantee</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 If you attend every session, submit every module deliverable on time, complete the full 10-week course including the Week 10 placement module, and do not have a job-ready portfolio and written case study at course end, you are entitled to a refund of 25% of the total Course Fee paid (excluding the Booking Token).
 </p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 <strong>Claim:</strong> Written claim to hello@designient.com within 14 calendar days of the final session, including deliverable submission record and description of the specific undelivered output.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 <strong>Eligibility:</strong> Every session attended (one session exception for documented emergency with advance notice and independent deliverable submission). Every module deliverable submitted on time. Full 10-week course completed. Claim within 14 days.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>7.3 UI UX Design Master | 25% Refund Guarantee</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 If you attend every session, submit every module deliverable on time, complete all 6 modules including the capstone project, and do not have a diploma-standard portfolio at course end, you are entitled to a refund of 25% of the total Course Fee paid (excluding the Booking Token).
 </p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 <strong>Claim:</strong> Written claim within 14 calendar days of the final session.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 <strong>Eligibility:</strong> Every session attended (two-session exception for documented emergencies). All deliverables submitted. All 6 modules completed including capstone. Claim within 14 days.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>7.4 AI Automation Accelerator | 50% Refund Guarantee</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 If you attend every session, submit every session deliverable on time, complete all three automation builds, and do not have three deployed and functioning automations at course end confirmed by your mentor, you are entitled to a refund of 50% of the total Course Fee paid.
 </p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 <strong>Claim:</strong> Written claim within 14 calendar days of the final session, including deliverable submission record and description of which automations were not successfully deployed.
 </p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 <strong>Eligibility:</strong> Every session attended (one-session exception for documented emergency). All deliverables submitted. All three automation builds completed. Claim within 14 days.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 &quot;Deployed and functioning&quot; means a workflow connected to real tools, receiving real inputs, and producing real outputs without manual operation, confirmed by your mentor at the final session. Post-course failures caused by changes in third-party tools, API changes, or account deactivations are not covered by this guarantee.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>7.5 AI Product Design Course | 25% Refund Guarantee</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 If you attend every session, submit every session deliverable on time, complete the full 6-week course, and do not have a portfolio-quality AI product audit case study and functional working prototype at course end, you are entitled to a refund of 25% of the total Course Fee paid (excluding the Booking Token).
 </p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 <strong>Claim:</strong> Written claim within 14 calendar days of the final session.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 <strong>Eligibility:</strong> Every session attended (no exceptions given the 12-student cohort critique-dependent format). All deliverables submitted. Full 6-week course completed. Claim within 14 days.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>7.6 Documented Emergency</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 For the purpose of guarantee eligibility, a documented emergency means a situation outside your control that genuinely prevents session attendance | medical emergency or bereavement. Scheduling conflicts, work commitments, travel, and personal preference do not constitute documented emergencies.
 </p>
 </div>
 </div>
 </section>

 {/* Section 8 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 8 | Attendance and Deliverables
 </h2>
 <div className="space-y-4">
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Live sessions are the core of the Designient learning model. Sessions are not recorded as a substitute for live attendance. Attendance is expected at every session for all courses.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Missing sessions beyond the exceptions permitted under Section 7 does not result in course cancellation or automatic refund | you remain enrolled and responsible for the full Course Fee | but you are not eligible for the performance guarantee.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Session deliverables are due before the next session begins unless a different deadline is communicated by your mentor. Late submission affects guarantee eligibility as described in Section 7.
 </p>
 </div>
 </section>

 {/* Section 9 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 9 | Alumni Discounts
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>9.1 UI UX Design Bootcamp to UI UX Design Pro</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Bootcamp certificate holders are eligible for Rs 2,000 off the standard price of UI UX Design Pro. Email hello@designient.com with your certificate attached before applying. Cannot be combined with early bird pricing or any other discount. One discount per student. Non-transferable. Cannot be applied retroactively.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>9.2 UI UX Design Pro to AI Product Design Course</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Pro certificate holders are eligible for Rs 5,000 off the standard price of the AI Product Design Course. Same claim process and conditions as 9.1.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>9.3 UI UX Design Master to AI Product Design Course</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Master diploma holders are eligible for Rs 5,000 off the standard price of the AI Product Design Course. Same claim process and conditions as 9.1. Students holding both a Pro certificate and a Master diploma are entitled to one Rs 5,000 discount only | not cumulative.
 </p>
 </div>
 </div>
 </section>

 {/* Section 10 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 10 | Team Enrollment
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>10.1 Eligibility</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 The AI Automation Accelerator is available for team enrollment for companies enrolling 5 or more employees in the same cohort. Subject to cohort capacity.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>10.2 Pricing</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Per-seat discounts are negotiated case by case and confirmed in writing before payment. Contact hello@designient.com with subject: Team Enrollment | AI Automation Accelerator.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>10.3 Payment and GST</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Team enrollments are invoiced to the company. GST applies as per applicable Indian tax law. Payment terms are confirmed in the written team enrollment agreement.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>10.4 Cancellation</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Written cancellation from the designated company contact only. If cancelled at least 14 calendar days before cohort start: full team fee refundable minus Rs 2,000 administrative fee per confirmed seat. Less than 14 calendar days: no refund. Individual team members may not cancel independently.
 </p>
 </div>
 </div>
 </section>

 {/* Section 11 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 11 | Certificates and Diplomas
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>11.1 Nature of Credentials</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 Certificates and diplomas issued by Designient School of Masterminds are proprietary credentials of Designient Technologies Private Limited. They do not imply, represent, or constitute:
 </p>
 <ul className="list-disc pl-6 space-y-2 mb-3" style={bodyStyle}>
 <li className="font-body">Government recognition of any kind</li>
 <li className="font-body">Affiliation with any university, deemed university, or institution of higher education</li>
 <li className="font-body">Approval or accreditation by the University Grants Commission (UGC), All India Council for Technical Education (AICTE), or any other regulatory body</li>
 <li className="font-body">A degree, postgraduate degree, or any academic qualification under the UGC Act 1956 or any other statute</li>
 </ul>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient&apos;s certificates and diplomas are professional credentials that reflect completion of Designient&apos;s own curriculum as designed and assessed by Designient. Their value is derived from the skills acquired, the portfolio produced, and the market recognition of the Designient program based on student outcomes.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>11.2 Certificate Verification</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient maintains a certificate verification service at{' '}
 <Link href="/verify" className={linkClass}>designient.com/verify</Link>. Third parties may verify the authenticity of any Designient certificate or diploma using the hash code printed on the certificate.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>11.3 Adobe Certification</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 The UI UX Design Pro course includes preparation for and access to the Adobe Certified Professional examination. Adobe Certification is an Adobe Inc. credential, not a Designient credential. Adobe&apos;s own terms govern that examination and certification. Designient prepares students for the examination but does not guarantee Adobe Certification outcomes.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>11.4 Withholding of Certificates</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient reserves the right to withhold a certificate if: (a) the student has outstanding fees payable to Designient, or (b) the student has been found to have violated the student code of conduct in Section 2.3, including submission of plagiarised work.
 </p>
 </div>
 </div>
 </section>

 {/* Section 12 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 12 | Intellectual Property
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>12.1 Designient&apos;s Course Content</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 All Course Materials | including but not limited to session recordings, slides, templates, Figma files, n8n workflow templates, Notion documents, curriculum guides, bonus resources, and any other materials provided by Designient | are the intellectual property of Designient Technologies Private Limited and are protected under the Copyright Act 1957.
 </p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 Enrolled students are granted a personal, non-exclusive, non-transferable, non-commercial licence to access and use Course Materials solely for their own individual learning for the duration of their enrollment and any post-course access period specified in the course terms.
 </p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>Students may not:</p>
 <ul className="list-disc pl-6 space-y-2 mb-3" style={bodyStyle}>
 <li className="font-body">Record, screenshot, or capture any live session without prior written permission from Designient</li>
 <li className="font-body">Share, distribute, upload, or publish any Course Materials on any platform</li>
 <li className="font-body">Sell, sublicense, or commercially exploit Course Materials in any form</li>
 <li className="font-body">Use Course Materials to create or deliver competing educational products or services</li>
 </ul>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Breach of this clause is a material breach and may result in immediate removal from the course without refund and legal action under the Copyright Act 1957.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>12.2 Student-Produced Work</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Work produced by students during a course | including portfolio case studies, design files, automation workflows, prototypes, and written case studies | is the intellectual property of the student who produced it. Designient does not claim ownership over student-produced work. Students are free to use their portfolio work commercially, include it in job applications, publish it in their portfolio, and share it publicly.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>12.3 Designient&apos;s Right to Use Student Work for Marketing</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 By enrolling in a course, you grant Designient a non-exclusive, royalty-free, worldwide licence to use your portfolio work, testimonials, photographs (if provided), and success story for marketing, promotional, and educational purposes including but not limited to the Designient website, social media, and course pages. You may withdraw this licence at any time by writing to hello@designient.com, after which Designient will cease using your materials in new publications but is not required to remove materials already published.
 </p>
 </div>
 </div>
 </section>

 {/* Section 13 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 13 | Force Majeure
 </h2>
 <div className="space-y-4">
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 Designient shall not be liable for any failure or delay in performing its obligations under these Terms if such failure or delay is caused by a Force Majeure Event beyond Designient&apos;s reasonable control.
 </p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 Force Majeure Events include: pandemic or epidemic, natural disaster, earthquake, flood, fire, acts of God, war, civil unrest, acts of terrorism, government action or regulation, court orders, strikes or labour disputes, internet service outages, cyberattacks, and failures of third-party platforms including but not limited to Zoom, Razorpay, HubSpot, Resend, n8n, Make, Relevance AI, ManyChat, Figma, Bolt, Perplexity, Anthropic (Claude), and Google.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Where a Force Majeure Event causes cancellation or disruption of sessions, Designient will reschedule affected sessions at the earliest practicable opportunity. Rescheduling is the sole remedy | Force Majeure Events do not entitle students to a refund of Course Fees.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 If a Force Majeure Event prevents Designient from delivering a course in its entirety and rescheduling is not feasible within 90 days, Designient will offer either a full course transfer to the next available cohort or a pro-rata refund of fees paid for undelivered sessions, at Designient&apos;s discretion.
 </p>
 </div>
 </section>

 {/* Section 14 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 14 | Course Changes and Discontinuation
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>14.1 Course Content Changes</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient reserves the right to update course content, toolchains, session schedules, and mentor assignments at any time. Where a change materially affects the advertised learning outcomes of a course, enrolled students will be notified at least 14 calendar days in advance. Students who consider such a change to fundamentally alter the course they enrolled in may request a full refund by submitting a written request to hello@designient.com within 7 calendar days of the change notification.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>14.2 Course Discontinuation</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 If Designient discontinues a course before a cohort that a student is enrolled in starts, the student is entitled to a full refund of all fees paid including the Booking Token. Designient will contact affected students directly within 7 calendar days of the discontinuation decision.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>14.3 Prompt Engineering Mastery | Discontinued</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 The Prompt Engineering Mastery course has been discontinued as of May 30, 2026. Students enrolled in a future cohort not yet started are entitled to a full refund of all fees paid. Email hello@designient.com with subject: Prompt Engineering Mastery Refund Request.
 </p>
 </div>
 </div>
 </section>

 {/* Section 15 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 15 | AI Track | Student Responsibilities
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>15.1 Commercial Deployment of AI Tools</h3>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 Students enrolled in the AI Automation Accelerator and AI Product Design Course will learn to use third-party AI and automation tools including n8n, Make, ManyChat, Relevance AI, Claude API, and WhatsApp Business API. Designient provides education and training in the use of these tools.
 </p>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 Students are solely responsible for ensuring their own compliance with all applicable laws when deploying automation workflows, AI-powered systems, or AI product designs commercially or in any context beyond personal learning. This includes but is not limited to:
 </p>
 <ul className="list-disc pl-6 space-y-2 mb-3" style={bodyStyle}>
 <li className="font-body">India&apos;s Digital Personal Data Protection Act 2023 (DPDPA 2023) with respect to personal data processed by student-built workflows</li>
 <li className="font-body">WhatsApp Business Policy and Meta&apos;s terms of service when deploying ManyChat-based WhatsApp automations</li>
 <li className="font-body">The terms of service of each third-party tool used</li>
 <li className="font-body">Any sector-specific regulations applicable to the student&apos;s industry or jurisdiction</li>
 </ul>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>15.2 No Liability for Commercial Deployment</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient provides education only. Designient is not responsible for, and expressly disclaims all liability in connection with, any legal claim, regulatory action, data breach, third-party complaint, or commercial loss arising from a student&apos;s deployment of tools or workflows taught in any Designient course, in any commercial, professional, or operational context.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>15.3 Student Indemnity for AI Tool Deployment</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Students agree to indemnify, defend, and hold harmless Designient Technologies Private Limited, its directors, officers, employees, mentors, and agents from and against any claims, losses, damages, fines, penalties, costs, or legal expenses arising from the student&apos;s commercial or operational deployment of tools, workflows, or systems learned in any Designient AI Track course.
 </p>
 </div>
 </div>
 </section>

 {/* Section 16 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 16 | Student Grievance Redressal
 </h2>
 <div className="space-y-4">
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient maintains a formal grievance redressal process for all enrolled students, applicants, and course enquirers, in compliance with the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021 and the Consumer Protection Act 2019. Full details are on our{' '}
 <Link href="/grievance-redressal" className={linkClass}>Grievance Redressal</Link> page.
 </p>
 <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-subtle)' }}>
 <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Grievance Officer:</p>
 <p className="font-body mb-1" style={bodyStyle}>Mohammed Fyros Shabrin Sultana</p>
 <p className="font-body mb-1" style={bodyStyle}>Designient Technologies Private Limited</p>
 <p className="font-body mb-1" style={bodyStyle}>
 Email: <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>
 </p>
 <p className="font-body" style={bodyStyle}>
 Phone: <a href="tel:+919353000320" className={linkClass}>+91 9353 000 320</a>
 </p>
 </div>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Complaints may be submitted by email or phone. Designient will acknowledge all grievances within 2 working days and provide a substantive response within 5 working days of receipt.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 For complaints not resolved to your satisfaction within 5 working days, you may escalate in writing with subject line: Grievance Escalation | [Your Name] | [Course Name].
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 For payment-related disputes involving Razorpay transactions, you may also contact Razorpay&apos;s grievance portal at{' '}
 <a href="https://razorpay.com/grievances" className={linkClass} target="_blank" rel="noopener noreferrer">razorpay.com/grievances</a>.
 </p>
 </div>
 </section>

 {/* Section 17 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 17 | Limitation of Liability
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>17.1 Cap on Liability</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 To the maximum extent permitted by applicable Indian law, Designient&apos;s total liability to any student arising out of or in connection with any course, workshop, or these Terms shall not exceed the total Course Fee paid by that student for the specific course giving rise to the claim.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>17.2 Exclusion of Consequential Losses</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient shall not be liable for any indirect, special, incidental, consequential, or punitive losses including but not limited to: loss of employment opportunity, loss of income, loss of business, loss of data, loss of profit, or loss of goodwill, whether arising in contract, tort, or otherwise, even if Designient has been advised of the possibility of such losses.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>17.3 No Guarantee of Employment Outcomes</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient&apos;s placement support services and quoted placement statistics are based on historical outcomes of students who completed the structured placement support process. Designient does not guarantee employment, a specific salary package, or a specific number of interview responses to any student. Placement outcomes depend on individual student effort, market conditions, and factors outside Designient&apos;s control.
 </p>
 </div>
 </div>
 </section>

 {/* Section 18 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 18 | Disclaimer of Warranties
 </h2>
 <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
 Designient&apos;s courses are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent permitted by applicable Indian law, Designient makes no warranty that:
 </p>
 <ul className="list-disc pl-6 space-y-2" style={bodyStyle}>
 <li className="font-body">Course content will be error-free or continuously updated</li>
 <li className="font-body">Any specific employment, salary, or career outcome will result from course completion</li>
 <li className="font-body">Third-party tools taught in courses will remain available, functional, or affordable</li>
 <li className="font-body">Certificates will be recognised by any specific employer or industry body</li>
 </ul>
 </section>

 {/* Section 19 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 19 | Intellectual Property Infringement Complaints
 </h2>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 If you believe that any content on designient.com infringes your intellectual property rights, email hello@designient.com with subject: IP Infringement Complaint | [Your Name]. Include a description of the allegedly infringing content, the URL where it appears, and your contact details. Designient will investigate and respond within 14 working days.
 </p>
 </section>

 {/* Section 20 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 20 | Privacy
 </h2>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient&apos;s collection, use, and protection of your personal data is governed by Designient&apos;s{' '}
 <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>, available at designient.com/privacy-policy. The Privacy Policy is incorporated into these Terms by reference. By agreeing to these Terms, you acknowledge that you have read and understood the Privacy Policy.
 </p>
 </section>

 {/* Section 21 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 21 | Amendments to These Terms
 </h2>
 <div className="space-y-4">
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Designient reserves the right to amend these Terms at any time. Material amendments will be communicated to enrolled students by email at least 14 calendar days before taking effect. Non-material amendments (including corrections of typographical errors, formatting changes, and clarifications that do not affect student rights) take effect immediately upon publication on designient.com.
 </p>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 Your continued use of Designient&apos;s services after any amendment constitutes acceptance of the updated Terms.
 </p>
 </div>
 </section>

 {/* Section 22 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 22 | Dispute Resolution
 </h2>
 <div className="space-y-6">
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>22.1 Good Faith Negotiation</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 In the event of any dispute arising out of or in connection with these Terms or any course enrollment, the parties shall first attempt to resolve the dispute by good faith negotiation. Either party may initiate negotiation by written notice to the other party.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>22.2 Arbitration</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 If the dispute is not resolved by good faith negotiation within 30 days of the written notice, either party may refer the dispute to arbitration under the Arbitration and Conciliation Act 1996. The arbitration shall be conducted by a sole arbitrator mutually agreed upon by the parties, or if no agreement is reached within 15 days, appointed in accordance with the Arbitration and Conciliation Act 1996. The seat and venue of arbitration shall be Hyderabad, Telangana. The language of arbitration shall be English. The arbitrator&apos;s decision shall be final and binding.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>22.3 Courts as Fallback</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 If arbitration fails or is not available for any reason, the parties submit to the exclusive jurisdiction of the competent Courts and Tribunals having jurisdiction in Hyderabad, Telangana, India.
 </p>
 </div>
 <div>
 <h3 className="font-display font-semibold mb-3 text-xl" style={h3Style}>22.4 Governing Law</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>
 These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws provisions.
 </p>
 </div>
 </div>
 </section>

 {/* Section 23 */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Section 23 | General
 </h2>
 <div className="space-y-6">
 {[
 { title: '23.1 Entire Agreement', text: 'These Terms, together with the Privacy Policy and any written enrollment offer or team enrollment agreement, constitute the entire agreement between Designient and the student with respect to the subject matter hereof and supersede all prior agreements, representations, and understandings.' },
 { title: '23.2 Severability', text: 'If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.' },
 { title: '23.3 Waiver', text: "Failure by Designient to enforce any provision of these Terms on any occasion does not constitute a waiver of Designient's right to enforce that provision on a future occasion." },
 { title: '23.4 Assignment', text: 'Designient may assign its rights and obligations under these Terms without notice. Students may not assign their enrollment, rights, or obligations under these Terms to any third party.' },
 { title: '23.5 Notices', text: 'All notices under these Terms shall be in writing and sent by email. Notices to Designient shall be sent to hello@designient.com. Notices to students shall be sent to the email address provided at enrollment.' },
 ].map((item) => (
 <div key={item.title}>
 <h3 className="font-display font-semibold mb-2 text-lg" style={h3Style}>{item.title}</h3>
 <p className="font-body leading-relaxed" style={bodyStyle}>{item.text}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Contact */}
 <section className="mb-12">
 <h2 className="font-display font-bold mb-6" style={h2Style}>
 Contact and Registered Details
 </h2>
 <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-subtle)' }}>
 <p className="font-body mb-2" style={{ color: 'var(--text-primary)' }}>
 <strong>Brand name:</strong> Designient School of Masterminds
 </p>
 <p className="font-body mb-2" style={bodyStyle}>
 <strong>Legal entity:</strong> Designient Technologies Private Limited
 </p>
 <p className="font-body mb-2" style={bodyStyle}>
 <strong>Incorporation:</strong> Companies Act 2013, registered in Hyderabad, Telangana, India
 </p>
 <p className="font-body mb-2" style={bodyStyle}>
 <strong>Primary contact:</strong>{' '}
 <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>
 </p>
 <p className="font-body mb-2" style={bodyStyle}>
 <strong>Phone:</strong>{' '}
 <a href="tel:+919353000320" className={linkClass}>+91 9353 000 320</a>
 </p>
 <p className="font-body mb-2" style={bodyStyle}>
 <strong>Grievance Officer:</strong> Mohammed Fyros Shabrin Sultana | hello@designient.com
 </p>
 <p className="font-body" style={bodyStyle}>
 <strong>Operational offices:</strong> Bangalore (BHIVE Platinum, Church Street) · Hyderabad (Jubilee Hills) · Pune (Sangamvadi)
 </p>
 </div>
 </section>
 </>
 )
}
