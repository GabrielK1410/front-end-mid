import React from "react";

const SkillCard = ({ name, category, icon }) => {
  return (
    // Kartu dark mode dengan hover effect
    <div
      className="bg-slate-800 p-5 rounded-lg shadow-lg flex items-center space-x-4
                    transition-all duration-300 hover:bg-slate-700 hover:scale-105"
    >
      <img src={icon} alt={name} className="w-12 h-12" />
      <div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        {/* Aksen merah di kategori */}
        <p className="text-sm text-[#A50044]">{category}</p>
      </div>
    </div>
  );
};

export default SkillCard;
