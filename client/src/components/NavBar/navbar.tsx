import React from "react";
import { NavLink } from "react-router-dom";
import { ErrorBoundary } from "..";
import "./navbar.css"

const Navbar = () => {
  return (
    <ErrorBoundary>
      <div>
        <ul className='List'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/register'>Register</NavLink></li>
        </ul>
      </div>
    </ErrorBoundary>
  );
}

export default Navbar;

