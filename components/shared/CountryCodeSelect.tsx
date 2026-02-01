'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Search } from 'react-feather'

// Comprehensive list of country codes with flags (India first, then sorted alphabetically)
export const countryCodes = [
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+1', country: 'Canada', flag: '🇨🇦' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
    { code: '+63', country: 'Philippines', flag: '🇵🇭' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
    { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+254', country: 'Kenya', flag: '🇰🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+48', country: 'Poland', flag: '🇵🇱' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+51', country: 'Peru', flag: '🇵🇪' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
]

interface CountryCodeSelectProps {
    value: string
    onChange: (code: string) => void
    id?: string
    className?: string
}

export function CountryCodeSelect({ value, onChange, id, className = '' }: CountryCodeSelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')
    const dropdownRef = useRef<HTMLDivElement>(null)

    const selectedCountry = countryCodes.find(c => c.code === value) || countryCodes[0]

    const filteredCountries = countryCodes.filter(country =>
        country.country.toLowerCase().includes(search.toLowerCase()) ||
        country.code.includes(search)
    )

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className={`relative ${className}`} style={{ minWidth: '140px' }} ref={dropdownRef}>
            <button
                type="button"
                id={id}
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all flex items-center gap-2 min-h-[44px]"
                style={{
                    borderColor: '#e5e7eb',
                    color: '#1a1a1a'
                }}
            >
                <span>{selectedCountry?.flag}</span>
                <span>{selectedCountry?.code}</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
            </button>

            {isOpen && (
                <div
                    className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto"
                    style={{ borderColor: '#e5e7eb' }}
                >
                    <div className="relative px-3 py-2 border-b" style={{ borderColor: '#e5e7eb' }}>
                        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#9ca3af' }} />
                        <input
                            type="text"
                            placeholder="Search country..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-8 pr-3 py-1 text-sm focus:outline-none"
                            autoFocus
                        />
                    </div>
                    <div className="max-h-48 overflow-y-auto">
                        {filteredCountries.map((country, index) => (
                            <button
                                key={`${country.code}-${country.country}-${index}`}
                                type="button"
                                onClick={() => {
                                    onChange(country.code)
                                    setIsOpen(false)
                                    setSearch('')
                                }}
                                className="w-full px-3 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
                                style={{ color: '#1a1a1a' }}
                            >
                                <span>{country.flag}</span>
                                <span>{country.code}</span>
                                <span className="text-gray-500">{country.country}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// Phone validation helper
// India (+91): Exactly 10 digits
// Others: 7-15 digits per E.164 standard
export function validatePhoneNumber(phone: string, countryCode: string = ''): { valid: boolean; error?: string } {
    if (!phone) return { valid: true } // Optional field

    const digitsOnly = phone.replace(/\D/g, '')

    // Specific validation for India
    if (countryCode === '+91') {
        if (digitsOnly.length !== 10) {
            return { valid: false, error: 'Phone number must be exactly 10 digits for India' }
        }
        // Check if it starts with valid mobile prefixes (6, 7, 8, 9)
        if (!['6', '7', '8', '9'].includes(digitsOnly[0])) {
            return { valid: false, error: 'Please enter a valid Indian mobile number' }
        }
    } else {
        // Standard international validation
        if (digitsOnly.length < 7) {
            return { valid: false, error: 'Phone number must have at least 7 digits' }
        }
        if (digitsOnly.length > 15) {
            return { valid: false, error: 'Phone number cannot exceed 15 digits' }
        }
    }

    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(phone)) {
        return { valid: false, error: 'Phone number contains invalid characters' }
    }

    return { valid: true }
}
