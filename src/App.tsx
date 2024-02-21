import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header, Main, Menu } from './styles/styles'
import { menuArray } from './Data/menu'
import { MenuItem } from './components/MenuItem'
import { useState } from 'react'
import { CheckoutBase, CheckoutButton, HighlightText, PriceTag, RemoveButton, TotalPrice } from './components/Checkout/styles'

interface ItemList {
  id: number
  name: string
  ingredients: string[]
  price: number,
  icon: string
}

export function App() {
const [clientOrder, setClientOrder] = useState<ItemList[]>([])
const hasCheckoutItems = clientOrder.length >= 1 ? true : false
function addItemToOrder(itemId: number) {
  const item: ItemList | undefined = menuArray.find((item) => {
    return item.id === itemId
  })

  if(item) {
    setClientOrder([...clientOrder, item])
  }
}

  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <Header>
          <div>
          <h1>Jimmy's Dinner</h1>
          <h2>The best burgers and pizzas in town</h2>
          </div>
        </Header>
        <Menu>
          <ul>
            {menuArray.map(item => {
              return(
                <MenuItem 
                  key={item.id}
                  id={item.id} 
                  name={item.name}
                  ingredients={item.ingredients}
                  price={item.price}
                  icon={item.icon}
                  action={addItemToOrder} 
                />
              )
            })}
          </ul>
        </Menu>
        { hasCheckoutItems ? <Checkout /> : ''}
      </Main>
      <GlobalStyle />
    </ThemeProvider>
  )
}

function Checkout() {
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