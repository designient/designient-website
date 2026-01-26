'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'react-feather';
const testimonials = [
{
  name: 'Arpita Dhir',
  role: 'UI/UX Designer',
  company: 'Tech Company',
  image:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  quote:
  'The course transformed my career. The hands-on projects and mentorship helped me land my dream job in just 3 months.',
  type: 'text'
},
{
  name: 'Sundarapandi M',
  role: 'Product Designer',
  company: 'Startup',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  quote:
  'Excellent curriculum with real-world focus. The instructors are industry experts who genuinely care about your success.',
  type: 'video',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
},
{
  name: 'Priya Sridaran',
  role: 'UX Researcher',
  company: 'Enterprise',
  image:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  quote:
  'Best investment I made in my career. The placement support was outstanding and I got multiple offers.',
  type: 'text'
},
{
  name: 'Jayashree Babu',
  role: 'UI Designer',
  company: 'Agency',
  image:
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  quote:
  'The portfolio projects were incredible. I learned so much and built confidence to present my work professionally.',
  type: 'video',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
},
{
  name: 'Harish Mallemala',
  role: 'Design Lead',
  company: 'Product Company',
  image:
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  quote:
  'From beginner to design lead in one year. The course gave me the foundation and the community gave me the support.',
  type: 'text'
}];

export function TestimonialsSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{
        backgroundColor: '#fceed1'
      }}>

      <div className="max-w-container mx-auto px-3 md:px-4">
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
          className="mb-16 md:mb-24">

          <h2
            className="font-display tracking-wide leading-tight mb-6 text-center"
            style={{
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>

            SUCCESS STORIES
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-2xl mx-auto font-normal text-center"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>

            Hear from our students who transformed their careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="group relative rounded-2xl border-2 shadow-sm overflow-hidden"
            style={{
              backgroundColor: 'white',
              borderColor: '#f4e4c1'
            }}>
            {testimonial.type === 'video' ? (
              <div className="aspect-video">
                <iframe
                  src={testimonial.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${testimonial.name} testimonial video`}
                />
              </div>
            ) : null}
            <div className={`p-8 md:p-10 ${testimonial.type === 'video' ? '' : ''}`}>
              {testimonial.type === 'text' ? (
                <>
                  <MessageCircle
                  className="w-12 h-12 mb-6"
                  style={{
                    color: '#8458B3'
                  }} />

                  <p
                  className="font-body text-lg leading-relaxed mb-8 font-normal"
                  style={{
                    color: '#4a4a4a',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.7'
                  }}>

                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </>
              ) : null}

              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <img
                src={testimonial.image}
                alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company} - Designient student testimonial`}
                width="64"
                height="64"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 flex-shrink-0"
                style={{
                  borderColor: '#f2d53c'
                }} />

                <div className="min-w-0 flex-1">
                  <h4
                  className="font-display tracking-wide mb-1"
                  style={{
                    color: '#1a1a1a',
                    fontWeight: 600,
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)'
                  }}>

                    {testimonial.name.toUpperCase()}
                  </h4>
                  <p
                  className="font-body font-normal"
                  style={{
                    color: '#6a6a6a',
                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                    lineHeight: '1.6'
                  }}>

                    {testimonial.role}
                  </p>
                </div>
              </div>

              {testimonial.type === 'text' ? (
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) =>
                <Star
                  key={i}
                  className="w-4 h-4 fill-current"
                  style={{
                    color: '#f2d53c'
                  }} />

                )}
                </div>
              ) : null}
            </div>
          </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {testimonials.slice(3).map((testimonial, index) =>
          <motion.div
            key={index + 3}
            initial={{
              opacity: 0,
              y: 60
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="group relative rounded-2xl border-2 shadow-sm overflow-hidden"
            style={{
              backgroundColor: 'white',
              borderColor: '#f4e4c1'
            }}>
            {testimonial.type === 'video' ? (
              <div className="aspect-video">
                <iframe
                  src={testimonial.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${testimonial.name} testimonial video`}
                />
              </div>
            ) : null}
            <div className={`p-8 md:p-10 ${testimonial.type === 'video' ? '' : ''}`}>
              {testimonial.type === 'text' ? (
                <>
                  <MessageCircle
                  className="w-12 h-12 mb-6"
                  style={{
                    color: '#8458B3'
                  }} />

                  <p
                  className="font-body text-lg leading-relaxed mb-8 font-normal"
                  style={{
                    color: '#4a4a4a',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.7'
                  }}>

                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </>
              ) : null}

              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <img
                src={testimonial.image}
                alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company} - Designient student testimonial`}
                width="64"
                height="64"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 flex-shrink-0"
                style={{
                  borderColor: '#f2d53c'
                }} />

                <div className="min-w-0 flex-1">
                  <h4
                  className="font-display tracking-wide mb-1"
                  style={{
                    color: '#1a1a1a',
                    fontWeight: 600,
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)'
                  }}>

                    {testimonial.name.toUpperCase()}
                  </h4>
                  <p
                  className="font-body font-normal"
                  style={{
                    color: '#6a6a6a',
                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                    lineHeight: '1.6'
                  }}>

                    {testimonial.role}
                  </p>
                </div>
              </div>

              {testimonial.type === 'text' ? (
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) =>
                <Star
                  key={i}
                  className="w-4 h-4 fill-current"
                  style={{
                    color: '#f2d53c'
                  }} />

                )}
                </div>
              ) : null}
            </div>
          </motion.div>
          )}
        </div>
      </div>
    </section>);

}