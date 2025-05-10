import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";
import { motion } from "framer-motion";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // simulare
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white">
      <Header title="Creare Cont" showBack />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-4 max-w-md mx-auto space-y-4"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="email" label="Email" placeholder="Email" />
          <Input type="password" label="Parolă" placeholder="Parolă" />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-800 dark:bg-gray-700 text-white py-3 rounded hover:bg-gray-900 dark:hover:bg-gray-600 transition active:scale-95 disabled:opacity-50"
          >
            {loading ? "Se înregistrează..." : "Înregistrează-te"}
          </button>
        </form>
        <p className="text-sm text-center">
          Ai deja cont?{" "}
          <Link to="/login" className="text-orange-500 font-medium hover:underline">
            Autentifică-te
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
