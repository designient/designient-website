import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
import { Resend } from 'resend'
import { inquiryLeadEmail, inquiryCustomerCopy } from '../../../lib/email-templates'
import { getResendFrom } from '../../../lib/resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function jsonError(message: string, status: number) {
  return NextResponse.json({ success: false, error: message }, { status })
}

export async function POST(request: NextRequest) {
  try {
    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return jsonError('Invalid JSON body.', 400)
    }
    const name = body.name as string | undefined
    const email = body.email as string | undefined
    const phone = body.phone as string | undefined
    const phoneCountryCode = body.phoneCountryCode as string | undefined
    const whatsapp = body.whatsapp as string | undefined
    const whatsappCountryCode = body.whatsappCountryCode as string | undefined
    const courseInterest = body.courseInterest as string | undefined

    if (!name?.trim()) {
      return NextResponse.json({ success: false, error: 'Name is required.' }, { status: 400 })
    }
    if (!email?.trim()) {
      return NextResponse.json({ success: false, error: 'Email is required.' }, { status: 400 })
    }

    const to = process.env.EMAIL_INTERNAL_ADMISSIONS
    const from = getResendFrom(process.env.EMAIL_FROM_ADMISSIONS)

    if (!process.env.RESEND_API_KEY || !to) {
      return jsonError('Email not configured.', 500)
    }

    const data = { name: name ?? '', email: email ?? '', phone, phoneCountryCode, whatsapp, whatsappCountryCode, courseInterest }
    const lead = inquiryLeadEmail(data)
    const customer = inquiryCustomerCopy(data)

    const { error: leadError } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: lead.subject,
      text: lead.text,
      html: lead.html,
    })
    if (leadError) {
      console.error('Resend inquiry lead error:', leadError)
      return jsonError(leadError.message || 'Failed to send email.', 500)
    }

    const { error: copyError } = await resend.emails.send({
      from,
      to: [email],
      subject: customer.subject,
      text: customer.text,
      html: customer.html,
    })
    if (copyError) {
      console.error('Resend inquiry customer copy error:', copyError)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request.'
    console.error('Inquiry API error:', err)
    return jsonError(message, 400)
  }
}
