import Link from "next/link";
import { navLink } from "../Data";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#faebd7]">
        <div className="container flex flex-wrap justify-between  py-10">
          <div className="w-40">
            <p className="text-xs leading-3">UQIDEV TECHNOLOGIES Software Development Company offering software outsourcing services and product development.</p>
          </div>
          <div className="w-1/3 text-xs leading-3">
            <p className="text-sm space-x-[1px] uppercase">
              &#169; UQIDEV <span className="font-semibold">{new Date().getFullYear() || "2023"}</span>
            </p>
            <p>Terms & Conditions</p>
            <p>Privacy Policies</p>
            <p>Privacy Notice</p>
          </div>
          <div className="w-1/3">
            <ul className="leading-3">
              {navLink.map((link, index) => (
                <li key={index}>
                  <Link
                    className="hover:text-[black] hover:underline text-xs"
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
