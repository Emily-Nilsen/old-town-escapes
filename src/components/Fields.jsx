import clsx from 'clsx'

const formClasses =
  'block w-full appearance-none rounded-lg border border-stone-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-stone-900 placeholder:text-stone-400 focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-stone-900"
    >
      {children}
    </label>
  )
}

export function TextField({ id, label, type = 'text', className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({ id, label, className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
