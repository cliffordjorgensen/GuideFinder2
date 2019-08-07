import React from 'react';
// import NavBar from '../components/NavBar';
import Demo from './../components/Demo';
import Search from '../components/Search';
import Dropdown from "../components/DisplayCity2";
// import Search from '../components/Search/Search';
// import NavBar from '../components/NavBar'

export default () => {
  return (
    <div>
      <Search />
        <Dropdown/>
      <Demo />
    </div>
  );
};
