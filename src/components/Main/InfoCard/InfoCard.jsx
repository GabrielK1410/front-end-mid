import React from "react";

const InfoCard = ({ title, value }) => {
  return (
    // === KARTU BARU (DARK MODE) ===
    // Ganti total dari 'bg-white'
    <div
      className="bg-slate-800 p-6 rounded-lg shadow-lg
                    border-t-2 border-cyan-500"
    >
      {/* Teks title (atas) */}
      <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
        {title}
      </h3>

      {/* Teks value (bawah) */}
      <p className="text-2xl font-semibold text-white mt-2">{value}</p>
    </div>
  );
};

export default InfoCard;
