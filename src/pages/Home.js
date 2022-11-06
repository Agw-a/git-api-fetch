import React from "react";
import { Link } from "react-router-dom";
import { NavBarElements, RenderFooter } from "../modules/modules";



const Main = () => {
  return (
    <div>
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
