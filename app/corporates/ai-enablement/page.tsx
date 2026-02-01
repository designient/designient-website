import { redirect } from 'next/navigation'

// Redirect /corporates/ai-enablement to /corporates/ai-enablement-workshops
// This resolves duplicate content and establishes canonical URL
export default function AIEnablementPage() {
  redirect('/corporates/ai-enablement-workshops')
}
