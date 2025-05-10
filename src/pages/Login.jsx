import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Logica simplă de autentificare locală
    if (email === "admin@example.com" && parola === "admin") {
      localStorage.setItem("autentificat", "true");
      navigate("/"); // redirecționează către homepage
    } else {
      alert("Date incorecte. Încearcă din nou.");
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white">
      <Header title="Autentificare" />
      <div className="p-4 max-w-md mx-auto space-y-4">

        <form className="space-y-4" onSubmit={handleLogin}>
          <Input
            type="email"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Parolă"
            placeholder="Parolă"
            value={parola}
            onChange={(e) => setParola(e.target.value)}
          />
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
