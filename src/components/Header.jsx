import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <header className="fixed top-0 left-0 right-0 bg-[#3B4BA0] text-white z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Mobil: logo + meniu pe o singură linie */}
        <div className="flex flex-col sm:hidden">
          <div className="text-2xl font-bold mb-2">
            Travel<span className="text-orange-500">Air</span>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-4 text-sm font-medium">
            <Link to="/" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300">Acasa</Link>
            <Link to="/aboutus" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300">Despre Noi</Link>
            <Link to="/contact" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300">Contact</Link>
            <Link to="/login" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300">Intra in cont</Link>
            <img src="images/user.png" alt="User icon representing account access" className="w-5 h-5"/>
          </div>
        </div>
    
        {/* Desktop */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="text-2xl font-bold">
            Travel<span className="text-orange-500">Air</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300 font-medium">Acasa</Link>
            <Link to="/aboutus" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300 font-medium">Despre Noi</Link>
            <Link to="/contact" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300 font-medium">Contact</Link>
            <div className="flex items-center gap-2">
              <Link to="/login" className="hover:text-blue-300 font-medium">Intra in cont</Link>
               <img src="images/user.png" alt="User icon for login functionality" className="w-5 h-5" />
            </div>
          </nav>
        </div>
      </div>
    </header>
    </div>
  );
}