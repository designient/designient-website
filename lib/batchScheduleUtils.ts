import { proCourseBatchSchedule, type BatchTiming } from '../data/batchSchedule'

export type CityKey = 'bangalore' | 'hyderabad' | 'pune'

const CITY_LABELS: Record<CityKey, string> = {
  bangalore: 'Bangalore',
  hyderabad: 'Hyderabad',
  pune: 'Pune',
}

/** True when city has no available batch slots in schedule data */
export function isCityBatchFull(city: CityKey): boolean {
  const schedule = proCourseBatchSchedule[city]
  if (!schedule || Object.keys(schedule).length === 0) return true

  const slots = [
    schedule.weekday?.morning,
    schedule.weekday?.evening,
    schedule.weekend?.morning,
    schedule.weekend?.evening,
  ].filter(Boolean)

  if (slots.length === 0) return true
  return !slots.some((slot) => slot?.available)
}

export function getCityLabel(city: CityKey): string {
  return CITY_LABELS[city]
}

export function getCitySchedule(city: CityKey): BatchTiming | undefined {
  return proCourseBatchSchedule[city]
}
