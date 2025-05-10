import React from "react";
import { Link } from "react-router-dom";

export default function Cariera() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
  <header className="fixed top-0 left-0 right-0 bg-[#3B4BA0] text-white z-50 shadow">
  <div className="max-w-7xl mx-auto px-6 py-4">
    {/* Mobil: logo + meniu pe o singură linie */}
    <div className="flex flex-col sm:hidden">
      <div className="text-2xl font-bold mb-2">
        Travel<span className="text-orange-500">Air</span>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-4 text-sm font-medium">
        <Link to="/" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300">Acasa</Link>
        <Link to="/aboutus" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300">Despre Noi</Link>
        <Link to="/contact" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300">Contact</Link>
        <Link to="/login" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300">Intra in cont</Link>
        <img src="images/user.png" alt="icon" className="w-5 h-5" />
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden sm:flex items-center justify-between">
      <div className="text-2xl font-bold">
        Travel<span className="text-orange-500">Air</span>
      </div>
      <nav className="flex items-center gap-6 text-sm">
        <Link to="/" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300 font-medium">Acasa</Link>
        <Link to="/aboutus" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300 font-medium">Despre Noi</Link>
        <Link to="/contact" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300 font-medium">Contact</Link>
        <div className="flex items-center gap-2">
          <Link to="/login" className="hover:text-blue-300 font-medium">Intra in cont</Link>
          <img src="images/user.png" alt="icon" className="w-5 h-5" />
        </div>
      </nav>
    </div>
  </div>
</header>

{/* Hero Section */}
<div className="flex flex-col items-center mt-0">
  <img src="images/pexels-fauxels-3184424.jpg" alt="" className="w-full h-[250px] object-cover object-center sm:h-[400px] md:h-[500px]" />
  <header className="bg-[#8697c4] px-6 py-4 mt-[-1.5rem] text-white text-xl md:text-2xl font-bold rounded shadow-md w-72 text-center">
    Hai in Echipa Noastra!
  </header>
</div>



      <main className="pt-24 max-w-4xl mx-auto px-6 space-y-12">
        {/* Cariere Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <img src="images/briefcase.png" className="w-6 h-6" alt="briefcase" />
            Cariere
          </h2>
          <p className="font-bold">Ne extindem echipa! Hai în aventura TRAVELAIR!</p>
          <p> Dacă îți dorești să faci parte dintr-un brand apreciat în industria turismului, să lucrezi într-un mediu dinamic și prietenos, alături de o echipă cu experiență și pasiune pentru călătorii, atunci locul tău este alături de noi!</p>
          <p> TRAVELAIR caută colegi entuziaști și implicați pentru mai multe roluri în cadrul agențiilor noastre și la sediul central. Ai șansa să te dezvolți profesional, iar pentru unele poziții, dacă ai experiență, poți lucra și remote.</p>
          <p>📩 Trimite CV-ul tău pe adresa: <a href="mailto:jobs@travelair.ro" className="text-blue-600 underline">jobs@travelair.ro</a></p>
          <p>🔹 Nu uita să menționezi orașul și postul pentru care aplici!</p>
        </section>

        {/* Joburi Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <img src="images/job-search.png" className="w-6 h-6" alt="job search" />
            Joburi Disponibile Acum
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold">București</h3>
              <ul className="list-disc list-inside">
                <li>Consultant Ticketing & Leisure Travel</li>
                <li>Consultant Business Travel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Cluj - Napoca</h3>
              <ul className="list-disc list-inside">
                <li>Consultant Ticketing & Leisure Travel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Timișoara</h3>
              <ul className="list-disc list-inside">
                <li>Travel Agent</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Sibiu</h3>
              <ul className="list-disc list-inside">
                <li>Travel Agent</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4 pb-24">
          <h2 className="text-2xl font-semibold">Contactează-ne</h2>
          <p>Cu peste 68 de sedii în întreaga țară, TRAVELAIR este mereu aproape de tine. Găsește agenția cea mai apropiată și lasă-ne să ne ocupăm de toate detaliile vacanței tale.</p>
          <p>Consultanții noștri de turism sunt pregătiți să îți ofere cele mai bune oferte și să gestioneze complet rezervările, astfel încât tu să te poți concentra doar pe ce contează cu adevărat: relaxare, aventură și amintiri de neuitat.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
  <div className="max-w-screen-xl mx-auto px-4 py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 text-white text-xl font-bold">TravelAir</div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
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
    </div>
    <div className="mt-6 text-xs text-center border-t border-gray-700 pt-4 text-gray-500">
      © 2025 TravelAir. All Rights Reserved.
    </div>
  </div>
</footer>
    </div>
  );
}
