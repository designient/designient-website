import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
import { inquiryLeadEmail, inquiryCustomerCopy } from '../../../lib/email-templates'
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

    const data = { name: name ?? '', email: email ?? '', phone, phoneCountryCode, whatsapp, whatsappCountryCode, courseInterest }

    // 1. Send Lead Email
    const lead = inquiryLeadEmail(data)
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
      console.error('Failed to send inquiry lead email', await leadRes.text())
      return jsonError('Failed to send email.', 500)
    }

    // 2. Send Customer Copy
    const customer = inquiryCustomerCopy(data)
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
      console.error('Failed to send inquiry customer copy', await customerRes.text())
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request.'
    console.error('Inquiry API error:', err)
    return jsonError(message, 400)
  }
}
