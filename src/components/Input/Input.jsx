export const Input = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="block w-full appearance-none rounded-lg border border-stone-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-stone-900 placeholder:text-stone-400 focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
    />
  )
}
