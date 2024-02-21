import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-text']};
  }

  body, input, textarea, button  {
    font-family: 'Smythe', system-ui;
    font-weight: 400;
    font-size: 1rem;
  }
`