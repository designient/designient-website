import { redirect } from 'next/navigation'

// Retired — permanent redirect to /courses (301 configured in next.config.js)
export default function PromptEngineeringMasteryPage() {
  redirect('/courses')
}
