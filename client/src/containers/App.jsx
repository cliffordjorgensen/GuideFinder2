import React from 'react';
import NavBar from '../components/NavBar';
import GoogleMap from '../components/GoogleMap';
import Search from '../components/Search/Search';


export default ({ children }) => {
  return (
    <>
      <NavBar />
      <Search />
      <div className="container">
        <GoogleMap />
        {children}
      </div>
    </>
  )
};
