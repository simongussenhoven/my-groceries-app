import React from 'react'
import ListItem from './ListItem'

function List (props) {
  return (
    <ul>
      {props.items.map(item => {
        return <ListItem 
                  handleClickGroceryItem = {props.handleClickGroceryItem} 
                  {...item}
                  readonly = {props.readonly}
                  /> })}
    </ul>
  )
}
  export default List