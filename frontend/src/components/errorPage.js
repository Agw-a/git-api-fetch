import React from "react";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet-async';

const PageNotFoundImage = () => {
  return (
    <div className="error-img">
      <img style={{height:'40px', width:'40px'} } src="https://cdn-icons-png.flaticon.com/512/7438/7438599.png" alt="page-not-found" />
    </div>
  );
};
const ErrorSetup = () => {
  return (
    <section className="error-page">
    <div className='error-card'>
    <PageNotFoundImage />
      <h4>Sorry</h4>
      <h4>404 error</h4>
      <p>That page can not be found</p>
      
      <Link className='btn' id="error-btn" to={"/"}>Back to Homepage..</Link>
    

      
    </div>

      
    </section>
  );
};

const RenderErrorPage = () => {
  return (
    <>
    <Helmet>
    <title>Not Found</title>
    <meta name='description' content='Page not Found'/>
    <link rel='canonical' href='*'/>
</Helmet>
      <ErrorSetup />
    </>
  );
};
export default RenderErrorPage;
