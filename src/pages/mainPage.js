import React from 'react'

import { MainCounterApp, NavBarElements, RenderFooter } from '../modules/modules'

const MainPage = () => {
  return (
    <div>
      <NavBarElements />
      <MainCounterApp />
     
      <RenderFooter />
    </div>
  )
}

export default MainPage;
