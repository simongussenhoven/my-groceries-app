import React from 'react'
import List from './List'
import Clear from './Clear'

function GroceryList(props) {
    return (
     <div id="cart">
        <h2>List of shopping cart items</h2>
        <Clear emptyCart = {props.emptyCart}/>
        <List {...props}/>   
     </div>
    )
}

export default GroceryList