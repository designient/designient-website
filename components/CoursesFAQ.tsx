'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'react-feather';
import Link from 'next/link';
const faqs = [
{
  question: 'How do I choose between Pro and Bootcamp?',
  answer:
  'Choose the Bootcamp if you want a quick introduction to UI/UX in 30 days. Choose Pro if you want comprehensive training with more depth, hands-on projects, and better placement support over 3 months.'
},
{
  question: 'Can I upgrade from Bootcamp to Pro later?',
  answer:
  "Yes! If you complete the Bootcamp and want to continue, you can upgrade to the Pro course. We'll credit your Bootcamp fee towards the Pro course tuition."
},
{
  question: "What's the difference between Pro and Master?",
  answer:
  'Pro is designed for beginners to intermediate learners focusing on core UI/UX skills. Master is for intermediate to advanced designers who want to specialize in design systems, leadership, and advanced techniques.'
},
{
  question: 'Do I need prior design experience?',
  answer:
  'No prior experience is needed for Bootcamp or Pro courses. The Master Program requires intermediate-level design knowledge or completion of our Pro course.'
},
{
  question: "What if I'm not sure which course fits my goals?",
  answer:
  "Schedule a free consultation with our course advisors. They'll assess your background, goals, and timeline to recommend the best path for you."
},
{
  question: 'Can I switch courses after enrolling?',
  answer:
  "Yes, within the first week of the course, you can switch to a different program if you feel it's a better fit. Contact our admissions team for assistance."
}];

export function CoursesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section
      className="py-24 md:py-32"
      style={{
        backgroundColor: '#fceed1'
      }}>

      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.3
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="text-center mb-12">

          <h2
            className="font-display tracking-wide leading-tight mb-4"
            style={{
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>

            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="bg-white rounded-xl overflow-hidden"
            style={{
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              borderLeft:
              openIndex === index ?
              '4px solid #8458B3' :
              '4px solid transparent'
            }}>

              <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
              style={{
                backgroundColor: openIndex === index ? '#FFF6E2' : 'white'
              }}>

                <span
                className="text-base md:text-lg font-semibold pr-4"
                style={{
                  color: '#1F2937'
                }}>

                  {faq.question}
                </span>
                <motion.div
                animate={{
                  rotate: openIndex === index ? 180 : 0
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}>

                  <ChevronDown
                  className="w-5 h-5 flex-shrink-0"
                  style={{
                    color: '#8458B3'
                  }} />

                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="overflow-hidden">

                    <div className="px-6 pb-5 pt-2">
                      <p
                    className="text-sm md:text-base leading-[1.7]"
                    style={{
                      color: '#4B5563'
                    }}>
                        {faq.answer}
                        {faq.question.includes("not sure") && (
                          <> For teams or enterprise training needs, explore our <Link href="/corporates/training-programs" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>corporate training programs</Link>.</>
                        )}
                      </p>
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}