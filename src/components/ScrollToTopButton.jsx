import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Afișează butonul doar după scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll înapoi sus
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-6 bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-full shadow-lg z-40"
      title="Înapoi sus"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  ) : null;
}
