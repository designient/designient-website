'use client'

import { useSearchParams } from 'next/navigation'
import { ContactForm } from './ContactForm'
import { CorporateProposalForm } from '../corporates/CorporateProposalForm'

export function ContactFormWrapper() {
  const searchParams = useSearchParams()
  const reason = searchParams.get('reason')

  // Show corporate proposal form if reason is corporate-proposal or corporate-call
  if (reason === 'corporate-proposal' || reason === 'corporate-call') {
    return <CorporateProposalForm />
  }

  return <ContactForm />
}
