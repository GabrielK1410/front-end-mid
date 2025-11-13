import React from "react";

const Footer = ({ footer }) => {
  return (
    <footer className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
      <p>{footer.copyright}</p>
      <p className="mt-1">{footer.builtWith}</p>
    </footer>
  );
};

export default Footer;
