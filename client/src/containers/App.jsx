import React from 'react';
import NavBar from '../components/NavBar';


export default ({ children }) => {
  return (
    <div className="container">
      <NavBar />
      {children}
    </div>
  )
};
