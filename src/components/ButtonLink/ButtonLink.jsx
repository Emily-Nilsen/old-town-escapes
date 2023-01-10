import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    rose: 'relative overflow-hidden bg-rose-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-rose-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-rose-900 hover:bg-white/90 active:bg-white/90 active:text-rose-900/70',
    stone:
      'bg-stone-800 text-white hover:bg-stone-900 active:bg-stone-800 active:text-white/80',
  },
  outline: {
    stone:
      'border-stone-300 text-stone-700 hover:border-stone-400 active:bg-stone-100 active:text-stone-700/80',
  },
}

export const ButtonLink = forwardRef(function Button(
  {
    destination,
    label,
    variant = 'solid',
    color = 'stone',
    className,
    href,
    ...props
  },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})
