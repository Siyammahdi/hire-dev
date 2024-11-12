"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const getRandomPosition = () => ({
  x: Math.random() * (window.innerWidth / 2 - 150) + window.innerWidth / 2,
  y: Math.random() * (window.innerHeight - 50),
});

const GlowingTextBlock = ({
  text,
  isVisible,
  position,
}: {
  text: string;
  isVisible: boolean;
  position: { x: number; y: number } | null;
}) => {
  if (!position) return null; // Don't render if position is null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        fontSize: "0.7rem",
        color: "#fff",
        textShadow: "0px 0px 10px rgba(0, 0, 0, 1)",
      }}
      className="glowing-text w-[200px]"
    >
      {text}
    </motion.div>
  );
};

const texts = [
  "THE FUTURE OF YOUR STARTUP BEGINS WITH DEV TALENT THAT UNDERSTANDS YOUR VISION",
  "STUCK IN A DEVELOPMENT CRISIS? LET OUR TEAM RESCUE YOU WITH VISIONARY SOLUTIONS",
  "TO KEEP YOUR PROJECT ON TRACK AND DESTINED FOR GREATNESS, WE’RE ONLY AN EMAIL AWAY.",
  "SAVE YOUR STARTUP FROM ALL-CONSUMING BURN RATE ONLY $55 to $95 /hour",
  "NO PROJECT TOO COMPLEX, NO CODE TOO CURIOUS—WE SOLVE IT ALL",
  "AND IF YOUR DEV TURNS INTO A DEVIL, WE DELIVER A NEW DEVOTEE",
  "FROM CODE CHAOS TO STREAMLINED SUCCESS, WE’RE JUST A CLICK AWAY",
  "TURN YOUR IDEAS INTO INNOVATION WITH DEVS WHO BREATHE MAGIC INTO CODE",
];

export default function GlowingText() {
  const [visibleTextIndices, setVisibleTextIndices] = useState([0, 1]);
  const [isVisible, setIsVisible] = useState(true);
  const [positions, setPositions] = useState<Array<{ x: number; y: number } | null>>(
    Array(texts.length).fill(null)
  );

  useEffect(() => {
    // Set initial random positions on the client side only
    setPositions(Array(texts.length).fill(0).map(() => getRandomPosition()));

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setPositions((prevPositions) =>
          prevPositions.map(() => getRandomPosition())
        );

        setVisibleTextIndices(([first, second]) => [
          (first + 1) % texts.length,
          (second + 1) % texts.length,
        ]);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-gray-200">
      {/* Glowing Text Blocks */}
      {visibleTextIndices.map((index) => (
        <GlowingTextBlock
          key={index}
          text={texts[index]}
          isVisible={isVisible}
          position={positions[index]} 
        />
      ))}
    </div>
  );
}
