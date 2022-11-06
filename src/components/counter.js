import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        
      case 'Increase':
        return {count: state.count + 1}
        
      case 'Decrease':
        return {count: state.count - 1}
        
          case 'Plus10':
        return {count: state.count + 10}
  
      case 'Minus10':
        return {count: state.count - 10} 
  
      case 'BackToZero':
        return {count: state.count * 0} 
      default:
        return state
    }
    // return {
    //   count : state.count + 1
    // }
  }
  const  initialState = {count:0}
  

const Counter = () => {

    const  [state, dispatch] = useReducer(reducer, initialState);

  const IncreaseCount = () => {
    dispatch({type: 'Increase'})
  }
    const DecreaseCount = () => {
    dispatch({type: 'Decrease'})
  }
    const IncreaseBy10 = () => {
    dispatch({type: 'Plus10'})
  }
    const DecreaseBy10 = () => {
    dispatch({type: 'Minus10'})
  }
  const ResetValue = () => {
    dispatch({type: 'BackToZero'})
  }

  return (
    
          <div className='counter'>
    
    <div className='count-label'>
    <h4>Count: {state.count}</h4>
    </div>
      <div className='count-buttons'>
      <button onClick={DecreaseCount}>-</button>
      <button onClick={IncreaseBy10}>+10</button>
      <button onClick={ ResetValue} >reset</button>
      <button onClick={DecreaseBy10}>-10</button>
      <button onClick={IncreaseCount}>+</button>
      </div>

    </div>
    
  )
}

export default Counter;
