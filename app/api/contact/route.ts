import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
import { Resend } from 'resend'
import { contactLeadEmail, contactCustomerCopy } from '../../../lib/email-templates'
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
    if (!body || typeof body !== 'object') {
      return jsonError('Invalid request body.', 400)
    }
    const fullName = body.fullName as string | undefined
    const name = body.name as string | undefined
    const email = body.email as string | undefined
    const phone = body.phone as string | undefined
    const reason = body.reason as string | undefined
    const message = body.message as string | undefined

    const displayName = fullName ?? name
    if (!displayName?.trim()) {
      return jsonError('Full name is required.', 400)
    }
    if (!email?.trim()) {
      return jsonError('Email is required.', 400)
    }
    if (!message?.trim()) {
      return jsonError('Message is required.', 400)
    }

    const to = process.env.EMAIL_INTERNAL_SALES || process.env.EMAIL_INTERNAL_ADMISSIONS
    const from = getResendFrom(process.env.EMAIL_FROM_SALES)

    if (!process.env.RESEND_API_KEY || !to) {
      return jsonError('Email not configured.', 500)
    }

    const data = { fullName: displayName, name: displayName, email, phone, reason, message }
    const lead = contactLeadEmail(data)
    const customer = contactCustomerCopy(data)

    const { error: leadError } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: lead.subject,
      text: lead.text,
      html: lead.html,
    })
    if (leadError) {
      console.error('Resend contact lead error:', leadError)
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
      console.error('Resend contact customer copy error:', copyError)
      // Don't fail the request – lead was sent
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request.'
    console.error('Contact API error:', err)
    return jsonError(message, 400)
  }
}
