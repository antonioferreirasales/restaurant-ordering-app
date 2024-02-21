import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header, Main, Menu } from './styles/styles'
import { menuArray } from './Data/menu'
import { MenuItem } from './components/MenuItem'
import { Checkout } from './components/Checkout'

export function App() {

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
                  name={item.name}
                  ingredients={item.ingredients}
                  price={item.price}
                  icon={item.icon}  
                />
              )
            })}
          </ul>
        </Menu>
        <Checkout />
      </Main>
      <GlobalStyle />
    </ThemeProvider>
  )
}
