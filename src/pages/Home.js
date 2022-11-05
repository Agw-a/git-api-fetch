import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <nav className="home-nav">
      <h2>Git-Stats</h2>
    </nav>
  );
};

const Main = () => {
  return (
    <>
      <HomeNav />
      <main className="container-homepage">
        <div className="home-page">
          <h2 className="text-home">Check User GitHub Stats</h2>
          

          <Link to={"/All-Repos"} className="btn">
            Get started
          </Link>
        </div>
      </main>
    </>
  );
};

export default Main;
