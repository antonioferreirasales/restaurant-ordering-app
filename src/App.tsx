import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Main } from './styles/styles'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
    
      </Main>
      <GlobalStyle />
    </ThemeProvider>
  )
}
