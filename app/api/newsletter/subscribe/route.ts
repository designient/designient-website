import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email?.trim()) {
      return NextResponse.json({ success: false, error: 'Email is required.' }, { status: 400 })
    }

    // TODO: Subscribe email via your newsletter provider (e.g. Mailchimp, ConvertKit)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 })
  }
}
