import { FILTER_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className='filters'>
      {Object.entries(FILTER_BUTTONS).map(([key, { label, href }]) => {
        const isSelected = filterSelected === key
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a
              className={className}
              href={href}
              onClick={(e) => {
                e.preventDefault()
                onFilterChange(key as FilterValue)
              }}
            >
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
