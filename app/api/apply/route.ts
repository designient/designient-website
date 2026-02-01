import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { applyLeadEmail, applyCustomerCopy, type ApplyFormData } from '../../../lib/email-templates'
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
    const fullName = body.fullName as string | undefined
    const email = body.email as string | undefined
    const program = body.program as string | undefined

    if (!fullName?.trim()) {
      return jsonError('Full name is required.', 400)
    }
    if (!email?.trim()) {
      return jsonError('Email is required.', 400)
    }

    const to = process.env.EMAIL_INTERNAL_ADMISSIONS
    const from = getResendFrom(process.env.EMAIL_FROM_ADMISSIONS)

    if (!process.env.RESEND_API_KEY || !to) {
      return jsonError('Email not configured.', 500)
    }

    const formData: ApplyFormData = { fullName: fullName.trim(), email: email.trim(), ...body }
    const lead = applyLeadEmail(formData)
    const customer = applyCustomerCopy(formData)

    const { error: leadError } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: lead.subject,
      text: lead.text,
      html: lead.html,
    })
    if (leadError) {
      console.error('Resend apply lead error:', leadError)
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
      console.error('Resend apply customer copy error:', copyError)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request.'
    console.error('Apply API error:', err)
    return jsonError(message, 400)
  }
}
