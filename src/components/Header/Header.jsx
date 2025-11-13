import React from "react";

const Header = ({ profile }) => {
  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
      <img
        className="w-28 h-28 rounded-full border-4 border-gray-200"
        src={profile.profileImage}
        alt={profile.name}
      />
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
        <p className="text-lg text-gray-600 mt-1">{profile.title}</p>
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mt-2 px-3 py-1 rounded-full">
          {profile.nim}
        </span>
      </div>
    </header>
  );
};

export default Header;
