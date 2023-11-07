"use client";

import {FileBarChart, LucideCalendarClock} from "lucide-react";
import Link from "next/link";

const FirstSection = () => {

  return (
    <>
      <section className="bg-[#0000004f] backdrop-blur-[50px] h-[90vh] flex items-center">
        <div className="container flex flex-wrap items-center">
          <div className="sm:w-6/12 pr-10 ">
            {/* Show the currentData with the slideIn animation */}
              <div>
                <h4
                    className="text-[#8E8688] text-2xl font-medium">
                    Turn ideas into success!
                </h4>
                <h1 className="text-[#faebd7] text-3xl font-bold uppercase">
                    Outsourcing Software Development in Bangladesh
                </h1>
                  <div className="mt-5 flex gap-2">
                      <Link target="_blank" href="https://calendar.app.google/EinFdAWjpNGWFgZa8">
                      <button className="py-3 px-8 text-xs bg-[#624948]/30 hover:bg-[#624948] rounded text-amber-100">
                          <LucideCalendarClock/>
                          <div>Set Meeting</div>
                      </button>
                      </Link>
                      <Link target="_blank" href='https://forms.gle/z5RDZPWx9TZX4VTX9'>
                      <button className="py-3 px-8 text-xs bg-[#624948] hover:bg-[#624948]/30 rounded text-amber-100">
                          <FileBarChart/>
                          <div>Get Quotation</div>
                      </button>
                  </Link>
                  </div>
              </div>


          </div>
          {/*<div className="w-6/12 hidden sm:block">*/}
          {/*  /!*<img src="/innovation.svg" alt="" />*!/*/}

          {/*    <div className="flex gap-1 flex-wrap">*/}
          {/*        <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">*/}
          {/*              <p>Certified Experienced Engineers</p>*/}
          {/*        </div>*/}
          {/*        <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">*/}
          {/*              <p>Cost Optimization</p>*/}
          {/*        </div>*/}
          {/*        <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">*/}
          {/*              <p>Expert Consultation</p>*/}
          {/*        </div>*/}
          {/*        <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">*/}
          {/*              <p>Azile</p>*/}
          {/*        </div>*/}
          {/*        <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">*/}
          {/*              <p>Quality</p>*/}
          {/*        </div>*/}
          {/*        <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">*/}
          {/*              <p>Accountability</p>*/}
          {/*        </div>*/}

          {/*    </div>*/}

          {/*</div>*/}
        </div>
      </section>
    </>
  );
};

export default FirstSection;
