import React from 'react';
import NavBar from '../components/NavBar';


export default ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="container">
        {children}
      </div>
    </>
  )
};
