'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, Clock, ArrowLeft, ExternalLink, Download, Copy } from 'react-feather'
import certificatesData from '../../data/certificates.json'

// LinkedIn company numeric ID for https://www.linkedin.com/company/designient-school
const LINKEDIN_ORG_ID = '13247291'

interface Certificate {
  certificateId: string
  hash: string
  studentName: string
  admissionId?: string
  courseName: string
  duration: string
  year: string
  issueDate: string
  expiryDate: string | null
  status: string
  reissuedFrom: string | null
  /** When status is reissued, hash of the new certificate (link to latest). */
  reissuedTo?: string | null
  institute: string
  credentialUrl: string
  signature: string
  lastUpdated: string
}

function formatCertificateDate(isoDate: string): string {
  const d = new Date(isoDate)
  const day = d.getDate()
  const month = d.toLocaleString('en-GB', { month: 'long' })
  const year = d.getFullYear()
  const ord =
    day === 1 || day === 21 || day === 31
      ? 'st'
      : day === 2 || day === 22
        ? 'nd'
        : day === 3 || day === 23
          ? 'rd'
          : 'th'
  return `${day}${ord} ${month} ${year}`
}

function getStatusConfig(status: string) {
  const s = (status || '').toLowerCase()
  if (s === 'active') {
    return {
      header: 'Verified Digital Certificate',
      message: 'Certificate is valid and verified',
      color: '#059669',
      bgColor: '#ecfdf5',
      icon: CheckCircle,
    }
  }
  if (s === 'revoked') {
    return {
      header: 'Certificate Revoked',
      message: 'Certificate has been revoked by Designient',
      color: '#dc2626',
      bgColor: '#fef2f2',
      icon: XCircle,
    }
  }
  if (s === 'expired') {
    return {
      header: 'Certificate Expired',
      message: 'Certificate has expired but remains as proof of completion',
      color: '#d97706',
      bgColor: '#fffbeb',
      icon: Clock,
    }
  }
  if (s === 'reissued') {
    return {
      header: 'Certificate Re-Issued',
      message: 'Link to latest certificate',
      color: '#7c3aed',
      bgColor: '#f5f3ff',
      icon: AlertCircle,
    }
  }
  return {
    header: 'Verified Digital Certificate',
    message: 'Certificate is valid and verified',
    color: '#374151',
    bgColor: '#f9fafb',
    icon: CheckCircle,
  }
}

export function CertificateDisplay({ hash }: { hash: string }) {
  const [certificate, setCertificate] = useState<Certificate | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [copyFeedback, setCopyFeedback] = useState(false)
  const certRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const normalizedHash = hash?.trim().toLowerCase()
    if (!normalizedHash) {
      setError('Invalid certificate link.')
      setIsLoading(false)
      return
    }

    const cert = (certificatesData as Certificate[]).find(
      (c) => c.hash.toLowerCase() === normalizedHash
    )

    if (cert) {
      setCertificate(cert as Certificate)
    } else {
      setError('Invalid certificate')
    }
    setIsLoading(false)
  }, [hash])

  const handleCopyLink = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : certificate?.credentialUrl ?? ''
    try {
      await navigator.clipboard.writeText(url)
      setCopyFeedback(true)
      setTimeout(() => setCopyFeedback(false), 2000)
    } catch {
      setCopyFeedback(false)
    }
  }

  const handlePrint = () => {
    if (typeof document !== 'undefined' && certificate) {
      const prev = document.title
      document.title = `Designient-Certificate-${certificate.certificateId}.pdf`
      window.print()
      document.title = prev
    } else {
      window.print()
    }
  }

  if (isLoading) {
    return (
      <section
        className="pt-24 md:pt-32 pb-16"
        aria-label="Certificate verification"
        aria-busy="true"
        aria-live="polite"
      >
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center py-16">
            <p className="font-body text-lg" style={{ color: '#6b7280' }}>
              Verifying certificate…
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (error || !certificate) {
    return (
      <section
        className="pt-24 md:pt-32 pb-16"
        style={{ backgroundColor: '#FFF6E2' }}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center py-12">
            <div className="p-6 rounded-xl mb-6" style={{ backgroundColor: '#fef2f2' }}>
              <XCircle className="w-12 h-12 mx-auto mb-4" style={{ color: '#dc2626' }} aria-hidden />
              <h2 className="font-display font-bold text-xl mb-2" style={{ color: '#991b1b' }}>
                Invalid certificate
              </h2>
              <p className="font-body text-base mb-6" style={{ color: '#7f1d1d', lineHeight: 1.6 }}>
                {error || 'No certificate matches this link. Please check the URL or verify using our form.'}
              </p>
              <Link
                href="/verify"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
                style={{ backgroundColor: '#8458B3' }}
              >
                <ArrowLeft className="w-4 h-4" aria-hidden />
                Back to verification
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const statusConfig = getStatusConfig(certificate.status)
  const StatusIcon = statusConfig.icon
  const statusLower = certificate.status.toLowerCase()
  const isActive = statusLower === 'active'
  const isExpired = statusLower === 'expired'
  const isReissued = statusLower === 'reissued'
  const canDownloadPdf = isActive || isExpired
  const verificationUrl = typeof window !== 'undefined' ? window.location.href : certificate.credentialUrl
  const linkedInCertName = `${certificate.courseName} Certificate`
  const issueMonth = new Date(certificate.issueDate).getMonth() + 1 // 1–12
  const issueYear = certificate.year
  const linkedInOrgParam = LINKEDIN_ORG_ID
    ? `organizationId=${encodeURIComponent(LINKEDIN_ORG_ID)}`
    : `organizationName=${encodeURIComponent(certificate.institute)}`
  const linkedInUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(linkedInCertName)}&${linkedInOrgParam}&issueYear=${issueYear}&issueMonth=${issueMonth}&certUrl=${encodeURIComponent(verificationUrl)}&certId=${encodeURIComponent(certificate.certificateId)}`
  const latestCertHash = certificate.reissuedTo?.trim()
  const latestCertUrl = latestCertHash ? `/verify/uxp/${encodeURIComponent(latestCertHash)}` : null

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @page { size: A4 landscape; margin: 12mm; }
        @media print {
          header, footer, [role="banner"], .skip-print, .no-print, nav { display: none !important; }
          html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; height: 100% !important; }
          .certificate-print-section {
            padding: 0 !important; margin: 0 !important; background: #fff !important;
            min-height: 100vh !important; height: 100vh !important; max-height: 100vh !important;
            display: flex !important; align-items: center !important; justify-content: center !important;
            overflow: hidden !important;
          }
          .certificate-print-section > div,
          .certificate-print-section > div > div {
            max-width: none !important; width: 100% !important; margin: 0 !important;
            display: flex !important; align-items: center !important; justify-content: center !important;
            flex: 1 !important;
          }
          #certificate-to-print {
            box-shadow: none !important; border: 2px solid #1a1a1a !important;
            transform: scale(var(--cert-print-scale, 0.88)) !important;
            transform-origin: center center !important;
          }
        }
      `}} />
      <section
        className="pt-24 md:pt-32 pb-8 certificate-print-section"
        style={{ backgroundColor: '#FFF6E2' }}
        aria-label="Certificate details"
      >
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[1100px] mx-auto"
          >
            <div
              className="skip-print p-6 rounded-xl mb-6 flex items-start gap-4"
              style={{ backgroundColor: statusConfig.bgColor }}
              role="status"
              aria-live="polite"
            >
              <StatusIcon className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: statusConfig.color }} aria-hidden />
              <div>
                <h2 className="font-display font-bold text-xl mb-2" style={{ color: statusConfig.color }}>
                  {statusLower === 'active' && '✔ '}
                  {statusLower === 'reissued' && '🔁 '}
                  {statusLower === 'revoked' && '❌ '}
                  {statusLower === 'expired' && '⏳ '}
                  {statusConfig.header}
                </h2>
                <p className="font-body text-sm" style={{ color: statusConfig.color }}>
                  {statusConfig.message}
                </p>
                {isReissued && latestCertUrl && (
                  <p className="font-body text-sm mt-2">
                    <Link
                      href={latestCertUrl}
                      className="underline font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 rounded"
                      style={{ color: statusConfig.color }}
                    >
                      View latest certificate →
                    </Link>
                  </p>
                )}
                {isReissued && !latestCertUrl && (
                  <p className="font-body text-sm mt-2" style={{ color: statusConfig.color }}>
                    Contact us for the latest certificate link.
                  </p>
                )}
              </div>
            </div>
            <p className="skip-print font-body text-xs mb-4" style={{ color: '#6b7280' }} role="complementary">
              This is a digitally verified certificate issued by Designient School of Masterminds.
            </p>

            <div className="skip-print flex flex-wrap items-center gap-3 mb-6">
              <Link
                href="/verify"
                className="inline-flex items-center gap-2 font-body text-sm font-medium px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-400"
                style={{ borderColor: '#e5e7eb', color: '#374151' }}
              >
                <ArrowLeft className="w-4 h-4" aria-hidden />
                Verify another certificate
              </Link>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 font-body text-sm font-medium px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-400"
                style={{ borderColor: '#e5e7eb', color: '#374151' }}
                aria-label={copyFeedback ? 'Link copied' : 'Copy credential URL'}
              >
                {copyFeedback ? <>Copied!</> : <><Copy className="w-4 h-4" aria-hidden /> Copy Credential URL</>}
              </button>
              {canDownloadPdf && (
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 font-body text-sm font-medium px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-600"
                  style={{ backgroundColor: '#8458B3' }}
                  aria-label={`Download PDF: Designient-Certificate-${certificate.certificateId}.pdf`}
                >
                  <Download className="w-4 h-4" aria-hidden />
                  Download PDF
                </button>
              )}
              {isActive && (
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600"
                  style={{ backgroundColor: '#0A66C2' }}
                >
                  <ExternalLink className="w-4 h-4" aria-hidden />
                  Add to LinkedIn
                </a>
              )}
            </div>

            <div
              id="certificate-to-print"
              ref={certRef}
              className="bg-white rounded-2xl overflow-hidden border-2 relative w-full mx-auto flex flex-col h-full md:aspect-[297/210] aspect-auto min-h-[500px] md:min-h-0"
              style={{
                borderColor: '#f4e4c1',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                maxWidth: 'min(95vw, 1100px)',
              }}
            >
              {/* Decorative wave accents top and bottom */}
              <div
                className="absolute left-0 right-0 top-0 h-2 sm:h-3 opacity-90 flex-shrink-0"
                style={{
                  background: 'linear-gradient(90deg, #8458B3 0%, #c77dff 30%, #f4a261 70%, #e9c46a 100%)',
                  borderRadius: '2px 2px 0 0'
                }}
                aria-hidden
              />
              <div
                className="absolute left-0 right-0 bottom-0 h-2 sm:h-3 opacity-90 flex-shrink-0"
                style={{
                  background: 'linear-gradient(90deg, #e9c46a 0%, #f4a261 30%, #c77dff 70%, #8458B3 100%)',
                  borderRadius: '0 0 2px 2px'
                }}
                aria-hidden
              />

              {/* Full-grid layout: header | body (flex) | footer | credential */}
              <div
                className="relative h-full min-h-0 flex flex-col p-6 sm:p-[5%]"
                style={{ backgroundColor: 'white' }}
              >
                {/* Subtle watermark */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]" aria-hidden>
                  <Image src="/designient-logo.svg" alt="" width={320} height={80} className="object-contain" />
                </div>

                {/* Row 1: Header - logo centered, year award top-right */}
                <div className="relative flex justify-center items-center flex-shrink-0 mb-6 md:mb-[2%] min-h-0 pt-4 md:pt-0">
                  <Image
                    src="/designient-logo.svg"
                    alt="Designient"
                    width={240}
                    height={56}
                    className="object-contain w-[160px] md:w-[28%] md:min-w-[180px] md:max-w-[280px] h-auto"
                  />
                  <div
                    className="absolute top-0 right-0 font-display font-bold px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm rounded-lg border-2"
                    style={{ borderColor: '#8458B3', color: '#8458B3' }}
                  >
                    <span style={{ color: '#d4a017' }}>{certificate.year}</span>
                    <span className="ml-0.5">AWARD</span>
                  </div>
                </div>

                {/* Row 2: Main body - hierarchy: name (largest) > Certificate > course > supporting text; balanced spacing; set moved slightly up */}
                <div className="text-center flex-1 min-h-0 flex flex-col justify-center gap-4 md:gap-[1.8%] py-4 md:py-[1.5%] md:-mt-[1.5%]">
                  <h2
                    className="font-display font-bold uppercase tracking-wide flex-shrink-0"
                    style={{ color: '#1a1a1a', fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)' }}
                  >
                    Certificate
                  </h2>
                  <p className="font-body flex-shrink-0" style={{ color: '#6b7280', fontSize: 'clamp(0.875rem, 1.6vw, 1.1rem)' }}>
                    — Proudly Presented to —
                  </p>
                  <h3
                    className="font-display font-bold flex-shrink-0 py-2"
                    style={{ color: '#8458B3', fontSize: 'clamp(1.75rem, 5.5vw, 3.75rem)', lineHeight: 1.15 }}
                  >
                    {certificate.studentName}
                  </h3>
                  <p className="font-body flex-shrink-0 px-4" style={{ color: '#1a1a1a', lineHeight: 1.5, fontSize: 'clamp(0.9rem, 2vw, 1.4rem)' }}>
                    For successfully completing the <br className="block md:hidden" /><strong>{certificate.courseName}</strong>.
                  </p>
                  <p
                    className="font-body max-w-full md:max-w-[92%] mx-auto flex-shrink-0 px-4"
                    style={{ color: '#374151', fontSize: 'clamp(0.8rem, 1.5vw, 1.05rem)', lineHeight: 1.6 }}
                  >
                    We wish you joy, growth and fulfilment in your career ahead. May your work <br className="hidden md:block" />change lives for the better, now and forever!
                  </p>
                  <p className="font-body flex-shrink-0 mt-2" style={{ color: '#374151', fontSize: 'clamp(0.875rem, 1.6vw, 1.1rem)' }}>
                    Date: <span style={{ color: '#0d9488', fontWeight: 'bold' }}>{formatCertificateDate(certificate.issueDate)}</span>
                  </p>
                </div>

                {/* Row 3: Footer - 3 columns, equal spacing */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 flex-shrink-0 pt-6 md:pt-[2%] mt-2 md:mt-[1%] border-t-2 items-end" style={{ borderColor: '#e5e7eb' }}>
                  <div className="text-center md:text-left">
                    <p className="font-body uppercase tracking-wider mb-0.5" style={{ color: '#6b7280', fontSize: 'clamp(0.5rem, 0.9vw, 0.65rem)' }}>
                      Certified Partner
                    </p>
                    <Image
                      src="/adobe-logo.svg"
                      alt="Adobe"
                      width={80}
                      height={28}
                      className="inline-block md:block object-contain w-12 sm:w-14 md:w-16 h-auto mx-auto md:mx-0"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-body font-bold mb-0.5" style={{ color: '#4b5563', fontSize: 'clamp(0.6rem, 1.2vw, 0.9rem)' }}>
                      {certificate.certificateId}
                    </p>
                    <p className="font-body uppercase tracking-wider" style={{ color: '#9ca3af', fontSize: 'clamp(0.5rem, 0.9vw, 0.65rem)' }}>
                      Certificate Number
                    </p>
                  </div>
                  <div className="text-center md:text-right flex flex-col items-center md:items-end">
                    <Image
                      src="/auth-sign.png"
                      alt="Authorized signature"
                      width={140}
                      height={52}
                      className="object-contain w-16 sm:w-20 md:w-24 h-auto mb-0.5"
                    />
                    <p className="font-body uppercase tracking-wider" style={{ color: '#9ca3af', fontSize: 'clamp(0.5rem, 0.9vw, 0.65rem)' }}>
                      Authorized Signature
                    </p>
                  </div>
                </div>

                {/* Row 4: Credential URL - compact */}
                <div className="flex-shrink-0 pt-4 md:pt-[1.5%] mt-2 md:mt-[1%] border-t text-center" style={{ borderColor: '#f4e4c1' }}>
                  <p className="font-body uppercase tracking-wider mb-0.5" style={{ color: '#9ca3af', fontSize: 'clamp(0.45rem, 0.8vw, 0.6rem)' }}>
                    Credential URL
                  </p>
                  <p className="font-body break-all leading-tight px-4" style={{ color: '#6b7280', fontSize: 'clamp(0.5rem, 0.8vw, 0.6rem)' }}>
                    {certificate.credentialUrl}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
