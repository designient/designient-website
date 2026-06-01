/**
 * Razorpay helpers compatible with Cloudflare Workers / Edge runtime.
 * Uses fetch + Web Crypto (no Node.js razorpay SDK).
 */

export type { RazorpayCurrency } from './razorpay-constants'
export { getMinAmount, getMinAmountLabel, isSupportedCurrency } from './razorpay-constants'

import type { RazorpayCurrency } from './razorpay-constants'

export function getRazorpayKeyId(): string {
  const keyId = process.env.RAZORPAY_KEY_ID
  if (!keyId) {
    throw new Error('RAZORPAY_KEY_ID is not configured')
  }
  return keyId
}

export function getRazorpayKeySecret(): string {
  const secret = process.env.RAZORPAY_KEY_SECRET
  if (!secret) {
    throw new Error('RAZORPAY_KEY_SECRET is not configured')
  }
  return secret
}

export function getPublicRazorpayKeyId(): string | undefined {
  return process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
}

function getBasicAuthHeader(): string {
  const keyId = getRazorpayKeyId()
  const keySecret = getRazorpayKeySecret()
  return `Basic ${btoa(`${keyId}:${keySecret}`)}`
}

async function hmacSha256Hex(secret: string, message: string): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const signature = await crypto.subtle.sign('HMAC', key, enc.encode(message))
  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

function timingSafeEqualHex(expected: string, received: string): boolean {
  if (expected.length !== received.length) return false
  let mismatch = 0
  for (let i = 0; i < expected.length; i++) {
    mismatch |= expected.charCodeAt(i) ^ received.charCodeAt(i)
  }
  return mismatch === 0
}

export type RazorpayOrderResponse = {
  id: string
  amount: number
  currency: string
}

export async function createRazorpayOrder(params: {
  amount: number
  currency: RazorpayCurrency
  receipt: string
  notes?: Record<string, string>
}): Promise<RazorpayOrderResponse> {
  const response = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getBasicAuthHeader(),
    },
    body: JSON.stringify({
      amount: params.amount,
      currency: params.currency,
      receipt: params.receipt,
      ...(params.notes ? { notes: params.notes } : {}),
    }),
  })

  const data = (await response.json()) as RazorpayOrderResponse & {
    error?: { description?: string; reason?: string }
  }

  if (!response.ok) {
    const description =
      data.error?.description ?? data.error?.reason ?? 'Failed to create Razorpay order'
    const err = new Error(description) as Error & { statusCode: number }
    err.statusCode = response.status
    throw err
  }

  return data
}

export async function verifyRazorpayPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string
): Promise<boolean> {
  const secret = getRazorpayKeySecret()
  const expected = await hmacSha256Hex(secret, `${orderId}|${paymentId}`)
  return timingSafeEqualHex(expected, signature)
}
