import { useState } from 'react'
import { Button } from '@/components/Button'
import { Input } from '../../Input/Input'

const starRatings = [
  { id: 'four-half-up', title: '4.5' },
  { id: 'four-up', title: '4.0' },
  { id: 'three-half-up', title: '3.5' },
  { id: 'three-up', title: '3.0' },
]

const notificationMethods = [
  { id: 'both', title: 'Not important' },
  { id: 'available', title: 'Currently available' },
]

export const Filters = ({ onSearch }) => {
  const [currentlyAvailable, setCurrentlyAvailable] = useState(false)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [rating, setRating] = useState('')

  const handleSearch = () => {
    onSearch({
      currentlyAvailable,
      minPrice,
      maxPrice,
      rating,
    })
  }

  return (
    <div className="flex max-w-5xl gap-5 p-6 mx-auto my-5 border border-solid rounded-lg border-stone-100">
      <div className="flex-1">
        {/* Rating */}
        <div>
          <label className="text-base font-medium text-stone-900">Rating</label>
          <p className="text-sm leading-5 text-stone-500">
            What minimum rating do you prefer?
          </p>
          <fieldset className="mt-4">
            <legend className="sr-only">Notification method</legend>
            <div className="space-y-4">
              {starRatings.map((starRating) => (
                <div key={starRating.id} className="flex items-center">
                  <input
                    id={starRating.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={starRating.id === 'email'}
                    className="w-4 h-4 border-stone-300 text-rose-600 focus:ring-rose-500"
                  />
                  <label
                    htmlFor={starRating.id}
                    className="block ml-3 text-sm font-medium text-stone-700"
                  >
                    {starRating.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        {/* Availability */}
        <div className="mt-6">
          <label className="text-base font-medium text-stone-900">
            Availability
          </label>
          <p className="text-sm leading-5 text-stone-500">
            Are you only looking for currently available escapes?
          </p>
          <fieldset className="mt-4">
            <legend className="sr-only">Notification method</legend>
            <div className="space-y-4">
              {notificationMethods.map((notificationMethod) => (
                <div key={notificationMethod.id} className="flex items-center">
                  <input
                    id={notificationMethod.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={notificationMethod.id === 'email'}
                    className="w-4 h-4 border-stone-300 text-rose-600 focus:ring-rose-500"
                  />
                  <label
                    htmlFor={notificationMethod.id}
                    className="block ml-3 text-sm font-medium text-stone-700"
                  >
                    {notificationMethod.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="flex-1">
        <span className="text-base font-medium text-stone-900">Min price</span>
        <Input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <span className="text-base font-medium text-stone-900">Max price</span>
        <Input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div>
        <Button onClick={handleSearch} color="rose">
          Search
        </Button>
      </div>
    </div>
  )
}
