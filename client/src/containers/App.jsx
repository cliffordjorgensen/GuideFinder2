import React from 'react';
import NavBar from '../components/NavBar';
import GoogleMap from '../components/GoogleMap';


export default ({ children }) => {
  return (
    <div className="container">
      <NavBar />
      <GoogleMap />
      {children}
    </div>
  )
};
