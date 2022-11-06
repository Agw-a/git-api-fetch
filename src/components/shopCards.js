import React, {useState} from 'react'

import Counter from './counter'
import classes from './toggle.module.css'
import { Link } from 'react-router-dom'

const Groceries = () => {
  return (
    <div className='one-card'>
    <img src="https://cdn-icons-png.flaticon.com/512/3514/3514242.png" alt="Groceries"/>
      <h2>Snacks</h2>
      <p>Add some groceries and drinks</p>
      <Counter />
    </div>
  )
}

const Books = () => {
  return (
    <div className='one-card'>
    <img src="https://cdn-icons-png.flaticon.com/512/3514/3514242.png" alt="Groceries"/>
      <h2>Books</h2>
      <p>Add new title to cart</p>
      <Counter />
    </div>
  )
}

const Bags = () => {
    return(
        <div className='one-card'>
        <img src="https://cdn-icons-png.flaticon.com/512/3514/3514242.png" alt="Groceries"/>
          <h2>Bags</h2>
          <p>Get a package for the goods</p>
        <Counter />
        </div>
    )

}


const Card = ()  => {
  const [mode, setMode] = useState(true);

      const clickHandler = () => {
        setMode(prevState => !prevState);
    };

    const toggledClass = mode ? classes.light : classes.dark;
  
      return (
        <div>
          <div className={toggledClass} id='card-holder'>
            <Books />
            <Groceries />
            <Bags />
            <button className='toggle-view' onClick={clickHandler}>🌓</button>
            <Link to={'/Couter-app/Custom Hook'} className='link-frm-custom' style={{color:'#621708', fontWeight:700, margin: '30px'}}>Custom checkout ↗ </Link>
            <Link to={'/'} className='link-frm-custom' style={{color:'#621708', fontWeight:700, margin: '30px'}}>↖ Back Home </Link>
            </div>
            </div>
      )

}
export default Card;
