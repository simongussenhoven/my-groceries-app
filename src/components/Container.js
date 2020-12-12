import React from 'react'
import GroceryList from './GroceryList'
import ShoppingCart from './ShoppingCart'
import Header from './Header'




class Container extends React.Component {
    constructor () {
        super()
        this.state = {
          groceryList: [],
          shoppingList: []
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleClickGroceryItem (newItem) {     
        let newShop = this.state.shoppingList;
        let foundItem = false
        
        for (let i=0;i<newShop.length;i++){
          if (newShop[i].title === newItem.title){
            newShop[i].amount++
            foundItem = true
            break;
          }        
        }
        
        if(!foundItem){
          newShop.push(newItem)
        }

        this.setState(() => {
          return {
            shoppingList: newShop
          }
        })
      }

      handleSubmit (event) {
        event.preventDefault()
        if (event.target.text.value !== "") {
        let newList = this.state.groceryList
            const newItem = {title: event.target.text.value, amount: 1}
            newList.push(newItem)
            event.target.text.value = "";
        this.setState (() => {
          return {
            groceryList: newList
          }
        })
      } 
        else {
          alert("Can't be blank")
        }
      }

      emptyCart () {
        this.setState(() => {
          return {
            shoppingList: []
          }
        })

      }

    render() {
    return (
        <div id="container">
          <Header/>
          <main className="main">
            <GroceryList 
              handleSubmit = {this.handleSubmit}
              handleClickGroceryItem = {this.handleClickGroceryItem} 
              items={this.state.groceryList}
              readonly = {false}
            />
            <ShoppingCart 
              emptyCart = {this.emptyCart} 
              items={this.state.shoppingList}
              readonly = {true}
            />
          </main>
        </div>
    )
  }
}
export default Container