import React from "react";

const SkillCard = ({ name, category, icon }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-center space-x-4">
      <img src={icon} alt={name} className="w-10 h-10" />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
  );
};

export default SkillCard;
