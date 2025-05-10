import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:flex md:justify-between">
        {/* Logo și nume */}
        <div className="mb-6 md:mb-0">
          <span className="text-2xl font-semibold">TravelAir</span>
        </div>

        {/* Informații contact și linkuri */}
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Contact</h2>
            <ul className="text-sm text-white font-medium">
              <li className="mb-2">Telefon: 0364 803 888</li>
              <li>E-mail: travel@travelair.ro</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
            <ul className="text-sm text-white font-medium">
              <li className="mb-2">Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
            <ul className="text-sm text-white font-medium">
              <li className="mb-2">Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="text-center text-sm pb-6 text-white">
        © 2025 <span className="font-semibold">TravelAir</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
