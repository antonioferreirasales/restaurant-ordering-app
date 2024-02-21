import { CheckoutBase, CheckoutButton, HighlightText, PriceTag, RemoveButton, TotalPrice } from './styles'

export function Checkout() {
  return (
    <CheckoutBase>
      <span className='order'>Your Order</span>
      <div>
        <ul>
          <li>
            <div className='item-name'>
              <HighlightText>Pizza</HighlightText>
              <RemoveButton>remove</RemoveButton>
            </div>
            <PriceTag>$14</PriceTag>
          </li>
          <li>
            <div className='item-name'>
              <HighlightText>Beer</HighlightText>
              <RemoveButton>remove</RemoveButton>
            </div>
            <PriceTag>$12</PriceTag>
          </li>
        </ul>
        <TotalPrice>
          <HighlightText>Total Price:</HighlightText>
          <PriceTag>$26</PriceTag>
        </TotalPrice>
        <CheckoutButton>
          <span>Complete Order</span>
        </CheckoutButton>
      </div>
    </CheckoutBase>
  )
}