'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart,
  Users,
  Target,
  Award,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  BookOpen,
  MessageCircle,
  FileText,
  Zap,
  Globe
} from 'react-feather'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CareerApplicationForm } from './CareerApplicationForm'
import { getWhatsAppUrl } from '../../utils/whatsapp'

const whyWorkItems = [
  {
    icon: Target,
    title: 'Purpose-driven work',
    description: 'Make a real difference in students\' careers'
  },
  {
    icon: Zap,
    title: 'Creative freedom',
    description: 'Shape curriculum and teaching methods'
  },
  {
    icon: Users,
    title: 'Direct impact on learners\' careers',
    description: 'See your mentorship transform lives'
  },
  {
    icon: Heart,
    title: 'A culture that values clarity, empathy, and craft',
    description: 'Work with like-minded professionals'
  }
]

const openPositions = [
  {
    id: 'ui-ux-mentor',
    role: 'UI/UX Design Mentor',
    location: 'Bangalore / Hyderabad',
    type: 'Full-time / Part-time',
    summary: 'Mentor students, guide real-world design projects, and help learners become job-ready designers.',
    about: 'We\'re looking for experienced UI/UX designers who are passionate about teaching and mentoring. You\'ll work directly with students, providing feedback on projects, conducting portfolio reviews, and helping them navigate their design careers.',
    responsibilities: [
      'Mentor students through live sessions and project reviews',
      'Provide constructive feedback on UI/UX portfolios',
      'Guide students on industry best practices and design thinking',
      'Conduct mock interviews and career counselling sessions',
      'Stay updated with latest design trends and tools'
    ],
    lookingFor: [
      '3+ years of professional UI/UX design experience',
      'Strong portfolio showcasing real-world projects',
      'Passion for teaching and mentoring',
      'Excellent communication and feedback skills',
      'Ability to explain complex design concepts clearly'
    ],
    bonusSkills: [
      'Experience with design systems',
      'Knowledge of AI tools in design workflow',
      'Previous teaching or mentoring experience',
      'Experience with Figma, Adobe XD, or similar tools'
    ],
    workMode: 'Hybrid (Onsite + Remote)'
  },
  {
    id: 'student-success',
    role: 'Community & Student Success Coordinator',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    summary: 'Support students throughout their learning journey and help build a strong design community.',
    about: 'As a Student Success Coordinator, you\'ll be the bridge between students and their learning goals. You\'ll help students stay motivated, resolve challenges, and build a supportive community of designers.',
    responsibilities: [
      'Monitor student progress and provide timely support',
      'Organize community events and networking sessions',
      'Coordinate between mentors and students',
      'Handle student inquiries and resolve issues',
      'Build and maintain a vibrant design community'
    ],
    lookingFor: [
      '2+ years of experience in student support or community management',
      'Strong organizational and communication skills',
      'Empathy and patience in working with learners',
      'Experience with CRM or student management systems',
      'Passion for education and student success'
    ],
    bonusSkills: [
      'Background in design or design education',
      'Experience with online learning platforms',
      'Event planning and community building experience',
      'Data analysis skills for tracking student outcomes'
    ],
    workMode: 'Remote / Hybrid'
  },
  {
    id: 'curriculum-specialist',
    role: 'Content & Curriculum Specialist – UI/UX',
    location: 'Remote',
    type: 'Contract / Full-time',
    summary: 'Create, refine, and improve UI/UX learning content and curriculum structure.',
    about: 'We need someone who can translate industry expertise into effective learning experiences. You\'ll create course content, design learning modules, and ensure our curriculum stays relevant and practical.',
    responsibilities: [
      'Develop and update UI/UX course curriculum',
      'Create learning materials, assignments, and projects',
      'Research and incorporate latest design trends',
      'Collaborate with mentors to refine content',
      'Ensure curriculum aligns with industry needs'
    ],
    lookingFor: [
      '5+ years of UI/UX design experience',
      'Strong understanding of design education',
      'Excellent writing and content creation skills',
      'Ability to structure complex topics into learnable modules',
      'Experience with curriculum design or instructional design'
    ],
    bonusSkills: [
      'Previous experience creating online courses',
      'Knowledge of learning management systems',
      'Experience with video content creation',
      'Understanding of adult learning principles'
    ],
    workMode: 'Remote'
  }
]

const hiringProcess = [
  {
    step: '1',
    title: 'Apply through the form or email',
    description: 'Send us your resume, portfolio, and a brief note about why you\'re interested.'
  },
  {
    step: '2',
    title: 'Initial conversation with our team',
    description: 'We\'ll have a friendly chat to understand your background and interests.'
  },
  {
    step: '3',
    title: 'Skill or portfolio discussion',
    description: 'We\'ll dive deeper into your experience and how it aligns with the role.'
  },
  {
    step: '4',
    title: 'Final conversation and offer',
    description: 'We\'ll discuss the role in detail and extend an offer if it\'s a good fit.'
  }
]

const faqs = [
  {
    question: 'Is teaching experience mandatory?',
    answer: 'While teaching experience is a bonus, it\'s not mandatory. We value industry experience, passion for mentoring, and the ability to communicate complex concepts clearly. We provide training and support to help you excel as a mentor.'
  },
  {
    question: 'Are roles remote or onsite?',
    answer: 'We offer flexible work arrangements. Most roles support remote work, with some positions requiring occasional onsite presence in Bangalore or Hyderabad. Specific work arrangements are mentioned in each job posting.'
  },
  {
    question: 'Do you hire freshers?',
    answer: 'We primarily look for experienced professionals who can mentor students effectively. However, for certain support roles, we may consider candidates with relevant skills and a strong passion for design education.'
  },
  {
    question: 'What growth opportunities exist at Designient?',
    answer: 'Designient is a growing organization. We offer opportunities to take on leadership roles, shape curriculum, contribute to strategic decisions, and grow your career in design education. We believe in investing in our team\'s professional development.'
  }
]

export function CareersContent() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center pt-20 md:pt-24" 
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="careers-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 mb-6 text-sm" style={{ color: '#6B7280' }}>
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Careers</span>
            </div>

            <motion.h1
              id="careers-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold tracking-wide leading-tight mb-6"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700
              }}>
              Careers at Designient – We Are Hiring
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl mb-8 leading-relaxed"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.8'
              }}>
              Join a team that&apos;s shaping the future of UI/UX education through mentorship, creativity, and real-world impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Work at Designient */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <h2
                className="font-display font-bold mb-6"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)'
                }}>
                Why Work at Designient
              </h2>
              <p
                className="font-body leading-relaxed mb-8"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                Designient is built for people who care deeply about learning, design, and growth.
                We believe great education comes from practitioners who love teaching, mentoring, and building meaningful careers for others.
              </p>
              <p
                className="font-body leading-relaxed mb-8"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                Working at Designient means:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {whyWorkItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gray-50 rounded-xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#8458B3' }}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3
                        className="font-display font-bold mb-2"
                        style={{
                          color: '#1a1a1a',
                          fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                        }}>
                        {item.title}
                      </h3>
                      <p
                        className="font-body leading-relaxed"
                        style={{
                          color: '#4a4a4a',
                          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                          lineHeight: '1.7'
                        }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at Designient */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Users
                    className="w-8 h-8"
                    style={{
                      color: '#8458B3',
                      strokeWidth: 2.5
                    }} />
                </div>
                <h2
                  className="font-display font-bold tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  Life at Designient
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none">
              <p
                className="font-body leading-relaxed text-center"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                At Designient, we work in small, focused teams.
                We value thoughtful discussions, honest feedback, and continuous learning.
                Whether you&apos;re mentoring students, building curriculum, or supporting operations, your work directly shapes someone&apos;s future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <h2
                className="font-display font-bold mb-6"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)'
                }}>
                Who We&apos;re Looking For
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4">
              {[
                'Care about quality over shortcuts',
                'Enjoy mentoring and sharing knowledge',
                'Believe learning should be practical and human',
                'Are comfortable taking ownership of their work'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <span
                    className="font-body leading-relaxed"
                    style={{
                      color: '#1a1a1a',
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.7'
                    }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#8458B3',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              Open Positions
            </h2>
            <p
              className="font-body text-lg max-w-2xl mx-auto"
              style={{ color: '#4a4a4a' }}>
              Join us in shaping the future of design education
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                id={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow scroll-mt-24">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    {position.id === 'ui-ux-mentor' ? (
                      <Link href="/careers/ui-ux-mentor">
                        <h3
                          className="font-display font-bold mb-2 hover:text-[#8458B3] transition-colors cursor-pointer"
                          style={{
                            color: '#1a1a1a',
                            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)'
                          }}>
                          {position.role}
                        </h3>
                      </Link>
                    ) : position.id === 'student-success' ? (
                      <Link href="/careers/student-success-coordinator">
                        <h3
                          className="font-display font-bold mb-2 hover:text-[#8458B3] transition-colors cursor-pointer"
                          style={{
                            color: '#1a1a1a',
                            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)'
                          }}>
                          {position.role}
                        </h3>
                      </Link>
                    ) : position.id === 'curriculum-specialist' ? (
                      <Link href="/careers/curriculum-designer">
                        <h3
                          className="font-display font-bold mb-2 hover:text-[#8458B3] transition-colors cursor-pointer"
                          style={{
                            color: '#1a1a1a',
                            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)'
                          }}>
                          {position.role}
                        </h3>
                      </Link>
                    ) : (
                      <h3
                        className="font-display font-bold mb-2"
                        style={{
                          color: '#1a1a1a',
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)'
                        }}>
                        {position.role}
                      </h3>
                    )}
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" style={{ color: '#6b7280' }} />
                        <span className="font-body text-sm" style={{ color: '#6b7280' }}>
                          {position.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" style={{ color: '#6b7280' }} />
                        <span className="font-body text-sm" style={{ color: '#6b7280' }}>
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      {position.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {position.id === 'ui-ux-mentor' && (
                    <Link
                      href="/careers/ui-ux-mentor"
                      className="inline-flex items-center gap-2 font-body font-semibold text-sm transition-colors hover:text-[#8458B3]"
                      style={{ color: '#8458B3' }}>
                      View Full Job Description
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  {position.id === 'student-success' && (
                    <Link
                      href="/careers/student-success-coordinator"
                      className="inline-flex items-center gap-2 font-body font-semibold text-sm transition-colors hover:text-[#8458B3]"
                      style={{ color: '#8458B3' }}>
                      View Full Job Description
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  {position.id === 'curriculum-specialist' && (
                    <Link
                      href="/careers/curriculum-designer"
                      className="inline-flex items-center gap-2 font-body font-semibold text-sm transition-colors hover:text-[#8458B3]"
                      style={{ color: '#8458B3' }}>
                      View Full Job Description
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  <button
                    onClick={() => setExpandedRole(expandedRole === position.id ? null : position.id)}
                    className="inline-flex items-center gap-2 font-body font-semibold text-sm transition-colors hover:text-[#8458B3]"
                    style={{ color: '#8458B3' }}>
                    {expandedRole === position.id ? 'Show Less' : 'View Details'}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${expandedRole === position.id ? 'rotate-90' : ''}`}
                    />
                  </button>
                </div>

                {expandedRole === position.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t"
                    style={{ borderColor: '#e5e7eb' }}>
                    <div className="space-y-6">
                      <div>
                        <h4
                          className="font-display font-bold mb-3"
                          style={{
                            color: '#1a1a1a',
                            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                          }}>
                          About the Role
                        </h4>
                        <p
                          className="font-body leading-relaxed"
                          style={{
                            color: '#4a4a4a',
                            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                            lineHeight: '1.7'
                          }}>
                          {position.about}
                        </p>
                      </div>

                      <div>
                        <h4
                          className="font-display font-bold mb-3"
                          style={{
                            color: '#1a1a1a',
                            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                          }}>
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                              <span
                                className="font-body"
                                style={{
                                  color: '#4a4a4a',
                                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                                  lineHeight: '1.7'
                                }}>
                                {responsibility}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4
                          className="font-display font-bold mb-3"
                          style={{
                            color: '#1a1a1a',
                            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                          }}>
                          What We&apos;re Looking For
                        </h4>
                        <ul className="space-y-2">
                          {position.lookingFor.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                              <span
                                className="font-body"
                                style={{
                                  color: '#4a4a4a',
                                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                                  lineHeight: '1.7'
                                }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {position.bonusSkills && position.bonusSkills.length > 0 && (
                        <div>
                          <h4
                            className="font-display font-bold mb-3"
                            style={{
                              color: '#1a1a1a',
                              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                            }}>
                            Bonus Skills
                          </h4>
                          <ul className="space-y-2">
                            {position.bonusSkills.map((skill, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Award className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#f2d53c' }} />
                                <span
                                  className="font-body"
                                  style={{
                                    color: '#4a4a4a',
                                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                                    lineHeight: '1.7'
                                  }}>
                                  {skill}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5" style={{ color: '#6b7280' }} />
                        <span
                          className="font-body"
                          style={{
                            color: '#4a4a4a',
                            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                          }}>
                          <strong>Work Mode:</strong> {position.workMode}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Hiring Process Works */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#8458B3',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              How Our Hiring Process Works
            </h2>
            <p
              className="font-body text-lg max-w-2xl mx-auto"
              style={{ color: '#4a4a4a' }}>
              We keep our hiring process transparent and respectful of your time.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {hiringProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-white"
                    style={{
                      backgroundColor: '#8458B3',
                      fontSize: 'clamp(1.25rem, 2vw, 1.75rem)'
                    }}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-display font-bold mb-2"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.25rem, 2vw, 1.75rem)'
                      }}>
                      {step.title}
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* City-Specific Hiring Blocks */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#8458B3',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              City-Specific Opportunities
            </h2>
            <p
              className="font-body text-lg max-w-2xl mx-auto"
              style={{ color: '#4a4a4a' }}>
              We&apos;re actively hiring across multiple cities. Find opportunities in your location.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Bangalore Hiring Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-[#8458B3] to-[#a67fd4] rounded-xl p-6 md:p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-8 h-8" style={{ color: '#f2d53c' }} />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-display font-bold mb-3"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      color: '#f2d53c'
                    }}>
                    HIRING IN BANGALORE
                  </h3>
                  <p
                    className="font-body leading-relaxed mb-4"
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.7',
                      opacity: 0.95
                    }}>
                    Bangalore is at the heart of India&apos;s product and startup ecosystem.
                    We&apos;re actively hiring mentors and team members who understand real-world UX, fast-paced environments, and product thinking.
                  </p>
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.7',
                      opacity: 0.95
                    }}>
                    If you&apos;re based in Bangalore and passionate about design education, we&apos;d love to work with you.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hyderabad Hiring Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-[#8458B3] to-[#a67fd4] rounded-xl p-6 md:p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-8 h-8" style={{ color: '#f2d53c' }} />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-display font-bold mb-3"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      color: '#f2d53c'
                    }}>
                    HIRING IN HYDERABAD
                  </h3>
                  <p
                    className="font-body leading-relaxed mb-4"
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.7',
                      opacity: 0.95
                    }}>
                    Hyderabad is a growing hub for technology, services, and product innovation.
                    We&apos;re expanding our mentor and support teams here to help shape the next generation of UI/UX designers.
                  </p>
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.7',
                      opacity: 0.95
                    }}>
                    Local candidates with strong UX fundamentals and mentoring mindset are encouraged to apply.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pune Hiring Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-6 md:p-8 border-2"
              style={{ borderColor: '#8458B3' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-8 h-8" style={{ color: '#8458B3' }} />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-display font-bold mb-3"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      color: '#8458B3'
                    }}>
                    HIRING IN PUNE
                  </h3>
                  <p
                    className="font-body leading-relaxed mb-4"
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: '#4a4a4a'
                    }}>
                    We occasionally onboard mentors and contributors from Pune, especially for weekend or hybrid roles.
                  </p>
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.7',
                      color: '#4a4a4a'
                    }}>
                    If you&apos;re based in Pune and interested in teaching or supporting UI/UX learners, reach out.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Don't See Your Role? */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <MessageCircle
                    className="w-8 h-8"
                    style={{
                      color: '#8458B3',
                      strokeWidth: 2.5
                    }} />
                </div>
                <h2
                  className="font-display font-bold tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  Don&apos;t See Your Role?
                </h2>
              </div>
              <p
                className="font-body leading-relaxed mb-8"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                If you believe you can contribute to Designient but don&apos;t see a matching role, we&apos;d still love to hear from you.
                Send us your profile and tell us how you&apos;d like to contribute.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <CareerApplicationForm roleName="General Application" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Careers FAQs */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#8458B3',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              Careers FAQs
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-gray-50 rounded-xl p-6">
                <h3
                  className="font-display font-bold mb-3"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                  }}>
                  {faq.question}
                </h3>
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: '#4a4a4a',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.7'
                  }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#8458B3' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white">
            <h2
              className="font-display font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Interested in Working with Us?
            </h2>
            <p
              className="font-body mb-8 text-lg opacity-90"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
              Send your resume or portfolio to careers@designient.com or reach out through our contact page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA: WhatsApp */}
              <a
                href={getWhatsAppUrl({ type: 'careers', sourcePage: pathname })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 min-h-[44px]"
                style={{
                  backgroundColor: '#f2d53c',
                  color: '#1a1a1a',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              {/* Secondary: Email */}
              <a
                href="mailto:careers@designient.com"
                className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-white/10 min-h-[44px]"
                style={{
                  borderColor: 'white',
                  color: 'white',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                <Mail className="w-5 h-5" />
                Email Us
              </a>

              {/* Tertiary: Contact Page */}
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-white/10 min-h-[44px]"
                style={{
                  borderColor: 'white',
                  color: 'white',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                <MessageCircle className="w-5 h-5" />
                Contact Page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
