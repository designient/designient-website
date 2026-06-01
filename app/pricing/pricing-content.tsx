import Link from 'next/link'
import type { CoursePricingBlock, EmiRow } from '../../data/pricingPageData'
import {
  aiTrackPricing,
  alumniDiscountRows,
  designTrackPricing,
  freeWorkshopsPricing,
} from '../../data/pricingPageData'
import {
  LEGAL_LAST_UPDATED,
  REGISTERED_OFFICE_ADDRESS,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  SUPPORT_PHONE_HREF,
} from '../../lib/siteLegal'

const tableClass = 'w-full text-sm border-collapse my-4'
const thClass = 'font-body font-semibold text-left p-3 border'
const tdClass = 'font-body p-3 border align-top'
const tableStyle = { borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }
const thStyle = { ...tableStyle, backgroundColor: 'var(--bg-subtle)', color: 'var(--text-primary)' }
const h2Style = { fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary)' }
const bodyStyle = { color: 'var(--text-secondary)' }
const linkClass = 'text-[var(--color-primary)] underline hover:no-underline'

function PricingTable({ tiers }: { tiers: CoursePricingBlock['tiers'] }) {
  return (
    <table className={tableClass} style={tableStyle}>
      <thead>
        <tr>
          <th className={thClass} style={thStyle}>Pricing</th>
          <th className={thClass} style={thStyle}>INR</th>
          <th className={thClass} style={thStyle}>USD</th>
        </tr>
      </thead>
      <tbody>
        {tiers.map((tier) => (
          <tr key={tier.label}>
            <td className={tdClass} style={tableStyle}>{tier.label}</td>
            <td className={tdClass} style={tableStyle}>{tier.inr}</td>
            <td className={tdClass} style={tableStyle}>{tier.usd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function EmiTable({ rows }: { rows: EmiRow[] }) {
  return (
    <table className={tableClass} style={tableStyle}>
      <thead>
        <tr>
          <th className={thClass} style={thStyle}>EMI Plan</th>
          <th className={thClass} style={thStyle}>Early Bird</th>
          <th className={thClass} style={thStyle}>Standard</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.plan}>
            <td className={tdClass} style={tableStyle}>{row.plan}</td>
            <td className={tdClass} style={tableStyle}>{row.earlyBird}</td>
            <td className={tdClass} style={tableStyle}>{row.standard}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function CoursePricingSection({ course }: { course: CoursePricingBlock }) {
  return (
    <article className="mb-12 pb-12 border-b" style={{ borderColor: 'var(--border-default)' }}>
      <div className="flex flex-wrap items-baseline gap-3 mb-2">
        <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
          {course.name}
        </h3>
        {course.badge && (
          <span
            className="font-body text-xs font-semibold px-2 py-1 rounded"
            style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--color-primary)' }}
          >
            {course.badge}
          </span>
        )}
      </div>
      <p className="font-body text-sm mb-1" style={bodyStyle}>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p className="font-body text-sm mb-1" style={bodyStyle}>
        <strong>Level:</strong> {course.level}
      </p>
      <p className="font-body text-sm mb-4" style={bodyStyle}>
        <strong>Enrollment:</strong> {course.enrollment}
      </p>

      <PricingTable tiers={course.tiers} />

      {course.bookingToken && (
        <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
          <strong style={{ color: 'var(--text-primary)' }}>Booking Token:</strong> {course.bookingToken}
        </p>
      )}
      {course.emiNote && (
        <p className="font-body leading-relaxed mb-3" style={bodyStyle}>{course.emiNote}</p>
      )}
      {course.emi && course.emi.length > 0 && (
        <>
          <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
            EMI (zero interest, via Razorpay):
          </p>
          <EmiTable rows={course.emi} />
        </>
      )}

      <p className="font-body leading-relaxed mb-2" style={bodyStyle}>
        <strong style={{ color: 'var(--text-primary)' }}>Pre-start refund:</strong> {course.preStartRefund}
      </p>
      <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
        <strong style={{ color: 'var(--text-primary)' }}>Performance guarantee:</strong> {course.performanceGuarantee}
      </p>

      {course.extraNotes?.map((note) => (
        <p key={note} className="font-body leading-relaxed mb-2" style={bodyStyle}>
          {note}
        </p>
      ))}

      <div className="flex flex-wrap gap-4 mt-4">
        <Link href={course.coursePath} className={`font-body font-semibold ${linkClass}`}>
          View full course →
        </Link>
        <Link href="/cancellation-refund-policy" className={`font-body ${linkClass}`}>
          Refund and Cancellation Policy →
        </Link>
      </div>
    </article>
  )
}

export function PricingPageContent() {
  return (
    <>
      <p className="font-body leading-relaxed mb-8" style={{ ...bodyStyle, fontSize: '1.125rem' }}>
        All prices are inclusive of applicable GST unless otherwise stated. Prices are published in Indian Rupees (INR) and
        US Dollars (USD). USD pricing is available for international students paying via PayPal.
      </p>

      <section className="mb-12">
        <h2 className="font-display font-bold mb-8" style={h2Style}>
          Design Track
        </h2>
        {designTrackPricing.map((course) => (
          <CoursePricingSection key={course.slug} course={course} />
        ))}
      </section>

      <section className="mb-12">
        <h2 className="font-display font-bold mb-8" style={h2Style}>
          AI Track
        </h2>
        {aiTrackPricing.map((course) => (
          <CoursePricingSection key={course.slug} course={course} />
        ))}
      </section>

      <section className="mb-12">
        <h2 className="font-display font-bold mb-6" style={h2Style}>
          Free Workshops
        </h2>
        <div className="space-y-6">
          {freeWorkshopsPricing.map((workshop) => (
            <div key={workshop.name}>
              <h3 className="font-display font-semibold mb-2 text-lg" style={{ color: 'var(--text-primary)' }}>
                {workshop.name} — {workshop.schedule}
              </h3>
              <p className="font-body mb-2" style={bodyStyle}>
                <strong>Duration:</strong> {workshop.duration}
              </p>
              <p className="font-body mb-2" style={bodyStyle}>
                <strong>Price:</strong> Free. No payment required. No obligation to purchase any paid course.
              </p>
              <Link href={workshop.registerHref} className={`font-body font-semibold ${linkClass}`}>
                {workshop.registerLabel} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display font-bold mb-4" style={h2Style}>
          Alumni Discounts
        </h2>
        <table className={tableClass} style={tableStyle}>
          <thead>
            <tr>
              <th className={thClass} style={thStyle}>From</th>
              <th className={thClass} style={thStyle}>To</th>
              <th className={thClass} style={thStyle}>Discount</th>
            </tr>
          </thead>
          <tbody>
            {alumniDiscountRows.map((row) => (
              <tr key={row.from}>
                <td className={tdClass} style={tableStyle}>{row.from}</td>
                <td className={tdClass} style={tableStyle}>{row.to}</td>
                <td className={tdClass} style={tableStyle}>{row.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="font-body leading-relaxed mt-4" style={bodyStyle}>
          Alumni discounts apply to standard prices only. Not combinable with early bird pricing. One discount per
          enrollment. Email <Link href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</Link> with your
          certificate to claim before payment.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-display font-bold mb-4" style={h2Style}>
          Payment Methods
        </h2>
        <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
          <strong style={{ color: 'var(--text-primary)' }}>India:</strong> Razorpay — all major credit cards, debit cards,
          UPI, net banking, and wallets. Zero processing fee. Zero-interest EMI via Razorpay (subject to eligibility).
        </p>
        <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
          <strong style={{ color: 'var(--text-primary)' }}>International:</strong> PayPal — USD prices as listed. PayPal
          handles currency conversion. No additional fees from Designient.
        </p>
        <p className="font-body leading-relaxed" style={bodyStyle}>
          <strong style={{ color: 'var(--text-primary)' }}>GST:</strong> All INR prices are inclusive of applicable GST. A
          tax invoice is issued for every payment. For B2B GST invoices, provide your GSTIN before payment at{' '}
          <Link href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</Link>.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-display font-bold mb-4" style={h2Style}>
          Important Notes
        </h2>
        <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
          All prices are subject to change. The price applicable to you is the price displayed on the course page at the
          time you pay your Booking Token (application-based courses) or at the time of full payment (open checkout
          courses).
        </p>
        <p className="font-body leading-relaxed mb-3" style={bodyStyle}>
          For full terms governing payments, refunds, guarantees, and cancellations, read the complete{' '}
          <Link href="/cancellation-refund-policy" className={linkClass}>Cancellation and Refund Policy</Link> and the{' '}
          <Link href="/terms-and-conditions" className={linkClass}>Terms and Conditions</Link>. For digital delivery
          timelines, see our <Link href="/shipping-delivery" className={linkClass}>Shipping and Delivery Policy</Link>.
        </p>
        <p className="font-body leading-relaxed" style={bodyStyle}>
          For pricing queries, email <Link href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</Link> or
          call <a href={SUPPORT_PHONE_HREF} className={linkClass}>{SUPPORT_PHONE}</a>.
        </p>
      </section>

      <section>
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
