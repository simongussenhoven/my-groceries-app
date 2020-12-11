import React from 'react'
import List from './List'
import Input from './Input'

function GroceryList(props) {
    return (
     <div className="groceryList">
    <h2 className="groceryList__header">List of groceries</h2>
     <Input handleSubmit={props.handleSubmit} />
     <List {...props} readonly = {props.readonly}/>   
     </div>
    )
}

  export default GroceryList