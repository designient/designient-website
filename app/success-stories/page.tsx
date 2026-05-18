import type { Metadata } from 'next'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Overline } from '../../components/ui/Badge'
import { Reveal } from '../../components/ui/Reveal'
import { CTASection } from '../../components/sections/CTASection'
import { StructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'Success Stories — Real Design Careers | Designient',
  description:
    'Real designers. Real careers. Real stories. From career switchers to fresh graduates — Designient alumni share their journeys into design.',
  openGraph: {
    title: 'Success Stories | Designient',
    description: 'Real designers. Real careers. Real stories.',
    url: 'https://designient.com/success-stories',
  },
  alternates: { canonical: 'https://designient.com/success-stories' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
    { '@type': 'ListItem', position: 2, name: 'Success Stories', item: 'https://designient.com/success-stories' },
  ],
}

interface Story {
  name: string
  initial: string
  journey: string
  quote: string
  course: string
  company: string
}

const stories: Story[] = [
  { name: 'Priya Sharma', initial: 'P', journey: 'Fresh Graduate → UI Designer at Google', quote: "I had zero industry experience. What Designient gave me wasn't just Figma skills — it was the confidence to present my work, handle feedback, and know my own worth. I got placed at Google six weeks after graduating.", course: 'Pro Course', company: 'Google' },
  { name: 'Rohan Mehta', initial: 'R', journey: 'Civil Engineer → Product Designer', quote: "I was 28 with no design background. My mentor never treated me like a beginner — they treated me like a designer in training. That distinction matters. I'm now leading product design at a fintech startup.", course: 'Pro Course', company: 'Fintech Startup' },
  { name: 'Ananya Reddy', initial: 'A', journey: 'Marketing Executive → UX Designer at Amazon', quote: "I thought my background in marketing was a liability. My mentor showed me it was an asset. Understanding users was already in my DNA — I just needed the craft. Amazon thought so too.", course: 'Master Course', company: 'Amazon' },
  { name: 'Karthik Iyer', initial: 'K', journey: 'IT Professional → Senior Designer at Deloitte', quote: "The batch size changed everything. I wasn't a face in a crowd — I was a designer with a mentor who knew my work, my weaknesses, and my goals. That's what you pay for at Designient.", course: 'Master Course', company: 'Deloitte' },
  { name: 'Meera Nair', initial: 'M', journey: 'Fresher → Product Designer at Swiggy', quote: "I joined straight out of college. My batch had experienced people and complete beginners — and everyone got the same attention. The AI curriculum was a year ahead of what I see used in industry.", course: 'Pro Course', company: 'Swiggy' },
  { name: 'Siddharth Joshi', initial: 'S', journey: 'MBA Graduate → UX Designer at CRED', quote: "I could have gone to a bigger school. I chose Designient because I knew I wouldn't become a number. My portfolio was reviewed seven times before my mentor said it was ready. It landed me at CRED.", course: 'Bootcamp → Pro', company: 'CRED' },
]

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-void">
      <StructuredData data={breadcrumbSchema} />
      <Navbar />
      <main id="main-content">
        {/* HERO */}
        <section
          aria-labelledby="stories-hero-heading"
          className="relative isolate pt-20 pb-24 md:pb-32 text-center section-glow overflow-hidden"
        >
          <div className="absolute inset-0 bg-dots opacity-30 -z-10" aria-hidden="true" />
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <Overline>Alumni Stories</Overline>
              <h1
                id="stories-hero-heading"
                className="mt-6 mx-auto max-w-3xl font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[1.06] tracking-[-0.025em] text-ivory text-balance"
              >
                Real designers. Real careers.{' '}
                <span className="italic text-neon">Real stories.</span>
              </h1>
              <p className="mt-7 mx-auto max-w-xl text-body-lg text-silver">
                Every story here started with the same decision you&rsquo;re considering right now.
              </p>
            </Reveal>
          </div>
        </section>

        {/* STORIES */}
        <section aria-label="Alumni success stories" className="section bg-void">
          <div className="max-w-container mx-auto container-px">
            <div className="space-y-8">
              {stories.map((story, i) => (
                <Reveal key={story.name} delay={i * 60}>
                  <article
                    className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center ${
                      i % 2 === 1 ? 'md:[direction:rtl]' : ''
                    }`}
                  >
                    <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                      <div className="card p-8 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-full border-2 border-neon/40 bg-neon-10 grid place-items-center text-neon font-serif text-display-sm">
                            {story.initial}
                          </div>
                          <div>
                            <p className="text-ivory font-medium text-[16px]">{story.name}</p>
                            <p className="text-neon text-[12px] uppercase tracking-[0.08em] mt-0.5">
                              {story.journey}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-[11px] text-ash uppercase tracking-[0.1em] border border-white/10 rounded-full px-3 py-1">
                            {story.course}
                          </span>
                          <span className="text-[11px] text-success uppercase tracking-[0.1em] border border-success/20 bg-success/[0.06] rounded-full px-3 py-1">
                            ● Now at {story.company}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`md:col-span-7 ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                      <span className="font-serif text-[3.5rem] text-neon leading-none block">&ldquo;</span>
                      <p className="mt-2 font-serif italic text-[clamp(1.125rem,2.5vw,1.375rem)] leading-[1.55] text-cloud">
                        {story.quote}
                      </p>
                    </div>
                  </article>
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
