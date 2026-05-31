import Link from 'next/link'

const tableClass = 'w-full text-sm border-collapse my-4'
const thClass = 'font-body font-semibold text-left p-3 border'
const tdClass = 'font-body p-3 border'

const tableStyle = { borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }
const thStyle = { ...tableStyle, backgroundColor: 'var(--bg-subtle)', color: 'var(--text-primary)' }

export function PolicySectionsFourThroughEleven() {
  return (
    <>
          {/* Section 4: Course Enrollment and Payment */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              4. Course Enrollment and Payment
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>4.1 Enrollment Models</h3>
                <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                  Designient offers two enrollment models depending on the course:
                </p>
                <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Open Checkout Enrollment</p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  The following courses use open checkout enrollment. Your seat is confirmed upon payment of the full course fee. No application is required.
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
                  <li className="font-body">UI UX Design Bootcamp</li>
                  <li className="font-body">AI Automation Accelerator</li>
                </ul>
                <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Application-Based Enrollment</p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  The following courses require an application review prior to enrollment. Submission of an application does not guarantee a place. Accepted applicants receive a written offer confirming their cohort, fee, and payment instructions. A seat is confirmed only upon payment of the booking token.
                </p>
                <ul className="list-disc pl-6 space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li className="font-body">UI UX Design Pro</li>
                  <li className="font-body">UI UX Design Master</li>
                  <li className="font-body">AI Product Design Course</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>4.2 Booking Token Policy</h3>
                <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Courses with a booking token (UI UX Design Pro, UI UX Design Master, AI Product Design Course)
                </p>
                <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                  On acceptance, a non-refundable booking token is required to confirm your seat. Token amounts are as follows:
                </p>
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
                <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                  The booking token is not an additional charge. It is deducted from the total course fee at the point of full payment. The booking token is non-refundable under all circumstances, including but not limited to: change of personal circumstances, scheduling conflicts, change of mind, inability to attend the cohort for which the token was paid, or any other reason.
                </p>
                <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Cohort transfer:</strong> If you are unable to attend the cohort for which your token was paid, you may transfer your token to a future cohort of the same course once, at the token&apos;s full value. The transfer request must be submitted in writing to{' '}
                  <Link href="mailto:hello@designient.com" className="text-[var(--color-primary)] underline">hello@designient.com</Link>{' '}
                  at least 7 calendar days before the cohort start date. Token transfers are available one time only per enrollment. If you are unable to attend the transferred cohort, the token is forfeited with no further transfer options and no refund.
                </p>
                <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Courses without a booking token (UI UX Design Bootcamp, AI Automation Accelerator)
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  These courses use full-fee payment at enrollment. No booking token is required or charged. Your seat is confirmed upon receipt of the full course fee.
                </p>
              </div>

              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>4.3 Full Course Fee Payment</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Courses with a booking token:</strong> The balance of the course fee (total course fee minus the booking token amount) is due no later than 7 calendar days before the cohort start date. Failure to pay the balance by this date may result in forfeiture of your seat. The booking token is not refunded in this circumstance.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Courses without a booking token:</strong> The full course fee is due at enrollment. Your seat is not reserved until full payment is received.
                </p>
              </div>

              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>4.4 EMI and Instalment Payments</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Zero-interest EMI is available on the following courses via Razorpay: UI UX Design Pro, UI UX Design Master, AI Product Design Course, and AI Automation Accelerator.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  EMI options (2-month and 3-month) are available at checkout subject to Razorpay eligibility criteria. UI UX Design Master also offers a 6-month EMI option. The full EMI schedule is presented at checkout. Designient does not charge any additional fee for EMI. Any fees charged by Razorpay or your card issuer are not within Designient&apos;s control.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  EMI is not available for the UI UX Design Bootcamp.
                </p>
              </div>

              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>4.5 International Payments</h3>
                <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                  Students outside India may pay by PayPal at the published USD price for each course. PayPal handles currency conversion. Designient does not charge any additional processing fee for international payments. PayPal&apos;s own fees, if any, are the student&apos;s responsibility.
                </p>
                <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Published USD prices by course:</p>
                <ul className="list-disc pl-6 space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li className="font-body">UI UX Design Bootcamp: USD 49</li>
                  <li className="font-body">UI UX Design Pro: USD 699</li>
                  <li className="font-body">UI UX Design Master: USD 1,399</li>
                  <li className="font-body">AI Automation Accelerator: USD 449</li>
                  <li className="font-body">AI Product Design Course: USD 899</li>
                </ul>
              </div>

              <div className="rounded-lg p-4 border-l-4" style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--color-warning)' }}>
                <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Payment Gateway Disclaimer</p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Payments made through Razorpay, PayPal, banks, UPI, and other payment gateways are subject to the respective payment gateway&apos;s terms and conditions. Designient Technologies Private Limited is not responsible for payment failures, delays, or technical issues caused by payment gateways, banks, or third-party service providers. Approved refunds are initiated through the original payment method. Actual credit timelines depend on the payment gateway and banking systems involved.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Designient Technologies Private Limited is solely responsible for the services provided. Razorpay and PayPal act only as payment processing platforms and do not hold responsibility for course delivery, refunds, or service fulfillment.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Cancellation and Refund Policy */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              5. Cancellation and Refund Policy
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>5.1 UI UX Design Bootcamp</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Pre-cohort cancellation:</strong> The UI UX Design Bootcamp does not use a booking token. If you have paid the full course fee and wish to withdraw before the cohort starts, a full refund is available up to 72 hours before the cohort start time. Cancellation requests received less than 72 hours before the cohort start time are not eligible for a refund except under the output guarantee in Section 6.1.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Post-cohort refund:</strong> After the cohort has started, no refund is available except under the output guarantee in Section 6.1.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>5.2 UI UX Design Pro</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Booking token:</strong> The booking token (Rs 5,999) is non-refundable under all circumstances as stated in Section 4.2.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Full course fee — pre-cohort withdrawal:</strong> If you have paid the full course fee and wish to withdraw before the cohort starts, the full fee minus the booking token amount is refundable, provided the withdrawal request is submitted in writing to hello@designient.com at least 7 calendar days before the cohort start date. Withdrawal requests received less than 7 calendar days before the cohort start date are not eligible for a refund of the balance fee.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Post-cohort refund:</strong> After the cohort has started, no refund of the balance fee is available except under the performance guarantee in Section 6.2.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>5.3 UI UX Design Master</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Booking token:</strong> The booking token (Rs 9,999) is non-refundable under all circumstances as stated in Section 4.2.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Full course fee — pre-cohort withdrawal:</strong> If you have paid the full course fee and wish to withdraw before the cohort starts, the full fee minus the booking token amount is refundable, provided the withdrawal request is submitted in writing to hello@designient.com at least 7 calendar days before the cohort start date.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Post-cohort refund:</strong> After the cohort has started, no refund of the balance fee is available except under the performance guarantee in Section 6.3.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>5.4 AI Product Design Course</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Booking token:</strong> The booking token (Rs 6,499 early bird / Rs 7,999 standard) is non-refundable under all circumstances as stated in Section 4.2.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Full course fee — pre-cohort withdrawal:</strong> If you have paid the full course fee and wish to withdraw before the cohort starts, the full fee minus the booking token amount is refundable, provided the withdrawal request is submitted in writing to hello@designient.com at least 7 calendar days before the cohort start date.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Post-cohort refund:</strong> After the cohort has started, no refund of the balance fee is available except under the performance guarantee in Section 6.4.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>5.5 AI Automation Accelerator</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>No booking token:</strong> This course does not use a booking token. The full course fee is paid at enrollment.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Pre-cohort withdrawal:</strong> If you wish to withdraw before the cohort starts, the full course fee minus a Rs 2,000 administrative processing fee is refundable, provided the withdrawal request is submitted in writing to hello@designient.com at least 7 calendar days before the cohort start date. Withdrawal requests received less than 7 calendar days before the cohort start date are not eligible for a refund except under the performance guarantee in Section 6.5.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Post-cohort refund:</strong> After the cohort has started, no refund is available except under the performance guarantee in Section 6.5.
                </p>
              </div>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                To request a cancellation or refund, contact{' '}
                <Link href="mailto:hello@designient.com" className="text-[var(--color-primary)] underline">hello@designient.com</Link>{' '}
                with your enrollment details. Approved refunds are initiated through the original payment method.
              </p>
            </div>
          </section>

          {/* Section 6: Performance Guarantees */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              6. Performance Guarantees
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>6.1 UI UX Design Bootcamp — Output Guarantee</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Guarantee:</strong> If you attend the full bootcamp (Friday, Saturday, and Sunday sessions) and do not have a portfolio-worthy prototype, a written case study, and a certificate by Sunday at 7pm, you are entitled to a full refund of the course fee paid.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Claim process:</strong> Submit your claim in writing to hello@designient.com by Monday midnight following the final bootcamp session. Include your name, cohort date, and a brief description of the specific output that was not delivered.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Eligibility:</strong> You must have been present and actively participating in all three days. The claim must be submitted by Monday midnight following the final session. This guarantee applies to the course fee paid only.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Exclusions:</strong> This guarantee does not apply if you were absent from any session, left early from any session, or did not engage with the build work during sessions.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>6.2 UI UX Design Pro — Performance Guarantee</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Guarantee:</strong> If you complete all 10 weeks, attend all live sessions, submit every module deliverable on time, and do not have a job-ready portfolio and written case study at course end, you are entitled to a refund of 25% of the total course fee paid (excluding the non-refundable booking token).
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Claim process:</strong> Submit your claim in writing to hello@designient.com within 14 calendar days of the final course session.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Eligibility:</strong> Attend every live session (one documented emergency exception allowed with advance mentor notification). Submit every deliverable on time. Complete the full 10-week course including Week 10 placement preparation.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  This guarantee covers delivery of a job-ready portfolio and written case study. It does not guarantee employment, salary, or interview outcomes.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>6.3 UI UX Design Master — Performance Guarantee</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Guarantee:</strong> If you complete all 6 months, attend all live sessions, submit every module deliverable on time, and do not have a diploma-standard portfolio at course end, you are entitled to a refund of 25% of the total course fee paid (excluding the non-refundable booking token).
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Eligibility:</strong> Attend every live session (up to two documented emergency exceptions with advance mentor notification). Submit every deliverable on time. Complete all 6 modules including the capstone project. Claim within 14 calendar days of the final session.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  This guarantee covers a diploma-standard portfolio including two client case studies and a capstone project. It does not guarantee employment or salary outcomes.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>6.4 AI Product Design Course — Performance Guarantee</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Guarantee:</strong> If you attend every session, submit every session deliverable on time, complete the full 6-week course, and do not have a portfolio-quality AI product audit case study and a functional working prototype at course end, you are entitled to a refund of 25% of the total course fee paid (excluding the non-refundable booking token).
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Eligibility:</strong> Attend every live session (no session exceptions). Submit every deliverable on time. Complete both portfolio case studies and the Bolt/v0 prototype. Claim within 14 calendar days of the final session.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  This guarantee covers two portfolio-quality case studies and one functional prototype. It does not guarantee employment, client acquisition, or any specific professional outcome.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>6.5 AI Automation Accelerator — Performance Guarantee</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Guarantee:</strong> If you attend every session, submit every session deliverable on time, complete all three automation builds, and do not have three deployed and functioning automations at course end, you are entitled to a refund of 50% of the total course fee paid.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Eligibility:</strong> Attend every live session (one documented emergency exception allowed). Submit every deliverable on time. Complete all three automation build assignments. Claim within 14 calendar days of the final session.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  A deployed, functioning automation means a workflow connected to real tools, receiving real inputs, and producing real outputs without manual operation — as confirmed by your mentor during the final session.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  This guarantee does not apply if automations fail after course end due to third-party tool changes, API changes, account deactivations, or other post-course factors outside Designient&apos;s control.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Attendance Policy */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              7. Attendance Policy
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>7.1 Session Attendance</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Live sessions are the core of the Designient learning model. Attendance at all sessions is expected for all courses.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Session recordings:</strong> Sessions are not recorded as a substitute for live attendance. Where recordings exist for internal mentor review purposes, they are not made available to students as a replacement for attendance.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Missed sessions:</strong> The attendance exceptions permitted under each course&apos;s guarantee clause (Sections 6.1 to 6.5) represent the maximum missed sessions that remain consistent with guarantee eligibility. Missing sessions beyond these exceptions does not result in course cancellation or a refund — you remain enrolled and responsible for the course fee — but you are not eligible for the guarantee.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Documented emergencies:</strong> A documented emergency means a situation outside your control that prevents attendance — medical emergency, bereavement, or equivalent. Scheduling conflicts, work commitments, travel, and personal preference do not constitute documented emergencies for guarantee eligibility.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>7.2 Deliverable Submission</h3>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Session deliverables are assigned at each live session and are due before the next session begins, unless a different deadline is communicated by your mentor. Late submission of deliverables affects guarantee eligibility as described in Sections 6.1 to 6.5.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Alumni Discount Terms */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              8. Alumni Discount Terms
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>8.1 Bootcamp to Pro Alumni Discount</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Students who have completed the UI UX Design Bootcamp and received a Bootcamp certificate are eligible for a Rs 2,000 discount on the standard price of the UI UX Design Pro course.
                </p>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Email hello@designient.com with your Bootcamp certificate attached before applying for the Pro course. The discount will be applied manually and cannot be applied retroactively after payment. Applies to standard price only; not stackable with other discounts or early bird pricing; available once per student; non-transferable.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>8.2 Pro to AI Product Design Alumni Discount</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Students who have completed the UI UX Design Pro course and received a Pro certificate are eligible for a Rs 5,000 discount on the standard price of the AI Product Design Course. Email hello@designient.com with your Pro certificate before applying. The discount is applied before the booking token is charged and cannot be applied retroactively.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>8.3 Master to AI Product Design Alumni Discount</h3>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Students who have completed the UI UX Design Master course and received a Master diploma are eligible for a Rs 5,000 discount on the standard price of the AI Product Design Course under the same claim process as Section 8.2. Students who hold both a Pro certificate and a Master diploma are entitled to one Rs 5,000 discount only — the discounts are not cumulative.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Team Enrollment */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              9. Team Enrollment (AI Automation Accelerator)
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong>9.1 Eligibility:</strong> The AI Automation Accelerator is available for team enrollment for companies wishing to enroll 5 or more employees in the same cohort, subject to availability and cohort capacity limits.
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong>9.2 Pricing:</strong> Per-seat discounts for team enrollment are negotiated on a case-by-case basis and confirmed in writing before any payment is made. Contact hello@designient.com with subject line &quot;Team Enrollment — AI Automation Accelerator&quot;, or submit a corporate inquiry at{' '}
                <Link href="/corporates" className="text-[var(--color-primary)] underline">designient.com/corporates</Link>.
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong>9.3 Payment:</strong> Team enrollments are invoiced directly to the company. GST is applicable as per Indian tax law. Payment terms are confirmed in the team enrollment agreement. Booking tokens do not apply to team enrollments.
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong>9.4 Cancellation:</strong> Cancellation must be submitted in writing to hello@designient.com. If cancelled at least 14 calendar days before the cohort start date, a refund of the team fee minus a Rs 5,000 administrative fee per confirmed seat is available. Cancellations received less than 14 calendar days before the cohort start date are not eligible for a refund. Individual students within a team enrollment may not cancel independently.
              </p>
            </div>
          </section>

          {/* Section 10: Course Discontinuation */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              10. Course Discontinuation
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>10.1 Prompt Engineering Mastery — Discontinued</h3>
                <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  The Prompt Engineering Mastery course has been discontinued as of May 30, 2026. Students currently enrolled in an active cohort will be contacted individually by Designient to discuss options including completion of their current cohort, transfer of their enrollment to an alternative course, or a full refund of fees paid. Students who enrolled in a future cohort that has not yet started are entitled to a full refund of all fees paid, including the booking token.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Any references to Prompt Engineering Mastery in previous versions of these Terms, in marketing materials, or on the Designient website are superseded by this clause.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>10.2 Course Changes</h3>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Designient reserves the right to update course content, toolchains, session schedules, and mentor assignments at any time. Material changes that affect the advertised learning outcomes of a course will be communicated to enrolled students with a minimum of 14 calendar days notice. In the event of a material change that a student reasonably considers to fundamentally alter the course they enrolled in, the student may request a full refund by submitting a written request to hello@designient.com within 7 calendar days of the change notification.
                </p>
              </div>
            </div>
          </section>

          {/* Section 11: Free Workshops */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
              11. Free Workshops
            </h2>
            <div className="space-y-4">
              <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>11.1 AI Automation Live and AI Product Design Live</h3>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Designient offers free monthly workshops — AI Automation Live and AI Product Design Live — as educational taster sessions. These workshops are free to attend and carry no obligation to enroll in any paid course. No refund policy applies to free workshops as no fee is charged. Designient reserves the right to cancel, reschedule, or discontinue these workshops at any time without notice. Cancellation of a free workshop does not create any liability for Designient.
              </p>
            </div>
          </section>
    </>
  )
}
