/* eslint-disable no-undef */
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function RenderError() {
 return (
    <>
    <Helmet>
    <title>Errors</title>
    <meta name='description' content='Error redirects'/>
    <link rel='canonical' href='/Error'/>
</Helmet>
   <div style={{display:'grid', justifyContent:'center', backgroundColor:'gray', height:'100vh'}}>
  <div className="App" style={{backgroundColor:'black', color:'white', justifyContent:'center', textAlign:'center', margin:'100px', borderRadius:'10px',  minWidth:'300px'}}>
   <ErrorBoundary>
    <CheckError />
   </ErrorBoundary>
   
   <div>
    <Link to={'/Couter-app/'} style={{fontSize:'16px', fontWeight:'900', textDecoration:'underline 2px solid #e76f51 ', color:'white'}}>Go back Home</Link>
   </div>
  </div>
     </div>
     </>
 );
}

function CheckError() {
 const data = {state };
 return <h1>{data.state}</h1>;
}

class ErrorBoundary extends React.Component {
 constructor(props) {
  super(props);
  this.state = { hasError: false };
 }

 static getDerivedStateFromError(error) {
  return { hasError: true };
 }

 componentDidCatch(error, info) {
  
 }

 render() {
  if (this.state.hasError) {
   return <p style={{fontWeight:'700', padding:'20px', color:'#e76f51'}}>Error caught!</p>;
  }

  return this.props.children;
 }
}
