import React, { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Caută" showBack />
      <div className="p-4">
        <Input
          placeholder="Caută..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="mt-6 text-sm text-gray-600">
          {query ? (
            <p>Rezultate pentru: <strong>{query}</strong></p>
          ) : (
            <p>Introduceți un termen de căutare.</p>
          )}
        </div>
      </div>
    </div>
  );
}
