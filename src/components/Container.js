import React from 'react'
import GroceryList from './GroceryList'
import ShoppingCart from './emptyCart'
import Header from './Header'


/* eslint-disable no-unused-expressions */

class Container extends React.Component {
    constructor () {
        super()
        this.state = {
          groceryList: [
            {title: "Appels", amount: 1},
            {title: "Pak melk", amount: 1},
            {title: "Choco", amount: 1},
            {title: "Mangos", amount: 1}
          ],
          shoppingList: [
            {title: "Bananen", amount: 1},
            {title: "Kiwis", amount: 1},
            {title: "Mangos", amount: 1},
          ]
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleClickGroceryItem (newItem) {     
        let newShop = this.state.shoppingList;
        let newGroc = this.state.groceryList;

        console.log("shop var", newShop);
        console.log("groc var", newGroc);
        console.log(newItem);
        
        for (let i=0; i<newShop.length; i++){
            if(newItem.title === newShop[i].title){
            newShop[i].amount += 1
          }

          else {
            newShop.push({title: newItem.title, amount: 1});
          }
          this.setState(() => {
            return {
              shoppingList: newShop
            }
          })
        }
      }


      handleSubmit (event) {
        event.preventDefault()
        let newList = this.state.groceryList
            const newItem = {title: event.target.text.value, amount: 1}
            newList.push(newItem)
        this.setState (() => {
          return {
            groceryList: newList
          }
        })
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
        </div>
    )
  }
}
export default Container