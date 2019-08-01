import React from 'react';
import NavBar from '../components/NavBar';
import GoogleMap from '../components/GoogleMap';


export default ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="container">
        <GoogleMap />
        {children}
      </div>
    </>
  )
};
