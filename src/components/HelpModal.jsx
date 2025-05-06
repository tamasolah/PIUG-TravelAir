import React, { useState } from "react";
import { HelpCircle, X } from "lucide-react";

export default function HelpModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Buton plutitor */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
        title="Ajutor"
      >
        <HelpCircle className="w-5 h-5" />
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full p-6 relative">
            {/* Buton închidere */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-bold mb-4">Ai nevoie de ajutor?</h2>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
              Pentru orice întrebare legată de rezervări, destinații sau contul tău, ne poți contacta:
            </p>

            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>📧 Email: suport@travelair.ro</li>
              <li>📞 Telefon: 0364 803 888</li>
              <li>⏰ Program: Luni–Vineri, 09:00–17:00</li>
            </ul>

            <p className="mt-4 text-xs text-gray-500">
              În curând vom adăuga și un sistem de chat live.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
