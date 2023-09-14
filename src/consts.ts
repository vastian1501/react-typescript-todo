export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const // Esto lo marca para solo lectura

// TODO_FILTERS.ALL = 'hola'

export const FILTER_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    label: 'Todos',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    label: 'Activo',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    label: 'Completados',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
}
