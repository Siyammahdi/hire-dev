/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect} from "react";
import { navLink } from "../Data";
const Header = () => {
  const [toggleActive, setToggleActive] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const pathname = usePathname();
  const getActiveLinkName = (currentLink: string) => {
    const activeLink = navLink.find((link) => link.link === currentLink);

    return activeLink ? activeLink.name : null;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY >= 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <nav className={`bg-[#F4E8E4] absolute left-0 top-0 right-0 w-full ${isHeaderFixed ? 'fixed-header' : ''}`}>
        <div className="container relative">
          <div className={`${isHeaderFixed ? 'bg-[#8E8688] px-4 w-[60px] h-[120px] flex items-end pb-[12px] absolute -top-10' : 'bg-[#8E8688] w-[68px] px-4 h-[180px] flex items-end pb-[12px] absolute -top-10'}`}>
            <Link href="/">
              <img src="/logo.svg" alt="" className="w-full" />
            </Link>
          </div>
          <div className={`${isHeaderFixed ? 'pt-8 pb-4 flex items-center justify-end' : 'pt-24 pb-10 flex items-center justify-end'}`}>
            <div
              className={`mt-0 translate-y-[8px] mr-3 bg-[#8E8688] h-[2px] w-[150px] menu-images `}
            />
            {getActiveLinkName(pathname) !== navLink[0].name ||
            getActiveLinkName(pathname) === null ? (
              <p className="text-2xl font-bold text-[#8e8688] uppercase font-rajdhani">
                {getActiveLinkName(pathname)}
              </p>
            ) : (
              <img
                src="/uqidev.svg"
                alt=""
                className={`w-[120px] menu-images `}
              />
            )}

            <button
              className={` relative !z-[9999] navToggle ${
                toggleActive && "active"
              }`}
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

      {toggleActive && (
        <section
          className={`animate-nav h-[100vh] w-full fixed left-0 top-0 bottom-0 right-0 bg-[#686262b7] z-[9] flex justify-center items-center`}
        >
          <ul className="flex flex-col gap-y-5 ">
            {" "}
            {navLink.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={() => setToggleActive(!toggleActive)}
                  href={link.link}
                  className="hover:text-[black] hover:underline font-semibold text-[#292929] "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Header;
