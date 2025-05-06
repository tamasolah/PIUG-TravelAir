import React from "react";

const oferte = [
  {
    destinatie: "Paris",
    perioada: "10–15 Iunie",
    nopti: 5,
    pret: "499€",
    rating: 4.7,
  },
  {
    destinatie: "Barcelona",
    perioada: "1–7 Iulie",
    nopti: 6,
    pret: "539€",
    rating: 4.8,
  },
  {
    destinatie: "Atena",
    perioada: "5–10 August",
    nopti: 5,
    pret: "459€",
    rating: 4.5,
  },
];

export default function TabelOferte() {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow mt-10">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3">Destinație</th>
            <th className="px-4 py-3">Perioadă</th>
            <th className="px-4 py-3">Nopți</th>
            <th className="px-4 py-3">Preț</th>
            <th className="px-4 py-3">Rating</th>
          </tr>
        </thead>
        <tbody>
          {oferte.map((oferta, index) => (
            <tr key={index} className="even:bg-gray-100 dark:even:bg-gray-800">
              <td className="px-4 py-3">{oferta.destinatie}</td>
              <td className="px-4 py-3">{oferta.perioada}</td>
              <td className="px-4 py-3">{oferta.nopti}</td>
              <td className="px-4 py-3 text-orange-600 font-semibold">{oferta.pret}</td>
              <td className="px-4 py-3">{oferta.rating} ⭐</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
