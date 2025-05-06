import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white">
      <Header title="Autentificare" />
      <div className="p-4 max-w-md mx-auto space-y-4">
      
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-sm text-blue-600 hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi
        </button>

        <form className="space-y-4">
          <Input type="email" label="Email" placeholder="Email" />
          <Input type="password" label="Parolă" placeholder="Parolă" />
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-900 active:scale-95 transition"
          >
            Autentifică-te
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Nu ai cont?{" "}
          <Link to="/register" className="text-orange-500 font-medium hover:underline">
            Creează unul
          </Link>
        </p>
      </div>
    </div>
  );
}

