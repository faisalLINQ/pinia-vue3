import orange from '@/assets/images/orange.png'
import strawberry from '@/assets/images/strawberry.png'

interface IProduct {
  id: string
  name: string
  price: number
  image: string
}

export interface IState {
  products: IProduct[]
}

export const products = [
  {
    name: 'Orange',
    id: 'a1',
    price: 2,
    image: orange
  },
  {
    name: 'Strawberry',
    id: 'a2',
    price: 2.5,
    image: strawberry,
  },
]