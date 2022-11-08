import React from "react";
import { Link } from "react-router-dom";
import { NavBarElements, RenderFooter } from "../modules/modules";
import { Helmet } from 'react-helmet-async';


const Main = () => {
  return (
    <div>
    <Helmet>
            <title>Counter App</title>
            <meta name='description' content='Implementing a counter application with  useReducer hook'/>
            <link rel='canonical' href='/Couter-app'/>
        </Helmet>
    <NavBarElements />
      <main className="container-homepage">
      
        <div className="home-page">
          <div className="items-container">
          <h2 className="text-home">Everything you need for the slow days!</h2>
          

          <Link to={'/Couter-app'} className="btn">
            Proceed to shop
          </Link>
          </div>

          
        </div>
       
      </main>
      <RenderFooter />
    </div>
  );
};

export default Main;
