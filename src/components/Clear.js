import React from 'react'

function Clear(props) {
    return (
    <div className="clearcontainer">
        <button onClick={() => {props.emptyCart()}}>Clear</button>
    </div>
    )
}

  export default Clear