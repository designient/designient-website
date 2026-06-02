'use client'

import React from 'react'
import { formInputClass, formSelectClass, formTextareaClass, formInputErrorClass } from './formStyles'

type FormFieldProps = {
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: string
  className?: string
  children?: React.ReactNode
} & (
  | {
      as?: 'input'
      inputProps: React.InputHTMLAttributes<HTMLInputElement>
    }
  | {
      as: 'select'
      inputProps: React.SelectHTMLAttributes<HTMLSelectElement>
      options: { value: string; label: string }[]
    }
  | {
      as: 'textarea'
      inputProps: React.TextareaHTMLAttributes<HTMLTextAreaElement>
    }
)

export function FormField(props: FormFieldProps) {
  const { id, label, required, error, hint, className = '' } = props
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

      {props.as === 'textarea' ? (
        <textarea
          id={id}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={`${formTextareaClass}${errorClass}`}
          {...props.inputProps}
        />
      ) : props.as === 'select' ? (
        <select
          id={id}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={`${formSelectClass}${errorClass}`}
          {...props.inputProps}
        >
          {props.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={`${formInputClass}${errorClass}`}
          {...props.inputProps}
        />
      )}

      {error && (
        <p id={`${id}-error`} className="mt-1 font-body text-sm" style={{ color: 'var(--color-error)' }} role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1 font-body text-sm" style={{ color: 'var(--text-muted)' }}>
          {hint}
        </p>
      )}
    </div>
  )
}
