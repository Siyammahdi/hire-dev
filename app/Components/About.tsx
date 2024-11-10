// components/About.tsx
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';



const About: React.FC = () => {
  return (
    <ScrollArea className="h-[74vh] w-full ">
      <div className="flex items-center justify-center text-gray-200">
        <div className="w-full max-w-3xl p-1 md:p-8 font-light pb-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-300 mb-6">About Us</h1>

          <p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4">
            Welcome to our website! We specialize in providing high-quality web development and design solutions tailored to meet the unique needs of our clients. Our team is passionate about turning ideas into visually stunning, fully functional web applications.
          </p>

          <p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4">
            With a focus on modern technologies like Next.js, TypeScript, and Tailwind CSS, we build fast, responsive, and user-friendly websites that deliver exceptional experiences. Our goal is to help businesses and individuals enhance their online presence and connect with their audience effectively.
          </p>

          <h2 className="text-2xl text-gray-100 mt-8 mb-4">Our Services</h2>
          <ul className="text-sm lg:text-lg list-disc list-inside text-gray-300 space-y-2">
            <li>Custom Web Development</li>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>SEO Optimization</li>
            <li>Consulting and Strategy</li>
          </ul>

          <h2 className="text-2xl text-gray-100 mt-8 mb-4">Our Values</h2>
          <p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4">
            We believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends.
          </p>

          <p className="text-sm lg:text-lg leading-relaxed text-gray-300">
            Thank you for considering us for your project. We look forward to the opportunity to work with you and help bring your vision to life!
          </p>
          <h2 className="text-2xl text-gray-100 mt-8 mb-4">Our Goals</h2>
          <p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4">
            We believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends.
          </p>

          <p className="text-sm lg:text-lg leading-relaxed text-gray-300">
            Thank you for considering us for your project. We look forward to the opportunity to work with you and help bring your vision to life!
          </p>
          <p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4">
            We believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends.
          </p>

          <p className="text-sm lg:text-lg leading-relaxed text-gray-300">
            Thank you for considering us for your project. We look forward to the opportunity to work with you and help bring your vision to life!
          </p>
        </div>
      </div>
    </ScrollArea>
  );
};

export default About;
