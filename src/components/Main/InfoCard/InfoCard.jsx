import React from "react";

const InfoCard = ({ title, value }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-lg font-semibold text-gray-800 mt-1">{value}</p>
    </div>
  );
};

export default InfoCard;
