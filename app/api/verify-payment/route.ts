import { createHmac, timingSafeEqual } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { getRazorpayKeySecret } from '../../../lib/razorpay'

export const runtime = 'nodejs'

function jsonError(message: string, status: number) {
  return NextResponse.json({ success: false, error: message }, { status })
}

function signaturesMatch(expected: string, received: string): boolean {
  try {
    const expectedBuf = Buffer.from(expected, 'utf8')
    const receivedBuf = Buffer.from(received, 'utf8')
    if (expectedBuf.length !== receivedBuf.length) return false
    return timingSafeEqual(expectedBuf, receivedBuf)
  } catch {
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return jsonError('Invalid JSON body.', 400)
    }

    const orderId = body.razorpay_order_id as string | undefined
    const paymentId = body.razorpay_payment_id as string | undefined
    const signature = body.razorpay_signature as string | undefined

    if (!orderId?.trim() || !paymentId?.trim() || !signature?.trim()) {
      return jsonError('razorpay_order_id, razorpay_payment_id, and razorpay_signature are required.', 400)
    }

    const secret = getRazorpayKeySecret()
    const payload = `${orderId}|${paymentId}`
    const expectedSignature = createHmac('sha256', secret).update(payload).digest('hex')

    if (!signaturesMatch(expectedSignature, signature)) {
      return jsonError('Payment signature verification failed.', 400)
    }

    return NextResponse.json({
      success: true,
      verified: true,
      order_id: orderId,
      payment_id: paymentId,
    })
  } catch (err) {
    console.error('Verify payment error:', err)
    const message = err instanceof Error ? err.message : 'Verification failed'
    if (message.includes('RAZORPAY_KEY_SECRET')) {
      return jsonError('Payment verification is not configured.', 500)
    }
    return jsonError(message, 500)
  }
}
