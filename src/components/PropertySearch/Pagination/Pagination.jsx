import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid'

export const Pagination = ({ totalPages, totalProperties, onPageClick }) => {
  return (
    <div>
      <nav className="flex items-center justify-between px-4 border-t border-stone-200 sm:px-6">
        <div className="flex flex-1 w-0 -mt-px">
          <a
            href="#"
            className="inline-flex items-center pt-4 pr-1 text-sm font-medium border-t-2 border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700"
          >
            <ArrowLongLeftIcon
              className="w-5 h-5 mr-3 text-stone-400"
              aria-hidden="true"
            />
            Previous
          </a>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              onClick={() => onPageClick(i + 1)}
              key={i}
              className="inline-flex items-center px-4 py-4 text-sm font-medium border-t-2 border-transparent cursor-pointer text-stone-500 hover:border-stone-300 hover:text-stone-700"
            >
              {i + 1}
            </button>
          ))}
          {/* <a
            href="#"
            className="inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700"
          >
            1
          </a>
          
          <a
            href="#"
            className="inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-rose-500 text-rose-600"
            aria-current="page"
          >
            2
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700"
          >
            3
          </a> */}
        </div>
        <div className="flex justify-end flex-1 w-0 -mt-px">
          <button
            onClick={() => onPageClick(i + 1)}
            // href="#"
            className="inline-flex items-center pt-4 pl-1 text-sm font-medium border-t-2 border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700"
          >
            Next
            <ArrowLongRightIcon
              className="w-5 h-5 ml-3 text-stone-400"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
    </div>
  )
}
