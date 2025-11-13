import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const iconMap = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  instagram: <FaInstagram />,
};

const Header = ({ profile }) => {
  return (
    <header className="flex flex-col items-center md:items-start text-center md:text-left">
      {/* Foto Profil dengan Glow Merah */}
      <img
        className="w-48 h-48 rounded-full object-cover border-4 border-slate-700
                   shadow-lg shadow-[#A50044]/50" // <-- Aksen Merah Barcelona
        src={profile.profileImage}
        alt={profile.name}
      />

      {/* Teks Info */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold text-white">{profile.name}</h1>
        {/* Judul dengan aksen merah Barcelona */}
        <p className="mt-2 text-2xl text-[#A50044] font-semibold">
          {profile.title}
        </p>
        <p className="mt-4 text-lg text-slate-400">{profile.nim}</p>
      </div>

      {/* Ikon Sosial Media */}
      {profile.socials && (
        <div className="flex justify-center md:justify-start space-x-5 mt-8">
          {profile.socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              className="text-slate-500 hover:text-[#A50044] transition-colors text-3xl"
            >
              {iconMap[social.name]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
