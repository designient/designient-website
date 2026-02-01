import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
import { applyLeadEmail, applyCustomerCopy, type ApplyFormData } from '../../../lib/email-templates'
import { getResendFrom } from '../../../lib/resend'

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

    if (!fullName?.trim()) {
      return jsonError('Full name is required.', 400)
    }
    if (!email?.trim()) {
      return jsonError('Email is required.', 400)
    }

    const formData: ApplyFormData = { fullName: fullName.trim(), email: email.trim(), ...body }

    // 1. Send Lead Email
    const lead = applyLeadEmail(formData)
    const leadRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: getResendFrom(process.env.EMAIL_FROM_ADMISSIONS),
        to: process.env.EMAIL_INTERNAL_ADMISSIONS,
        subject: lead.subject,
        text: lead.text,
        html: lead.html
      })
    })

    if (!leadRes.ok) {
      console.error('Failed to send apply lead email', await leadRes.text())
      // We log but don't hard fail if it's just an email error? 
      // Actually original code returned 500. Let's return 500 for lead email failure.
      return jsonError('Failed to send email.', 500)
    }

    // 2. Send Customer Copy
    const customer = applyCustomerCopy(formData)
    const customerRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: getResendFrom(process.env.EMAIL_FROM_ADMISSIONS),
        to: email,
        subject: customer.subject,
        text: customer.text,
        html: customer.html
      })
    })

    if (!customerRes.ok) {
      console.error('Failed to send apply customer copy', await customerRes.text())
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request.'
    console.error('Apply API error:', err)
    return jsonError(message, 400)
  }
}
