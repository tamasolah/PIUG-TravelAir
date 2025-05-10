import React from "react";

export default function VideoSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl font-bold mb-6 text-center">
        Descoperă Ofertele noastre în doar 90 de secunde
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <iframe 
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/NvdWOeMsmWc?si=jM9q6qtYtjbupvUn"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe 
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/qKyXUZd3ndo?si=cGcO1NFovnVou_xb"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe 
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/b5W0ZwBX1mI?si=sLCf7T5Q_KXpWRhY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe 
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/ODBkgaGWe8g?si=aZhA9mBrMOuns0o4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

