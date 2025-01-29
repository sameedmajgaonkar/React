import React, { Component } from "react";
// State Functional Component
const NavBar = ( {totalLength} ) => {
  console.log("Navbar Rendered")
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge badge-dark">{ totalLength }</span>
        </a>
      </div>
    </nav>
  );
}
 
export default NavBar;
