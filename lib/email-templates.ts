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
  const subject = `We received your message – ${SITE_NAME}`
  const text = `Hi ${name},\n\nThank you for reaching out. We've received your message and will get back to you within 24 business hours.\n\nBest,\n${SITE_NAME}`
  const html = wrapHtml(
    subject,
    `<h2 style="color: #8458B3;">Thank you for contacting us</h2>
     <p>Hi ${name},</p>
     <p>We've received your message and will get back to you within 24 business hours.</p>
     <p>Best,<br><strong>${SITE_NAME}</strong></p>`
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
  const subject = `We received your interest – ${SITE_NAME}`
  const text = `Hi ${data.name},\n\nThank you for your interest in our courses. Our team will reach out within 24 business hours with next steps.\n\nBest,\n${SITE_NAME}`
  const html = wrapHtml(
    subject,
    `<h2 style="color: #8458B3;">Thanks for your interest</h2>
     <p>Hi ${data.name},</p>
     <p>We've received your inquiry. Our team will reach out within 24 business hours with next steps.</p>
     <p>Best,<br><strong>${SITE_NAME}</strong></p>`
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
  const subject = `Application received – ${SITE_NAME}`
  const text = `Hi ${data.fullName},\n\nWe've received your application for ${data.program || 'our course'}. We'll review it and get back to you within 24 hours with next steps, including how to book your counselling call.\n\nBest,\n${SITE_NAME}`
  const html = wrapHtml(
    subject,
    `<h2 style="color: #8458B3;">Application received</h2>
     <p>Hi ${data.fullName},</p>
     <p>We've received your application for <strong>${data.program || 'our course'}</strong>. We'll review it and get back to you within 24 hours with next steps, including how to book your counselling call.</p>
     <p>Best,<br><strong>${SITE_NAME}</strong></p>`
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
  const subject = `Application received – ${SITE_NAME} Careers`
  const text = `Hi ${data.fullName},\n\nThank you for applying for ${data.roleName || 'a role'} at ${SITE_NAME}. We've received your application and will review it soon. We'll get back to you if there's a fit.\n\nBest,\n${SITE_NAME} Team`
  const html = wrapHtml(
    subject,
    `<h2 style="color: #8458B3;">Application received</h2>
     <p>Hi ${data.fullName},</p>
     <p>Thank you for applying for <strong>${data.roleName || 'a role'}</strong> at ${SITE_NAME}. We've received your application and will review it soon. We'll get back to you if there's a fit.</p>
     <p>Best,<br><strong>${SITE_NAME} Team</strong></p>`
  )
  return { subject, text, html }
}
