import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (

    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
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
               <Link to="/cariere" className="flex items-center gap-6 text-sm font-medium hover:text-blue-300 font-medium">Cariere</Link>
               <div className="flex items-center gap-2">
                 <Link to="/login" className="hover:text-blue-300 font-medium">Intra in cont</Link>
                 <img src="images/user.png" alt="icon" className="w-5 h-5" />
               </div>
             </nav>
           </div>
         </div>
       </header>
    
      
      <div className="px-4 pt-6 mt-20 flex items-center gap-2">
        <h1 className="text-xl font-semibold">Date de Contact</h1>
      </div>

     
      <div className="px-4 py-6 space-y-4 text-sm leading-relaxed">
        <p><strong>Adresa:</strong> S.C. TRAVELAIR S.R.L. | J19FICT1234567</p>

        <p>
          <strong>● Sediu Social:</strong> Str. Ion Creangă 45, Brașov |{" "}
          <strong>Puncte de lucru:</strong> București Sect. 3, Str. Verde 12; Brașov, Str. Muncii 17-19, Ap. 3, 8, 9, 10; Iași, Str. Anastasie Panu 4; Oradea, Str. Republicii 50, în incinta Lotus Center, magazin L109; Constanța, Str. Mircea cel Bătrân 3
        </p>

        <p><strong>● Obiect de activitate principal:</strong> 7912 Activități ale tur-operatorilor, 7911 Activități ale agențiilor turistice, 7990 Alte servicii de rezervare și asistență turistică</p>

        <p><strong>● Autorizații:</strong> Licență de turism nr. 457/15.03.2022, emisă de Ministerul Antreprenoriatului și Turismului | Poliță de asigurare privind protecția în caz de insolvență a agenției de turism organizatoare Seria X nr. 91234, valabilă până la data de 01.06.2026, emisă de GLOBALINS Insurance Group</p>

       
        <div className="space-y-2 pt-2">
          <p>
            <strong>TRAVELAIR București</strong><br />
            BUCUREȘTI 030123, Str. Verde nr. 12, Sect. 3<br />
            Tel: 021 999 88 77<br />
            bucuresti@travelair.ro<br />
            ORAR: Luni–Vineri: 9–17
          </p>

          <p>
            <strong>TRAVELAIR Brașov</strong><br />
            BRAȘOV 500091, Str. Muncii nr. 17–19<br />
            Tel: 0268 765 432<br />
            brasov@travelair.ro<br />
            ORAR: Luni–Vineri: 9–17
          </p>

          <p>
            <strong>TRAVELAIR Constanța</strong><br />
            CONSTANȚA 900123, Str. Mircea cel Bătrân nr. 3<br />
            Tel: 0241 300 600<br />
            constanta@travelair.ro<br />
            ORAR: Luni–Vineri: 9–17
          </p>

          <p>
            <strong>TRAVELAIR Iași</strong><br />
            IAȘI 700267, Str. Anastasie Panu nr. 4<br />
            Tel: 0232 123 456<br />
            iasi@travelair.ro<br />
            ORAR: Luni–Vineri: 9–17
          </p>

          <p>
            <strong>TRAVELAIR Oradea</strong><br />
            ORADEA 410200, Lotus Center – Str. Republicii nr. 50<br />
            Tel: 0359 456 789<br />
            oradea@travelair.ro<br />
            ORAR: Luni–Vineri: 10–18
          </p>
        </div>

        <p className="pt-4"><strong>Telefon:</strong> 0364 803 888</p>
        <p><strong>E-mail:</strong> travel@travelair.ro</p>
      </div>

      {/* FORMULAR DE CONTACT */}
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdPksKmBjlc4MVyS0zWPf_Pzz7g6yNHNXGBeFhp1c6iASwFpA/viewform?embedded=true" 
      width="100%" 
      height="600" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">
      </iframe>

      {/* GDPR INFO */}
      <div className="px-4 py-6 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
        Te informăm că atunci când ne contactezi utilizând formularul de contact, colectăm din partea ta următoarele date cu caracter personal: nume, prenume, e-mail, număr de telefon. Dacă nu furnizezi informațiile obligatorii solicitate în formular, nu vei putea trimite formularul și nu vom primi solicitarea ta. Prin accesarea butonului TRIMITE, îți dai acordul să colectăm datele de mai sus.
      </div>

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