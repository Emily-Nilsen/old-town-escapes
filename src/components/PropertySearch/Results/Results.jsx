import Image from 'next/image'
import { PropertyCard } from './PropertyCard'

export const Results = ({ properties }) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Properties</h2>
        <h1 className="mb-6 text-4xl font-heading">All locations</h1>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {properties.map((property) => (
            <PropertyCard key={property.databaseId} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
