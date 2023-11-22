/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { sliderData } from "../Data";
import { IHowWork } from "../Interface";
// ... (existing imports)

const Hero = () => {
  const [currentData, setCurrentData] = useState<IHowWork>(sliderData[0]);

  useEffect(() => {
    const changeDataAutomatically = () => {
      const currentIndex = sliderData.findIndex((data) => data === currentData);
      const nextIndex = (currentIndex + 1) % sliderData.length;

      setCurrentData(sliderData[nextIndex]);
    };

    const interval = setInterval(changeDataAutomatically, 5000);

    return () => clearInterval(interval);
  }, [currentData]);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    // After the animation ends, clear the previousData state to hide it
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentData]);

  return (
    <>
      <section className="bg-[#F4E8E4] h-[90vh] flex items-center">
        <div className="container flex flex-wrap items-center">
          <div className="w-8/12 pr-10 ">
            {/* Show the currentData with the slideIn animation */}
            {currentData && (
              <div className={`pb-10 ${animate ? "animate-slideIn" : ""}`}>
                <h4 className="text-[#8E8688] text-2xl font-medium">
                  {currentData?.title}
                </h4>
                <p className="text-[#8E8688] text-3xl font-bold uppercase">
                  {currentData?.description}
                </p>
              </div>
            )}

            <div className="flex flex-wrap mt-10">
              {sliderData.map((data, index) => (
                <div className="pr-5 w-4/12" key={index}>
                  <div
                    className={`border-t-[2px] group ${
                      currentData?.title === data?.title
                        ? "border-[#8E8688]"
                        : "border-white"
                    } pt-3 cursor-pointer transition-colors`}
                    onClick={() => setCurrentData(data)}
                  >
                    <p className="text-[19px] text-[#8E8688]">{data?.title}</p>
                    <p className="text-[#AA9B9F] text-[15px]">
                      {data?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-4/12">
            <img src="/innovation.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
