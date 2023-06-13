import { Button } from "../../../../components/Button"
import { RegularText } from "../../../../components/Typography"
import { ConfirmationSectionContainer } from "./styles"

import { formatMoney } from "../../../../utils/formatMoney"

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size='s'>Total de itens</RegularText>
        <RegularText>R$</RegularText>
      </div>
      <div>
        <RegularText size='s'>Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText
          weight='700'
          color='subtitle'
          size='l'
        >
          Total
        </RegularText>
        <RegularText
          weight='700'
          color='subtitle'
          size='l'
        >
          R$ 
        </RegularText>
      </div>

      <Button
        text='Confirmar Pedido'
        type='submit'
      />
    </ConfirmationSectionContainer>
  )
}
