import Link from 'next/link'
import {
  LEGAL_LAST_UPDATED,
  REGISTERED_OFFICE_ADDRESS,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  SUPPORT_PHONE_HREF,
} from '../../lib/siteLegal'

const h2Style = { fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', color: 'var(--color-primary)' }
const bodyStyle = { color: 'var(--text-secondary)' }
const linkClass = 'text-[var(--color-primary)] underline hover:no-underline'

export function ShippingDeliveryPolicyContent() {
  return (
    <>
      <section className="mb-10">
        <h2 className="font-display font-bold mb-4" style={h2Style}>
          We Are a Digital-Only Education Platform
        </h2>
        <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
          Designient School of Masterminds offers only digital services — live online courses, free workshops, and
          digital course materials. We do not sell, ship, or deliver any physical product. No courier, postal service, or
          physical shipment is involved in any Designient purchase.
        </p>
        <p className="font-body leading-relaxed" style={bodyStyle}>
          This policy exists to explain how and when you receive what you have paid for, and to satisfy Razorpay&apos;s
          requirement that all merchants clearly state their delivery terms regardless of whether goods are physical or
          digital.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          How Delivery Works for Each Product
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-display font-semibold mb-2 text-lg" style={{ color: 'var(--text-primary)' }}>
              Open Checkout Courses — UI UX Design Bootcamp and AI Automation Accelerator
            </h3>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              After your payment is confirmed by Razorpay, Designient will send a course enrollment confirmation to your
              registered email address within 24 hours. This confirmation includes your cohort start date, the Zoom
              session link, and instructions for accessing any pre-course materials.
            </p>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Delivery timeline:</strong> within 24 hours of successful
              payment.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-2 text-lg" style={{ color: 'var(--text-primary)' }}>
              Application-Based Courses — UI UX Design Pro, UI UX Design Master, AI Product Design Course
            </h3>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              After you submit an application, Designient reviews your application and sends a written enrollment offer by
              email within 48 hours. Upon payment of the Booking Token, your seat is confirmed and a confirmation email is
              sent within 24 hours containing your cohort dates and Zoom session link.
            </p>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Delivery timeline:</strong> enrollment offer within 48 hours
              of application. Seat confirmation within 24 hours of Booking Token payment.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-2 text-lg" style={{ color: 'var(--text-primary)' }}>
              Free Workshops — AI Automation Live and AI Product Design Live
            </h3>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              After you register for a free workshop, a confirmation email containing the Zoom session link is sent to
              your registered email address immediately upon registration. A reminder email is sent 24 hours before the
              session.
            </p>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Delivery timeline:</strong> Zoom link delivered immediately
              upon registration.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-2 text-lg" style={{ color: 'var(--text-primary)' }}>
              Digital Bonus Materials — Figma Files, n8n Workflow Templates, Notion Templates, Session Recordings
            </h3>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              Bonus materials and session recordings are delivered by email to your registered email address within 24
              hours of the relevant session. Specific delivery timelines for each bonus are communicated in the course
              welcome email.
            </p>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Delivery timeline:</strong> within 24 hours of the relevant
              session.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-2 text-lg" style={{ color: 'var(--text-primary)' }}>
              Certificates and Diplomas
            </h3>
            <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
              Certificates and diplomas are issued digitally by email within 7 working days of course completion and final
              presentation. Certificates include a unique verification hash code that can be verified at{' '}
              <Link href="/verify" className={linkClass}>designient.com/verify</Link>.
            </p>
            <p className="font-body leading-relaxed" style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Delivery timeline:</strong> within 7 working days of course
              completion.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display font-bold mb-4" style={h2Style}>
          If You Have Not Received Your Confirmation
        </h2>
        <p className="font-body leading-relaxed" style={bodyStyle}>
          If you have completed payment and have not received a confirmation email within the stated timeline, please check
          your spam or junk folder first. If the email is not there, contact us at{' '}
          <Link href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</Link> with your name, the course you
          enrolled in, and your payment reference number. We will resolve the issue within 1 working day.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display font-bold mb-4" style={h2Style}>
          Contact
        </h2>
        <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-subtle)' }}>
          <p className="font-body mb-2" style={bodyStyle}>
            <strong>Email:</strong>{' '}
            <Link href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</Link>
          </p>
          <p className="font-body mb-2" style={bodyStyle}>
            <strong>Phone:</strong>{' '}
            <a href={SUPPORT_PHONE_HREF} className={linkClass}>{SUPPORT_PHONE}</a>
          </p>
          <p className="font-body" style={bodyStyle}>
            <strong>Response time:</strong> Within 1 working day for delivery queries.
          </p>
        </div>
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
