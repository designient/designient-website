import { NextRequest, NextResponse } from 'next/server'
import {
  createRazorpayOrder,
  getMinAmount,
  getMinAmountLabel,
  isSupportedCurrency,
  type RazorpayCurrency,
} from '../../../lib/razorpay'

export const runtime = 'edge'

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

    const amount = typeof body.amount === 'number' ? body.amount : Number(body.amount)
    const currencyRaw = typeof body.currency === 'string' ? body.currency.toUpperCase() : 'INR'
    const receipt =
      typeof body.receipt === 'string' && body.receipt.trim()
        ? body.receipt.trim().slice(0, 40)
        : `rcpt_${Date.now()}`

    if (!isSupportedCurrency(currencyRaw)) {
      return jsonError('Only INR and USD currencies are supported.', 400)
    }

    const currency: RazorpayCurrency = currencyRaw
    const minAmount = getMinAmount(currency)

    if (!Number.isFinite(amount) || amount < minAmount) {
      return jsonError(
        `Amount must be at least ${minAmount} (${getMinAmountLabel(currency)} in smallest currency units).`,
        400
      )
    }

    const notes =
      body.notes && typeof body.notes === 'object' && !Array.isArray(body.notes)
        ? (body.notes as Record<string, string>)
        : undefined

    const order = await createRazorpayOrder({
      amount: Math.round(amount),
      currency,
      receipt,
      notes,
    })

    return NextResponse.json({
      success: true,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (err: unknown) {
    const statusCode =
      err && typeof err === 'object' && 'statusCode' in err && typeof (err as { statusCode: number }).statusCode === 'number'
        ? (err as { statusCode: number }).statusCode
        : 500

    if (statusCode === 401) {
      return jsonError('Razorpay authentication failed. Check API keys.', 401)
    }

    const message = err instanceof Error ? err.message : 'Failed to create order'

    console.error('Create order error:', err)
    return jsonError(message, statusCode >= 400 && statusCode < 600 ? statusCode : 500)
  }
}
