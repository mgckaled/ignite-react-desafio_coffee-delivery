import { Input } from "../../../../components/Input"
import { AddressFormContainer } from "./styles"

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input
        placeholder='CEP'
        type='number'
        className='cep'
      />
      <Input
        placeholder='Rua'
        className='street'
      />
      <Input
        type='number'
        placeholder='Número'
      />
      <Input
        placeholder='Complemento'
        className='complement'
        rightText='Opcional'
      />
      <Input placeholder='Bairro' />
      <Input placeholder='Cidade' />
      <Input placeholder='UF' />
    </AddressFormContainer>
  )
}
