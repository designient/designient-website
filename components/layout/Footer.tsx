import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const courseLinks = [
  { label: 'UI/UX Design Pro', href: '/ui-ux-design-pro' },
  { label: 'UI/UX Design Bootcamp', href: '/ui-ux-design-bootcamp' },
  { label: 'UI/UX Design Master', href: '/ui-ux-design-master' },
  { label: 'AI Prompt Engineering', href: '/prompt-engineering-mastery' },
  { label: 'All Courses', href: '/courses' },
]

const companyLinks = [
  { label: 'About', href: '/about-us' },
  { label: 'Placements', href: '/placements' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Careers', href: '/careers' },
  { label: 'Corporates', href: '/corporates' },
]

const supportLinks = [
  { label: 'Contact', href: '/contact-us' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Apply Now', href: '/apply-now' },
  { label: 'Verify Certificate', href: '/verify' },
  { label: 'Accessibility', href: '/accessibility' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/cancellation-refund-policy' },
  { label: 'Code of Conduct', href: '/code-of-conduct' },
  { label: 'Disclaimer', href: '/disclaimer' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/designient', short: 'in' },
  { label: 'Instagram', href: 'https://www.instagram.com/designient', short: 'ig' },
  { label: 'Facebook', href: 'https://www.facebook.com/designient', short: 'fb' },
  { label: 'Twitter', href: 'https://twitter.com/designient', short: 'tw' },
]

export function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-white/[0.06] mt-16">
      <div className="max-w-container mx-auto container-px pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" aria-label="Designient — Home" className="inline-flex items-center">
              <Image
                src="/designient-logo.svg"
                alt="Designient"
                width={160}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-5 text-cloud max-w-[34ch] text-[15px] leading-[1.7]">
              School of Masterminds. Design careers built by masters, not machines.
              Small-batch mentorship. AI-integrated curriculum.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-[14px] text-silver">
              <a
                href="mailto:hello@designient.com"
                className="inline-flex items-center gap-2 hover:text-neon transition-colors"
              >
                <Mail size={14} strokeWidth={1.5} />
                hello@designient.com
              </a>
              <a
                href="tel:+919353000320"
                className="inline-flex items-center gap-2 hover:text-neon transition-colors"
              >
                <Phone size={14} strokeWidth={1.5} />
                +91 9353 000 320
              </a>
              <span className="inline-flex items-start gap-2">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" />
                Bangalore · Hyderabad · Pune · Online
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="overline mb-5">Courses</h4>
            <ul className="space-y-3">
              {courseLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-cloud hover:text-neon transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="overline mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-cloud hover:text-neon transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="overline mb-5">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-cloud hover:text-neon transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/[0.06] my-10" />

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <p className="text-[13px] text-ash">
              © {new Date().getFullYear()} Designient Technologies Pvt. Ltd. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-ash hover:text-neon transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[13px] text-ash">Proudly made in India 🇮🇳</span>
            <div className="flex items-center gap-1">
              {socials.map(({ label, href, short }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 grid place-items-center rounded-full border border-white/10 text-[12px] font-medium text-silver hover:text-neon hover:border-neon/30 transition-colors uppercase"
                >
                  {short}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
