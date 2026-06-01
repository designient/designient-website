'use client'

import { useCurrency } from '../../contexts/CurrencyContext'
import { pickByCurrency } from '../../lib/localizedPricing'

type LocalizedPriceTextProps = {
  inr: string
  usd: string
  as?: 'span' | 'strong'
  className?: string
  style?: React.CSSProperties
}

export function LocalizedPriceText({ inr, usd, as: Tag = 'span', className, style }: LocalizedPriceTextProps) {
  const { currency, isLoading } = useCurrency()
  return (
    <Tag className={className} style={style}>
      {isLoading ? '…' : pickByCurrency(currency, inr, usd)}
    </Tag>
  )
}
