import React from 'react'

function Clear(props) {
    return (
    <div className="clearContainer">
        <button className="clearButton" onClick={() => {props.emptyCart()}}>Clear</button>
    </div>
    )
}

  export default Clear