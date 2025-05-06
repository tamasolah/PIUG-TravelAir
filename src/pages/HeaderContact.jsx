import React from "react";
import { Phone, Heart, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

export default function HeaderContact() {
  return (
    <header className="fixed top-0 w-full z-50 bg-sky-400 text-white py-3 px-4 flex items-center justify-between shadow-md">
    
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="bg-orange-500 hover:bg-blue-700 rounded-full p-2 transition"
          title="Înapoi la home"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
        </Link>
      <div className="flex items-center gap-2 font-bold text-xl">
         <Link to="/" className="text-xl font-bold">
                  <span className="text-blue-600">Travel</span>
                  <span className="text-orange-500">Air</span>
          </Link>
      </div>
      </div>
     
      
      <div className="flex items-center gap-4">
        <a href="tel:0304020835" className="hover:text-gray-200">
          <Phone className="w-5 h-5" />
        </a>
        <User className="w-5 h-5 hover:text-gray-200" />
        <Heart className="w-5 h-5 hover:text-gray-200" />
        <ThemeToggle /> 
        <Link
          to="/contact"
          className="bg-white text-blue-600 text-sm font-semibold px-3 py-1.5 rounded hover:bg-gray-100"
        >
          Cere ofertă
        </Link>
      </div>
    </header>
  );
}

