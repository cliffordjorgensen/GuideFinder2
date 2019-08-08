import React from 'react';
import Demo from './../components/Demo';
import Search from '../components/Search';
import Dropdown from "../components/DisplayCity2";
// import Carousel from "../components/Carousel"
import "./style.css"

export default () => {
  return (
    <div>
      <Demo />
      <Search />
      <Dropdown />
      {/* <Carousel /> */}
    </div>
  );
};
