import React from "react";
import { Link } from "react-router-dom";

export default function DespreNoi() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#3B4BA0] text-white z-50 shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Travel<span className="text-orange-500">Air</span>
          </div>

          {/* Navigație + Intra in cont */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm mt-4 sm:mt-0">
            <Link to="/" className="flex items-center gap-6 text-sm font-medium hover:text-blue-600">Acasa</Link>
            <Link to="/cariere" className="flex items-center gap-6 text-sm font-medium hover:text-blue-600">Cariere</Link>
            <Link to="/contact" className="flex items-center gap-6 text-sm font-medium hover:text-blue-600">Contact</Link>
            <Link to="/login" className="flex items-center gap-6 text-sm font-medium hover:text-blue-600">
              Intra in cont
              <img src="images/user.png" alt="user icon" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="flex flex-col items-center mt-0">
        <img src="images/pexels-fauxels-3184424.jpg" alt="" className="w-full h-[250px] object-cover object-center sm:h-[400px] md:h-[500px]" />
        <header className="bg-[#8697c4] px-6 py-4 -mt-10 text-white text-xl md:text-2xl font-bold rounded shadow-md w-72 md:w-80 text-center ">
          Cine suntem Noi?
        </header>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 text-justify">
        <p>
          Compania TRAVELAIR a fost înființată în anul 1998 la Brașov, din pasiunea pentru descoperirea celor mai frumoase destinații și experiențe de călătorie. Astăzi, suntem prezenți în toată țara printr-o rețea de 14 agenții de turism, dintre care 7 sunt agenții proprii, iar 7 funcționează în regim de franciză, în următoarele orașe: București, Brașov, Oradea, Constanța, Iași, Craiova, Galați, Arad, Pitești, Bacău, Târgu Mureș, Ploiești, Baia Mare și Deva.
        </p>

        <section className="space-y-4">
          <header className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Povestea Noastră</h2>
            <img className="w-8 h-8" src="images/open-book.png" alt="" />
          </header>
          <p>De la o idee curajoasă la o rețea națională: TRAVELAIR – Călătorii cu suflet</p>
          <p>Totul a început într-o garsonieră din Brașov, pe Strada Stejarului, în anul 1998. Aveam un birou împrumutat, două telefoane fixe și un vis mare cât lumea...</p>
          <p>Am crescut pas cu pas, iar astăzi, după mai bine de două decenii, suntem mândri că suntem alături de zeci de mii de turiști în fiecare an...</p>
        </section>

        <video className="w-full rounded-lg" controls autoPlay muted>
          <source src="videos/Travel Agency Logo Advert - Renderforest (1080p, h264).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <section className="space-y-4">
          <header className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Echipa Noastră</h2>
            <img className="w-8 h-8" src="images/team.png" alt="" />
          </header>
          <p>Ghidurile noastre turistice, piloții și însoțitorii de bord ai companiei SkyRoutes...</p>
        </section>

        <section className="space-y-4">
          <header className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Realizările Noastre</h2>
            <img className="w-8 h-8" src="images/target.png" alt="" />
          </header>
          <p>1998 – Se aprinde prima scânteie: TRAVELAIR prinde viață în Brașov!</p>
          <p>Dintr-un vis îndrăzneț și o pasiune autentică pentru explorare...</p>
        </section>

        <section className="space-y-4">
          <header>
            <h2 className="text-2xl font-bold">Contactează-ne</h2>
          </header>
          <p>Cu peste 68 de sedii în întreaga țară, TRAVELAIR este mereu aproape de tine...</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-sm">
            <div className="text-white text-xl font-bold">TravelAir</div>
            <div>
              <h2 className="mb-4 text-white font-semibold uppercase">Contact</h2>
              <p>Telefon: 0364 803 888</p>
              <p>E-mail: travel@travelair.ro</p>
            </div>
            <div>
              <h2 className="mb-4 text-white font-semibold uppercase">Follow Us</h2>
              <p>Facebook</p>
              <p>Instagram</p>
            </div>
            <div>
              <h2 className="mb-4 text-white font-semibold uppercase">Legal</h2>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="mt-6 text-xs text-center border-t border-gray-700 pt-4 text-gray-500">
            © 2025 TravelAir. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 
