'use client'

import { useCallback, useState, type CSSProperties } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader } from 'react-feather'
import { getMinAmountLabel, type RazorpayCurrency } from '../../lib/razorpay-constants'

export interface RazorpayCheckoutProps {
  /** Amount in smallest currency unit: paise (INR) or cents (USD) */
  amountMinorUnits: number
  currency: RazorpayCurrency
  receipt?: string
  description: string
  courseSlug?: string
  customerName?: string
  customerEmail?: string
  customerContact?: string
  buttonText?: string
  className?: string
  buttonStyle?: CSSProperties
  onVerified?: (paymentId: string, orderId: string) => void
  redirectOnSuccess?: string
}

function getPayPalCheckoutConfig(): RazorpayCheckoutConfig {
  return {
    display: {
      blocks: {
        paypal: {
          name: 'Pay with PayPal',
          instruments: [{ method: 'paypal' }],
        },
      },
      sequence: ['block.paypal'],
      preferences: {
        show_default_blocks: false,
      },
    },
  }
}

export function RazorpayCheckout({
  amountMinorUnits,
  currency,
  receipt,
  description,
  courseSlug,
  customerName,
  customerEmail,
  customerContact,
  buttonText = 'Pay Now',
  className = '',
  buttonStyle,
  onVerified,
  redirectOnSuccess = '/thank-you?payment=success',
}: RazorpayCheckoutProps) {
  const router = useRouter()
  const [scriptReady, setScriptReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
  const minLabel = getMinAmountLabel(currency)

  const openCheckout = useCallback(async () => {
    setError(null)

    if (!keyId) {
      setError('Payment is not configured. Please contact support.')
      return
    }

    if (!scriptReady || typeof window.Razorpay === 'undefined') {
      setError('Payment gateway is still loading. Please try again.')
      return
    }

    const minMinor = currency === 'INR' ? 100 : 50
    if (amountMinorUnits < minMinor) {
      setError(`Minimum payment amount is ${minLabel}.`)
      return
    }

    setLoading(true)

    try {
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amountMinorUnits,
          currency,
          receipt: receipt ?? `rcpt_${courseSlug ?? 'course'}_${Date.now()}`,
          notes: courseSlug ? { course_slug: courseSlug, currency } : { currency },
        }),
      })

      const orderData = await orderRes.json()

      if (!orderRes.ok || !orderData.success) {
        throw new Error(orderData.error ?? 'Could not create payment order')
      }

      const options: RazorpayOptions = {
        key: keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Designient School of Masterminds',
        description,
        order_id: orderData.order_id,
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerContact,
        },
        theme: {
          color: '#8458B3',
        },
        ...(currency === 'USD' ? { config: getPayPalCheckoutConfig() } : {}),
        handler: async (response) => {
          setLoading(true)
          try {
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            })

            const verifyData = await verifyRes.json()

            if (!verifyRes.ok || !verifyData.success) {
              throw new Error(verifyData.error ?? 'Payment verification failed')
            }

            onVerified?.(response.razorpay_payment_id, response.razorpay_order_id)

            if (redirectOnSuccess) {
              const url = new URL(redirectOnSuccess, window.location.origin)
              url.searchParams.set('payment_id', response.razorpay_payment_id)
              if (courseSlug) url.searchParams.set('course', courseSlug)
              router.push(`${url.pathname}${url.search}`)
            }
          } catch (verifyErr) {
            const msg = verifyErr instanceof Error ? verifyErr.message : 'Verification failed'
            setError(msg)
          } finally {
            setLoading(false)
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false)
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.on('payment.failed', (response) => {
        setLoading(false)
        setError(response.error?.description ?? 'Payment failed. Please try again.')
      })
      setLoading(false)
      razorpay.open()
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Could not start payment'
      setError(msg)
      setLoading(false)
    }
  }, [
    amountMinorUnits,
    courseSlug,
    currency,
    customerContact,
    customerEmail,
    customerName,
    description,
    keyId,
    minLabel,
    onVerified,
    receipt,
    redirectOnSuccess,
    router,
    scriptReady,
  ])

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
        onReady={() => setScriptReady(true)}
        onLoad={() => setScriptReady(true)}
      />
      <button
        type="button"
        onClick={openCheckout}
        disabled={loading}
        className={`block w-full text-center font-body font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 ${className}`}
        style={buttonStyle}
      >
        {loading ? (
          <span className="inline-flex items-center justify-center gap-2">
            <Loader className="w-4 h-4 animate-spin" />
            Processing…
          </span>
        ) : (
          <span className="inline-flex items-center justify-center gap-2">
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </button>
      {error && (
        <p className="font-body text-sm mt-3 text-center" style={{ color: 'var(--color-error, #dc2626)' }} role="alert">
          {error}
        </p>
      )}
    </>
  )
}
