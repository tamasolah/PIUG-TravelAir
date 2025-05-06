import React from "react";
import HeaderContact from "../pages/HeaderContact";

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
      
      <HeaderContact />

      
      <div className="px-4 pt-6 mt-4 flex items-center gap-2">
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
    </div>
  );
}