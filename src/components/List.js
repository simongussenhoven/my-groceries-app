import React from 'react'
import ListItem from './ListItem'

function List (props) {
  if (props.readonly === true) {
    return (
      <ul className="list">
        {props.items.map(item => {
          return <ListItem 
                    handleClickGroceryItem = {props.handleClickGroceryItem} 
                    {...item}
                    readonly = {props.readonly}
                    /> })}
      </ul>
    )
  }
  else {
    return (
      <ul className="list">
        {props.items.map(item => {
          return <ListItem 
                    handleClickGroceryItem = {props.handleClickGroceryItem} 
                    {...item}
                    readonly = {props.readonly}
                    /> })}
      </ul>
    )
  }
}
  export default List