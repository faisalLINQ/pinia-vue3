import { defineStore } from 'pinia'
import { productsSet1, productsSet2, type IState } from './model'
import delay from 'delay'

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: productsSet1
  } as IState),
  getters: {},
  actions: {
    async loadMoreProducts() {
      await delay(2000)
      this.products.push(...productsSet2)
    }
  },
})


