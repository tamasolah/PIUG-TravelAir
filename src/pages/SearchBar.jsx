import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="px-4 py-3">
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Ce vrei să cauți azi?"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
        />
      </div>
    </div>
  );
}
