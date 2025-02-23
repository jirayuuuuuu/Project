import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-red-600 p-4 border-b-4 border-[#D2B48C] shadow-lg"> {/* Added shadow and better bottom border */}
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-white text-3xl font-bold tracking-wide hover:text-[#D2B48C]">
        JD.shop 
        </NavLink>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className="text-white text-lg font-medium hover:text-[#D2B48C] transition duration-300">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/about" className="text-white text-lg font-medium hover:text-[#D2B48C] transition duration-300">
              About
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/product" className="text-white text-lg font-medium hover:text-[#D2B48C] transition duration-300">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-white text-lg font-medium hover:text-[#D2B48C] transition duration-300">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="text-2xl text-white hover:text-[#D2B48C] transition duration-300">
              🛒
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
