import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
import { contactLeadEmail, contactCustomerCopy } from '../../../lib/email-templates'
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
    if (!body || typeof body !== 'object') {
      return jsonError('Invalid request body.', 400)
    }
    const fullName = body.fullName as string | undefined
    const name = body.name as string | undefined
    const email = body.email as string | undefined
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

    // 1. Send Lead Email to Internal Team
    const leadEmailData = contactLeadEmail({ ...body, name: displayName, email, message } as any)
    const leadRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: getResendFrom(process.env.EMAIL_FROM_ADMISSIONS),
        to: process.env.EMAIL_INTERNAL_ADMISSIONS,
        subject: leadEmailData.subject,
        text: leadEmailData.text,
        html: leadEmailData.html
      })
    })

    if (!leadRes.ok) {
      console.error('Failed to send lead email', await leadRes.text())
    }

    // 2. Send Customer Copy
    const customerEmailData = contactCustomerCopy({ ...body, name: displayName, email } as any)
    const customerRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: getResendFrom(process.env.EMAIL_FROM_ADMISSIONS),
        to: email,
        subject: customerEmailData.subject,
        text: customerEmailData.text,
        html: customerEmailData.html
      })
    })

    if (!customerRes.ok) {
      console.error('Failed to send customer email', await customerRes.text())
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
