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
  console.log("router :", pathname);
  return (
    <>
      <nav className="bg-[#F4E8E4] h-auto ">
        <div className="container relative">
          <div className="bg-[#8E8688] w-[90px] px-4 h-[180px] flex items-end pb-2 absolute -top-10">
            <img src="/logo.svg" alt="" className="w-full" />
          </div>
          <div className=" pt-24 pb-10 flex items-center justify-end">
            <div
              className={`mt-0 translate-y-[8px] mr-3 bg-[#8E8688] h-[2px] w-[150px] menu-images ${
                toggleActive ? "animate-slideIn" : "animate-slideOut"
              }`}
            />
            {getActiveLinkName(pathname) !== navLink[0].name ||
            getActiveLinkName(pathname) === null ? (
              <p className="text-2xl font-bold text-[#8e8688]">
                {getActiveLinkName(pathname)}
              </p>
            ) : (
              <img
                src="/uqidev.svg"
                alt=""
                className={`w-[120px] menu-images ${
                  toggleActive ? "animate-slideIn" : "animate-slideOut"
                }`}
              />
            )}
            <ul
              className={`flex gap-x-5 px-3 nav-menu ${
                toggleActive ? "active" : "hidden"
              }`}
            >
              {navLink.map((link, index) => (
                <li key={index}>
                  <Link
                    onClick={() => setToggleActive(false)}
                    className="hover:text-[black] hover:underline"
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className={` relative z-10 navToggle ${toggleActive && "active"}`}
              onClick={() => setToggleActive(!toggleActive)}
            >
              <span className={`icon-bar`} />
              <span className={`icon-bar`} />
              <span className={`icon-bar`} />
              <span className={`icon-bar`} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
