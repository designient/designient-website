'use client'

import React, { useState } from 'react'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Button } from '../../components/ui/Button'
import { Input, Textarea, Select } from '../../components/ui/Input'
import { Overline } from '../../components/ui/Badge'
import { Reveal } from '../../components/ui/Reveal'

const contactMethods = [
  { Icon: Mail, label: 'Email us', value: 'hello@designient.com', href: 'mailto:hello@designient.com' },
  { Icon: Phone, label: 'Call us', value: '+91 9353 000 320', href: 'tel:+919353000320' },
  { Icon: Clock, label: 'Response time', value: 'Within 24 hours', href: null },
]

const campuses = [
  { city: 'Bangalore', address: '148, Church St, Haridevpur, Ashok Nagar, Bengaluru 560001' },
  { city: 'Hyderabad', address: 'RENT A DESK, Road No. 36, Jubilee Hills, Hyderabad 500034' },
  { city: 'Pune', address: '5th floor, SAI RADHE COMPLEX, Sangamvadi, Pune 411001' },
]

const courseOptions = [
  { value: '', label: 'Select a course…' },
  { value: 'pro', label: 'UI/UX Design Pro (3 Months)' },
  { value: 'bootcamp', label: 'UI/UX Design Bootcamp (30 Days)' },
  { value: 'master', label: 'UI/UX Design Master (6 Months)' },
  { value: 'ai', label: 'AI Prompt Engineering' },
  { value: 'unsure', label: "I'm not sure yet" },
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setState(res.ok ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main id="main-content">
        <section
          aria-labelledby="contact-heading"
          className="section pt-16 md:pt-20"
        >
          <div className="max-w-container mx-auto container-px">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* LEFT */}
              <Reveal className="lg:col-span-5">
                <Overline>Get in Touch</Overline>
                <h1
                  id="contact-heading"
                  className="mt-5 font-serif text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-ivory text-balance"
                >
                  Let&rsquo;s talk about your design career.
                </h1>
                <p className="mt-5 text-body-md text-silver max-w-md">
                  Whether you have a question about our courses, want to visit a campus, or just want
                  to chat with a mentor — we&rsquo;re here.
                </p>

                <ul className="mt-10 space-y-5">
                  {contactMethods.map(({ Icon, label, value, href }) => (
                    <li key={label} className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-md bg-amber-10 border border-amber/20 grid place-items-center text-amber flex-shrink-0">
                        <Icon size={16} strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-ash text-[12px] uppercase tracking-[0.1em]">{label}</p>
                        {href ? (
                          <a href={href} className="text-ivory text-[15px] hover:text-amber transition-colors mt-0.5 block">
                            {value}
                          </a>
                        ) : (
                          <p className="text-ivory text-[15px] mt-0.5">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 space-y-5">
                  {campuses.map((c) => (
                    <div key={c.city} className="flex items-start gap-4">
                      <span className="w-10 h-10 rounded-md bg-white/[0.04] border border-white/10 grid place-items-center text-silver flex-shrink-0">
                        <MapPin size={16} strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-ivory text-[14px] font-medium">{c.city}</p>
                        <p className="text-ash text-[13px] mt-0.5 leading-relaxed">{c.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* FORM */}
              <Reveal className="lg:col-span-7" delay={120}>
                <div className="rounded-lg bg-obsidian border-subtle p-8 md:p-10">
                  {state === 'success' ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-success/10 border border-success/30 grid place-items-center text-success mb-6">
                        <span className="text-2xl">✓</span>
                      </div>
                      <h2 className="font-serif text-display-sm text-ivory">We&rsquo;ve got it.</h2>
                      <p className="mt-4 text-silver text-body-md">
                        We&rsquo;ll reply within 24 hours. Keep an eye on your inbox.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={submit} noValidate className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Input label="Full Name" name="name" required placeholder="Your name" value={form.name} onChange={set('name')} />
                        <Input label="Email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={set('email')} />
                      </div>
                      <Input label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
                      <Select label="Course Interest" name="course" options={courseOptions} value={form.course} onChange={set('course')} />
                      <Textarea label="Your Message" name="message" placeholder="What's on your mind?" value={form.message} onChange={set('message')} />

                      {state === 'error' ? (
                        <p className="text-error text-[13px]">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      ) : null}

                      <Button type="submit" fullWidth disabled={state === 'submitting'}>
                        {state === 'submitting' ? 'Sending…' : 'Send Your Message'}
                      </Button>
                      <p className="text-center text-body-sm text-ash">
                        Or{' '}
                        <a href="tel:+919353000320" className="text-amber hover:text-amber-glow transition-colors">
                          schedule a call with a mentor
                        </a>{' '}
                        directly.
                      </p>
                    </form>
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
