import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Results } from './Results/Results'
import { Pagination } from './Pagination'
import queryString from 'query-string'
import { Filters } from './Filters'

export const PropertySearch = () => {
  const [properties, setProperties] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const pageSize = 3
  const router = useRouter()

  const search = async () => {
    const { page } = queryString.parse(window.location.search)
    const response = await fetch(`/api/search`, {
      method: 'POST',
      body: JSON.stringify({ page: parseInt(page || '1') }),
    })
    const data = await response.json()
    console.log('SEARCH DATA', data)
    setProperties(data.properties)
    setTotalResults(data.total)
  }

  const handlePageClick = async (pageNumber) => {
    await router.push(
      `${router.query.slug.join(
        '/'
      )}?page=${pageNumber}, null, { shallow: true }`
    )
    search()
  }

  useEffect(() => {
    search()
  }, [])

  const handleSearch = ({ currenltyAvailable, minPrice, maxPrice, rating }) => {
    console.log('SEARCH', {
      currenltyAvailable,
      minPrice,
      maxPrice,
      rating,
    })
  }

  return (
    <div>
      <Filters onSearch={handleSearch} />
      <Results properties={properties} />
      <Pagination
        onPageClick={handlePageClick}
        totalProperties={totalResults}
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </div>
  )
}
