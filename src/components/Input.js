import React from 'react'

function Input (props){
  return (
      <form
      onSubmit={props.handleSubmit}
      className="form"
      >
          <label className="form__label">Add your new product</label>
          <div className="form__container">
          <input 
            id="text" 
            type="text" 
            name="text"
            placeholder="New product"
            className="form__input"
            />
          <input 
            id="submit" 
            type="submit"
            value="Add"
            className="form__submit"
            />
            </div>
      </form>
    );
  }
export default Input;
