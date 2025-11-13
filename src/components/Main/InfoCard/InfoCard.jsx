import React from "react";

const InfoCard = ({ title, value }) => {
  return (
    // Kartu dark mode dengan aksen border merah di kiri
    <div
      className="bg-slate-800 p-6 rounded-lg shadow-lg
                    border-l-4 border-[#A50044]
                    transition-all duration-300 hover:bg-slate-700"
    >
      <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-2xl font-semibold text-white mt-2">{value}</p>
    </div>
  );
};

export default InfoCard;
