
import React from "react";
import Maps from "./Maps";
import NavBar from "../components//NavBar";
import Search from "../components/Search/Search";
export default ({ children }) => {
  return (
    <div>
      <NavBar />
      <Maps />
      <Search />
      {children}
    </div>
  );
};




/*Dont panic, I cleared out whatever that was in here, and transfered them to Maps 
in containers. Then i hooked up Maps to the index.jsx in the root folder. //#endregion
I also went in to change the Welcome page inside of containers for it to contain options to 
sign in or sign up. When we open the page it will initially sent you to the welcome page, 
and it will offer you the option to sign in or sign up, once you've signed in or signed up, 
it will direct you to the map page*/


// {/* <div className='container' />; */}
