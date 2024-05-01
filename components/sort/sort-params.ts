export type SortValue = {
  field: string
  order: 'asc' | 'desc'
}

export type SortItem = {
  label: string
  value: SortValue | null
}

export const sortParams: SortItem[] = [
  { label: 'По умолчанию', value: null },
  {
    label: 'Сначала дорогие',
    value: {
      field: 'price',
      order: 'desc'
    }
  },
  {
    label: 'Сначала недорогие',
    value: {
      field: 'price',
      order: 'asc'
    }
  },
  {
    label: 'По алфавиту (А-Я)',
    value: {
      field: 'title',
      order: 'asc'
    }
  },
  { label: 'По алфавиту (Я-А)', value: { field: 'title', order: 'desc' } }
]

export const searchSortItem = (field: string, order: string) => {
  return (
    sortParams.find((item) => {
      return item.value?.field === field && item.value?.order === order
    }) || sortParams[0]
  )
}
