import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import Link from 'next/link'
import { ArrowRight } from 'react-feather'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Designient | UI/UX Design Course FAQs',
  description: 'Everything you need to know about our UI/UX courses, mentorship, placements, and certifications. Get answers to common questions about admissions, batches, career support, and more.',
  keywords: ['UI UX design course FAQs', 'design course questions', 'UI UX training FAQs', 'designient FAQs', 'course admissions', 'placement assistance', 'design certifications'],
  openGraph: {
    title: 'Frequently Asked Questions - Designient',
    description: 'Everything you need to know about our UI/UX courses, mentorship, placements, and certifications.',
    url: 'https://designient.com/faqs',
    type: 'website',
  },
  alternates: {
    canonical: 'https://designient.com/faqs',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// All FAQs for schema generation
// /faqs page focuses on general questions that apply across all courses
// Course-specific details are on the course page, city-specific on city pages
const allFAQs = [
  {
    question: 'How do I enrol in a course?',
    answer: 'You can apply through our website and speak with our team before confirming your enrolment.'
  },
  {
    question: 'How long is the course?',
    answer: 'Our UI/UX design courses span from 3 months for the Pro Course to 9 months for the Master Course, with regular classes and hands-on sessions.'
  },
  {
    question: 'Are there any course prerequisites?',
    answer: 'There are no strict prerequisites, just an eagerness to learn, basic communication skills, and a passion for creating user-centric designs.'
  },
  {
    question: 'Are weekday and weekend batches available?',
    answer: 'Batch availability depends on the city and current schedule. Check individual city pages for specific batch options.'
  },
  {
    question: 'Do you offer online classes?',
    answer: 'Yes, we provide both online and offline modes of learning to cater to our diverse student base across India and the World.'
  },
  {
    question: 'What if I miss a class?',
    answer: 'We provide recorded sessions and supplementary materials for any classes you might miss.'
  },
  {
    question: 'Can I take a trial class before enrolling?',
    answer: 'Yes, we offer demo sessions to give you a glimpse of our teaching style and course content.'
  },
  {
    question: 'Do you provide any course materials?',
    answer: 'All students receive course materials, including e-books, slide decks, and access to our online resources on a weekly basis, after the Live Class.'
  },
  {
    question: 'Are there any group projects or team activities?',
    answer: 'Yes, collaboration is a key part of our course. You\'ll work on group projects to simulate real-world team environments.'
  },
  {
    question: 'Is there any post-course support?',
    answer: 'Certainly! We offer mentorship sessions, workshops, alumni meetups, and additional resources to ensure your continued growth in the field.'
  },
  {
    question: 'How is the course content updated?',
    answer: 'We regularly update our curriculum to reflect the latest trends and tools in the UI/UX industry.'
  },
  {
    question: 'Are there any scholarship opportunities or discounts?',
    answer: 'We do offer scholarships for deserving candidates. Please contact our Admissions Counsellor to know if you\'re eligible.'
  },
  {
    question: 'Are there any opportunities for further specialization after this course?',
    answer: 'Absolutely! We offer advanced modules and specialization courses in areas like user research, interaction design, and more.'
  },
  {
    question: 'Do you offer assistance to students looking to study abroad?',
    answer: 'Yes, we provide comprehensive portfolio building and interview training for University Admissions at places like Stanford University, New York University, University of Texas, and many more.'
  },
  {
    question: 'Do you offer job placement or internships after the course?',
    answer: 'Yes, we have partnerships with leading companies and offer placement assistance to all our students. We offer internships regularly to our top performing students after the course.'
  },
  {
    question: 'Do you provide freelance assistance?',
    answer: 'Yes, we provide complete freelance assistance to candidates who want to learn how to make more money by being their own boss.'
  },
  {
    question: 'What roles can I apply for after completing the course?',
    answer: 'Learners typically apply for UI Designer, UX Designer, Product Designer, and related roles.'
  },
  {
    question: 'Do you help with interviews and resumes?',
    answer: 'Yes. We support learners with resume reviews, portfolio guidance, and mock interviews.'
  },
  {
    question: 'How can someone verify my certificate?',
    answer: 'Certificates can be verified using our official verification page.'
  },
  {
    question: 'Are certificates valid for LinkedIn?',
    answer: 'Yes. Each certificate has a unique URL that can be added to LinkedIn.'
  },
  {
    question: 'Are sessions live or recorded?',
    answer: 'Sessions are mentor-led and live, with additional learning resources provided.'
  },
  {
    question: 'Will I receive feedback on my work?',
    answer: 'Yes. Regular feedback is a core part of the learning process.'
  },
  {
    question: 'Is Designient hiring?',
    answer: 'Yes. Open positions are listed on our Careers page.'
  },
  {
    question: 'How can I apply for a role?',
    answer: 'You can apply through the Careers page or contact our team.'
  }
]

// FAQPage Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
}

export default function FAQsPage() {
  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://designient.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'FAQs',
        item: 'https://designient.com/faqs'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[faqSchema, breadcrumbSchema]} />
      <Header />
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16" style={{ backgroundColor: '#f9fafb' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="font-display font-bold mb-6"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: '1.2'
                }}>
                Frequently Asked Questions
              </h1>
              <p
                className="font-body text-lg md:text-xl"
                style={{
                  color: '#4a4a4a',
                  lineHeight: '1.7',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                Everything you need to know about our UI/UX courses, mentorship, placements, and certifications.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-12" style={{ backgroundColor: 'white', borderBottom: '2px solid #e5e7eb' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2
                className="font-display font-bold mb-6 text-center"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                Quick Navigation
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#admissions-batches"
                  className="px-4 py-2 rounded-full font-body font-semibold transition-colors hover:opacity-80"
                  style={{ backgroundColor: '#f3f4f6', color: '#8458B3' }}>
                  Admissions & Batches
                </a>
                <a
                  href="#placements-careers"
                  className="px-4 py-2 rounded-full font-body font-semibold transition-colors hover:opacity-80"
                  style={{ backgroundColor: '#f3f4f6', color: '#8458B3' }}>
                  Placements & Careers
                </a>
                <a
                  href="#certifications-verification"
                  className="px-4 py-2 rounded-full font-body font-semibold transition-colors hover:opacity-80"
                  style={{ backgroundColor: '#f3f4f6', color: '#8458B3' }}>
                  Certifications & Verification
                </a>
                <a
                  href="#learning-experience"
                  className="px-4 py-2 rounded-full font-body font-semibold transition-colors hover:opacity-80"
                  style={{ backgroundColor: '#f3f4f6', color: '#8458B3' }}>
                  Learning Experience
                </a>
                <a
                  href="#scholarships-support"
                  className="px-4 py-2 rounded-full font-body font-semibold transition-colors hover:opacity-80"
                  style={{ backgroundColor: '#f3f4f6', color: '#8458B3' }}>
                  Scholarships & Support
                </a>
                <a
                  href="#careers-at-designient"
                  className="px-4 py-2 rounded-full font-body font-semibold transition-colors hover:opacity-80"
                  style={{ backgroundColor: '#f3f4f6', color: '#8458B3' }}>
                  Careers at Designient
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Admissions & Batches */}
              <div id="admissions-batches" className="scroll-mt-24">
                <h2
                  className="font-display font-bold mb-8 pb-4 border-b-2"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    borderColor: '#e5e7eb'
                  }}>
                  Admissions & Batches
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      How do I enrol in a course?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      You can apply through our website and speak with our team before confirming your enrolment.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      How long is the course?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Our UI/UX design courses span from 3 months for the Pro Course to 9 months for the Master Course, with regular classes and hands-on sessions.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Are there any course prerequisites?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      There are no strict prerequisites, just an eagerness to learn, basic communication skills, and a passion for creating user-centric designs.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Are weekday and weekend batches available?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Batch availability depends on the city and current schedule. Check individual city pages for specific batch options.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Do you offer online classes?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Yes, we provide both online and offline modes of learning to cater to our diverse student base across India and the World.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      What if I miss a class?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      We provide recorded sessions and supplementary materials for any classes you might miss.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Can I take a trial class before enrolling?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Yes, we offer demo sessions to give you a glimpse of our teaching style and course content.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Do you provide any course materials?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      All students receive course materials, including e-books, slide decks, and access to our online resources on a weekly basis, after the Live Class.
                    </p>
                  </div>
                </div>
              </div>

              {/* Placements & Careers */}
              <div id="placements-careers" className="scroll-mt-24">
                <h2
                  className="font-display font-bold mb-8 pb-4 border-b-2"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    borderColor: '#e5e7eb'
                  }}>
                  Placements & Careers
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Do you offer job placement or internships after the course?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Yes, we have partnerships with leading companies and offer placement assistance to all our students. We offer internships regularly to our top performing students after the course.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      What roles can I apply for after completing the course?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Learners typically apply for UI Designer, UX Designer, Product Designer, and related roles.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Do you help with interviews and resumes?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Yes. We support learners with resume reviews, portfolio guidance, and mock interviews.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Do you provide freelance assistance?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Yes, we provide complete freelance assistance to candidates who want to learn how to make more money by being their own boss.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Are there any opportunities for further specialization after this course?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Absolutely! We offer advanced modules and specialization courses in areas like user research, interaction design, and more.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Do you offer assistance to students looking to study abroad?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Yes, we provide comprehensive portfolio building and interview training for University Admissions at places like Stanford University, New York University, University of Texas, and many more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications & Verification */}
              <div id="certifications-verification" className="scroll-mt-24">
                <h2
                  className="font-display font-bold mb-8 pb-4 border-b-2"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    borderColor: '#e5e7eb'
                  }}>
                  Certifications & Verification
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      How can someone verify my certificate?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Certificates can be verified using our official verification page.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Are certificates valid for LinkedIn?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Yes. Each certificate has a unique URL that can be added to LinkedIn.
                    </p>
                  </div>
                </div>
              </div>

              {/* Learning Experience */}
              <div id="learning-experience" className="scroll-mt-24">
                <h2
                  className="font-display font-bold mb-8 pb-4 border-b-2"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    borderColor: '#e5e7eb'
                  }}>
                  Learning Experience
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Are sessions live or recorded?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Sessions are mentor-led and live, with additional learning resources provided.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Will I receive feedback on my work?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Yes. Regular feedback is a core part of the learning process.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Are there any group projects or team activities?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Yes, collaboration is a key part of our course. You'll work on group projects to simulate real-world team environments.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Is there any post-course support?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Certainly! We offer mentorship sessions, workshops, alumni meetups, and additional resources to ensure your continued growth in the field.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      How is the course content updated?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      We regularly update our curriculum to reflect the latest trends and tools in the UI/UX industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scholarships & Support */}
              <div id="scholarships-support" className="scroll-mt-24">
                <h2
                  className="font-display font-bold mb-8 pb-4 border-b-2"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    borderColor: '#e5e7eb'
                  }}>
                  Scholarships & Support
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Are there any scholarship opportunities or discounts?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      We do offer scholarships for deserving candidates. Please contact our Admissions Counsellor to know if you're eligible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Careers at Designient */}
              <div id="careers-at-designient" className="scroll-mt-24">
                <h2
                  className="font-display font-bold mb-8 pb-4 border-b-2"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    borderColor: '#e5e7eb'
                  }}>
                  Careers at Designient
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      Is Designient hiring?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      Yes. Open positions are listed on our Careers page.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3
                      className="font-display font-bold mb-3"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      How can I apply for a role?
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      You can apply through the Careers page or contact our team.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="font-display font-bold mb-6"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)'
                }}>
                Still have questions?
              </h2>
              <p
                className="font-body mb-8 text-lg"
                style={{
                  color: '#4a4a4a',
                  lineHeight: '1.7'
                }}>
                Get in touch with our team for personalized assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#8458B3' }}>
                  View Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold border-2 transition-colors hover:bg-purple-50"
                  style={{
                    borderColor: '#8458B3',
                    color: '#8458B3'
                  }}>
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
