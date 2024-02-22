import type { ItemList } from '../../App'
import { CheckoutBase, CheckoutButton, HighlightText, PriceTag, RemoveButton, TotalPrice } from './styles'

interface CheckoutProps {
  itemList: ItemList[]
  totalValue: number
  removeItem: (id: string) => void
}

export function Checkout({ itemList, totalValue, removeItem }: CheckoutProps) {
  return (
    <CheckoutBase>
      <span className='order'>Your Order</span>
      <div>
        <ul>
          {itemList.map(item => {
            return(
              <li key={item.id}>
                <div className='item-name'>
                  <HighlightText>{item.name}</HighlightText>
                  <RemoveButton 
                    onClick={() => removeItem(item.id)
                  }>
                      remove
                  </RemoveButton>
                </div>
              <PriceTag>{item.price}</PriceTag>
            </li>
            )
          })}
        </ul>
        <TotalPrice>
          <HighlightText>Total Price:</HighlightText>
          <PriceTag>{totalValue}</PriceTag>
        </TotalPrice>
        <CheckoutButton>
          <span>Complete Order</span>
        </CheckoutButton>
      </div>
    </CheckoutBase>
  )
}