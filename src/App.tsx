import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header, Main, Menu } from './styles/styles'
import { menuArray } from './Data/menu'
import { MenuItem } from './components/MenuItem'
import { useState } from 'react'
import { Checkout } from './components/Checkout'

export interface ItemList {
  id: string
  name: string
  ingredients: string[]
  price: number,
  icon: string
}

export function App() {

const [clientOrder, setClientOrder] = useState<ItemList[]>([])
const hasCheckoutItems = clientOrder.length >= 1 ? true : false

const totalInitialValue = 0
const totalValue = clientOrder
  .map(item => item.price)
  .reduce((accumulator, currentValue) => accumulator + currentValue, totalInitialValue)

function addItemToOrder(itemId: string) {
  const item: ItemList | undefined = menuArray.find((item) => {
    return item.id === itemId
  })

  if(item) {
    const newIdItem = {
      ...item,
      id: `${item.id}-${(clientOrder.length + 1)}`
    }
    setClientOrder([...clientOrder, newIdItem])
  }
}

function removeItemToOrder(itemId: string) {
  setClientOrder(prevOrder => prevOrder.filter(item => item.id !== itemId));
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
        { hasCheckoutItems && 
        <Checkout 
          itemList={clientOrder}
          totalValue={totalValue}
          removeItem={removeItemToOrder}
       />}
      </Main>
      <GlobalStyle />
    </ThemeProvider>
  )
}

