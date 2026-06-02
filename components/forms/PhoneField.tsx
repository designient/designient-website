'use client'

import React from 'react'
import { CountryCodeSelect } from '../shared/CountryCodeSelect'
import { formInputClass, formInputErrorClass } from './formStyles'

type PhoneFieldProps = {
  id: string
  label: string
  required?: boolean
  countryCode: string
  onCountryCodeChange: (code: string) => void
  countryCodeId?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  error?: string
  className?: string
}

export function PhoneField({
  id,
  label,
  required,
  countryCode,
  onCountryCodeChange,
  countryCodeId,
  value,
  onChange,
  placeholder = 'Phone number',
  error,
  className = '',
}: PhoneFieldProps) {
  const errorClass = formInputErrorClass(!!error)

  return (
    <div className={className}>
      <label htmlFor={id} className="block font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
        {label}
        {required && (
          <span className="ml-0.5" style={{ color: 'var(--color-error)' }} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className="form-phone-row">
        <CountryCodeSelect
          value={countryCode}
          onChange={onCountryCodeChange}
          id={countryCodeId ?? `${id}-country`}
          className="w-full min-[400px]:w-[100px] sm:w-[140px] flex-shrink-0"
        />
        <input
          type="tel"
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`flex-1 min-w-0 ${formInputClass}${errorClass}`}
          autoComplete="tel-national"
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1 font-body text-sm" style={{ color: 'var(--color-error)' }} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
