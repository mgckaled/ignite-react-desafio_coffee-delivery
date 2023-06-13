import { TitleText } from "../../../../components/Typography"
import { ConfirmationSection } from "./ConfirmationSection"

import { DetailsContainer, SelectedCoffeesContainer } from "./styles"

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText
        size='xs'
        color='subtitle'
      >
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
