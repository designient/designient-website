/** Shared Tailwind class strings for form controls */
export const formInputClass = 'form-input min-h-[48px] text-base sm:text-sm'
export const formSelectClass = 'form-select min-h-[48px] text-base sm:text-sm'
export const formTextareaClass = 'form-textarea min-h-[120px] text-base sm:text-sm resize-y'

export function formInputErrorClass(hasError: boolean) {
  return hasError ? ' form-input--error' : ''
}
