import {
  createProductService,
  deleteProductService,
  getProductsGroupService,
  getProductsService
} from '@/api/services/product'
import { CreateProductParams, Product, ProductGroup } from '@/api/services/product/type'
import { searchSortItem, SortItem, sortParams } from '@/components/sort/sort-params'
import { useBasketStore } from '@/store/basket'
import { ComboboxItem } from '@/types/combobox'
import { handleAsync } from '@/utils/handle-async'

export const useProductStore = defineStore('product', () => {
  const isLoading = ref(false)
  const error = ref('')
  const products = ref<Product[]>([])
  const productGroups = ref<ProductGroup[]>([])
  const currentCategorySlug = ref()
  const total = ref(0)
  const limit = ref(5)
  const productsForDelete = ref<ComboboxItem[]>([])

  const router = useRouter()
  const route = useRoute()

  const search = ref(route.query.search || '')
  const page = ref(Number(route.query.page) || 1)

  const basketStore = useBasketStore()

  const currentSort = ref<SortItem>(
    searchSortItem(route.query.sort as string, route.query.order as string)
  )

  const totalPages = computed(() => Math.ceil(total.value / limit.value))

  const setProductsTotal = (newTotal: number) => {
    total.value = newTotal
  }

  const getProducts = async (categorySlug?: string) => {
    if (categorySlug) {
      currentCategorySlug.value = categorySlug
      page.value = 1
      search.value = ''
    }
    const { response } = await handleAsync(
      () =>
        getProductsService({
          categorySlug: currentCategorySlug.value,
          page: page.value,
          limit: limit.value,
          search: search.value,
          sortField: currentSort.value.value?.field,
          sortOrder: currentSort.value.value?.order
        }),
      isLoading,
      error
    )
    if (error.value || !response) return
    products.value = response
  }

  const setPage = async (newPage: number) => {
    page.value = newPage
    router.push({
      query: {
        page: newPage
      }
    })

    await getProducts()
  }

  const createProduct = async (product: CreateProductParams) => {
    const { response } = await handleAsync(() => createProductService(product), isLoading, error)
    if (error.value || !response) return
    products.value.push(response)
  }

  const getProductGroups = async () => {
    const { response } = await handleAsync(getProductsGroupService, isLoading, error)
    if (error.value || !response) return

    productGroups.value = response
  }

  const setSearch = async (query: string) => {
    search.value = query
    page.value = 1
    currentSort.value = sortParams[0]

    if (search.value.trim()) {
      if (router.currentRoute.value.path !== '/search') {
        await router.push({ path: '/search', query: { search: search.value, page: page.value } })
      } else {
        router.replace({
          query: { ...router.currentRoute.value.query, search: search.value, page: page.value }
        })
      }
    } else if (router.currentRoute.value.path === '/search') {
      const { search, ...query } = router.currentRoute.value.query
      console.log(search)
      await router.push({ path: '/', query })
    }

    await getProducts()
  }

  const setSort = async (sort: SortItem) => {
    page.value = 1
    currentSort.value = sort

    await router.push({
      query: {
        ...router.currentRoute.value.query,
        sort: sort.value?.field,
        order: sort.value?.order,
        page: page.value
      }
    })

    await getProducts()
  }

  const getProductsForDelete = async () => {
    const { response } = await handleAsync(() => getProductsService(), isLoading, error)
    if (error.value || !response) return
    productsForDelete.value = response.map((product) => ({
      name: product.title,
      slug: String(product.id),
      id: product.id
    }))
  }

  const deleteProduct = async (id: number) => {
    const { response } = await handleAsync(() => deleteProductService(id), isLoading, error)
    if (error.value || !response) return
    products.value = products.value.filter((product) => product.id !== id)
    basketStore.localDeleteFromBasket(id)
  }

  return {
    getProducts,
    createProduct,
    getProductGroups,
    setProductsTotal,
    setPage,
    setSearch,
    setSort,
    deleteProduct,
    getProductsForDelete,
    productsForDelete,
    error,
    isLoading,
    products,
    productGroups,
    page,
    total,
    limit,
    totalPages,
    search,
    currentSort
  }
})
