import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Users Management App</h1>
      <div className='links'>
        <NavLink to='/' exact='true'>
          Users List
        </NavLink>
        <NavLink to='/add'>Add User</NavLink>
      </div>
    </header>
  );
};

export default Header;
