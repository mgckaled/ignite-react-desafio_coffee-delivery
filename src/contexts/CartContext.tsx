import { Coffee } from "../pages/Home/components/CoffeeCard"

export interface CartItem extends Coffee {
  quantity: number
}
