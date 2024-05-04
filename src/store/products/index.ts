import { defineStore } from 'pinia'
import { products, type IState } from './model'

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: products
  } as IState),
  getters: {},
  actions: {},
})


