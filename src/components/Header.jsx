import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-950 text-gray-800 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
       
        <Link to="/" className="text-xl font-bold">
          <span className="text-blue-600">Travel</span>
          <span className="text-orange-500">Air</span>
        </Link>

        
        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Despre Noi
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Cariere
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 underline"
                : "bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
            }
          >
            Autentificare
          </NavLink>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
