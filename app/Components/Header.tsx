import Image from 'next/image';
import React, { useState } from 'react';
import Logo from "@/public/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu and close

type ModalContentType = "Portfolio" | "About" | "Contact";

interface HeaderProps {
  openModal: (content: ModalContentType) => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative z-50">
      <div className="m-10 flex justify-between items-center">
        <Image src={Logo} alt="logo" height={60} width={160} />

        {/* Hamburger Menu Icon for smaller screens */}
        <button className="lg:hidden z-10 text-3xl" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex absolute top-10 right-10 gap-10">
          <button onClick={() => openModal("Portfolio")} className="hover:text-yellow-600">
            Portfolio
          </button>
          <button onClick={() => openModal("About")} className="hover:text-yellow-600">
            About
          </button>
          <button onClick={() => openModal("Contact")} className="hover:text-yellow-600">
            Contact
          </button>
        </nav>
      </div>

      {/* Mobile Menu - Drawer from top */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col items-center py-10 space-y-6 text-2xl border-b rounded-b-2xl border-[#292928]">
          <button onClick={() => { openModal("Portfolio"); toggleMenu(); }} className="hover:text-yellow-600 text-base">
            Portfolio
          </button>
          <button onClick={() => { openModal("About"); toggleMenu(); }} className="hover:text-yellow-600 text-base">
            About
          </button>
          <button onClick={() => { openModal("Contact"); toggleMenu(); }} className="hover:text-yellow-600 text-base">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
