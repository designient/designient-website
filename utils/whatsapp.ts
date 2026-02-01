/**
 * WhatsApp utility for generating context-aware messages
 * Supports WhatsApp-first lead flow with source tracking
 * 
 * AUTO-REPLY & CRM INTEGRATION NOTES:
 * 
 * Auto-Reply (WhatsApp Business API):
 * - Configure auto-reply in WhatsApp Business Manager
 * - Suggested message: "Hi! Thanks for reaching out. To help you better, could you share:
 *   1. Your background/experience level
 *   2. Your preferred city (Bangalore/Hyderabad/Pune)
 *   3. Your goal (career switch, upskilling, etc.)"
 * - Keep language friendly and human, avoid bot-like responses
 * 
 * CRM Integration:
 * - Capture leads via WhatsApp Business API webhooks
 * - Extract data: phone number, name (if available), message content
 * - Parse source page from message (look for "Found via: /path")
 * - Determine intent from message keywords
 * - Store in CRM (e.g., HubSpot, Salesforce, custom database)
 * - Do not block user experience if CRM fails - log errors silently
 * 
 * Lead Data Structure:
 * {
 *   phone: string,
 *   name?: string,
 *   city?: string,
 *   intent: 'course' | 'careers' | 'placements' | 'general',
 *   sourcePage: string,
 *   timestamp: Date,
 *   message: string
 * }
 */

export interface WhatsAppContext {
  type: 'generic' | 'course' | 'city' | 'careers' | 'placements'
  courseName?: string
  cityName?: string
  jobTitle?: string
  sourcePage?: string
}

/**
 * Generate WhatsApp message based on context
 */
export function generateWhatsAppMessage(context: WhatsAppContext): string {
  const { type, courseName, cityName, jobTitle, sourcePage } = context
  let message = ''

  switch (type) {
    case 'course':
      message = `Hi Designient team, I'd like to know more about your ${courseName || 'UI/UX Design Pro'} course.`
      break
    case 'city':
      message = `Hi Designient team, I'm interested in learning UI/UX design in ${cityName || 'my city'}.`
      break
    case 'careers':
      message = `Hi Designient team, I'm interested in ${jobTitle ? `the ${jobTitle} position` : 'career opportunities'} at Designient.`
      break
    case 'placements':
      message = `Hi Designient team, I'd like to know more about your placement support and career assistance.`
      break
    case 'generic':
    default:
      message = `Hi Designient team, I'd like to know more about your UI/UX courses.`
      break
  }

  // Append source page context if available
  if (sourcePage) {
    message += ` (Found via: ${sourcePage})`
  }

  return message
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(context: WhatsAppContext): string {
  const whatsappNumber = '919353000320' // Format: country code + number without + or spaces
  const message = generateWhatsAppMessage(context)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
}

/**
 * Get page context from pathname
 */
export function getContextFromPathname(pathname: string): WhatsAppContext {
  // Course pages
  if (pathname.includes('/ui-ux-design-pro')) {
    return { type: 'course', courseName: 'UI/UX Design Pro', sourcePage: pathname }
  }
  if (pathname.includes('/ui-ux-design-bootcamp')) {
    return { type: 'course', courseName: 'UI/UX Design Bootcamp', sourcePage: pathname }
  }
  if (pathname.includes('/ui-ux-design-master')) {
    return { type: 'course', courseName: 'UI/UX Design Master', sourcePage: pathname }
  }
  if (pathname.includes('/prompt-engineering-mastery')) {
    return { type: 'course', courseName: 'Prompt Engineering Mastery', sourcePage: pathname }
  }

  // City pages
  if (pathname.includes('bangalore') || pathname.includes('bengaluru')) {
    return { type: 'city', cityName: 'Bangalore', sourcePage: pathname }
  }
  if (pathname.includes('hyderabad')) {
    return { type: 'city', cityName: 'Hyderabad', sourcePage: pathname }
  }
  if (pathname.includes('pune')) {
    return { type: 'city', cityName: 'Pune', sourcePage: pathname }
  }

  // Careers page
  if (pathname.includes('/careers')) {
    return { type: 'careers', sourcePage: pathname }
  }

  // Placements page
  if (pathname.includes('/placements')) {
    return { type: 'placements', sourcePage: pathname }
  }

  // Default generic
  return { type: 'generic', sourcePage: pathname }
}

/**
 * Check if WhatsApp button should be hidden
 */
export function shouldHideWhatsAppButton(pathname: string): boolean {
  const hiddenPaths = [
    '/thank-you',
    '/verify',
    '/verify/',
  ]
  
  // Hide on certificate verification pages
  if (pathname.startsWith('/verify/')) {
    return true
  }

  return hiddenPaths.includes(pathname)
}
