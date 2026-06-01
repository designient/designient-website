interface RazorpayPrefill {
  name?: string
  email?: string
  contact?: string
}

interface RazorpayTheme {
  color?: string
}

interface RazorpayHandlerResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name?: string
  description?: string
  image?: string
  order_id: string
  handler: (response: RazorpayHandlerResponse) => void
  prefill?: RazorpayPrefill
  theme?: RazorpayTheme
  modal?: {
    ondismiss?: () => void
  }
}

interface RazorpayInstance {
  open: () => void
  on: (event: string, callback: (response: { error: { description: string } }) => void) => void
}

interface Window {
  Razorpay: new (options: RazorpayOptions) => RazorpayInstance
}
