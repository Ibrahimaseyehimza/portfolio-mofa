import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Texte gauche */}
        <div className="text-center md:text-left">
          <p className="text-gray-200 text-sm">
            © {year} <span className="font-semibold text-white">Mouhamed Fall</span>
          </p>
          <p className="text-gray-300 text-sm">
            UI/UX Designer & Infographiste
          </p>
          <a
            href="mailto:mfall9467@gmail.com"
            className="text-orange-400 text-sm hover:underline"
          >
            mfall9467@gmail.com
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.tiktok.com/@mouhamed_mofa?_r=1&_t=ZM-919oGF1fHzQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full
            border border-orange-400 text-orange-400
            hover:bg-orange-400 hover:text-black transition"
          >
            <FaTiktok size={18} />
          </a>

          <a
            href="https://www.facebook.com/share/19XhQCDmFR/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full
            border border-orange-400 text-orange-400
            hover:bg-orange-400 hover:text-black transition"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/mouhamed-fall-3b0a42374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full
            border border-orange-400 text-orange-400
            hover:bg-orange-400 hover:text-black transition"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="https://www.instagram.com/mouhamed_mofa?igsh=bTBtczFxMndvamZl&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full
            border border-orange-400 text-orange-400
            hover:bg-orange-400 hover:text-black transition"
          >
            <FaInstagram size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
