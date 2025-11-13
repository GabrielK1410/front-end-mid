import React from "react";

const Header = ({ profile }) => {
  return (
    // Layout 2 kolom
    <header className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
      {/* Kolom Teks (kiri) */}
      <div className="text-center sm:text-left">
        {/* === PERUBAHAN DI SINI === */}
        {/* Mengganti 'text-white' menjadi 'text-[#004D98]' */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#004D98] mb-6">
          {profile.name}
        </h1>
        {/* ========================== */}

        {/* Judul dengan aksen warna cyan (teal) */}
        <p className="mt-2 text-2xl text-[#A50044] mb-1">{profile.title}</p>

        <p className="mt-2 text-lg text-slate-400 mb-3">{profile.nim}</p>
      </div>

      {/* Kolom Foto (kanan) */}
      <div className="flex-shrink-0">
        <img
          className="w-40 h-40 rounded-full object-cover border-4 border-slate-700
                     shadow-lg shadow-cyan-500/30"
          src={profile.profileImage}
          alt={profile.name}
        />
      </div>
    </header>
  );
};

export default Header;
