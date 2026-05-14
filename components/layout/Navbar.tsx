'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '../ui/Button'

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string; meta?: string }[]
}

const NAV: NavItem[] = [
  {
    label: 'Courses',
    href: '/courses',
    children: [
      { label: 'UI/UX Design Pro', href: '/ui-ux-design-pro', meta: '3 Months · 124 hrs' },
      { label: 'UI/UX Design Bootcamp', href: '/ui-ux-design-bootcamp', meta: '30 Days · 36 hrs' },
      { label: 'UI/UX Design Master', href: '/ui-ux-design-master', meta: '6 Months · 200+ hrs' },
      { label: 'AI Prompt Engineering', href: '/prompt-engineering-mastery', meta: 'Flexible' },
    ],
  },
  { label: 'Placements', href: '/placements' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'About', href: '/about-us' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact', href: '/contact-us' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDropdown(null)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out-expo border-b ${
          scrolled
            ? 'bg-void/90 backdrop-blur-md border-white/[0.06] shadow-md-dark'
            : 'bg-void/70 backdrop-blur-md border-transparent'
        }`}
      >
        <div className="max-w-container mx-auto container-px h-[72px] flex items-center justify-between gap-8">
          <Link href="/" aria-label="Designient — Home" className="flex items-center gap-2 z-10">
            <Image
              src="/designient-logo.svg"
              alt="Designient"
              width={140}
              height={28}
              priority
              className="h-7 w-auto"
            />
          </Link>

          <nav className="hidden nav:flex items-center gap-1" aria-label="Primary">
            {NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.children?.some((c) => c.href === pathname) ?? false)
              if (item.children) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setDropdown(item.label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-4 py-2 text-[14.5px] font-normal transition-colors ${
                        active ? 'text-ivory' : 'text-silver hover:text-ivory'
                      }`}
                      aria-expanded={dropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        strokeWidth={1.5}
                        className={`transition-transform duration-200 ${
                          dropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[360px] origin-top transition-all duration-200 ${
                        dropdown === item.label
                          ? 'opacity-100 scale-100 pointer-events-auto'
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      <div className="rounded-lg bg-obsidian border-subtle shadow-lg-dark p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block rounded-md px-4 py-3 transition-colors hover:bg-white/[0.04] group"
                          >
                            <div className="text-ivory text-[15px] font-medium group-hover:text-amber transition-colors">
                              {c.label}
                            </div>
                            {c.meta ? (
                              <div className="text-ash text-[12px] mt-0.5 tracking-wide uppercase">
                                {c.meta}
                              </div>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-[14.5px] font-normal transition-colors ${
                    active ? 'text-ivory' : 'text-silver hover:text-ivory'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden nav:flex items-center">
            <Button href="/apply-now" size="sm">
              Apply Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="nav:hidden flex items-center justify-center w-10 h-10 rounded-md text-ivory z-10"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 nav:hidden bg-void transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div className="h-[72px]" />
        <nav className="px-6 py-8 flex flex-col gap-1 max-h-[calc(100vh-72px)] overflow-y-auto" aria-label="Mobile">
          {NAV.map((item) => (
            <div key={item.href} className="py-2 border-b border-white/[0.06]">
              <Link
                href={item.href}
                className="block py-3 font-serif text-display-sm text-ivory hover:text-amber transition-colors"
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="pl-1 pb-3 flex flex-col gap-2">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="text-silver text-[15px] hover:text-amber transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="mt-8">
            <Button href="/apply-now" fullWidth>
              Apply Now
            </Button>
          </div>
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-[72px]" aria-hidden="true" />
    </>
  )
}
