'use client'

import React from 'react'

const fieldBase =
  'w-full bg-graphite text-ivory placeholder:text-ash border border-white/10 rounded-md px-4 py-3 text-[15px] transition-all duration-200 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
  error?: string
}

export function Input({ label, hint, error, id, className = '', ...props }: InputProps) {
  const inputId = id ?? props.name
  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={inputId} className="block text-[13px] font-medium tracking-[0.04em] uppercase text-silver mb-2">
          {label}
        </label>
      ) : null}
      <input id={inputId} className={`${fieldBase} ${error ? 'border-error' : ''} ${className}`} {...props} />
      {hint && !error ? <p className="mt-1.5 text-[13px] text-ash">{hint}</p> : null}
      {error ? <p className="mt-1.5 text-[13px] text-error">{error}</p> : null}
    </div>
  )
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  hint?: string
  error?: string
}

export function Textarea({ label, hint, error, id, className = '', ...props }: TextareaProps) {
  const inputId = id ?? props.name
  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={inputId} className="block text-[13px] font-medium tracking-[0.04em] uppercase text-silver mb-2">
          {label}
        </label>
      ) : null}
      <textarea
        id={inputId}
        rows={4}
        className={`${fieldBase} resize-y min-h-[120px] ${error ? 'border-error' : ''} ${className}`}
        {...props}
      />
      {hint && !error ? <p className="mt-1.5 text-[13px] text-ash">{hint}</p> : null}
      {error ? <p className="mt-1.5 text-[13px] text-error">{error}</p> : null}
    </div>
  )
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  hint?: string
  error?: string
  options: { value: string; label: string }[]
}

export function Select({ label, hint, error, id, options, className = '', ...props }: SelectProps) {
  const inputId = id ?? props.name
  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={inputId} className="block text-[13px] font-medium tracking-[0.04em] uppercase text-silver mb-2">
          {label}
        </label>
      ) : null}
      <select
        id={inputId}
        className={`${fieldBase} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path fill=%22none%22 stroke=%22%239b9bad%22 stroke-width=%221.5%22 d=%22M2 4l4 4 4-4%22/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10 ${error ? 'border-error' : ''} ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-graphite text-ivory">
            {opt.label}
          </option>
        ))}
      </select>
      {hint && !error ? <p className="mt-1.5 text-[13px] text-ash">{hint}</p> : null}
      {error ? <p className="mt-1.5 text-[13px] text-error">{error}</p> : null}
    </div>
  )
}
