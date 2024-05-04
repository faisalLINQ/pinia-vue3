import type { IProduct } from '../products/model'

export interface ICartProduct {
  product: IProduct
  quantity: number
  totalPrice: number
}

export interface IState {
  products: { [productId: string]: ICartProduct }
  totalPrice: number
}
