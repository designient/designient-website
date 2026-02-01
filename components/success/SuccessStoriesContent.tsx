'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, BookOpen, Users, CheckCircle, MessageCircle, Briefcase, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'react-feather'

// ============================================
// DATA STRUCTURES
// ============================================

interface TextTestimonial {
  id: string
  name: string
  city: string
  course: string
  company?: string
  image?: string // used only in Featured Student Stories
  outcome: string
  testimonial: string // 4-6 lines max
}

interface LongFormStory {
  id: string
  name: string
  city: string
  course: string
  company?: string
  beforeJoining: string
  whatChanged: string
  biggestLearning: string
  currentStatus: string
}

/** ADPlist mentorship testimonials — no image; use country flag to highlight. */
interface ADPlistStory {
  id: string
  name: string
  country: string
  countryFlag: string
  role: string
  company: string
  testimonial: string
}

// ============================================
// ADPlist Featured Stories (title: "Our Few ADPlist Stories")
// ============================================

const adplistStories: ADPlistStory[] = [
  {
    id: 'adp1',
    name: 'Navya Sharma',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'UI/UX Designer',
    company: 'Zeron',
    testimonial: 'I had the pleasure of seeking mentorship from Sameer, and his guidance in UI/UX design has been invaluable so far. The insights are clear, practical, and tailored to real-world scenarios. Highly recommend him to anyone looking to grow in this field or in need for general mentorship for projects.'
  },
  {
    id: 'adp2',
    name: 'Eelaf Adam',
    country: 'Uganda',
    countryFlag: '🇺🇬',
    role: 'Entrepreneur',
    company: 'Catalyst Now',
    testimonial: 'I had my first session with my mentor Sameer, and it was incredibly engaging. His energy and enthusiasm made the session highly motivating, and I truly appreciated how he helped me clarify my goals right from the start. I can already tell I am going to learn a lot from him. His practical approach makes learning efficient and effective. I am excited to see what our upcoming sessions will bring.'
  },
  {
    id: 'adp3',
    name: 'Sravanthi Nandyala',
    country: 'USA',
    countryFlag: '🇺🇸',
    role: 'Software Developer',
    company: "Lowe's",
    testimonial: "The UX mentorship session with Sameer was a game-changer for my career. Sameer's guidance on resume preparation and portfolio development was invaluable. He provided personalized feedback, helping me showcase my skills effectively. His support boosted my confidence and prepared me for job interviews. Highly recommend for anyone looking to excel in UX design!"
  },
  {
    id: 'adp4',
    name: 'Susie Zakaryan',
    country: 'Armenia',
    countryFlag: '🇦🇲',
    role: 'UX Designer',
    company: 'WeScale',
    testimonial: "Thanks, Sameer, for such an insightful and grounding session. You helped me clearly plan my career path and, more importantly, gave me the confidence and motivation I was missing. What stood out most was your ability to break down problems practically, your strong technical clarity, and the way you guide with a calm, positive and constructive mindset."
  }
]

// ============================================
// SAMPLE DATA (Replace with real data)
// ============================================

const textTestimonials: TextTestimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    city: 'Bangalore',
    course: 'UI/UX Design Pro',
    company: 'Razorpay',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', // Indian female
    outcome: 'Switched from marketing to Product Designer at Razorpay',
    testimonial: 'The course helped me understand design thinking and user research. I was able to create projects that showcase my skills effectively. The mentorship was personalized and the feedback was always constructive.'
  },
  {
    id: 't2',
    name: 'Rahul Kumar',
    city: 'Hyderabad',
    course: 'UI/UX Design Bootcamp',
    company: 'Freshworks',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', // Indian male
    outcome: 'Built a strong portfolio; now UX Designer at Freshworks',
    testimonial: 'I came with zero design background. The bootcamp structure and mentor support helped me ship real projects. I now have a portfolio I am proud to show in interviews.'
  },
  {
    id: 't3',
    name: 'Anjali Patel',
    city: 'Mumbai',
    course: 'UI/UX Design Master',
    company: 'Lollypop Design',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', // Indian female
    outcome: 'Landed UX role at Lollypop Design (Mumbai)',
    testimonial: 'The Master program pushed me to think at a systems level. Real client-style projects and critique sessions prepared me for how design actually works in teams.'
  },
  {
    id: 't4',
    name: 'Vikram Reddy',
    city: 'Chennai',
    course: 'Prompt Engineering Mastery',
    company: 'Zoho',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', // Indian male
    outcome: 'Integrated AI into design workflow at Zoho',
    testimonial: 'I was skeptical about prompts until this course. Now I use AI for research synthesis and ideation every day. It has genuinely sped up my process without replacing thinking.'
  },
  {
    id: 't5',
    name: 'Sneha Nair',
    city: 'Pune',
    course: 'UI/UX Design Pro',
    company: 'Thoughtworks',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', // Indian female
    outcome: 'Transitioned from developer to designer at Thoughtworks',
    testimonial: 'Having a dev background helped with implementation, but I lacked design fundamentals. This course filled that gap. I finally feel confident owning the full design-to-dev handoff.'
  },
  {
    id: 't6',
    name: 'Sarah Mitchell',
    city: 'New York, USA',
    course: 'UI/UX Design Master',
    company: 'Figma',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', // US female
    outcome: 'Remote learning; now Product Designer at Figma',
    testimonial: 'I joined from the US and was worried about time zones. The async components and scheduled mentor calls worked well. The quality of feedback was as good as any in-person program I had researched.'
  },
  {
    id: 't7',
    name: 'Arjun Mehta',
    city: 'Delhi NCR',
    course: 'UI/UX Design Bootcamp',
    company: 'Paytm',
    outcome: 'From freelancer to in-house UX Designer at Paytm',
    testimonial: 'I was doing random graphic design gigs. The bootcamp gave me a clear path into UX. My portfolio now tells a coherent story, and I got my first in-house offer within two months of finishing.'
  },
  {
    id: 't8',
    name: 'Kavya Iyer',
    city: 'Bangalore',
    course: 'Prompt Engineering Mastery',
    company: 'Postman',
    outcome: 'Using AI for research and copy at Postman',
    testimonial: 'I took this alongside my current job. The frameworks for prompting and evaluation were immediately useful. My team has started adopting the same practices for discovery and content.'
  },
  {
    id: 't9',
    name: 'Rohan Deshmukh',
    city: 'Pune',
    course: 'UI/UX Design Pro',
    company: 'Persistent Systems',
    outcome: 'Better collaboration with design at Persistent Systems',
    testimonial: 'I am not a full-time designer but work closely with design. The course gave me the vocabulary and mindset to give useful feedback and participate in design discussions. Highly recommend for PMs and founders.'
  },
  {
    id: 't10',
    name: 'Omar Al-Hassan',
    city: 'Dubai, UAE',
    course: 'UI/UX Design Master',
    company: 'Careem',
    outcome: 'Led design for a regional product at Careem',
    testimonial: 'I needed structure and accountability. The Master program delivered both. Working on real-world style briefs and getting mentor reviews helped me level up before taking the lead on a major project at work.'
  },
  {
    id: 't11',
    name: 'Divya Krishnan',
    city: 'Hyderabad',
    course: 'UI/UX Design Bootcamp',
    company: 'Tech Mahindra',
    outcome: 'First design job after career break at Tech Mahindra',
    testimonial: 'Returning after a break was scary. The bootcamp gave me a safe space to rebuild skills and a portfolio. The placement support and interview prep were a big part of why I could land a role quickly.'
  },
  {
    id: 't12',
    name: 'Aditya Singh',
    city: 'Mumbai',
    course: 'UI/UX Design Pro',
    company: 'Elephant Design',
    outcome: 'Freelance UX; first projects via Elephant Design network',
    testimonial: 'I wanted to move from agency work to independent practice. The Pro course helped me position my work and communicate value to clients. My first two projects came through referrals from the Designient community.'
  },
  // From designient.com/success-stories
  {
    id: 't13',
    name: 'Apoorva Khadri',
    city: 'Bangalore',
    course: 'UI/UX Design Pro',
    company: 'SkillSynth T&C',
    outcome: 'UX/UI Mentor at SkillSynth; achieved Adobe certificate',
    testimonial: 'I was so confused to find a proper foundation for UI and UX. Thanks to Sameer who made my decision so much easier. I completed a fun-filled, productive and focused syllabus and achieved my Adobe certificate. I loved the experience and Sameer\'s interactive teaching style. Was worth it.'
  },
  {
    id: 't14',
    name: 'Sabari Kumar',
    city: 'Chennai',
    course: 'UI/UX Design Bootcamp',
    company: 'Designient Labs',
    outcome: 'UX/UI Intern at Designient Labs',
    testimonial: 'A good place to learn the UI/UX Design course — they take care of your design work from the beginning to the end. Super cool mentor for beginners in the UI/UX field.'
  },
  {
    id: 't15',
    name: 'Arpita Dhir',
    city: 'Bangalore',
    course: 'UI/UX Design Pro',
    company: 'Ola',
    outcome: 'Graphic Designer at Ola',
    testimonial: 'Great place for learning UI/UX. Very interactive and special attention given to all students. Great mentors and very useful for anyone interested in learning UI/UX or even design.'
  },
  {
    id: 't16',
    name: 'Lubna Fathima',
    city: 'Hyderabad',
    course: 'UI/UX Design Pro',
    company: 'Spaneous Software Solutions',
    outcome: 'UX/UI Designer at Spaneous Software Solutions',
    testimonial: 'I\'m very grateful to Designient School for enlightening me with all the pros and cons as I began my journey in design. This place is indeed the best for learning and evolving as a designer if you\'re searching to be known as someone great in the field. Please prefer Designient School.'
  },
  {
    id: 't17',
    name: 'Sundarapandi M',
    city: 'Chennai',
    course: 'UI/UX Design Bootcamp',
    company: 'Lystloc Inc',
    outcome: 'UX/UI Designer at Lystloc Inc',
    testimonial: 'Best place to learn UI/UX design from scratch. Very friendly environment. I\'m very grateful to be a part of this institute that enlightened me with my new found passion.'
  },
  {
    id: 't18',
    name: 'Jayashree Babu',
    city: 'Bangalore',
    course: 'UI/UX Design Master',
    company: 'Mercedes Benz R&D India',
    outcome: 'UX Designer at Mercedes Benz R&D India',
    testimonial: 'I\'m lucky to have been guided by Designient — it has been a great experience. Their mentors are gifted with a rare combination of patience, spunk, and research skills. They\'re definitely someone I would look up to to collaborate with; exceptional teaching skills and they develop inspiring relationships with their students.'
  },
  {
    id: 't19',
    name: 'Priya Sridaran',
    city: 'Mumbai',
    course: 'UI/UX Design Pro',
    company: 'Option3.io',
    outcome: 'UX Analyst at Option3.io',
    testimonial: 'They know how to guide you to reach goals and fly beyond. I got two of my friends to learn there and they are successful now. Designient is one design school that\'s keenly focusing on quality than anything else.'
  },
  {
    id: 't20',
    name: 'Harish Mallemala',
    city: 'Hyderabad',
    course: 'UI/UX Design Pro',
    company: 'Freelance',
    outcome: 'UX/UI Designer, Freelance',
    testimonial: 'I believe Designient School is a great place to start if you really want to make your career in UI/UX. Though you get free content to learn anything online, it is always a pleasure to have a helping mentor by your side. Mentors at Designient are fabulous. Happy Designing.'
  },
  {
    id: 't21',
    name: 'Vivek Sinha',
    city: 'Delhi NCR',
    course: 'UI/UX Design Pro',
    company: 'Social Neeti',
    outcome: 'UX/UI Designer at Social Neeti',
    testimonial: 'Designient school is way different than others out there. No matter what experience you come from or whether you\'re just a fresher, there\'s always something to learn about design and a lot of personality development too. The patience and teaching style give you an in-depth understanding of the concepts. If you wish to develop a new skill and nurture it, Designient is the place for you.'
  }
]

const longFormStories: LongFormStory[] = [
  {
    id: 'l1',
    name: 'Meera Nambiar',
    city: 'Kochi',
    course: 'UI/UX Design Master',
    company: 'Freshworks',
    beforeJoining: 'I was a graphic designer with 5 years of experience but had never done proper user research or structured UX. I wanted to move into product design and work on digital products.',
    whatChanged: 'The course forced me to document assumptions, run small research cycles, and present design rationale. I went from making “pretty screens” to thinking in flows, edge cases, and user goals.',
    biggestLearning: 'That good UX is less about tools and more about asking the right questions and validating with real users. The mentors pushed me to test my ideas early instead of polishing in isolation.',
    currentStatus: 'Senior Product Designer at Freshworks. I lead discovery and design for two product areas.'
  },
  {
    id: 'l2',
    name: 'Erik Larsen',
    city: 'Oslo, Norway',
    course: 'UI/UX Design Pro',
    company: 'Kahoot!',
    beforeJoining: 'I had a background in industrial design and wanted to transition into digital product design. I was based in Norway and needed a program I could do remotely without sacrificing quality.',
    whatChanged: 'The Pro course gave me a clear framework: research, ideation, prototyping, and testing. I applied it to a side project and used that as my main portfolio piece. The mentor feedback was detailed and actionable.',
    biggestLearning: 'How to communicate design decisions to stakeholders and engineers. The course included a lot of “why” behind the “what”, which helped me in interviews and in my current role.',
    currentStatus: 'Product Designer at Kahoot! (Oslo). I joined six months after completing the course.'
  },
  {
    id: 'l3',
    name: 'Sanjay Gupta',
    city: 'Bangalore',
    course: 'UI/UX Design Bootcamp',
    company: 'Swiggy',
    beforeJoining: 'I was a recent engineering graduate who had always been interested in design but had no formal training. I did not know where to start or what recruiters actually look for in a UX portfolio.',
    whatChanged: 'The bootcamp gave me a step-by-step path: learn fundamentals, do projects, get feedback, iterate. I built three solid case studies and learned how to present them. The pacing kept me from getting overwhelmed.',
    biggestLearning: 'Portfolio presentation matters as much as the work. How you frame the problem, your process, and the outcome is what makes the difference in getting shortlisted.',
    currentStatus: 'Junior UX Designer at Swiggy. I have been there for eight months and am now starting to own small features end to end.'
  },
  {
    id: 'l4',
    name: 'Pooja Verma',
    city: 'Gurgaon',
    course: 'Prompt Engineering Mastery',
    company: 'UX Reactor',
    beforeJoining: 'I was a content strategist and had used ChatGPT casually. I wanted to use AI in a more structured way for research, brainstorming, and first drafts without losing my own voice and judgment.',
    whatChanged: 'The course taught me prompt patterns, evaluation, and when to trust or double-check AI output. I applied it to user research summaries and content briefs. My team noticed the improvement in speed and consistency.',
    biggestLearning: 'AI is a collaborator, not a replacement. The biggest shift was learning to iterate on prompts and combine AI output with human synthesis. That balance is now part of my daily workflow.',
    currentStatus: 'Senior Content Strategist at UX Reactor (Gurgaon). I use AI daily for research synthesis and draft creation, with clear guardrails.'
  },
  {
    id: 'l5',
    name: 'Rajesh Pillai',
    city: 'Trivandrum',
    course: 'UI/UX Design Pro',
    company: 'Infosys',
    beforeJoining: 'I had been a front-end developer for years and often disagreed with designers on feasibility and trade-offs. I wanted to learn design properly so I could contribute meaningfully and sometimes lead design on small projects.',
    whatChanged: 'I learned design vocabulary, basic research methods, and how to prototype and test. I also learned why certain “obvious” dev shortcuts hurt the user experience. My relationship with our design team improved a lot.',
    biggestLearning: 'Empathy and process. Understanding why designers ask for certain things and how to validate ideas with users before building. I now run lightweight usability tests myself when needed.',
    currentStatus: 'Tech lead at Infosys. I still code but also co-own discovery and design for my squad. The Pro course was the catalyst.'
  },
  {
    id: 'l6',
    name: 'Neha Joshi',
    city: 'Pune',
    course: 'UI/UX Design Master',
    company: 'upGrad',
    beforeJoining: 'I was a UX designer with two years of experience but felt stuck. I could execute well but struggled with strategy, stakeholder alignment, and presenting a strong point of view. I wanted to grow into a lead role.',
    whatChanged: 'The Master program focused on complex problems, multi-step flows, and design leadership. I worked on a capstone that mimicked real client constraints and had to defend my choices in front of mentors. That built my confidence.',
    biggestLearning: 'How to say “no” with reasoning and propose alternatives. The mentors did not just correct my work; they pushed me to articulate trade-offs and own the narrative. That skill has been invaluable in my current role.',
    currentStatus: 'Lead UX Designer at upGrad. I own the experience for two product lines and mentor two junior designers.'
  }
]

// ============================================
// MAIN COMPONENT
// ============================================

export function SuccessStoriesContent() {
  const [displayedCount, setDisplayedCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)
  const [expandedStories, setExpandedStories] = useState<Set<string>>(new Set())
  const [featuredIndex, setFeaturedIndex] = useState(0)

  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setDisplayedCount(prev => prev + 6)
      setIsLoading(false)
    }, 300)
  }

  const toggleStory = (id: string) => {
    setExpandedStories(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const featuredStories: ADPlistStory[] = adplistStories
  const moreStories = textTestimonials
  const displayedTextTestimonials = moreStories.slice(0, displayedCount)
  const hasMore = displayedCount < moreStories.length

  return (
    <>
      {/* 1️⃣ HERO SECTION */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#1a1a1a',
                lineHeight: '1.2'
              }}>
              Real Success Stories from Designient Students
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl mb-4 leading-relaxed"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.8'
              }}>
              Career switchers. Fresh graduates. Working professionals.<br />
              Different backgrounds. One common outcome — confidence and clarity in design.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm italic mb-8"
              style={{ color: '#6b7280' }}>
              Shared with consent. Individual results may vary.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#deeper-journeys"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: '#8458B3',
                  color: 'white'
                }}>
                View Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/apply-now"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold transition-all hover:scale-105 border-2"
                style={{
                  backgroundColor: 'white',
                  color: '#8458B3',
                  borderColor: '#8458B3'
                }}>
                Apply Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ QUICK PROOF STRIP */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, text: 'Small batches (max 10 students)' },
              { icon: Briefcase, text: 'Portfolio-first learning' },
              { icon: MessageCircle, text: 'Real mentor feedback (not recorded-only)' },
              { icon: CheckCircle, text: 'Career guidance beyond classes' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f3f4f6' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#8458B3' }} />
                </div>
                <p className="font-body text-sm md:text-base" style={{ color: '#4a4a4a' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1️⃣ DEEPER JOURNEYS */}
      {longFormStories.length > 0 && (
        <section id="deeper-journeys" className="py-16 md:py-24" style={{ backgroundColor: '#FFF6E2' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14">
              <h2
                className="font-display font-bold mb-4"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: '#1a1a1a'
                }}>
                Deeper Journeys
              </h2>
              <p className="font-body max-w-2xl mx-auto" style={{ color: '#6b7280', fontSize: '1.0625rem' }}>
                Extended stories from students who went from where they were to where they wanted to be.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {longFormStories.map((story, index) => {
                const isExpanded = expandedStories.has(story.id)
                const initial = story.name.charAt(0).toUpperCase()
                return (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 2) * 0.08, duration: 0.45 }}
                    className="flex flex-col h-full">
                    <div
                      className="bg-white rounded-2xl overflow-hidden border-2 hover:shadow-lg transition-all flex flex-col flex-1"
                      style={{
                        borderColor: isExpanded ? '#8458B3' : '#e5e7eb',
                        boxShadow: isExpanded ? '0 4px 20px rgba(132, 88, 179, 0.12)' : undefined
                      }}>
                      {/* Card header with left accent */}
                      <button
                        onClick={() => toggleStory(story.id)}
                        className="w-full p-5 md:p-6 flex items-center gap-4 text-left hover:bg-gray-50/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2 rounded-t-2xl"
                        aria-expanded={isExpanded}
                        aria-controls={`story-content-${story.id}`}>
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold text-lg"
                          style={{ backgroundColor: '#f4e4c1', color: '#8458B3' }}>
                          {initial}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <h3 className="font-display font-semibold mb-1.5" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                            {story.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm mb-2" style={{ color: '#6b7280' }}>
                            <span className="font-body">{story.city}</span>
                            <span className="font-body">·</span>
                            <span className="font-body">{story.course}</span>
                          </div>
                          {story.company && (
                            <span
                              className="inline-block font-body text-xs font-semibold px-2.5 py-1 rounded-md"
                              style={{ backgroundColor: '#8458B3', color: 'white' }}>
                              {story.company}
                            </span>
                          )}
                        </div>
                        <div className="flex-shrink-0">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" style={{ color: '#8458B3' }} />
                          ) : (
                            <ChevronDown className="w-5 h-5" style={{ color: '#8458B3' }} />
                          )}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            id={`story-content-${story.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden border-t border-gray-100">
                            <div className="px-5 md:px-6 py-5 space-y-5">
                              <div>
                                <h4 className="font-body font-semibold text-xs uppercase tracking-wide mb-1.5" style={{ color: '#8458B3' }}>
                                  Before joining
                                </h4>
                                <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                                  {story.beforeJoining}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-body font-semibold text-xs uppercase tracking-wide mb-1.5" style={{ color: '#8458B3' }}>
                                  What changed
                                </h4>
                                <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                                  {story.whatChanged}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-body font-semibold text-xs uppercase tracking-wide mb-1.5" style={{ color: '#8458B3' }}>
                                  Biggest learning
                                </h4>
                                <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                                  {story.biggestLearning}
                                </p>
                              </div>
                              <div className="pt-2 border-t border-gray-100">
                                <h4 className="font-body font-semibold text-xs uppercase tracking-wide mb-1.5" style={{ color: '#8458B3' }}>
                                  Where they are now
                                </h4>
                                <p className="font-body text-sm leading-relaxed font-medium" style={{ color: '#1a1a1a' }}>
                                  {story.currentStatus}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 2️⃣ MORE STUDENT EXPERIENCES */}
      <section id="more-stories" className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-center mb-12"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#1a1a1a'
            }}>
            More Student Experiences
          </motion.h2>
          {textTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-lg mb-4" style={{ color: '#6b7280' }}>
                Testimonials are being added. Check back soon!
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {displayedTextTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-white rounded-xl border-2 p-6 hover:shadow-lg transition-shadow"
                    style={{ borderColor: '#e5e7eb' }}>
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-display font-semibold" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                          {testimonial.name}
                        </h3>
                        {testimonial.company && (
                          <span
                            className="font-body text-xs font-medium px-2.5 py-1 rounded-full"
                            style={{ backgroundColor: '#f4e4c1', color: '#8458B3' }}>
                            {testimonial.company}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-2" style={{ color: '#6b7280' }}>
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="font-body">{testimonial.city}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-3" style={{ color: '#6b7280' }}>
                        <BookOpen className="w-4 h-4 flex-shrink-0" />
                        <span className="font-body">{testimonial.course}</span>
                      </div>
                      <p className="font-body text-sm font-semibold mb-3" style={{ color: '#8458B3' }}>
                        {testimonial.outcome}
                      </p>
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </motion.div>
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMore}
                    disabled={isLoading}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border-2"
                    style={{
                      backgroundColor: 'white',
                      color: '#8458B3',
                      borderColor: '#8458B3'
                    }}>
                    {isLoading ? 'Loading...' : 'Load More Stories'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* 3️⃣ OUR FEW ADPLIST STORIES */}
      <section id="featured-stories" className="py-16 md:py-24" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14">
            <h2
              className="font-display font-bold mb-3"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: '#1a1a1a'
              }}>
              Our Few ADPlist Stories
            </h2>
            <p className="font-body max-w-xl mx-auto" style={{ color: '#6b7280', fontSize: '1.0625rem' }}>
              Mentorship feedback from ADPlist — in their own words
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2" style={{ borderColor: '#f4e4c1', minHeight: '280px' }}>
              <AnimatePresence mode="wait">
                {featuredStories[featuredIndex] && (
                  <motion.div
                    key={featuredStories[featuredIndex].id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col">
                    <div className="flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-10">
                      <p
                        className="font-body leading-relaxed mb-4"
                        style={{
                          color: '#1a1a1a',
                          fontSize: 'clamp(1rem, 1.4vw, 1.1875rem)',
                          lineHeight: '1.7'
                        }}>
                        &ldquo;{featuredStories[featuredIndex].testimonial}&rdquo;
                      </p>
                      <div className="flex items-center gap-3 flex-wrap mt-auto pt-2">
                        <h3 className="font-display font-semibold" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                          {featuredStories[featuredIndex].name}
                        </h3>
                        <span
                          className="font-body text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: '#f4e4c1', color: '#8458B3' }}>
                          {featuredStories[featuredIndex].role} at {featuredStories[featuredIndex].company}
                        </span>
                        <span className="font-body text-sm flex items-center gap-1.5" style={{ color: '#6b7280' }}>
                          <span role="img" aria-label={featuredStories[featuredIndex].country}>
                            {featuredStories[featuredIndex].countryFlag}
                          </span>
                          {featuredStories[featuredIndex].country}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                type="button"
                onClick={() => setFeaturedIndex((i) => (i === 0 ? featuredStories.length - 1 : i - 1))}
                className="p-3 rounded-full border-2 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2"
                style={{ borderColor: '#8458B3', color: '#8458B3' }}
                aria-label="Previous story">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2" role="tablist" aria-label="Featured story navigation">
                {featuredStories.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFeaturedIndex(i)}
                    role="tab"
                    aria-selected={featuredIndex === i}
                    aria-label={`Go to story ${i + 1}`}
                    className="w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2"
                    style={{
                      backgroundColor: featuredIndex === i ? '#8458B3' : '#d1d5db',
                      transform: featuredIndex === i ? 'scale(1.2)' : undefined
                    }}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setFeaturedIndex((i) => (i === featuredStories.length - 1 ? 0 : i + 1))}
                className="p-3 rounded-full border-2 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2"
                style={{ borderColor: '#8458B3', color: '#8458B3' }}
                aria-label="Next story">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <p className="text-center font-body text-sm mt-3" style={{ color: '#6b7280' }}>
              {featuredIndex + 1} of {featuredStories.length}
            </p>
          </div>
        </div>
      </section>

      {/* 6️⃣ OUTCOME CLUSTERS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-center mb-12"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#1a1a1a'
            }}>
            What our students commonly experience
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {[
                'Stronger design fundamentals',
                'Clearer portfolios',
                'Improved confidence',
                'Better interview readiness',
                'Direction for next career steps'
              ].map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <span className="font-body text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
                    {outcome}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8️⃣ INTERNAL LINKING SECTION */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-center mb-12"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#1a1a1a'
            }}>
            Want to start your own journey?
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { name: 'UI/UX Design Pro Course', href: '/ui-ux-design-pro' },
                { name: 'UI/UX Design Master', href: '/ui-ux-design-master' },
                { name: 'UI/UX Bootcamp', href: '/ui-ux-design-bootcamp' },
                { name: 'Prompt Mastery', href: '/prompt-engineering-mastery' },
                { name: 'Apply Now', href: '/apply-now' },
                { name: 'Placements', href: '/placements' }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}>
                  <Link
                    href={link.href}
                    className="block p-6 rounded-lg border-2 text-center font-body font-semibold transition-all hover:scale-105 hover:shadow-md"
                    style={{
                      backgroundColor: 'white',
                      color: '#8458B3',
                      borderColor: '#8458B3'
                    }}>
                    {link.name}
                    <ArrowRight className="w-4 h-4 inline-block ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ FINAL CTA SECTION */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#8458B3' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold mb-6 text-white" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Your story could be next.
            </h2>
            <p className="font-body text-lg mb-8 text-white opacity-90" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}>
              If you're willing to learn, practice, and show up — we'll guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply-now"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-[#8458B3] bg-white transition-all hover:scale-105">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white border-2 border-white transition-all hover:scale-105">
                Talk to a Mentor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  )
}
