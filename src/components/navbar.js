import React from 'react';

import '../App.css';
import { Link } from 'react-router-dom';

const ListDisplay = () => {
  return (
    <img className='image-icon' src='https://cdn-icons-png.flaticon.com/512/54/54410.png' alt='list-icon'
    />
  )
}

const Gallery = () => {
  return (
    <img className='image-icon' src='https://cdn-icons-png.flaticon.com/512/45/45107.png' alt='galery-view'/>
  )
}
const NavBar = () => {
  return (
    <nav className='header'>
      
      <Link className='logo'>Git Stats</Link>
      
        
        <Link>{<ListDisplay/>}</Link>
        <Link>{<Gallery/>}</Link>
        
        
        

    </nav>
  )
}

const RenderNavBar = () => {
    return(
        <>
        <NavBar/>
        </>
    )
}

export default RenderNavBar;