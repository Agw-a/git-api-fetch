import React from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom'
import { PageNotFound } from '../modules/modules';
import Main from '../pages/Home';
import MainPage from '../pages/mainPage';
import FallBackError from '../components/fallBackError';
import ErrorHandler from '../components/errorHandler';
import CustomHookCounter from '../pages/customHook';



const AppRoutes = () => {
  return (
    <ErrorBoundary FallbackComponent={FallBackError} onError={ErrorHandler}>
    <Routes>
        <Route path='/' element={<Main/>} /> 
        <Route path='/Couter-app/' element={<MainPage/>}/>  
        <Route path='/Custom Hook' element={<CustomHookCounter/>}/>    
        <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </ErrorBoundary>
  
  )
}

export default AppRoutes;
