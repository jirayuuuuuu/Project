import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-red-600 p-4 border-t-4 "> {/* ขอบบนสีแดง */}
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-white text-2xl font-bold">
          ของฝากจากนครปฐม
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="text-white hover:text-[#D2B48C]">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/about" className="text-white hover:text-[#D2B48C]">
              About
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/product" className="text-white hover:text-[#D2B48C]">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="text-white hover:text-[#D2B48C]">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="text-xl text-white hover:text-[#D2B48C]">
            🛒
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
