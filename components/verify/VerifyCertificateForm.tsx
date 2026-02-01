'use client'

import React, { useState } from 'react'
import { Search, CheckCircle, Shield, AlertCircle, HelpCircle, FileText } from 'react-feather'
import Link from 'next/link'
import certificatesData from '../../data/certificates.json'

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
  institute: string
  credentialUrl: string
  signature: string
  lastUpdated: string
}

export function VerifyCertificateForm() {
  const [courseName, setCourseName] = useState('')
  const [year, setYear] = useState('')
  const [certificateId, setCertificateId] = useState('')
  const [admissionId, setAdmissionId] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const courses = Array.from(new Set((certificatesData as Certificate[]).map((c) => c.courseName))).sort()
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 2020 }, (_, i) => (2021 + i).toString()).reverse()

  const certs = certificatesData as Certificate[]

  const tryAutoFillFromCertificateId = (value: string) => {
    const id = value.trim().toUpperCase()
    if (!id) return
    const found = certs.find((c) => c.certificateId.toUpperCase() === id)
    if (found) {
      setCourseName(found.courseName)
      setYear(found.year)
      setError('')
    }
  }

  const tryAutoFillFromAdmissionId = (value: string) => {
    const id = value.trim().toUpperCase()
    if (!id) return
    const found = certs.find((c) => c.admissionId?.toUpperCase() === id)
    if (found) {
      setCourseName(found.courseName)
      setYear(found.year)
      setError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 500))

    try {
      let certificate: Certificate | undefined

      if (certificateId) {
        certificate = (certificatesData as Certificate[]).find(
          (c) => c.certificateId.toUpperCase() === certificateId.toUpperCase().trim()
        )
      }

      if (!certificate && admissionId) {
        certificate = (certificatesData as Certificate[]).find(
          (c) => c.admissionId?.toUpperCase() === admissionId.toUpperCase().trim()
        )
      }

      if (!certificate && courseName && year && certificateId) {
        certificate = (certificatesData as Certificate[]).find(
          (c) =>
            c.courseName === courseName &&
            c.year === year &&
            c.certificateId.toUpperCase() === certificateId.toUpperCase().trim()
        )
      }

      if (!certificate && courseName && year && admissionId) {
        certificate = (certificatesData as Certificate[]).find(
          (c) =>
            c.courseName === courseName &&
            c.year === year &&
            c.admissionId?.toUpperCase() === admissionId.toUpperCase().trim()
        )
      }

      if (certificate) {
        window.location.href = `/verify/uxp/${certificate.hash}`
      } else {
        if (certificateId) {
          const foundById = (certificatesData as Certificate[]).find(
            (c) => c.certificateId.toUpperCase() === certificateId.toUpperCase().trim()
          )
          if (foundById) {
            setError(
              `Certificate found, but course name doesn't match. This certificate is for "${foundById.courseName}". Please select the correct course name or verify with Certificate ID only.`
            )
          } else {
            setError('Certificate not found. Please check your Certificate ID or try using Admission ID. Contact Designient at hello@designient.com if the issue persists.')
          }
        } else if (admissionId) {
          const foundByAdmission = (certificatesData as Certificate[]).find(
            (c) => c.admissionId?.toUpperCase() === admissionId.toUpperCase().trim()
          )
          if (foundByAdmission) {
            setError(
              `Certificate found, but course name doesn't match. This certificate is for "${foundByAdmission.courseName}". Please select the correct course name or verify with Admission ID only.`
            )
          } else {
            setError('Certificate not found. Please check your Admission ID or try using Certificate ID. Contact Designient at hello@designient.com if the issue persists.')
          }
        } else {
          setError('Please enter either a Certificate ID or Admission ID to verify.')
        }
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1
              className="font-display font-bold mb-6"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                lineHeight: '1.2'
              }}>
              Certificate Verification
            </h1>
            <p
              className="font-body text-base md:text-lg"
              style={{
                color: '#4a4a4a',
                lineHeight: '1.7',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
              Enter either your <strong>Certificate ID</strong> or <strong>Admission ID</strong> to verify your certificate. Course name and year fields are optional and will be auto-filled if found.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            {error && (
              <div className="mb-6 p-4 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#fef2f2' }}>
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#dc2626' }} />
                <p className="font-body text-sm" style={{ color: '#991b1b' }}>{error}</p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="certificateId" className="block font-body text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Certificate ID <span className="text-gray-400 text-xs">(Optional - use Certificate ID or Admission ID)</span>
                </label>
                <input
                  id="certificateId"
                  name="certificateId"
                  type="text"
                  value={certificateId}
                  onChange={(e) => {
                    const value = e.target.value
                    setCertificateId(value)
                    if (value && admissionId) setAdmissionId('')
                    tryAutoFillFromCertificateId(value)
                  }}
                  onBlur={(e) => tryAutoFillFromCertificateId(e.target.value)}
                  placeholder="e.g. DS841211802"
                  className="w-full px-4 py-3 rounded-lg border font-body text-base focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e7eb', color: '#1a1a1a' }}
                />
              </div>

              <div>
                <label htmlFor="admissionId" className="block font-body text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Admission ID <span className="text-gray-400 text-xs">(Optional - use Certificate ID or Admission ID)</span>
                </label>
                <input
                  id="admissionId"
                  name="admissionId"
                  type="text"
                  value={admissionId}
                  onChange={(e) => {
                    const value = e.target.value
                    setAdmissionId(value)
                    if (value && certificateId) setCertificateId('')
                    tryAutoFillFromAdmissionId(value)
                  }}
                  onBlur={(e) => tryAutoFillFromAdmissionId(e.target.value)}
                  placeholder="e.g. DSS41001"
                  className="w-full px-4 py-3 rounded-lg border font-body text-base focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e7eb', color: '#1a1a1a' }}
                />
              </div>

              <div>
                <label htmlFor="courseName" className="block font-body text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Course name
                </label>
                <select
                  id="courseName"
                  name="courseName"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border font-body text-base focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e7eb', color: '#1a1a1a' }}
                >
                  <option value="">Select course (optional)</option>
                  {courses.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="year" className="block font-body text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Year
                </label>
                <select
                  id="year"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border font-body text-base focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e7eb', color: '#1a1a1a' }}
                >
                  <option value="">Select year (optional)</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-body font-semibold text-white transition-colors disabled:opacity-60"
              style={{ backgroundColor: '#8458B3' }}
            >
              {isSubmitting ? (
                <>Verifying…</>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Verify Certificate
                </>
              )}
            </button>
          </form>

          <div className="max-w-xl mx-auto mt-8 flex flex-wrap items-center justify-center gap-4 text-sm" style={{ color: '#6b7280' }}>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Secure verification
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Instant result
            </span>
            <Link href="/contact-us" className="flex items-center gap-2 hover:underline" style={{ color: '#8458B3' }}>
              <HelpCircle className="w-4 h-4" />
              Need help?
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-display font-bold mb-8 text-center"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
              Why verify?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white border border-gray-100 text-center">
                <FileText className="w-10 h-10 mx-auto mb-3" style={{ color: '#8458B3' }} />
                <h3 className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Authenticity</h3>
                <p className="font-body text-sm" style={{ color: '#6b7280', lineHeight: 1.6 }}>Confirm that the certificate was issued by Designient and has not been altered.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-gray-100 text-center">
                <Shield className="w-10 h-10 mx-auto mb-3" style={{ color: '#8458B3' }} />
                <h3 className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>Employers & recruiters</h3>
                <p className="font-body text-sm" style={{ color: '#6b7280', lineHeight: 1.6 }}>Share the verification link so employers can validate your credential.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-gray-100 text-center">
                <CheckCircle className="w-10 h-10 mx-auto mb-3" style={{ color: '#8458B3' }} />
                <h3 className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>LinkedIn</h3>
                <p className="font-body text-sm" style={{ color: '#6b7280', lineHeight: 1.6 }}>Add to your LinkedIn profile with one click from the verification result page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
