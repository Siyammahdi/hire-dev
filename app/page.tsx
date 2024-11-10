"use client";

import { useState, ReactNode } from "react";

import Clients from "./Components/Clients";
import { IoClose } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Header from "./Components/Header";

type ModalContentType = "Portfolio" | "About" | "Contact" | null;

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalContentType>(null);

  const openModal = (content: ModalContentType) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const renderModalContent = (): ReactNode => {
    switch (modalContent) {
      case "Portfolio":
        return <Portfolio />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="relative text-gray-200">
      <div>
        {/* Background Blur Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isModalOpen ? "backdrop-blur-sm opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeModal}
        ></div>

        {/* Main Content */}
        <div className="flex lg:flex-row flex-col lg:items-end">
          <div className="h-screen lg:w-2/3 flex flex-col justify-between">
            <Header openModal={openModal} />
            <div className="m-5 md:m-10 space-y-5">
              <h2 className="uppercase text-3xl lg:text-5xl md:w-2/3 lg:w-1/2">Hire top quality developer</h2>
              <p className="text-[10px] md:text-xs lg:text-sm uppercase w-2/3 lg:w-1/3">
                EVERYTHING THERE IS OUT THERE IN THIS WORLD, MORE OR LESS, PROVIDES FAMILIAR VISION
              </p>
            </div>
            <Clients />
          </div>
          <div className="hidden lg:flex w-1/2 lg:w-1/5 lg:h-screen flex-col justify-between lg:py-52">
            <p className="text-[10px] text-xs lg:text-sm uppercase lg:-ml-20 lg:px-10">
              THIS FAMILIAR VISION CAN BE REPLACED AS HABIT. THIS HABITUAL VISION WHICH EVERY OBJECT GIVES US AND CREATES COMFORT.
            </p>
            <p className="text-[10px] text-xs lg:text-sm uppercase lg:ml-20">
              THIS FAMILIAR VISION CAN BE REPLACED AS HABIT. THIS HABITUAL VISION WHICH EVERY OBJECT GIVES US AND CREATES COMFORT.
            </p>
          </div>
        </div>

        {/* Modal */}
        <div
          className={`fixed inset-0 flex items-center justify-center transition-opacity z-50 duration-200 ${
            isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`shadow-lg bg-black rounded-3xl p-4 md:p-6 w-11/12 max-w-6xl h-4/5 transform transition-transform duration-200 border-2 border-[#292928] ${
              isModalOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-8 z-50 right-8 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={32} />
            </button>

            <div className=" rounded-3xl shadow-inner">
              <div             style={{
              backgroundImage: 'url("/modalBg4.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} className="text-xl font-semibold bg-[#1c1b1e] rounded-xl">{renderModalContent()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="fixed -z-10 bottom-10 right-10 flex gap-4 text-white mb-12 md:mb-0 text-lg md:text-2xl">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}
