/**
 * Email templates for form submissions.
 * Edit this file to change:
 * - Lead email (sent to internal team: admissions/sales/HR)
 * - Customer copy (confirmation sent to the person who submitted)
 */

const SITE_NAME = 'Designient School of Masterminds'
const SITE_URL = 'https://designient.com'
const FOOTER_LOCATION = 'Hyderabad | Bengaluru | Pune'

/** Wraps HTML body with a simple layout (optional – edit for branding) */
function wrapHtml(title: string, body: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>${title}</title></head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
  ${body}
  <p style="margin-top: 24px; font-size: 12px; color: #6b7280;">${SITE_NAME} · ${FOOTER_LOCATION}<br><a href="mailto:admissions@designient.com" style="color: #8458B3; text-decoration: none;">admissions@designient.com</a> · <a href="${SITE_URL}" style="color: #8458B3; text-decoration: none;">${SITE_URL}</a></p>
</body>
</html>
  `.trim()
}

// ─── Contact form ───────────────────────────────────────────────────────────

export interface ContactFormData {
  fullName?: string
  name?: string
  email: string
  phone?: string
  reason?: string
  message: string
}

export function contactLeadEmail(data: ContactFormData) {
  const name = (data.fullName ?? data.name ?? '').trim() || '—'
  const subject = `Contact form: ${data.reason || 'General'} – ${name}`
  const message = data.message ?? ''
  const text = `Name: ${name}\nEmail: ${data.email}\nPhone: ${data.phone || '—'}\nReason: ${data.reason || '—'}\n\nMessage:\n${message}`
  const html = wrapHtml(
    subject,
    `<h2 style="color: #8458B3;">New contact submission</h2>
     <p><strong>Name:</strong> ${name}</p>
     <p><strong>Email:</strong> ${data.email}</p>
     <p><strong>Phone:</strong> ${data.phone || '—'}</p>
     <p><strong>Reason:</strong> ${data.reason || '—'}</p>
     <p><strong>Message:</strong></p>
     <p>${String(message).replace(/\n/g, '<br>')}</p>`
  )
  return { subject, text, html }
}

export function contactCustomerCopy(data: ContactFormData) {
  const name = (data.fullName ?? data.name ?? '').trim() || 'there'
  const subject = `We’ve received your message – ${SITE_NAME}`
  const text = `Hi ${name},\n\nThanks for getting in touch with us. We’ve received your message and one of our team members will personally review it.\n\nYou can expect to hear back from us within 24 business hours.\n\nIf you’d like a quicker conversation, you can directly connect with our team here:\nChat on WhatsApp: https://wa.me/919353000320\n\nBest,\n${SITE_NAME}`
  const html = wrapHtml(
    subject,
    `<table width="100%" style="max-width:600px;margin:auto;font-family:system-ui,sans-serif;">
      <tr><td>
        <img src="https://designient.com/designient-official.png" width="140" alt="Designient" style="margin-bottom:16px;">
        <h2 style="color:#8458B3;">Thanks for reaching out to Designient</h2>
        <p>Hi ${name},</p>
        <p>
          Thanks for getting in touch with us.  
          We’ve received your message and one of our team members will personally review it.
        </p>
        <p>
          You can expect to hear back from us within <strong>24 business hours</strong>.
        </p>
        <p>
          If you’d like a quicker conversation, you can directly connect with our team here:
        </p>
        <p>
          👉 <a href="https://wa.me/919353000320" style="color: #8458B3; text-decoration: underline;">Chat on WhatsApp</a>
        </p>
        <p>
          Best,<br>
          <strong>${SITE_NAME}</strong>
        </p>
      </td></tr>
    </table>`
  )
  return { subject, text, html }
}

// ─── Inquiry form (course interest) ──────────────────────────────────────────

export interface InquiryFormData {
  name: string
  email: string
  phone?: string
  phoneCountryCode?: string
  whatsapp?: string
  whatsappCountryCode?: string
  courseInterest?: string
}

export function inquiryLeadEmail(data: InquiryFormData) {
  const phoneFull = data.phone ? `${data.phoneCountryCode || ''} ${data.phone}`.trim() : '—'
  const whatsappFull = data.whatsapp ? `${data.whatsappCountryCode || ''} ${data.whatsapp}`.trim() : '—'
  const subject = `Course inquiry – ${data.name}`
  const text = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${phoneFull}\nWhatsApp: ${whatsappFull}\nCourse interest: ${data.courseInterest || '—'}`
  const html = wrapHtml(
    subject,
    `<h2 style="color: #8458B3;">New course inquiry</h2>
     <p><strong>Name:</strong> ${data.name}</p>
     <p><strong>Email:</strong> ${data.email}</p>
     <p><strong>Phone:</strong> ${phoneFull}</p>
     <p><strong>WhatsApp:</strong> ${whatsappFull}</p>
     <p><strong>Course interest:</strong> ${data.courseInterest || '—'}</p>`
  )
  return { subject, text, html }
}

export function inquiryCustomerCopy(data: InquiryFormData) {
  const subject = `Thanks for your interest – ${SITE_NAME}`
  const text = `Hi ${data.name},\n\nWe’ve received your inquiry and our admissions team will reach out to you shortly.\n\nTo understand our programs, mentorship approach and outcomes clearly, you can book a short demo and counselling call here: https://calendar.app.google/7YJuPUwR2EfdWr8Q8\n\nYou may also explore our programs here: https://designient.com\n\nOr speak to us instantly:\nChat on WhatsApp: https://wa.me/919353000320\n\nWe usually respond within 24 business hours.\n\nBest,\n${SITE_NAME}`
  const html = wrapHtml(
    subject,
    `<table width="100%" style="max-width:600px;margin:auto;font-family:system-ui,sans-serif;">
      <tr><td>
        <img src="https://designient.com/designient-official.png" width="140" alt="Designient" style="margin-bottom:16px;">
        <h2 style="color:#8458B3;">Thanks for your interest in Designient</h2>
        <p>Hi ${data.name},</p>
        <p>
          We’ve received your inquiry and our admissions team will reach out to you shortly.
        </p>
        <p>
          To understand our programs, mentorship approach and outcomes clearly, you can book
          a short demo and counselling call here:
        </p>
        <p>
          👉 <a href="https://calendar.app.google/7YJuPUwR2EfdWr8Q8" style="color: #8458B3; text-decoration: underline;">
          Book a demo & counselling call
          </a>
        </p>
        <p>
          You may also explore our programs here:
        </p>
        <p>
          👉 <a href="https://designient.com" style="color: #8458B3; text-decoration: underline;">
          View available programs
          </a>
        </p>
        <p>
          Or speak to us instantly:
        </p>
        <p>
          👉 <a href="https://wa.me/919353000320" style="color: #8458B3; text-decoration: underline;">Chat on WhatsApp</a>
        </p>
        <p>
          We usually respond within <strong>24 business hours</strong>.
        </p>
        <p>
          Best,<br>
          <strong>${SITE_NAME}</strong>
        </p>
      </td></tr>
    </table>`
  )
  return { subject, text, html }
}

// ─── Application form (course apply) ─────────────────────────────────────────

export interface ApplyFormData {
  fullName: string
  email: string
  program?: string
  [key: string]: unknown
}

export function applyLeadEmail(data: ApplyFormData) {
  const subject = `Application: ${data.program || 'Course'} – ${data.fullName}`
  const lines = Object.entries(data)
    .filter(([, v]) => v != null && v !== '')
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? (v as string[]).join(', ') : String(v)}`)
  const text = lines.join('\n')
  const html = wrapHtml(
    subject,
    `<h2 style="color: #8458B3;">New course application</h2>
     <pre style="font-family: inherit; white-space: pre-wrap;">${lines.map((l) => l.replace(/</g, '&lt;')).join('\n')}</pre>`
  )
  return { subject, text, html }
}

export function applyCustomerCopy(data: ApplyFormData) {
  const subject = `Your application is received – ${SITE_NAME}`
  const text = `Hi ${data.fullName},\n\nThanks for applying to the ${data.program || 'course'} at Designient.\n\nOur admissions team will carefully review your profile and get back to you within 24 hours with the next steps.\n\nIn the meantime, you can book a short counselling and demo call with our team: https://calendar.app.google/7YJuPUwR2EfdWr8Q8\n\nYou can also explore the complete program details here: https://designient.com\n\nPrefer chatting instead?\nChat on WhatsApp: https://wa.me/919353000320\n\nBest,\n${SITE_NAME}`
  const html = wrapHtml(
    subject,
    `<table width="100%" style="max-width:600px;margin:auto;font-family:system-ui,sans-serif;">
      <tr><td>
        <img src="https://designient.com/designient-official.png" width="140" alt="Designient" style="margin-bottom:16px;">
        <h2 style="color:#8458B3;">Your application has been received</h2>
        <p>Hi ${data.fullName},</p>
        <p>
          Thanks for applying to the <strong>${data.program || 'course'}</strong> at Designient.
        </p>
        <p>
          Our admissions team will carefully review your profile and get back to you within
          <strong>24 hours</strong> with the next steps.
        </p>
        <p>
          In the meantime, you can book a short counselling and demo call with our team:
        </p>
        <p>
          👉 <a href="https://calendar.app.google/7YJuPUwR2EfdWr8Q8" style="color: #8458B3; text-decoration: underline;">
          Book your counselling & demo call
          </a>
        </p>
        <p>
          You can also explore the complete program details here:
        </p>
        <p>
          👉 <a href="https://designient.com" style="color: #8458B3; text-decoration: underline;">
          View full course details
          </a>
        </p>
        <p>
          Prefer chatting instead?
        </p>
        <p>
          👉 <a href="https://wa.me/919353000320" style="color: #8458B3; text-decoration: underline;">Chat on WhatsApp</a>
        </p>
        <p>
          Best,<br>
          <strong>${SITE_NAME}</strong>
        </p>
      </td></tr>
    </table>`
  )
  return { subject, text, html }
}

// ─── Career application form ────────────────────────────────────────────────

export interface CareersApplyFormData {
  fullName: string
  email: string
  phone?: string
  portfolioUrl?: string
  linkedinUrl?: string
  coverLetter?: string
  roleName?: string
}

export function careersLeadEmail(data: CareersApplyFormData) {
  const subject = `Career application: ${data.roleName || 'Role'} – ${data.fullName}`
  const text = `Role: ${data.roleName || '—'}\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || '—'}\nPortfolio: ${data.portfolioUrl || '—'}\nLinkedIn: ${data.linkedinUrl || '—'}\n\nCover letter:\n${data.coverLetter || '—'}`
  const html = wrapHtml(
    subject,
    `<h2 style="color: #8458B3;">New career application</h2>
     <p><strong>Role:</strong> ${data.roleName || '—'}</p>
     <p><strong>Name:</strong> ${data.fullName}</p>
     <p><strong>Email:</strong> ${data.email}</p>
     <p><strong>Phone:</strong> ${data.phone || '—'}</p>
     <p><strong>Portfolio:</strong> ${data.portfolioUrl ? `<a href="${data.portfolioUrl}">${data.portfolioUrl}</a>` : '—'}</p>
     <p><strong>LinkedIn:</strong> ${data.linkedinUrl ? `<a href="${data.linkedinUrl}">${data.linkedinUrl}</a>` : '—'}</p>
     <p><strong>Cover letter:</strong></p>
     <p>${(data.coverLetter || '—').replace(/\n/g, '<br>')}</p>`
  )
  return { subject, text, html }
}

export function careersCustomerCopy(data: CareersApplyFormData) {
  const subject = `Your application is received – ${SITE_NAME} Careers`
  const text = `Hi ${data.fullName},\n\nThank you for applying for the role of ${data.roleName || 'a role'} at ${SITE_NAME}. Our team will review your profile carefully and get in touch if your background matches our current requirements.\n\nDue to the volume of applications, only shortlisted candidates will be contacted.\n\nYou can learn more about Designient here: https://designient.com\n\nBest,\n${SITE_NAME} Team`
  const html = wrapHtml(
    subject,
    `<table width="100%" style="max-width:600px;margin:auto;font-family:system-ui,sans-serif;">
      <tr><td>
        <img src="https://designient.com/designient-official.png" width="140" alt="Designient" style="margin-bottom:16px;">
        <h2 style="color:#8458B3;">Thanks for applying to Designient</h2>
        <p>Hi ${data.fullName},</p>
        <p>
          Thank you for applying for the role of <strong>${data.roleName || 'a role'}</strong> at Designient School of Masterminds.
        </p>
        <p>
          Our team will review your profile carefully and get in touch if your background
          matches our current requirements.
        </p>
        <p>
          Due to the volume of applications, only shortlisted candidates will be contacted.
        </p>
        <p>
          You can learn more about Designient here:
        </p>
        <p>
          👉 <a href="https://designient.com" style="color: #8458B3; text-decoration: underline;">
          Visit Designient website
          </a>
        </p>
        <p>
          Best,<br>
          <strong>${SITE_NAME} Team</strong>
        </p>
      </td></tr>
    </table>`
  )
  return { subject, text, html }
}
