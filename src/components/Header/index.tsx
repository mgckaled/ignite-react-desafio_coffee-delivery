import { HeaderContainer } from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={coffeeLogoImg} alt="" />
      </div>
    </HeaderContainer>
  )
}