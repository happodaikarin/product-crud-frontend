import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl">
          Product API
        </Link>
        <div className="flex space-x-4">
          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                : "text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }
          >
            Crear Producto
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                : "text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }
          >
            Listado
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
