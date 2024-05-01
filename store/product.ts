import {
  createProductService,
  getProductsGroupService,
  getProductsService
} from '@/api/services/product'
import { CreateProductParams, Product, ProductGroup } from '@/api/services/product/type'
import { handleAsync } from '@/utils/handle-async'

export const useProductStore = defineStore('product', () => {
  const isLoading = ref(false)
  const error = ref('')
  const products = ref<Product[]>([])
  const productGroups = ref<ProductGroup[]>([])
  const currentCategorySlug = ref()
  const total = ref(0)
  const limit = ref(5)
  const router = useRouter()
  const route = useRoute()

  const search = ref(route.query.search || '')
  const page = ref(Number(route.query.page) || 1)

  const totalPages = computed(() => Math.ceil(total.value / limit.value))

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
          search: search.value
        }),
      isLoading,
      error
    )
    if (error.value || !response) return
    products.value = response
  }

  const setPage = async (newPage: number, categorySlug?: string) => {
    page.value = newPage
    router.push({
      query: {
        ...router.currentRoute.value.query,
        page: newPage
      }
    })

    await getProducts(categorySlug)
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

  const setProductsTotal = (newTotal: number) => {
    total.value = newTotal
  }

  const setSearch = async (query: string) => {
    search.value = query
    page.value = 1

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

  return {
    getProducts,
    createProduct,
    getProductGroups,
    setProductsTotal,
    setPage,
    setSearch,
    error,
    isLoading,
    products,
    productGroups,
    page,
    total,
    limit,
    totalPages,
    search
  }
})
