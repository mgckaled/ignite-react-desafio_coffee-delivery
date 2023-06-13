import { Clock, CurrencyDollar, MapPin } from "phosphor-react"
import { useTheme } from "styled-components"

import { InfoWithIcon } from "../../components/InfoWithIcon"
import { RegularText, TitleText } from "../../components/Typography"

import { ThemeType } from "../../@types/styled"
import confirmedOrderIllustration from "../../assets/confirmed-order.svg"
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles"

export function OrderConfirmedPage() {
  const { colors } = useTheme() as ThemeType


  return (
    <OrderConfirmedContainer className='container'>
      <div>
        <TitleText size='l'>Uhu! Pedido confirmado</TitleText>
        <RegularText
          size='l'
          color='subtitle'
        >
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight='fill' />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em
                <br />
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight='fill' />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight='fill' />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </OrderConfirmedContainer>
  )
}
