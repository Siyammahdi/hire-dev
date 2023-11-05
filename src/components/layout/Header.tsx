/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLink } from "../Data";
const Header = () => {
  const [toggleActive, setToggleActive] = useState(false);
  const pathname = usePathname();
  const getActiveLinkName = (currentLink: string) => {
    const activeLink = navLink.find((link) => link.link === currentLink);

    return activeLink ? activeLink.name : null;
  };

  return (
    <>
      <nav className="bg-[#0000004f] backdrop-blur-[50px]">
        <div className="container relative">
          <div className="bg-[#262525] w-[68px] px-4 h-[172px] flex items-end pb-[12px] absolute -top-10 z-10">
            <Link href="/">
              <img src="/logo.svg" alt="" className="w-full" />
            </Link>
          </div>
          <div className=" pt-24 pb-10 flex items-center justify-end">
            <div
              className={`mt-0 hidden sm:block translate-y-[8px] mr-3 bg-[#8E8688] h-[2px] w-[150px] menu-images `}
            />
            {getActiveLinkName(pathname) !== navLink[0].name ||
            getActiveLinkName(pathname) === null ? (
              <p className="text-3xl font-bold text-[#8e8688] uppercase font-rajdhani">
                {getActiveLinkName(pathname)}
              </p>
            ) : (
                <p className="text-3xl font-bold text-[#8e8688] uppercase font-rajdhani">
                  UQIDEV
                </p>
              // <img
              //   src="/uqidev.svg"
              //   alt=""
              //   className={`w-[120px] menu-images `}
              // />
            )}

            <button
              className={` relative !z-[9999] navToggle ${
                toggleActive ? "active" : ""
              }`}
              onClick={() => setToggleActive(!toggleActive)}
            >
              {/*<span className={`icon-bar`} />*/}
              <span className={`icon-bar`} />
              <span className={`icon-bar`} />
              <span className={`icon-bar`} />
            </button>
          </div>
        </div>
      </nav>

      {/*{toggleActive && (*/}
        <section
          className={`${toggleActive ? "top-0" : "top-[-100vh]" } transition-all duration-500 ease-in-out bg-[#f4e8e4] absolute flex h-[100vh] items-center justify-center left-0 top-0 w-full z-[9]`}
        >
          <ul className="flex flex-col gap-y-5 ">
            {" "}
            {navLink.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={() => setToggleActive(!toggleActive)}
                  href={link.link}
                  className="font-bold hover:underline text-4xl text-[#8e8688] uppercase"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      {/*)}*/}
    </>
  );
};

export default Header;
