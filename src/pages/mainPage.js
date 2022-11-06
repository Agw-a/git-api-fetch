import React from 'react'

import { MainCounterApp, NavBarElements, RenderFooter } from '../modules/modules'
import { Helmet } from 'react-helmet-async'

const MainPage = () => {
  return (
    
    <div>
         <Helmet>
            <title>useReducer</title>
            <meta name='description' content='Implementing a counter application with custom hooks and useReducer'/>
            {/* <link rel='canonical' href='/Couter-app'/> */}
        </Helmet>
      <NavBarElements />
      <MainCounterApp />
     
      <RenderFooter />
    </div>
  )
}

export default MainPage;
