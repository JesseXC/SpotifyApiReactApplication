import React from 'react'
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <header>
        <nav className='text-blue bold text-center p-10 space-x-48'>
        <NavLink to="/" className="p-5 border border-green ">
            Home
        </NavLink>
        <NavLink to="/about" className="p-5 border border-green ">
            About
        </NavLink>
        <NavLink to="/contact" className="p-5 border border-green ">
            Contact
        </NavLink>
        </nav>
    </header>
  );
}

export default Navbar;