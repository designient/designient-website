import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, MapPin } from 'lucide-react'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Button } from '../../components/ui/Button'
import { Overline } from '../../components/ui/Badge'
import { Reveal } from '../../components/ui/Reveal'
import { StructuredData } from '../../components/StructuredData'
import { CTASection } from '../../components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Designient — School of Masterminds | UI/UX Design',
  description:
    "Small batches. Real mentors. No shortcuts. Learn about Designient School of Masterminds — India's boutique UI/UX design school in Bangalore, Hyderabad & Pune.",
  openGraph: {
    title: 'About Designient — School of Masterminds',
    description: 'Small batches. Real mentors. No shortcuts. The philosophy behind Designient.',
    url: 'https://designient.com/about-us',
  },
  alternates: { canonical: 'https://designient.com/about-us' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Designient School of Masterminds',
  url: 'https://designient.com',
  address: [
    { '@type': 'PostalAddress', streetAddress: '148, Church St, Haridevpur, Ashok Nagar', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', postalCode: '560001', addressCountry: 'IN' },
    { '@type': 'PostalAddress', streetAddress: 'RENT A DESK, Road No. 36, Jubilee Hills', addressLocality: 'Hyderabad', addressRegion: 'Telangana', postalCode: '500034', addressCountry: 'IN' },
    { '@type': 'PostalAddress', streetAddress: '5th floor, SAI RADHE COMPLEX, Sangamvadi', addressLocality: 'Pune', addressRegion: 'Maharashtra', postalCode: '411001', addressCountry: 'IN' },
  ],
}

const philosophy = [
  { title: 'Mastery Over Speed', body: "We don't rush students through content. We build craftspeople — designers who understand the why, not just the how." },
  { title: 'Mentors, Not Lecturers', body: 'Every instructor designs real products every day. Teaching is their craft too. They bring live industry context into every session.' },
  { title: 'AI as a Collaborator', body: 'We teach AI tools as creative partners, not replacements for thinking. Our students leave with a genuine AI-native workflow.' },
]

const forYou = [
  'You are serious about building real, portfolio-grade skills',
  'You want personalised mentorship — not pre-recorded videos',
  'You are ready to practice, fail, iterate, and grow',
  'You want a small cohort where everyone knows your name',
  'You value quality over the cheapest available option',
]

const notForYou = [
  'You prefer recorded-only, self-paced content',
  'You are looking for a shortcut or overnight success',
  'You are not ready to put in daily practice and feedback cycles',
  'You want a 1000-person Zoom call you can lurk in anonymously',
]

const locations = [
  {
    city: 'Bangalore',
    address: '148, Church St, Haridevpur, Ashok Nagar, Bengaluru 560001',
    note: 'Our flagship campus. Design studio environment, dedicated critique rooms.',
  },
  {
    city: 'Hyderabad',
    address: 'RENT A DESK, Road No. 36, Jubilee Hills, Hyderabad 500034',
    note: 'Co-working studio in the heart of Jubilee Hills tech hub.',
  },
  {
    city: 'Pune',
    address: '5th floor, SAI RADHE COMPLEX, Sangamwadi, Pune 411001',
    note: 'Growing campus in Pune\'s creative and startup district.',
  },
  {
    city: 'Online',
    address: 'Live virtual cohorts — same mentors, same batch cap, same experience.',
    note: 'Full HD video, collaborative FigJam sessions, and 1:1 mentor calls.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-void">
      <StructuredData data={organizationSchema} />
      <Navbar />
      <main id="main-content">
        {/* HERO */}
        <section
          aria-labelledby="about-hero-heading"
          className="relative isolate pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden section-glow"
        >
          <div className="absolute inset-0 bg-dots opacity-30 -z-10" aria-hidden="true" />
          <div className="max-w-container mx-auto container-px text-center">
            <Reveal>
              <Overline>About Designient</Overline>
              <h1
                id="about-hero-heading"
                className="mt-6 mx-auto max-w-3xl font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[1.06] tracking-[-0.025em] text-ivory text-balance"
              >
                Small batches. Real mentors.{' '}
                <span className="italic text-neon">No shortcuts.</span>
              </h1>
              <p className="mt-8 mx-auto max-w-2xl font-serif italic text-[clamp(1.125rem,2vw,1.375rem)] text-silver leading-[1.55]">
                &ldquo;In my own journey I&rsquo;ve been the nervous student, the dedicated
                apprentice, and the confident master. Designient exists to give every designer that
                same journey — accelerated, mentored, and real.&rdquo;
              </p>
              <p className="mt-4 text-body-sm text-ash uppercase tracking-[0.12em]">
                — The Founder
              </p>
            </Reveal>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section aria-labelledby="philosophy-heading" className="section bg-void">
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <Overline>Our Philosophy</Overline>
              <h2
                id="philosophy-heading"
                className="mt-5 font-serif text-display-sm md:text-display-md text-ivory text-balance max-w-2xl"
              >
                Three beliefs that shape everything we do.
              </h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
              {philosophy.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="border-t-2 border-neon pt-8">
                    <h3 className="font-sans text-[18px] font-semibold text-ivory">{item.title}</h3>
                    <p className="mt-3 text-silver text-[15.5px] leading-[1.65]">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FOR / NOT FOR */}
        <section
          aria-labelledby="for-heading"
          className="section"
          style={{ background: 'var(--color-obsidian)' }}
        >
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <Overline>Who This Is For</Overline>
              <h2
                id="for-heading"
                className="mt-5 font-serif text-display-sm md:text-display-md text-ivory text-balance max-w-2xl"
              >
                We&rsquo;re honest about who we&rsquo;re a good fit for.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal>
                <div className="rounded-lg border border-success/20 bg-success/[0.04] p-8">
                  <h3 className="font-sans text-[16px] font-semibold text-success uppercase tracking-[0.08em] mb-6">
                    Designient is for you if…
                  </h3>
                  <ul className="space-y-4">
                    {forYou.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={16} strokeWidth={2} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-cloud text-[15.5px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8">
                  <h3 className="font-sans text-[16px] font-semibold text-ash uppercase tracking-[0.08em] mb-6">
                    We&rsquo;re probably not the right fit if…
                  </h3>
                  <ul className="space-y-4">
                    {notForYou.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <X size={16} strokeWidth={2} className="text-ash mt-0.5 flex-shrink-0" />
                        <span className="text-silver text-[15.5px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section aria-labelledby="locations-heading" className="section bg-void">
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <Overline>Our Campuses</Overline>
              <h2
                id="locations-heading"
                className="mt-5 font-serif text-display-sm md:text-display-md text-ivory text-balance max-w-2xl"
              >
                Where to find us.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((loc, i) => (
                <Reveal key={loc.city} delay={i * 80}>
                  <div className="card p-6 h-full flex flex-col gap-3">
                    <div className="inline-flex items-center gap-2 text-neon">
                      <MapPin size={14} strokeWidth={1.5} />
                      <span className="font-medium text-[14px] uppercase tracking-[0.1em]">
                        {loc.city}
                      </span>
                    </div>
                    <p className="text-cloud text-[14px] leading-relaxed">{loc.address}</p>
                    <p className="text-ash text-[13px] leading-relaxed mt-auto">{loc.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
