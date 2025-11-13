import React from "react";

const SkillCard = ({ name, category, icon }) => {
  return (
    // === KARTU BARU (DARK MODE) ===
    <div
      className="bg-slate-800 p-5 rounded-lg shadow-lg flex items-center space-x-4
                    transition-all duration-300 hover:bg-slate-700 hover:scale-105"
    >
      <img
        src={icon}
        alt={name}
        className="w-12 h-12" // Sedikit lebih besar
      />
      <div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        {/* Kita beri warna aksen di sini */}
        <p className="text-cyan-400">{category}</p>
      </div>
    </div>
  );
};

export default SkillCard;
