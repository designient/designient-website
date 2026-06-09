import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
import { newsletterLeadEmail } from '../../../../lib/email-templates'
import { getResendFrom } from '../../../../lib/resend'

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

    const email = body.email as string | undefined
    if (!email?.trim()) {
      return jsonError('Email is required.', 400)
    }

    const leadEmailData = newsletterLeadEmail(email.trim())
    const leadRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: getResendFrom(process.env.EMAIL_FROM_ADMISSIONS),
        to: process.env.EMAIL_INTERNAL_ADMISSIONS,
        subject: leadEmailData.subject,
        text: leadEmailData.text,
        html: leadEmailData.html,
      }),
    })

    if (!leadRes.ok) {
      console.error('Failed to send newsletter lead email', await leadRes.text())
      return jsonError('Failed to subscribe. Please try again later.', 500)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscribe error:', error)
    return jsonError('Internal Server Error', 500)
  }
}
