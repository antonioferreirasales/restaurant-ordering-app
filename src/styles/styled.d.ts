import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    'white': string
    'black': string
  
    'gray-text': string
    'gray-description': string
    'gray-placeholder': string
    'gray-900': string
  
    'pink-100': string
    'pink-500': string
    'pink-900': string
  }
}