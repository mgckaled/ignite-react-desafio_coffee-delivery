import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles"
import { Trash } from "phosphor-react"

import { CartItem } from "../../../../contexts/CartContext"
import { QuantityInput } from "../../../../components/QuantityInput"
import { RegularText } from "../../../../components/Typography"
import { formatMoney } from "../../../../utils/formatMoney"

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  function handleIncrease() {}

  function handleDecrease() {}

  function handleRemove() {}

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color='subtitle'>{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
              size='small'
            />
            <RemoveButton
              type='button'
              onClick={handleRemove}
            >
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
