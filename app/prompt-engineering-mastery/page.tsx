import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { PromptEngineeringRetiredContent } from '../../components/course/PromptEngineeringRetiredContent'

export const metadata: Metadata = {
 title: 'Prompt Engineering Mastery | Course Update | Designient',
 description:
 'Prompt Engineering Mastery has been discontinued. See AI Automation Accelerator and AI Product Design Course as the recommended replacements.',
 robots: {
 index: false,
 follow: true,
 },
 alternates: {
 canonical: 'https://designient.com/prompt-engineering-mastery',
 },
}

export default function PromptEngineeringMasteryPage() {
 return (
 <div className="min-h-screen bg-base font-sans text-primary">
 <Header />
 <main id="main-content" role="main">
 <PromptEngineeringRetiredContent />
 </main>
 <Footer />
 </div>
 )
}
