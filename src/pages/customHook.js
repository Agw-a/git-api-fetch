import React from 'react'
import UseCounterHook from '../components/useCustomHook';
import { NavBarElements, RenderFooter } from '../modules/modules'
import { Helmet } from 'react-helmet-async';

const CustomHookCounter = () => {
  return (
    <div>
        <Helmet>
            <title>Custom Hook</title>
            <meta name='description' content='Implementing a counter application with custom hooks'/>
            <link rel='canonical' href='/Couter-app/Custom Hook'/>
        </Helmet>
    <NavBarElements />
    
    <UseCounterHook />
    <RenderFooter />
    </div>
  )
}

export default CustomHookCounter;
