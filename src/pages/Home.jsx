import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import SearchFilters from "../components/SearchFilters";
import TabelOferte from "../components/TabelOferte";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";

export default function Home() {
  const user = {
    name: "TravelAir",
    email: "thomas@email.com",
  };
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
     
      <Header />

      
      <div className="pt-20 space-y-10">

      {user && (
      <section className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl font-bold">
                 Bun venit, pe <span className="text-blue-600">{user.name}</span>!
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                Am pregătit câteva recomandări speciale pentru tine.
                </p>
      </section>
)}


       
        <Carousel />

        
        <section className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Unde vrei să călătorești?</h2>
          <SearchFilters />
        </section>

       
        <section className="max-w-6xl mx-auto px-4 pb-10">
          <h2 className="text-xl font-bold mb-6">Vacanțe tematice</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={`/images/theme${i}.jpg`} 
                  alt={`Vacanță ${i}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-semibold">Vacanță {i}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Destinație populară</p>
                  <p className="text-sm text-orange-500 font-medium">De la 299€</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-xl font-bold mb-4">Oferte disponibile</h2>
            <TabelOferte />
        </section>
        <VideoSection />
        <Footer />
      </div>
    </div>
  );
}
