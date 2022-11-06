import React from 'react'
import UseCounterHook from '../components/useCustomHook';
import { NavBarElements, RenderFooter } from '../modules/modules'

const CustomHookCounter = () => {
  return (
    <div>
    <NavBarElements />
    
    <UseCounterHook />
    <RenderFooter />
    </div>
  )
}

export default CustomHookCounter;
