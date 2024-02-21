import styled from 'styled-components'

export const Main = styled.main`
  border: 1px solid ${props => props.theme['pink-500']};
  margin: 2rem auto;
  width: 37.5rem;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  div {
    padding: 2rem 0;
    background-image: url("src/assets/hamburger-background.png");
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  h1, h2 {
    font-weight: 400;
    padding-left: 2.80rem;
  }

  h1 {
    font-size: 2.43rem;
    padding-top: 1rem;
    line-height: 1.5rem;
  }

  h2 {
    font-size: 1.4rem;
    padding-bottom: 2.2rem;
    line-height: .86rem;
  }
`

export const Menu = styled.section`
  margin-top: 2.81rem;
  margin-bottom: 2.81rem;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.8rem;
  }
`