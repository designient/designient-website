import Link from 'next/link'

const tableClass = 'w-full text-sm border-collapse my-4'
const thClass = 'font-body font-semibold text-left p-3 border'
const tdClass = 'font-body p-3 border align-top'

const tableStyle = { borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }
const thStyle = { ...tableStyle, backgroundColor: 'var(--bg-subtle)', color: 'var(--text-primary)' }
const linkClass = 'text-[var(--color-primary)] underline hover:no-underline'

export function PrivacyPolicyUpdatedSections() {
  return (
    <>
      {/* Section 1: Data We Collect */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          1. Data We Collect
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>1.1 Data Collected Through Course Inquiry and Application Forms</h3>
            <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              When you submit an inquiry, application, or consultation request through designient.com, we collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Full name</li>
              <li className="font-body">Email address</li>
              <li className="font-body">Phone number (including country code)</li>
              <li className="font-body">WhatsApp number (including country code)</li>
              <li className="font-body">Course interest (selected from the current course catalog)</li>
              <li className="font-body">Any additional information you voluntarily provide in free-text fields</li>
            </ul>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              This data is collected through forms at the following locations:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Homepage inquiry form (<Link href="/" className={linkClass}>/</Link>)</li>
              <li className="font-body">Apply Now page (<Link href="/apply-now" className={linkClass}>/apply-now</Link>)</li>
              <li className="font-body">
                Individual course pages (
                <Link href="/ui-ux-design-bootcamp" className={linkClass}>/ui-ux-design-bootcamp</Link>,{' '}
                <Link href="/ui-ux-design-pro" className={linkClass}>/ui-ux-design-pro</Link>,{' '}
                <Link href="/ui-ux-design-master" className={linkClass}>/ui-ux-design-master</Link>,{' '}
                <Link href="/courses" className={linkClass}>/ai-automation-accelerator</Link>,{' '}
                <Link href="/courses" className={linkClass}>/ai-product-design-course</Link>)
              </li>
              <li className="font-body">Contact page (<Link href="/contact-us" className={linkClass}>/contact-us</Link>)</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              This data is submitted to Designient&apos;s API (<code>/api/inquiry</code>, <code>/api/apply</code>, <code>/api/contact</code>) and synced to our CRM (HubSpot) and email service (Resend). See Section 3 for details on these third-party processors.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>1.2 Data Collected Through Free Workshop Registration</h3>
            <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              Designient offers free monthly workshops — AI Automation Live and AI Product Design Live. When you register for a free workshop, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Full name</li>
              <li className="font-body">Email address</li>
              <li className="font-body">Phone number (optional)</li>
              <li className="font-body">Workshop selected</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              This data is used to send you workshop confirmation details, reminders, and follow-up communications related to the workshop topic. It is not used to enroll you in any paid course without your explicit consent. You may be added to our marketing communications list as a result of workshop registration — you can unsubscribe at any time using the link in any email we send.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>1.3 Data Collected Through Newsletter Subscription</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              When you subscribe to the Designient newsletter via the footer form (<code>/api/newsletter/subscribe</code>), we collect your email address. This is used solely for newsletter communications. You may unsubscribe at any time.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>1.4 Data Collected Through Team Enrollment Inquiries</h3>
            <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              When a company submits a team enrollment inquiry for the AI Automation Accelerator via{' '}
              <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>{' '}
              or the corporate inquiry form (<Link href="/corporates" className={linkClass}>/corporates</Link>), we collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Company name</li>
              <li className="font-body">Contact person name and email address</li>
              <li className="font-body">Phone number</li>
              <li className="font-body">Team size and relevant details provided in the inquiry</li>
            </ul>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              This data is used solely to process the team enrollment inquiry, communicate with the relevant company contact, prepare enrollment agreements, and issue invoices. We do not use company contact data for marketing purposes unless the contact has separately subscribed to marketing communications.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Individual employee data (names, email addresses) of team members enrolled through a corporate team enrollment is collected at enrollment and used in the same way as individual course enrollment data under Section 1.1.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>1.5 Data Collected During Course Delivery</h3>
            <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              Once enrolled, additional data is collected in connection with course delivery:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Session attendance records</li>
              <li className="font-body">Deliverable submission records (used to assess guarantee eligibility)</li>
              <li className="font-body">Feedback submitted during live sessions</li>
              <li className="font-body">Communication records between students and mentors via the course platform</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              This data is held for the duration of the course and for a period of 12 months after course completion, after which it is anonymised or deleted except where required for legal or accounting purposes.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>1.6 Data Collected Through the Designient Workspace (app.designient.com)</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The Designient student workspace at app.designient.com collects data related to cohort management, assignment submissions, and mentorship interactions. The privacy practices of the workspace platform are governed separately. Students are directed to the relevant privacy terms at the point of workspace account creation.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>1.7 Cookies and Analytics</h3>
            <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              Designient uses Google Tag Manager and Meta Pixel on designient.com for analytics and advertising purposes. These tools may collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Pages visited and time spent</li>
              <li className="font-body">Referral source</li>
              <li className="font-body">Device and browser type</li>
              <li className="font-body">IP address (anonymised where applicable)</li>
              <li className="font-body">Interaction data (button clicks, form submissions — not form content)</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              You can manage cookie preferences through your browser settings. A cookie consent mechanism is implemented on designient.com. Refusing analytics cookies does not affect your ability to use the website or submit any form.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: How We Use Your Data */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          2. How We Use Your Data
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>2.1 Course Inquiry and Application Data</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>We use inquiry and application data to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Respond to your inquiry or consultation request</li>
              <li className="font-body">Assess your application for application-based courses (UI UX Design Pro, UI UX Design Master, AI Product Design Course)</li>
              <li className="font-body">Send you enrollment offers, cohort information, and payment instructions</li>
              <li className="font-body">Communicate course updates, schedule changes, and mentor assignments</li>
              <li className="font-body">Send relevant marketing communications about Designient courses (you may unsubscribe at any time)</li>
              <li className="font-body">Sync your contact record to HubSpot for CRM and follow-up management</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We do not use inquiry or application data to make automated decisions about your eligibility for any course. Application reviews are conducted by human Designient staff.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>2.2 Workshop Registration Data</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>We use workshop registration data to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Send workshop confirmation and access details</li>
              <li className="font-body">Send reminders before the workshop</li>
              <li className="font-body">Send follow-up content related to the workshop topic</li>
              <li className="font-body">Add you to our general marketing list (unsubscribe available in every email)</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We do not share workshop registration data with any third party other than our email service provider (Resend) and CRM (HubSpot) for the purpose of sending the communications above.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>2.3 Team Enrollment Data</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>We use team enrollment data to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Process and respond to the enrollment inquiry</li>
              <li className="font-body">Prepare and issue team enrollment agreements and invoices</li>
              <li className="font-body">Communicate with the designated company contact regarding cohort logistics</li>
              <li className="font-body">Issue certificates and completion records for enrolled team members</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We do not use team enrollment company data for marketing purposes unless separately consented to.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>2.4 Course Delivery Data</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>We use course delivery data to:</p>
            <ul className="list-disc pl-6 space-y-1" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Manage attendance and deliverable records</li>
              <li className="font-body">
                Assess guarantee eligibility under{' '}
                <Link href="/terms-and-conditions" className={linkClass}>Section 6 of our Terms and Conditions</Link>
              </li>
              <li className="font-body">Provide mentor feedback and course administration</li>
              <li className="font-body">Issue certificates and diplomas on completion</li>
              <li className="font-body">Conduct internal quality review of course delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Third-Party Tools and Services */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          3. Third-Party Tools and Services
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>3.1 Tools Used by Designient to Deliver Services</h3>
            <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              The following third-party tools are used by Designient in delivering its services. Data processed by these tools is subject to their respective privacy policies.
            </p>
            <div className="overflow-x-auto">
              <table className={tableClass} style={tableStyle}>
                <thead>
                  <tr>
                    <th className={thClass} style={thStyle}>Tool</th>
                    <th className={thClass} style={thStyle}>Purpose</th>
                    <th className={thClass} style={thStyle}>Data processed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass} style={tableStyle}>HubSpot</td>
                    <td className={tdClass} style={tableStyle}>CRM and lead management</td>
                    <td className={tdClass} style={tableStyle}>Name, email, phone, WhatsApp, course interest</td>
                  </tr>
                  <tr>
                    <td className={tdClass} style={tableStyle}>Resend</td>
                    <td className={tdClass} style={tableStyle}>Transactional email delivery</td>
                    <td className={tdClass} style={tableStyle}>Name, email address</td>
                  </tr>
                  <tr>
                    <td className={tdClass} style={tableStyle}>Razorpay</td>
                    <td className={tdClass} style={tableStyle}>Payment processing (India)</td>
                    <td className={tdClass} style={tableStyle}>Payment data — Designient does not store card details</td>
                  </tr>
                  <tr>
                    <td className={tdClass} style={tableStyle}>PayPal</td>
                    <td className={tdClass} style={tableStyle}>Payment processing (international)</td>
                    <td className={tdClass} style={tableStyle}>Payment data — Designient does not store card details</td>
                  </tr>
                  <tr>
                    <td className={tdClass} style={tableStyle}>Google Tag Manager</td>
                    <td className={tdClass} style={tableStyle}>Analytics tag management</td>
                    <td className={tdClass} style={tableStyle}>Anonymised usage data</td>
                  </tr>
                  <tr>
                    <td className={tdClass} style={tableStyle}>Meta Pixel</td>
                    <td className={tdClass} style={tableStyle}>Advertising analytics</td>
                    <td className={tdClass} style={tableStyle}>Anonymised usage data</td>
                  </tr>
                  <tr>
                    <td className={tdClass} style={tableStyle}>Google Analytics (if implemented)</td>
                    <td className={tdClass} style={tableStyle}>Website analytics</td>
                    <td className={tdClass} style={tableStyle}>Anonymised usage data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>3.2 Third-Party Tools Students Are Required to Use During Courses</h3>
            <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              As part of their course curriculum, students are required to create accounts with and use third-party tools. These accounts are created by the student independently. Designient does not hold, access, or control the student&apos;s credentials for these tools, and is not responsible for the data practices of these third-party platforms.
            </p>
            <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              Students should review the privacy policy of each tool before creating an account.
            </p>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Design Track tools (UI UX Design Bootcamp, Pro, Master):</p>
            <div className="overflow-x-auto mb-6">
              <table className={tableClass} style={tableStyle}>
                <thead>
                  <tr>
                    <th className={thClass} style={thStyle}>Tool</th>
                    <th className={thClass} style={thStyle}>Privacy Policy URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={tdClass} style={tableStyle}>Figma</td><td className={tdClass} style={tableStyle}><a href="https://www.figma.com/legal/privacy/" className={linkClass} target="_blank" rel="noopener noreferrer">figma.com/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Bolt</td><td className={tdClass} style={tableStyle}><a href="https://bolt.new" className={linkClass} target="_blank" rel="noopener noreferrer">bolt.new</a> (refer to their current privacy policy)</td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Perplexity</td><td className={tdClass} style={tableStyle}><a href="https://www.perplexity.ai/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">perplexity.ai/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Claude (Anthropic)</td><td className={tdClass} style={tableStyle}><a href="https://www.anthropic.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">anthropic.com/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>FigJam AI (Figma)</td><td className={tdClass} style={tableStyle}><a href="https://www.figma.com/legal/privacy/" className={linkClass} target="_blank" rel="noopener noreferrer">figma.com/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Google Workspace</td><td className={tdClass} style={tableStyle}><a href="https://policies.google.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></td></tr>
                </tbody>
              </table>
            </div>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>AI Track tools (AI Automation Accelerator):</p>
            <div className="overflow-x-auto mb-6">
              <table className={tableClass} style={tableStyle}>
                <thead>
                  <tr>
                    <th className={thClass} style={thStyle}>Tool</th>
                    <th className={thClass} style={thStyle}>Privacy Policy URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={tdClass} style={tableStyle}>Zapier</td><td className={tdClass} style={tableStyle}><a href="https://zapier.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">zapier.com/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>n8n</td><td className={tdClass} style={tableStyle}><a href="https://n8n.io/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">n8n.io/privacy</a> (self-hosted version has no n8n data access)</td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Make (formerly Integromat)</td><td className={tdClass} style={tableStyle}><a href="https://www.make.com/en/privacy-notice" className={linkClass} target="_blank" rel="noopener noreferrer">make.com/en/privacy-notice</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Airtable</td><td className={tdClass} style={tableStyle}><a href="https://www.airtable.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">airtable.com/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>ManyChat</td><td className={tdClass} style={tableStyle}><a href="https://manychat.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">manychat.com/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Relevance AI</td><td className={tdClass} style={tableStyle}><a href="https://relevanceai.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">relevanceai.com/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Claude API (Anthropic)</td><td className={tdClass} style={tableStyle}><a href="https://www.anthropic.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">anthropic.com/privacy</a></td></tr>
                </tbody>
              </table>
            </div>
            <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>AI Track tools (AI Product Design Course):</p>
            <div className="overflow-x-auto">
              <table className={tableClass} style={tableStyle}>
                <thead>
                  <tr>
                    <th className={thClass} style={thStyle}>Tool</th>
                    <th className={thClass} style={thStyle}>Privacy Policy URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={tdClass} style={tableStyle}>Perplexity</td><td className={tdClass} style={tableStyle}><a href="https://www.perplexity.ai/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">perplexity.ai/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Claude (Anthropic)</td><td className={tdClass} style={tableStyle}><a href="https://www.anthropic.com/privacy" className={linkClass} target="_blank" rel="noopener noreferrer">anthropic.com/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>FigJam AI (Figma)</td><td className={tdClass} style={tableStyle}><a href="https://www.figma.com/legal/privacy/" className={linkClass} target="_blank" rel="noopener noreferrer">figma.com/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Figma</td><td className={tdClass} style={tableStyle}><a href="https://www.figma.com/legal/privacy/" className={linkClass} target="_blank" rel="noopener noreferrer">figma.com/privacy</a></td></tr>
                  <tr><td className={tdClass} style={tableStyle}>Bolt or v0.dev</td><td className={tdClass} style={tableStyle}>Refer to current privacy policies at <a href="https://bolt.new" className={linkClass} target="_blank" rel="noopener noreferrer">bolt.new</a> and <a href="https://v0.dev" className={linkClass} target="_blank" rel="noopener noreferrer">v0.dev</a></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>3.3 API Usage Costs and Student Accounts</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Some tools used in the AI Automation Accelerator and AI Product Design Course — specifically the Claude API — are paid services that students access on their own accounts. API usage costs are the student&apos;s own responsibility. Designient does not reimburse or subsidise API costs. Indicative usage costs are provided in course materials to help students budget. Designient is not responsible for any unexpected charges arising from the student&apos;s use of these APIs.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>3.4 Self-Hosted n8n</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Students in the AI Automation Accelerator who choose to self-host n8n on a third-party VPS (Virtual Private Server) — as guided by the n8n Self-Hosting bonus resource — are responsible for the security and data practices of their own server environment. Designient provides guidance as an educational resource only. Designient has no access to, and is not responsible for, any data stored on a student&apos;s self-hosted n8n instance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Student-Built Automation Systems */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          4. Student-Built Automation Systems
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>4.1 Data Collected by Student-Built Workflows</h3>
            <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              Students enrolled in the AI Automation Accelerator build automation workflows that may collect, process, and store data from third parties — for example, a WhatsApp lead qualification workflow that receives messages from prospective clients, or an internal operations workflow that processes employee or customer data.
            </p>
            <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              These automation systems are built and operated by the student independently. Designient has no access to, and is not responsible for, the data collected, processed, or stored by student-built automation workflows.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              Students who build automation workflows that collect personal data from third parties are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="font-body">Ensuring they have a lawful basis for collecting that data under applicable law (including India&apos;s Digital Personal Data Protection Act 2023 where applicable)</li>
              <li className="font-body">Informing individuals whose data is collected about how it will be used</li>
              <li className="font-body">Securing the automation system and any data it stores</li>
              <li className="font-body">Complying with data retention and deletion obligations</li>
            </ul>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Designient&apos;s curriculum includes responsible data handling guidance as part of the AI Automation Accelerator. This guidance is educational in nature and does not constitute legal advice.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>4.2 ManyChat and WhatsApp Business API</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Students who build ManyChat-based WhatsApp automation workflows during the AI Automation Accelerator create their own ManyChat accounts and connect them to their own WhatsApp Business accounts. Data collected through these workflows (including messages received from end users) is held in the student&apos;s ManyChat account, not by Designient. Students are responsible for complying with WhatsApp&apos;s Business Policy and ManyChat&apos;s terms of service when using these tools.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export function PrivacyPolicyRetentionAndRights() {
  return (
    <>
      {/* Section 5: Data Retention */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          5. Data Retention
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>5.1 Inquiry and Application Data</h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
              Inquiry data for individuals who do not enroll in a course is retained for 24 months from the date of inquiry, after which it is deleted from our CRM. You may request deletion at any time by emailing{' '}
              <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Inquiry data for individuals who enroll is retained as part of the enrollment record.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>5.2 Enrollment and Course Records</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Enrollment records, payment records, attendance records, and certificates are retained for 7 years from the date of course completion for accounting and legal compliance purposes. Certificate issuance records are retained indefinitely to support the certificate verification service at{' '}
              <Link href="/verify" className={linkClass}>/verify</Link>.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>5.3 Workshop Registration Data</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Workshop registration data is retained for 12 months from the date of registration. If you are added to our general marketing list as a result of workshop registration, your email address remains on that list until you unsubscribe.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>5.4 Team Enrollment Records</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Company-level team enrollment records and invoices are retained for 7 years from the date of the enrollment agreement for accounting and legal compliance purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Your Rights */}
      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }}>
          6. Your Rights
        </h2>
        <div className="space-y-4">
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            You have the following rights regarding your personal data held by Designient:
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong>Right of access:</strong> You may request a copy of the personal data we hold about you.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong>Right to correction:</strong> You may request correction of inaccurate personal data.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong>Right to deletion:</strong> You may request deletion of your personal data, subject to retention obligations under Section 5 and applicable law. Deletion requests relating to enrollment or payment records that we are legally required to retain will be partially fulfilled — we will anonymise data where possible while retaining the minimum required for legal compliance.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong>Right to withdraw consent for marketing:</strong> You may unsubscribe from marketing communications at any time using the unsubscribe link in any email or by emailing{' '}
            <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong>Right to data portability:</strong> You may request a machine-readable copy of personal data you have provided to us.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            To exercise any of these rights, email{' '}
            <Link href="mailto:hello@designient.com" className={linkClass}>hello@designient.com</Link>{' '}
            with the subject line: Privacy Request — [Right You Are Exercising]. We will respond within 30 calendar days.
          </p>
        </div>
      </section>
    </>
  )
}
