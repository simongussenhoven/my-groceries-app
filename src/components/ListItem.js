import React from 'react'

function ListItem (props) {
    if (props.readonly === true) {
      return (
        <li 
        key={props.id}
        className="list__item list__shoppingList--item"
        value={props.title}
        >
          <span className="listItem__span">{props.title}</span>
          <span className="listItem__span">Amount: {props.amount}</span>
        </li>
     )
    }
    else {
      return (
        <li 
        key={props.id}
        className="list__item list__groceryList--item"
        value={props.title}
        onClick={() => {props.handleClickGroceryItem({title: props.title, amount: 1})}}
        >
          <span className="listitem__span">{props.title}</span>

        </li>
     )
    }
}

  export default ListItem
