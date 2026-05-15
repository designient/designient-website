import React from 'react'
import { Accordion } from '../ui/Accordion'
import { Overline } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

const faqs = [
  {
    id: 'f1',
    title: 'Do I need prior design experience to join?',
    content:
      'No. The Pro and Bootcamp courses are designed for complete beginners. You need curiosity and commitment — not prior skills. The Master course assumes you already know Figma basics.',
  },
  {
    id: 'f2',
    title: 'How are the courses different from platforms like GrowthSchool or Udemy?',
    content:
      'We cap every batch at 20 students. Your mentor knows your name, reviews your portfolio personally, and stays reachable beyond graduation. That\'s structurally impossible at scale.',
  },
  {
    id: 'f3',
    title: 'Are the courses online or offline?',
    content:
      'Both. We have campuses in Bangalore (HSR Layout), Hyderabad (Jubilee Hills), and Pune (Sangamwadi). Every course also has a fully live online cohort — same mentors, same batch size, same access.',
  },
  {
    id: 'f4',
    title: 'What is the 95% placement rate based on?',
    content:
      'It tracks Pro course graduates employed in design roles within three months of completion. We share actual company names and alumni LinkedIn profiles — not aggregate numbers with no context.',
  },
  {
    id: 'f5',
    title: 'Are there EMI or instalment payment options?',
    content:
      'Yes. We offer no-cost EMI through multiple payment partners. Reach out to us and we\'ll find a payment plan that works for you.',
  },
  {
    id: 'f6',
    title: 'What certification do I receive?',
    content:
      'Pro and Master graduates receive an Adobe certification (via the Adobe exam we prepare you for) plus a Designient certificate. Both are recognised by employers across India.',
  },
]

export function HomepageFAQ() {
  return (
    <section aria-labelledby="faq-heading" className="section bg-void">
      <div className="max-w-container mx-auto container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-4">
            <Overline>FAQ</Overline>
            <h2
              id="faq-heading"
              className="mt-5 font-serif text-display-sm text-ivory text-balance"
            >
              Questions we hear most.
            </h2>
            <p className="mt-5 text-silver text-body-md max-w-sm">
              Still have questions? Our mentors are happy to chat — no sales pitch, just honest answers.
            </p>
            <div className="mt-8">
              <Button href="/contact-us" variant="secondary">
                Talk to a Mentor
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={120}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
