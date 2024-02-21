import styled from 'styled-components'

export const CheckoutBase = styled.div`
  margin: 0 auto;
  width: 31.5rem;

  .order {
    display: block;
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 4rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.56rem;
    li {
      display: flex;
      justify-content: space-between;
    }
  }

  .item-name {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.75rem;
  padding-top: 1.75rem;
  border-top: 1px solid ${props => props.theme['gray-text']};
`

export const HighlightText = styled.span`
  font-size: 1.75rem;
  line-height: 1.05rem;
`

export const RemoveButton = styled.button`
  color: ${props => props.theme['gray-placeholder']};
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme['pink-900']};
    text-decoration: underline;
  }
`

export const PriceTag = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
`

export const CheckoutButton = styled.button`
  margin: 3.30rem 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${props => props.theme['white']};
  font-weight: 700;
  line-height: 1.5rem;
  background: ${props => props.theme['pink-500']};
  border: none;
  border-radius: 3px;
  padding: 1rem 12rem;
  cursor: pointer;
  transition: background-color 2 ease;
  
  &:hover {
    background: ${props => props.theme['pink-900']};
  }

  /* prevent text from wrapping and 
  ensure it stays on a single line within a container */
  white-space: nowrap;
`