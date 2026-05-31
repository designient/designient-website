import Link from 'next/link'

const tableClass = 'w-full text-sm border-collapse my-4'
const thClass = 'font-body font-semibold text-left p-3 border'
const tdClass = 'font-body p-3 border align-top'

const tableStyle = { borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }
const thStyle = { ...tableStyle, backgroundColor: 'var(--bg-subtle)', color: 'var(--text-primary)' }

const courseLinkClass = 'text-[var(--color-primary)] underline hover:no-underline'

export function CancellationRefundPolicyContent() {
  return (
    <>
      {/* Introduction */}
      <div className="mb-12">
        <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          <strong>Applies to:</strong> All active Designient courses — UI UX Design Bootcamp, UI UX Design Pro, UI UX Design Master, AI Automation Accelerator, AI Product Design Course.
        </p>
        <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          This page explains our refund and cancellation terms in plain language. For the full legal clauses, refer to our{' '}
          <Link href="/terms-and-conditions" className={courseLinkClass}>Terms and Conditions</Link>.
        </p>
        <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          If you have a question not answered here, email{' '}
          <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>.
        </p>
      </div>

      {/* Quick Reference */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          Quick Reference — All Courses at a Glance
        </h2>
        <div className="overflow-x-auto">
          <table className={tableClass} style={tableStyle}>
            <thead>
              <tr>
                <th className={thClass} style={thStyle}>Course</th>
                <th className={thClass} style={thStyle}>Booking Token</th>
                <th className={thClass} style={thStyle}>Pre-Start Refund</th>
                <th className={thClass} style={thStyle}>Post-Start Refund</th>
                <th className={thClass} style={thStyle}>Guarantee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass} style={tableStyle}>
                  <Link href="/ui-ux-design-bootcamp" className={courseLinkClass}>UI UX Design Bootcamp</Link>
                </td>
                <td className={tdClass} style={tableStyle}>None</td>
                <td className={tdClass} style={tableStyle}>Full refund up to 72 hrs before start</td>
                <td className={tdClass} style={tableStyle}>None (guarantee only)</td>
                <td className={tdClass} style={tableStyle}>Full refund if no output by Sunday 7pm</td>
              </tr>
              <tr>
                <td className={tdClass} style={tableStyle}>
                  <Link href="/ui-ux-design-pro" className={courseLinkClass}>UI UX Design Pro</Link>
                </td>
                <td className={tdClass} style={tableStyle}>Rs 5,999 (non-refundable)</td>
                <td className={tdClass} style={tableStyle}>Full balance refund — 7 days before start</td>
                <td className={tdClass} style={tableStyle}>None (guarantee only)</td>
                <td className={tdClass} style={tableStyle}>25% if conditions met</td>
              </tr>
              <tr>
                <td className={tdClass} style={tableStyle}>
                  <Link href="/ui-ux-design-master" className={courseLinkClass}>UI UX Design Master</Link>
                </td>
                <td className={tdClass} style={tableStyle}>Rs 9,999 (non-refundable)</td>
                <td className={tdClass} style={tableStyle}>Full balance refund — 7 days before start</td>
                <td className={tdClass} style={tableStyle}>None (guarantee only)</td>
                <td className={tdClass} style={tableStyle}>25% if conditions met</td>
              </tr>
              <tr>
                <td className={tdClass} style={tableStyle}>
                  <Link href="/courses" className={courseLinkClass}>AI Automation Accelerator</Link>
                </td>
                <td className={tdClass} style={tableStyle}>None</td>
                <td className={tdClass} style={tableStyle}>Full fee minus Rs 2,000 — 7 days before start</td>
                <td className={tdClass} style={tableStyle}>None (guarantee only)</td>
                <td className={tdClass} style={tableStyle}>50% if conditions met</td>
              </tr>
              <tr>
                <td className={tdClass} style={tableStyle}>
                  <Link href="/courses" className={courseLinkClass}>AI Product Design Course</Link>
                </td>
                <td className={tdClass} style={tableStyle}>Rs 6,499 EB / Rs 7,999 std (non-refundable)</td>
                <td className={tdClass} style={tableStyle}>Full balance refund — 7 days before start</td>
                <td className={tdClass} style={tableStyle}>None (guarantee only)</td>
                <td className={tdClass} style={tableStyle}>25% if conditions met</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 1: Booking Token Policy */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          1. Booking Token Policy
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>What is a booking token?</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A booking token is a partial upfront payment that confirms your seat in an application-based course. It is deducted from your total course fee when you pay the balance — it is not an extra charge.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>Which courses have a booking token?</h3>
            <table className={tableClass} style={tableStyle}>
              <thead>
                <tr>
                  <th className={thClass} style={thStyle}>Course</th>
                  <th className={thClass} style={thStyle}>Booking Token Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass} style={tableStyle}>UI UX Design Pro</td>
                  <td className={tdClass} style={tableStyle}>Rs 5,999</td>
                </tr>
                <tr>
                  <td className={tdClass} style={tableStyle}>UI UX Design Master</td>
                  <td className={tdClass} style={tableStyle}>Rs 9,999</td>
                </tr>
                <tr>
                  <td className={tdClass} style={tableStyle}>AI Product Design Course</td>
                  <td className={tdClass} style={tableStyle}>Rs 6,499 (early bird) / Rs 7,999 (standard)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>Which courses do not have a booking token?</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The <strong>UI UX Design Bootcamp</strong> and the <strong>AI Automation Accelerator</strong> do not use a booking token. You pay the full course fee at enrollment and your seat is confirmed immediately on payment.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>Is the booking token refundable?</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              No. The booking token is non-refundable under all circumstances — including change of mind, personal circumstances, or inability to attend the cohort.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>What if I cannot attend the cohort I booked?</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              You may transfer your booking token to a future cohort of the same course once, at its full value. To request a transfer, email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              with your name and cohort date at least 7 calendar days before the cohort start date.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Transfers are available one time only. If you are unable to attend the transferred cohort, the token is forfeited with no further options.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Cancellation and Pre-Start Refunds */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          2. Cancellation and Pre-Start Refunds
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>2.1 UI UX Design Bootcamp</h3>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>If you cancel before the bootcamp starts:</p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              A full refund of the course fee is available if you cancel at least 72 hours before the bootcamp start time. Email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              with your name and cohort date.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              Cancellations received less than 72 hours before the start time are not eligible for a pre-start refund. The output guarantee (Section 3.1) applies after the bootcamp has started.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>Refund timeline:</strong> Refunds are processed within 7 working days of the cancellation confirmation.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>2.2 UI UX Design Pro</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>Booking token:</strong> Rs 5,999 — non-refundable in all circumstances.
            </p>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>If you cancel before the cohort starts:</p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              If you have paid the full course fee and wish to withdraw, the full fee minus the booking token (Rs 5,999) is refundable, provided you submit your withdrawal request at least 7 calendar days before the cohort start date. Email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              with your name and cohort start date.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              Withdrawals requested less than 7 calendar days before the cohort start date are not eligible for a balance refund.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>If you cancel after the cohort has started:</strong> No refund is available after the cohort starts, except under the performance guarantee in Section 3.2.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>Refund timeline:</strong> Approved pre-start refunds are processed within 7 working days of withdrawal confirmation.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>2.3 UI UX Design Master</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>Booking token:</strong> Rs 9,999 — non-refundable in all circumstances.
            </p>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>If you cancel before the cohort starts:</p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              If you have paid the full course fee and wish to withdraw, the full fee minus the booking token (Rs 9,999) is refundable, provided you submit your withdrawal request at least 7 calendar days before the cohort start date. Email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              with your name and cohort start date.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              Withdrawals requested less than 7 calendar days before the cohort start date are not eligible for a balance refund.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>If you cancel after the cohort has started:</strong> No refund is available after the cohort starts, except under the performance guarantee in Section 3.3.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>Refund timeline:</strong> Approved pre-start refunds are processed within 7 working days.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>2.4 AI Automation Accelerator</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>No booking token.</strong> You pay the full course fee at enrollment.
            </p>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>If you cancel before the cohort starts:</p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              The full course fee minus a Rs 2,000 administrative processing fee is refundable, provided you submit your withdrawal request at least 7 calendar days before the cohort start date. Email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              with your name and cohort start date.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              Withdrawals requested less than 7 calendar days before the cohort start date are not eligible for a refund except under the performance guarantee in Section 3.4.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>If you cancel after the cohort has started:</strong> No refund is available after the cohort starts, except under the performance guarantee in Section 3.4.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>Refund timeline:</strong> Approved pre-start refunds are processed within 7 working days. The Rs 2,000 processing fee is deducted before the refund is issued.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>2.5 AI Product Design Course</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>Booking token:</strong> Rs 6,499 (early bird) / Rs 7,999 (standard) — non-refundable in all circumstances.
            </p>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>If you cancel before the cohort starts:</p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              If you have paid the full course fee and wish to withdraw, the full fee minus the booking token is refundable, provided you submit your withdrawal request at least 7 calendar days before the cohort start date. Email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              with your name and cohort start date.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              Withdrawals requested less than 7 calendar days before the cohort start date are not eligible for a balance refund.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>If you cancel after the cohort has started:</strong> No refund is available after the cohort starts, except under the performance guarantee in Section 3.5.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>Refund timeline:</strong> Approved pre-start refunds are processed within 7 working days.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Performance Guarantees */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          3. Performance Guarantees
        </h2>
        <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          Each course has a specific performance guarantee. The guarantee is not automatic — you must meet all eligibility conditions and submit a claim within the specified window.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>3.1 UI UX Design Bootcamp — Full Refund Guarantee</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>What it covers:</strong> If you do not have a portfolio-worthy prototype, a written case study, and a certificate by Sunday at 7pm, you receive a full refund of the course fee paid.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>How to claim:</strong> Email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              by Monday midnight following the final session. Include your name and cohort date.
            </p>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Eligibility conditions:</p>
            <ul className="list-disc pl-6 space-y-1 mb-2" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">You must have been present and actively participating across all three days.</li>
              <li className="font-body">Your claim must be submitted by Monday midnight. No exceptions.</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>This guarantee does not cover:</strong> Dissatisfaction with the brief, preference for a different tool, or any outcome beyond the specific three deliverables listed above.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>3.2 UI UX Design Pro — 25% Refund Guarantee</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>What it covers:</strong> If you complete all 10 weeks, attend every session, submit every deliverable on time, and do not have a job-ready portfolio and written case study at the end — you receive 25% of the total course fee paid (excluding the booking token).
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>How to claim:</strong> Email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              within 14 calendar days of the final session. Include your name, cohort dates, and a brief description of the specific output that was not delivered.
            </p>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Eligibility conditions:</p>
            <ul className="list-disc pl-6 space-y-1 mb-2" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Attended every live session (one session exception for documented emergency, with advance notice and independent deliverable submission).</li>
              <li className="font-body">Submitted every module deliverable by the set deadline.</li>
              <li className="font-body">Completed the full 10-week course including Week 10 placement module.</li>
              <li className="font-body">Claim submitted within 14 calendar days of the final session.</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>This guarantee does not cover:</strong> Employment outcomes, salary levels, number of interview responses, or any outcome beyond the delivery of a job-ready portfolio and written case study.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>3.3 UI UX Design Master — 25% Refund Guarantee</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>What it covers:</strong> If you complete all 6 months, attend every session, submit every deliverable on time, and do not have a diploma-standard portfolio at the end — you receive 25% of the total course fee paid (excluding the booking token).
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>How to claim:</strong> Email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              within 14 calendar days of the final session. Include your name, cohort dates, and a description of the specific output not delivered.
            </p>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Eligibility conditions:</p>
            <ul className="list-disc pl-6 space-y-1 mb-2" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Attended every live session (two-session exception for documented emergencies, with advance notice and independent deliverable submission).</li>
              <li className="font-body">Submitted every module deliverable by the set deadline.</li>
              <li className="font-body">Completed all 6 modules including the capstone project.</li>
              <li className="font-body">Claim submitted within 14 calendar days of the final session.</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>This guarantee does not cover:</strong> Employment outcomes, salary levels, or any outcome beyond the delivery of a diploma-standard portfolio including two client case studies and a capstone project.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>3.4 AI Automation Accelerator — 50% Refund Guarantee</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>What it covers:</strong> If you attend every session, submit every deliverable on time, complete all three automation builds, and do not have three deployed and functioning automations at course end — you receive 50% of the total course fee paid.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>How to claim:</strong> Email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              within 14 calendar days of the final session. Include your name, cohort dates, deliverable submission record, and a description of which automation(s) were not successfully deployed.
            </p>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Eligibility conditions:</p>
            <ul className="list-disc pl-6 space-y-1 mb-2" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Attended every live session (one-session exception for documented emergency, with advance notice and independent deliverable submission).</li>
              <li className="font-body">Submitted every session deliverable by the set deadline.</li>
              <li className="font-body">Completed all three automation build assignments.</li>
              <li className="font-body">Claim submitted within 14 calendar days of the final session.</li>
            </ul>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>What &quot;deployed&quot; means for this guarantee:</strong> A deployed automation is a workflow that is connected to real tools, receives real inputs, and produces real outputs without manual operation — confirmed by your mentor at the final session.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>This guarantee does not cover:</strong> Business outcomes from the automations, a specific level of time savings, client acquisition, or automation failures caused by changes in third-party tools, API changes, or account deactivations after the course ends.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>3.5 AI Product Design Course — 25% Refund Guarantee</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>What it covers:</strong> If you attend every session, submit every deliverable on time, complete the full 6-week course, and do not have a portfolio-quality AI product audit case study and a functional working prototype at course end — you receive 25% of the total course fee paid (excluding the booking token).
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              <strong>How to claim:</strong> Email{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              within 14 calendar days of the final session. Include your name, cohort dates, deliverable submission record, and a description of the specific output not delivered.
            </p>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Eligibility conditions:</p>
            <ul className="list-disc pl-6 space-y-1 mb-2" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Attended every live session. No session exceptions apply given the 12-student batch size.</li>
              <li className="font-body">Submitted every session deliverable on time.</li>
              <li className="font-body">Completed both portfolio case studies and the Bolt/v0 prototype.</li>
              <li className="font-body">Claim submitted within 14 calendar days of the final session.</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>This guarantee does not cover:</strong> Employment outcomes, client acquisition, or any outcome beyond the delivery of two portfolio-quality case studies and one functional prototype.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Documented Emergency */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          4. What Counts as a Documented Emergency
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            For guarantee eligibility purposes, a documented emergency is a situation outside your control that genuinely prevents session attendance — such as a medical emergency or bereavement. The following do not qualify as documented emergencies: scheduling conflicts, work commitments, travel, internet outages (except in cases of area-wide prolonged outages), or personal preference.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            If you experience a genuine emergency, email your mentor and{' '}
            <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
            as soon as possible — before the session if feasible. Late notification significantly reduces your ability to maintain guarantee eligibility.
          </p>
        </div>
      </section>

      {/* Section 5: Refund Processing */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          5. Refund Processing
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            All approved refunds are processed within 7 working days of written confirmation from Designient that the refund has been approved.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Refunds are issued to the original payment method:
          </p>
          <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--text-secondary)' }}>
            <li className="font-body"><strong>Razorpay payments:</strong> refunded to the original card, UPI account, or bank account used at checkout.</li>
            <li className="font-body"><strong>PayPal payments:</strong> refunded to the original PayPal account.</li>
            <li className="font-body"><strong>EMI payments:</strong> refunds on EMI transactions are subject to Razorpay&apos;s EMI refund process. The refund amount reflects the total paid to date, not the full EMI plan value. Confirm exact terms with Razorpay at the time of the refund.</li>
          </ul>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Booking tokens are deducted before any refund calculation. The booking token amount is never included in any refund.
          </p>
        </div>
      </section>

      {/* Section 6: Alumni Discounts */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          6. Alumni Discounts
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Alumni discounts (Bootcamp → Pro: Rs 2,000 / Pro → AI Product Design: Rs 5,000 / Master → AI Product Design: Rs 5,000) are applied to the invoice before payment is made. Once applied and the course fee is paid, the discount amount is not separately refundable — it is factored into the total fee for all refund calculations.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Alumni discounts are not stackable with early bird pricing or any other discount. One discount per enrollment. Non-transferable.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            To claim an alumni discount, email{' '}
            <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
            with your completion certificate attached before applying for the relevant course.
          </p>
        </div>
      </section>

      {/* Section 7: Team Enrollment */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          7. Team Enrollment Cancellation (AI Automation Accelerator)
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Team enrollment cancellation requests must be submitted in writing by the designated company contact to{' '}
            <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong>14 or more calendar days before cohort start:</strong> Full team fee refundable minus a Rs 2,000 administrative processing fee per confirmed seat.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong>Less than 14 calendar days before cohort start:</strong> No refund available.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Individual team members may not cancel independently. All cancellation decisions are made at the company level by the designated company contact.
          </p>
        </div>
      </section>

      {/* Section 8: Course Discontinuation */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          8. Course Discontinuation
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong>Prompt Engineering Mastery</strong> has been discontinued. If you enrolled in a future cohort of this course that has not yet started, you are entitled to a full refund of all fees paid including the booking token. Email{' '}
            <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
            with subject line: Prompt Engineering Mastery Refund Request.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            If you were enrolled in an active cohort at the time of discontinuation, you will be contacted directly by Designient with options.
          </p>
        </div>
      </section>

      {/* Section 9: Free Workshops */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          9. Free Workshops
        </h2>
        <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          AI Automation Live and AI Product Design Live are free workshops. No fee is charged. No refund policy applies. Designient may cancel, reschedule, or discontinue these workshops at any time. Cancellation of a free workshop does not create any liability for Designient.
        </p>
      </section>

      {/* How to Submit */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          How to Submit a Refund or Cancellation Request
        </h2>
        <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-subtle)' }}>
          <p className="font-body mb-2" style={{ color: 'var(--text-primary)' }}>
            <strong>Email:</strong>{' '}
            <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>
          </p>
          <p className="font-body mb-2" style={{ color: 'var(--text-primary)' }}>
            <strong>Subject line format:</strong> [Course Name] — [Refund / Cancellation / Guarantee Claim]
          </p>
          <p className="font-body mb-2" style={{ color: 'var(--text-primary)' }}>Include in your email:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
            <li className="font-body">Your full name</li>
            <li className="font-body">Course name and cohort start date</li>
            <li className="font-body">Reason for request (cancellation, pre-start withdrawal, or guarantee claim)</li>
            <li className="font-body">For guarantee claims: your deliverable submission record and a description of the specific output that was not delivered</li>
          </ul>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We will acknowledge your request within 2 working days and confirm the outcome within 7 working days.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          FAQ
        </h2>
        <div className="space-y-6">
          <div>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Can I switch to a different course instead of getting a refund?</p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              In some cases, yes. If you wish to transfer your enrollment to a different course rather than receiving a refund, contact{' '}
              <Link href="mailto:hello@designient.com" className={courseLinkClass}>hello@designient.com</Link>{' '}
              before the cohort starts. Course switches are handled case by case and depend on seat availability in the target cohort. Any price difference between courses is either charged or credited accordingly. Booking tokens paid for the original course are applied to the new course where possible.
            </p>
          </div>
          <div>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>What if Designient cancels my cohort?</p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              If Designient cancels a cohort before it starts, you will be offered either a full refund of all fees paid (including the booking token) or a transfer to the next available cohort of the same course at the same price. If you choose the cohort transfer, no additional fee is charged even if prices have changed.
            </p>
          </div>
          <div>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>What if the course content changes significantly after I enroll?</p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Material changes to a course that affect its advertised learning outcomes will be communicated at least 14 calendar days in advance. If you consider the change to fundamentally alter what you enrolled in, you may submit a written refund request within 7 calendar days of the change notification. These requests are reviewed case by case.
            </p>
          </div>
          <div>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>I paid via EMI. How does the refund work?</p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              EMI refunds reflect the amount paid to date, not the full EMI plan value. If you have paid 2 of 3 instalments and are eligible for a refund, the refund is calculated on the 2 instalments received. The third instalment, if not yet due, is cancelled. Confirm exact mechanics with Razorpay as EMI refund timelines vary by card issuer.
            </p>
          </div>
          <div>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>I used the booking token transfer option. Can I transfer again?</p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              No. The cohort transfer is available one time only per enrollment. If you cannot attend the transferred cohort, the booking token is forfeited with no further options.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
