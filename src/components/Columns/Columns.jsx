import Image from 'next/image'

export const Columns = ({ isStackedOnMobile, children }) => {
  return (
    <div className="md:my-24">
      <div
        className={`mx-auto max-w-5xl rounded-xl bg-amber-100 md:p-6 ${
          isStackedOnMobile ? 'block md:flex' : 'flex'
        } `}
      >
        {children}
      </div>
    </div>
  )
}
