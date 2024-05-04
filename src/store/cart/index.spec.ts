import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from './index'
import type { PiniaStore } from '../piniaStoreType'

describe('cart', () => {
  let store: PiniaStore<typeof useCartStore> | null = null

  beforeEach(() => {
    setActivePinia(createPinia())

    store = useCartStore()
  })

  it('should initializes with correct values', () => {
    expect(store).not.toBeNull()
    expect(Object.keys(store!.products)).toHaveLength(0)
  })

  it('should add product to the cart', () => {
    /** Initial addition */
    store!.addProductToCart({ id: 'a1', image: 'fake-image', name: 'Apple', price: 10 })
    expect(store!.products).toEqual({
      a1: {
        product: { id: 'a1', image: 'fake-image', name: 'Apple', price: 10 },
        quantity: 1,
        totalPrice: 10
      }
    })

    /** Add again so the total price should change */
    store!.addProductToCart({ id: 'a1', image: 'fake-image', name: 'Apple', price: 10 })
    expect(store!.products).toEqual({
      a1: {
        product: { id: 'a1', image: 'fake-image', name: 'Apple', price: 10 },
        quantity: 2,
        totalPrice: 20
      }
    })
  })

  it('should subtract from the cart', () => {
    /** Initial cart state */
    store!.products = {
      a1: {
        product: { id: 'a1', image: 'fake-image', name: 'Apple', price: 10 },
        quantity: 2,
        totalPrice: 20
      }
    }

    store!.subtractProductFromCart({ id: 'a1', image: 'fake-image', name: 'Apple', price: 10 })
    expect(store!.products).toEqual({
      a1: {
        product: { id: 'a1', image: 'fake-image', name: 'Apple', price: 10 },
        quantity: 1,
        totalPrice: 10
      }
    })

    store!.subtractProductFromCart({ id: 'a1', image: 'fake-image', name: 'Apple', price: 10 })
    expect(store!.products).toEqual({})
  })
})