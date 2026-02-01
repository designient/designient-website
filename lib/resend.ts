/**
 * Resend "from" address helper.
 * Resend cannot send from unverified domains (e.g. gmail.com).
 * When env uses Gmail/Yahoo/etc., we use Resend's default sender so emails still send.
 */
const RESEND_DEFAULT_FROM = 'Designient <onboarding@resend.dev>'

const UNVERIFIABLE_DOMAINS = /@(gmail|googlemail|yahoo|hotmail|outlook|live|icloud|aol)\.(com|co\.uk|fr|de)/i

export function getResendFrom(envFrom: string | undefined): string {
  if (!envFrom?.trim()) return RESEND_DEFAULT_FROM
  if (UNVERIFIABLE_DOMAINS.test(envFrom)) return RESEND_DEFAULT_FROM
  return envFrom.trim()
}
