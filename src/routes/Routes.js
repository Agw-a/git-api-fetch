import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageNotFound } from '../modules/modules';
import Main from '../pages/Home';
import SingleRepo from '../pages/SingleRepo';
import Stats from '../pages/Stats';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Main/>} />
        <Route path={`/All-Repos/*`} element={<Stats/>}/>
        <Route path='/All-Repos/:title' element={<SingleRepo />}/>
        
        <Route path='*' element={<PageNotFound />}/>
    </Routes>
  )
}

export default AppRoutes;
