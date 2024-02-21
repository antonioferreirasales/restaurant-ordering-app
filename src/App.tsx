import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header, Main } from './styles/styles'

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
        <div>Teste2</div>
      </Main>
      <GlobalStyle />
    </ThemeProvider>
  )
}
