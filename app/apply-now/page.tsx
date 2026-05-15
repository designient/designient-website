'use client'

import React, { useState } from 'react'
import { Check, Award, Users, Clock } from 'lucide-react'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Button } from '../../components/ui/Button'
import { Input, Textarea, Select } from '../../components/ui/Input'
import { Overline } from '../../components/ui/Badge'
import { Reveal } from '../../components/ui/Reveal'

const reassurances = [
  { Icon: Users, text: 'No prior design experience required' },
  { Icon: Clock, text: 'Application reviewed within 24 hours' },
  { Icon: Users, text: 'Small batch — limited seats per cohort' },
]

const courseOptions = [
  { value: '', label: 'Select a course…' },
  { value: 'pro', label: 'UI/UX Design Pro (3 Months)' },
  { value: 'bootcamp', label: 'UI/UX Design Bootcamp (30 Days)' },
  { value: 'master', label: 'UI/UX Design Master (6 Months)' },
  { value: 'ai', label: 'AI Prompt Engineering' },
]

const hearOptions = [
  { value: '', label: 'How did you hear about us?' },
  { value: 'google', label: 'Google Search' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'friend', label: 'Friend or colleague' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'other', label: 'Other' },
]

const experienceOptions = [
  { value: '', label: 'Your current level…' },
  { value: 'none', label: 'Complete beginner' },
  { value: 'hobbyist', label: 'Hobbyist / self-taught' },
  { value: 'some', label: 'Some professional experience' },
  { value: 'working', label: 'Working in design already' },
]

const timingOptions = [
  { value: '', label: 'Preferred start…' },
  { value: 'jun2026', label: 'June 2026' },
  { value: 'jul2026', label: 'July 2026' },
  { value: 'asap', label: 'As soon as possible' },
  { value: 'flexible', label: 'Flexible' },
]

type Step = 1 | 2 | 3
type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ApplyPage() {
  const [step, setStep] = useState<Step>(1)
  const [appState, setAppState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '',
    currentRole: '', experience: '', heard: '',
    course: '', timing: '', questions: '',
  })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }))

  const next = () => setStep((s) => Math.min(s + 1, 3) as Step)
  const back = () => setStep((s) => Math.max(s - 1, 1) as Step)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setAppState('submitting')
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setAppState(res.ok ? 'success' : 'error')
    } catch {
      setAppState('error')
    }
  }

  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main id="main-content">
        <section aria-labelledby="apply-heading" className="section pt-16 md:pt-20">
          <div className="max-w-container mx-auto container-px">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* LEFT — motivation */}
              <Reveal className="lg:col-span-4 lg:sticky lg:top-24">
                <Overline>Applications Open</Overline>
                <h1
                  id="apply-heading"
                  className="mt-5 font-serif text-[clamp(1.875rem,4vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-ivory text-balance"
                >
                  This could be the decision that changes everything.
                </h1>
                <p className="mt-5 text-silver text-body-md">
                  Our application is simple and reviewed within 24 hours. We want to know about you —
                  your goals, your background, and what drives you. No trick questions.
                </p>
                <ul className="mt-8 space-y-4">
                  {reassurances.map(({ Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <Check size={16} strokeWidth={2} className="text-success flex-shrink-0" />
                      <span className="text-cloud text-[15px]">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex gap-6 pt-8 border-t border-white/[0.06]">
                  <div className="text-center">
                    <Award size={20} strokeWidth={1.5} className="text-amber mx-auto mb-2" />
                    <p className="text-[11px] text-ash uppercase tracking-[0.1em]">Adobe Certified</p>
                  </div>
                  <div className="text-center">
                    <Users size={20} strokeWidth={1.5} className="text-amber mx-auto mb-2" />
                    <p className="text-[11px] text-ash uppercase tracking-[0.1em]">95% Placed</p>
                  </div>
                </div>
              </Reveal>

              {/* RIGHT — multi-step form */}
              <Reveal className="lg:col-span-8" delay={120}>
                <div className="rounded-lg bg-obsidian border-subtle p-8 md:p-10">
                  {appState === 'success' ? (
                    <div className="py-16 text-center">
                      <div className="w-20 h-20 mx-auto rounded-full bg-success/10 border border-success/30 grid place-items-center text-success text-3xl mb-6">
                        ✓
                      </div>
                      <h2 className="font-serif text-display-sm text-ivory">Application received.</h2>
                      <p className="mt-4 text-silver text-body-md max-w-md mx-auto">
                        We&rsquo;ll review it and get back to you within 24 hours. Check your email —
                        including your spam folder.
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Progress */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-3">
                          <Overline>Step {step} of 3</Overline>
                          <span className="text-ash text-[13px]">
                            {step === 1 ? 'Personal Details' : step === 2 ? 'Background' : 'Course Selection'}
                          </span>
                        </div>
                        <div className="h-1 bg-white/[0.08] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber rounded-full transition-all duration-500 ease-out-expo"
                            style={{ width: `${(step / 3) * 100}%` }}
                          />
                        </div>
                      </div>

                      <form onSubmit={step < 3 ? (e) => { e.preventDefault(); next() } : submit} noValidate className="space-y-6">
                        {step === 1 && (
                          <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <Input label="Full Name" name="name" required placeholder="Your name" value={form.name} onChange={set('name')} />
                              <Input label="Email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={set('email')} />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <Input label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
                              <Input label="City" name="city" placeholder="Bangalore / Hyderabad / Pune / Other" value={form.city} onChange={set('city')} />
                            </div>
                          </>
                        )}
                        {step === 2 && (
                          <>
                            <Input label="Current Role / Occupation" name="currentRole" placeholder="e.g., Software Engineer, Student, Marketing Manager" value={form.currentRole} onChange={set('currentRole')} />
                            <Select label="Experience Level" name="experience" options={experienceOptions} value={form.experience} onChange={set('experience')} />
                            <Select label="How did you hear about us?" name="heard" options={hearOptions} value={form.heard} onChange={set('heard')} />
                          </>
                        )}
                        {step === 3 && (
                          <>
                            <Select label="Which course interests you?" name="course" options={courseOptions} value={form.course} onChange={set('course')} />
                            <Select label="Preferred Batch Timing" name="timing" options={timingOptions} value={form.timing} onChange={set('timing')} />
                            <Textarea label="Any questions for us?" name="questions" placeholder="Anything you want us to know, or questions you have for the mentors." value={form.questions} onChange={set('questions')} />
                          </>
                        )}

                        {appState === 'error' ? (
                          <p className="text-error text-[13px]">Something went wrong. Please try again or contact us directly.</p>
                        ) : null}

                        <div className="flex gap-4 pt-2">
                          {step > 1 ? (
                            <Button type="button" variant="secondary" onClick={back}>
                              Back
                            </Button>
                          ) : null}
                          <Button
                            type="submit"
                            fullWidth
                            disabled={appState === 'submitting'}
                          >
                            {step < 3
                              ? 'Continue'
                              : appState === 'submitting'
                              ? 'Submitting…'
                              : 'Submit Application'}
                          </Button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
