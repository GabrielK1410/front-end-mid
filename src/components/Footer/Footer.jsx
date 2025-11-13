import React from "react";

const Footer = ({ footer }) => {
  return (
    // Ganti warna border dan teks
    <footer className="mt-16 pt-8 border-t border-slate-700 text-center text-slate-500">
      <p>{footer.copyright}</p>
      <p className="mt-1">{footer.builtWith}</p>
    </footer>
  );
};

export default Footer;
