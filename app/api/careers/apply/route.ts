import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
import { careersLeadEmail, careersCustomerCopy } from '../../../../lib/email-templates'
import { getResendFrom } from '../../../../lib/resend'

function jsonError(message: string, status: number) {
  return NextResponse.json({ success: false, error: message }, { status })
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const fullName = formData.get('fullName')?.toString()?.trim()
    const email = formData.get('email')?.toString()?.trim()
    const phone = formData.get('phone')?.toString()?.trim()
    const portfolioUrl = formData.get('portfolioUrl')?.toString()?.trim()
    const linkedinUrl = formData.get('linkedinUrl')?.toString()?.trim()
    const coverLetter = formData.get('coverLetter')?.toString()?.trim()
    const roleName = formData.get('roleName')?.toString()?.trim()
    const resume = formData.get('resume') as File | null

    if (!fullName) {
      return jsonError('Full name is required.', 400)
    }
    if (!email) {
      return jsonError('Email is required.', 400)
    }

    const data = { fullName, email, phone, portfolioUrl, linkedinUrl, coverLetter, roleName }

    // 1. Prepare email payload for Lead
    const lead = careersLeadEmail(data)
    const emailPayload: any = {
      from: getResendFrom(process.env.EMAIL_FROM_HR),
      to: process.env.EMAIL_INTERNAL_HR,
      reply_to: email, // Resend API uses snake_case for reply_to
      subject: lead.subject,
      text: lead.text,
      html: lead.html,
      attachments: []
    }

    if (resume?.size && resume.size > 0) {
      const arrayBuffer = await resume.arrayBuffer()
      const base64Content = Buffer.from(arrayBuffer).toString('base64')
      emailPayload.attachments.push({
        filename: resume.name || 'resume.pdf',
        content: base64Content
      })
    }

    // Send Lead Email
    const leadRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify(emailPayload)
    })

    if (!leadRes.ok) {
      console.error('Failed to send careers lead email', await leadRes.text())
      return jsonError('Failed to send email.', 500)
    }

    // 2. Send Customer Copy
    const customer = careersCustomerCopy(data)
    const customerRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: getResendFrom(process.env.EMAIL_FROM_HR),
        to: email,
        subject: customer.subject,
        text: customer.text,
        html: customer.html
      })
    })

    if (!customerRes.ok) {
      console.error('Failed to send careers customer copy', await customerRes.text())
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request.'
    console.error('Careers apply API error:', err)
    return jsonError(message, 400)
  }
}
