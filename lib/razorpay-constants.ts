export type RazorpayCurrency = 'INR' | 'USD'

const MIN_AMOUNT: Record<RazorpayCurrency, number> = {
  INR: 100,
  USD: 50,
}

export function getMinAmount(currency: RazorpayCurrency): number {
  return MIN_AMOUNT[currency]
}

export function getMinAmountLabel(currency: RazorpayCurrency): string {
  return currency === 'INR' ? '₹1' : '$0.50'
}

export function isSupportedCurrency(value: string): value is RazorpayCurrency {
  return value === 'INR' || value === 'USD'
}
