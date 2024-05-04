import { defineStore } from 'pinia'
import type { IState } from './model'
import type { IProduct } from '../products/model'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    products: {},
    totalPrice: 0,
  } as IState),
  getters: {},
  actions: {
    addProductToCart(product: IProduct) {
      const existingCartProduct = this.products[product.id]

      if (existingCartProduct) {
        existingCartProduct.quantity += 1
        existingCartProduct.totalPrice = existingCartProduct.quantity * existingCartProduct.product.price
      } else {
        this.products[product.id] = {
          product,
          quantity: 1,
          totalPrice: product.price
        }
      }
    },
    subtractProductFromCart(product: IProduct) {
      const existingCartProduct = this.products[product.id]
      if (existingCartProduct) {
        if (existingCartProduct.quantity === 1) {
          delete this.products[product.id]
        }
        existingCartProduct.quantity -= 1
        existingCartProduct.totalPrice = existingCartProduct.quantity * existingCartProduct.product.price
      }
    }
  },
})


