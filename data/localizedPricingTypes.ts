export type LocalizedAmount = {
  valueInr: string
  valueUsd: string
}

export type LocalizedBonus = {
  name: string
  description: string
  highlight?: boolean
} & LocalizedAmount

export type ValueStackRowType = 'line' | 'total' | 'earlyBird' | 'standard'

export type LocalizedValueRow = {
  item: string
  rowType?: ValueStackRowType
} & LocalizedAmount

export type CourseEmiConfig = {
  inr: { months: number; perMonth: string }
  usd: { months: number; perMonth: string }
}

export type ComparisonRowLocalized = {
  feature: string
  proInr: string
  proUsd: string
  others: string
}
