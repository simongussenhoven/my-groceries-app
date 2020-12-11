import React from 'react'
import List from './List'
import Clear from './Clear'

function ShoppingCart(props) {
    return (
     <div className="shoppingList">
        <h2 className="shoppingList__header">List of shopping cart items</h2>
        <p className= "shoppingList__p">Click the button to clear you cart</p>
        <Clear emptyCart = {props.emptyCart}/>
        <List {...props}/>   
     </div>
    )
}

export default ShoppingCart