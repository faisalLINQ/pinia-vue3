import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useProductsStore } from '../products'

export const useProductsFilter = defineStore('products/filter', () => {
  const productsStore = useProductsStore()

  const searchValue = ref('')

  const products = computed(() =>
    productsStore.products.filter(({ name }) => name.toLowerCase().includes(searchValue.value.toLowerCase()))
  )

  return {
    products,
    searchValue
  }
})