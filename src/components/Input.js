import React from 'react'

function Input (props){
  return (
      <form
      onSubmit={props.handleSubmit}
      >
          <label>Add your new product</label>
          <input 
            id="text" 
            type="text" 
            name="text"
            placeholder="New product"
            />
          <input 
            id="submit" 
            type="submit"
            value="Add"
            
            />
      </form>
    );
  }
export default Input;
