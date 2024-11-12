"use client";

import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Stagger each child element
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <ScrollArea className="h-[70vh] md:h-[74vh] w-full ">
      <motion.div
        className="flex items-center justify-center text-gray-200"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <div className="w-full max-w-3xl p-1 md:p-8 font-light pb-0">
          <motion.h1 className="text-3xl lg:text-5xl font-bold text-gray-300 mb-6" variants={staggerItem}>
            About Us
          </motion.h1>

          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4" variants={staggerItem}>
            Welcome to our website! We specialize in providing high-quality web development and design solutions tailored to meet the unique needs of our clients. Our team is passionate about turning ideas into visually stunning, fully functional web applications.
          </motion.p>

          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4" variants={staggerItem}>
            With a focus on modern technologies like Next.js, TypeScript, and Tailwind CSS, we build fast, responsive, and user-friendly websites that deliver exceptional experiences. Our goal is to help businesses and individuals enhance their online presence and connect with their audience effectively.
          </motion.p>

          <motion.h2 className="text-2xl text-gray-100 mt-8 mb-4" variants={staggerItem}>
            Our Services
          </motion.h2>
          <motion.ul className="text-sm lg:text-lg list-disc list-inside text-gray-300 space-y-2" variants={staggerItem}>
            <li>Custom Web Development</li>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>SEO Optimization</li>
            <li>Consulting and Strategy</li>
          </motion.ul>

          <motion.h2 className="text-2xl text-gray-100 mt-8 mb-4" variants={staggerItem}>
            Our Values
          </motion.h2>
          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4" variants={staggerItem}>
            We believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends. and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends. we believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends.
          </motion.p>
          <motion.h2 className="text-2xl text-gray-100 mt-8 mb-4" variants={staggerItem}>
            Our Goals
          </motion.h2>
          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4" variants={staggerItem}>
            We believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends.  goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends.  goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends. goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends.
          </motion.p>
          <motion.h2 className="text-2xl text-gray-100 mt-8 mb-4" variants={staggerItem}>
            Our Strategies
          </motion.h2>
          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4" variants={staggerItem}>
            We believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends. we believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends. and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends. we believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends. and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends. we believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends.
          </motion.p>

          {/* Continue wrapping each text section with motion.p and apply the staggerItem variant */}
        </div>
      </motion.div>
    </ScrollArea>
  );
};

export default About;
