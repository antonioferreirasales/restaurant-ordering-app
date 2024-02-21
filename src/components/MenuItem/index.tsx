import { Button, Ingredients, Item, ItemDescription, ItemName, Price } from './styles'

interface MenuItemProps {
  name: string
  ingredients: string[]
  price: number,
  icon: string
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
      <Button type='button'>+</Button>
    </Item>
  )
}