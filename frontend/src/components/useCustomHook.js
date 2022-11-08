import React from 'react'
import { Link } from 'react-router-dom'

import CounterCustomHook from '../hooks/counterCustomHook'

const UseCounterHook = () => {
  const [state, increament, decreament, addTen,resetValue] = CounterCustomHook()
  return (
<div className='card-holder'>
  <div id='custom-hookcard'>

  
    <div className='counter'>
    
    <div id='count-label'>
    <h4>Custom Service queue</h4>
    <p>Secure a spot in the queue!</p>
    <h4>Count: {state}</h4>
    </div>
      <div className='count-buttons' id='single-buttons'>
      <button onClick={increament}>+</button>
      <button onClick={addTen}> Get +2 </button>
      <button onClick={resetValue}>reset</button>
      {/* <button onClick={removeTen}>-10</button> */}
      <button onClick={decreament} >-</button>
      
      </div>
      <Link  className='link-frm-custom' to={'/Error'}>Add more items before checkout</Link>
    </div>
    </div>
    </div> 
    )
}

export default UseCounterHook;
