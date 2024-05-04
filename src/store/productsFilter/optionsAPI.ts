import { defineStore } from 'pinia'
import { useProductsStore } from '../products'

export const useProductsFilter = defineStore({
  id: 'products/filter',
  state: () => ({
    searchValue: ''
  }),
  getters: {
    products(state) {
      const productsStore = useProductsStore()
      return productsStore.products.filter(({ name }) =>
        name.toLowerCase().includes(state.searchValue.toLowerCase()))
    }
  },
  actions: {},
})
