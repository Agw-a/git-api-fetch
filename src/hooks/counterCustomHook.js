import  {useState} from 'react'

const CounterCustomHook = () => {
    const [state, setState] = useState(0);

  const increament = () => {
  setState(state => state + 1)
}
  const decreament = () => {
    setState(state => state - 1)
  }
  const addTen = () => {
    setState(state => state + 2)
  }
  const resetValue = () => {
    setState(0)
  }
  const removeTen =() =>{
    setState(state => state - 10)
  }
  return(
    [state, increament, decreament, addTen,resetValue, removeTen]
  )
    
}

export default CounterCustomHook;
