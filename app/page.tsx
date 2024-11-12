"use client";

import { useState, ReactNode } from "react";
// import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Clients from "./Components/Clients";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Header from "./Components/Header";
import GlowingText from "./Components/GlowingText";
import { AnimatedText } from "./Components/AnimatedText";
// import GlowingText from "./Components/GlowingText";

type ModalContentType = "Portfolio" | "About" | "Contact" | null;

// const getRandomPosition = () => ({
//   x: Math.random() * (window.innerWidth / 2 - 150) + window.innerWidth / 2, 
//   y: Math.random() * (window.innerHeight - 50),
// });

// const GlowingTextBlock = ({
//   text,
//   isVisible,
//   position,
// }: {
//   text: string;
//   isVisible: boolean;
//   position: { x: number; y: number };
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: isVisible ? 1 : 0 }}
//       transition={{ duration: 0.5 }}
//       style={{
//         position: "absolute",
//         top: `${position.y}px`,
//         left: `${position.x}px`,
//         fontSize: "0.7rem",
//         color: "#fff",
//         textShadow: "0px 0px 10px rgba(0, 0, 0, 1)",
//       }}
//       className="glowing-text w-[200px]"
//     >
//       {text}
//     </motion.div>
//   );
// };

// const texts = [
//   "THE FUTURE OF YOUR STARTUP BEGINS WITH DEV TALENT THAT UNDERSTANDS YOUR VISION",
//   "STUCK IN A DEVELOPMENT CRISIS? LET OUR TEAM RESCUE YOU WITH VISIONARY SOLUTIONS",
//   "TO KEEP YOUR PROJECT ON TRACK AND DESTINED FOR GREATNESS, WE’RE ONLY AN EMAIL AWAY.",
//   "SAVE YOUR STARTUP FROM ALL-CONSUMING BURN RATE ONLY $55 to $95 /hour",
//   "NO PROJECT TOO COMPLEX, NO CODE TOO CURIOUS—WE SOLVE IT ALL",
//   "AND IF YOUR DEV TURNS INTO A DEVIL,WE DELIVER A NEW DEVOTEE",
//   "FROM CODE CHAOS TO STREAMLINED SUCCESS, WE’RE JUST A CLICK AWAY",
//   "TURN YOUR IDEAS INTO INNOVATION WITH DEVS WHO BREATHE MAGIC INTO CODE",
// ];


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalContentType>(null);
  // const [visibleTextIndices, setVisibleTextIndices] = useState([0, 1]);
  // const [isVisible, setIsVisible] = useState(true);
  // const [positions, setPositions] = useState(
  //   Array(texts.length).fill(getRandomPosition())
  // );


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsVisible(false);
  //     setTimeout(() => {
  //       setPositions((prevPositions) =>
  //         prevPositions.map(() => getRandomPosition())
  //       );

  //       setVisibleTextIndices(([first, second]) => [
  //         (first + 1) % texts.length,
  //         (second + 1) % texts.length,
  //       ]);
  //       setIsVisible(true); 
  //     }, 500);
  //   }, 5000); 

  //   return () => clearInterval(interval);
  // }, []);

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
      {/* Background Blur Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isModalOpen ? "backdrop-blur-sm opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeModal}
      ></div>

      {/* Main Content */}
      <div className="h-screen flex flex-col justify-between">
        <Header openModal={openModal} />
        <div
          className="m-5 md:m-10 space-y-5"
        >
          <h2
            className="uppercase text-3xl font-semibold lg:text-5xl md:w-1/2 lg:w-1/3"
          >
            <AnimatedText className="relative -z-10" text="Hire top quality developer" />
          </h2>
          <div
            className="text-[10px] md:text-xs lg:text-sm uppercase w-2/3 lg:w-1/3"
          >
            <AnimatedText className="relative -z-10" text="EVERYTHING THERE IS OUT THERE IN THIS WORLD, MORE OR LESS, PROVIDES FAMILIAR VISION" delay={0.6} />
          </div>
        </div>
        <Clients />
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity z-50 duration-200 ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className={`shadow-lg bg-black rounded-3xl p-3 md:p-6 w-11/12 max-w-6xl transform transition-transform duration-200 border-2 border-[#292928] ${isModalOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
          <button
            onClick={closeModal}
            className="absolute top-8 z-50 right-8 text-gray-500 hover:text-gray-700"
          >
            <IoClose size={32} />
          </button>
          <div
            style={{
              backgroundImage: 'url("/modalBg4.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-xl font-semibold bg-[#1c1b1e] rounded-xl"
          >
            {renderModalContent()}
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute -z-10 bottom-10 right-6 lg:right-10 flex gap-4 text-white mb-12 md:mb-0 text-lg md:text-2xl">
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

      {/* Glowing Text Blocks */}
      {/* {visibleTextIndices.map((index) => (
        <GlowingTextBlock
          key={index}
          text={texts[index]}
          isVisible={isVisible}
          position={positions[index]} 
        />
      ))} */}
      <div className="absolute -z-10 top-20 bottom-20">
        <GlowingText />
      </div>
    </div>
  );
}
