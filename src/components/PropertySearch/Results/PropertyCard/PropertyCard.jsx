import Link from 'next/link'
import Image from 'next/image'
import numeral from 'numeral'

function BedLogo(props) {
  return (
    <svg viewBox="0 0 640 512" fill="#fff" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zM176 288c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z"
      />
    </svg>
  )
}

function BathLogo(props) {
  return (
    <svg viewBox="0 0 512 512" fill="#fff" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"
      />
    </svg>
  )
}

export const PropertyCard = ({ property }) => {
  return (
    <div
      key={property.databaseId}
      className="relative flex flex-col overflow-hidden bg-white border rounded-lg group border-stone-200"
    >
      <div className="flex aspect-w-3 aspect-h-4 bg-stone-200 group-hover:opacity-75 sm:h-96">
        <Image
          priority
          fill
          src={property.featuredImage.node.sourceUrl}
          alt={property.title}
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col flex-1 p-4 space-y-2">
        <h3 className="text-sm font-medium text-stone-900">
          <Link href={property.uri}>
            <span aria-hidden="true" className="absolute inset-0" />
            {property.title}
          </Link>
        </h3>
        <p className="text-sm text-stone-500">{property.description}</p>
        <div className="flex flex-col justify-end flex-1">
          <p className="pb-2 text-sm italic text-stone-500">
            {property.propertyFeatures.currentlyAvailable
              ? 'Available'
              : 'Not currently available'}
          </p>
          <p className="text-base font-medium text-stone-900">
            €{numeral(property.propertyFeatures.price).format('0,0')} per night
          </p>
        </div>
        {/* Rooms */}
        <div className="flex items-center space-x-2">
          <BedLogo className="w-4 h-4 fill-stone-600" />
          <span>{property.propertyFeatures.bedrooms} bedrooms, </span>
        </div>
        <div className="flex items-center space-x-2">
          <BathLogo className="w-4 h-4 fill-stone-600" />
          <span>{property.propertyFeatures.bathrooms} bathrooms, </span>
        </div>
        {/* Rating */}
        <div>Rating: {property.propertyFeatures.rating}/5</div>
      </div>
    </div>
  )
}
