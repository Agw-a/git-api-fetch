import React from "react";
import { Link, useRouteError } from "react-router-dom";

const PageNotFoundImage = () => {
  return (
    <div>
      <img className="error-img" src="https://cdn-icons-png.flaticon.com/512/7438/7438599.png" alt="page-not-found" />
    </div>
  );
};
const ErrorSetup = () => {
  return (
    <section className="error-page">
      <PageNotFoundImage />
      <h2>Sorry</h2>
      <p>That page can not be found</p>
      
      <Link className='error-button' to={"/"}>Back to Homepage..</Link>
      
      
    </section>
  );
};

const RenderErrorPage = () => {
  return (
    <>
      <ErrorSetup />
    </>
  );
};
export default RenderErrorPage;
