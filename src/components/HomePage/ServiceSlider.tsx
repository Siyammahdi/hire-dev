"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sliderData } from "../Data";
import { IHowWork } from "../Interface";

const ServiceSlider = () => {
  const [currentData, setCurrentData] = useState<IHowWork>(sliderData[0]);

  useEffect(() => {
    const changeDataAutomatically = () => {
      const currentIndex = sliderData.findIndex((data) => data === currentData);
      const nextIndex = (currentIndex + 1) % sliderData.length;
      setCurrentData(sliderData[nextIndex]);
    };

    const interval = setInterval(changeDataAutomatically, 3000);
    return () => clearInterval(interval);
  }, [currentData]);

  const [animate, setAnimate] = useState(false);
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  const variants2 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 18,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: 100 }
      }
    }
  };

  useEffect(() => {
    setAnimate(true);
    // After the animation ends, clear the previousData state to hide it
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [currentData]);

  return (
    <>
      <section className="bg-[#51200585] backdrop-blur-[50px] h-[90vh] flex items-center">
        <div className="container flex flex-wrap items-center">
          <div className="sm:w-8/12 pr-10 ">
            {/* Show the currentData with the slideIn animation */}
            {currentData && (
              <motion.div
                  animate={animate ? "open" : "closed"}
                  variants={variants}
                  >
                <motion.h4
                    variants={variants2}
                    className="text-[#966e5d] text-2xl font-medium">
                  {currentData?.title}
                </motion.h4>
                <motion.p
                    variants={variants2}
                    className="text-[#966e5d] text-3xl font-bold uppercase">
                  {currentData?.description}
                </motion.p>
              </motion.div>
            )}

            <div className="flex flex-wrap mt-10">
              {sliderData.map((data, index) => (
                <div className="pr-5 w-4/12" key={index}>
                  <div
                    className={`border-t-[2px] group ${
                      currentData?.title === data?.title
                        ? "border-white"
                        : "border-[#8e8688]"
                    } pt-3 cursor-pointer transition-colors`}
                    onClick={() => setCurrentData(data)}
                  >
                    <p className="hidden sm:block text-sm lg:text-[19px] text-[#966e5d]">{data?.title}</p>
                    <p className="hidden md:block text-[#AA9B9F] text-xs lg:text-[15px]">
                      {data?.sort}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-4/12 hidden sm:flex justify-end">
            <img src="/innovation.svg" alt="innovation" className="opacity-70 h-[140px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSlider;
