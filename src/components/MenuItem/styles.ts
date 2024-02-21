import styled from 'styled-components'

export const Item = styled.li`
  border-bottom: 1px solid ${props => props.theme['pink-100']};
  display: flex;
  padding-bottom: 3.20rem;
  width: 31.5rem;
`

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: .55rem;
  padding-left: 1.95rem;
`

export const ItemName = styled.span`
  font-size: 1.75rem;
  line-height: 1.05rem;
`

export const Ingredients = styled.span`
  width: 21rem;
  color: ${props => props.theme['gray-description']};
  line-height: 1.5rem;
`

export const Price = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
`

export const Button = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  background: none;
  color: ${props => props.theme['pink-100']};
  border: 1px solid ${props => props.theme['pink-500']};
  border-radius: 100%;
  width: 3.125rem;
  height: 3.125rem;
  font-size: 2rem;
  line-height: 1.5rem;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['pink-500']};
  }
`