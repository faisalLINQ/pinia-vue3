import orange from '@/assets/images/orange.png'
import strawberry from '@/assets/images/strawberry.png'
import banana from '@/assets/images/banana.png'
import mango from '@/assets/images/mango.png'

export interface IProduct {
  id: string
  name: string
  price: number
  image: string
}

export interface IState {
  products: IProduct[]
}

export const productsSet1 = [
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

export const productsSet2 = [
  {
    name: 'Banana',
    id: 'a3',
    price: 1,
    image: banana
  },
  {
    name: 'Mango',
    id: 'a4',
    price: 4,
    image: mango,
  },
]