import React from 'react'

function ListItem (props) {
    if (props.readonly == true) {
      return (
        <li 
        key={props.id}
        className="list-item"
        value={props.title}
        >
          <span>{props.title}</span>
          <span>Amount: {props.amount}</span>
        </li>
     )
    }
    else {
      return (
        <li 
        key={props.id}
        className="list-item"
        value={props.title}
        onClick={() => {props.handleClickGroceryItem(props)}}
        >
          <span>{props.title}</span>

        </li>
     )
    }
}

  export default ListItem
