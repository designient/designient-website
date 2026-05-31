const COMPANY_LOGO_MAP: Record<string, string> = {
  accenture: '/company-logos/accenture.svg',
  adobe: '/company-logos/adobe.svg',
  amazon: '/company-logos/amazon.svg',
  cisco: '/company-logos/cisco.svg',
  google: '/company-logos/google.svg',
  lenovo: '/company-logos/lenovo.svg',
  mercedes: '/company-logos/mercedes.svg',
  'mercedes benz': '/company-logos/mercedes.svg',
  'mercedes benz r&d india': '/company-logos/mercedes.svg',
  meta: '/company-logos/meta.svg',
  paypal: '/company-logos/paypal.svg',
  salesforce: '/company-logos/salesforce.svg',
}

function normalizeCompanyName(company: string): string {
  return company.toLowerCase().trim().replace(/\s+/g, ' ')
}

export function getCompanyLogoPath(company: string): string | null {
  const normalized = normalizeCompanyName(company)

  if (COMPANY_LOGO_MAP[normalized]) {
    return COMPANY_LOGO_MAP[normalized]
  }

  for (const [key, path] of Object.entries(COMPANY_LOGO_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return path
    }
  }

  return null
}
