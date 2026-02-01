import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
import { Resend } from 'resend'
import { careersLeadEmail, careersCustomerCopy } from '../../../../lib/email-templates'
import { getResendFrom } from '../../../../lib/resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    const to = process.env.EMAIL_INTERNAL_HR
    const from = getResendFrom(process.env.EMAIL_FROM_HR)

    if (!process.env.RESEND_API_KEY || !to) {
      return jsonError('Email not configured.', 500)
    }

    const data = { fullName, email, phone, portfolioUrl, linkedinUrl, coverLetter, roleName }
    const lead = careersLeadEmail(data)
    const customer = careersCustomerCopy(data)

    const emailPayload: Parameters<typeof resend.emails.send>[0] = {
      from,
      to: [to],
      replyTo: email,
      subject: lead.subject,
      text: lead.text,
      html: lead.html,
    }
    if (resume?.size && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer())
      emailPayload.attachments = [{ filename: resume.name || 'resume.pdf', content: buffer }]
    }

    const { error: leadError } = await resend.emails.send(emailPayload)
    if (leadError) {
      console.error('Resend careers lead error:', leadError)
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
      console.error('Resend careers customer copy error:', copyError)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request.'
    console.error('Careers apply API error:', err)
    return jsonError(message, 400)
  }
}
