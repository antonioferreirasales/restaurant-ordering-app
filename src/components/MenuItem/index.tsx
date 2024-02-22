import { Button, Ingredients, Item, ItemDescription, ItemName, Price } from './styles'

interface MenuItemProps {
  id: string
  name: string
  ingredients: string[]
  price: number,
  icon: string,
  action: (id: string) => void
}

export function MenuItem(item : MenuItemProps) {
  return(
    <Item>
      <img src={item.icon} />
      <ItemDescription>
        <ItemName>{item.name}</ItemName>
        <Ingredients>{item.ingredients.join(', ')}</Ingredients>
        <Price>{item.price}</Price>
      </ItemDescription>
      <Button onClick={() => item.action(item.id)} type='button'>+</Button>
    </Item>
  )
}