import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import Logo1 from "@/public/clients/logo1.png";
import Logo2 from "@/public/clients/logo2.png";
import Logo3 from "@/public/clients/logo3.png";
import Logo4 from "@/public/clients/logo4.png";
import Logo5 from "@/public/clients/logo5.png";

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.22, // Adjust this for the delay between logos
    },
  },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 10, filter: "blur(10px)", scale: 1.2 }, // Start slightly below
  show: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },    // Animate to the original position
};

const Clients = () => {
  return (
    <motion.div
      className="relative -z-10 flex items-center md:w-3/5 lg:w-2/5 gap-10 m-5 lg:m-10"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {[Logo1, Logo2, Logo3, Logo4, Logo5].map((logo, index) => (
        <motion.div key={index} variants={fadeInFromBottom}>
          <Image src={logo} alt={`logo${index + 1}`} height={100} width={100} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Clients;
