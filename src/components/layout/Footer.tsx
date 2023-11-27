import Link from "next/link";
import { LinkedIn, Mail, Twitter, WhatsApp } from "@/components/Icon";
import { LucideMail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="container flex flex-wrap justify-between  py-10">
          <div className="w-40">
            <p className="text-xs text-[#c9b99c] leading-3">
              <b>UQIDEV TECHNOLOGIES</b> <br /> Software Development Company
              offering software outsourcing services and product development.
            </p>
            <p className="mt-2 text-[#c9b99c] flex gap-2">
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=8801743949931"
              >
                <WhatsApp />
              </Link>
              <Link href="mailto://syedshihabdu@gmail.com">
                <Mail />
              </Link>
              <Link target="_blank" href="https://twitter.com/dev_syedshihab">
                <Twitter />
              </Link>
              <Link
                target="_blank"
                className="text-[14px]"
                href="https://www.linkedin.com/company/uqidev"
              >
                <LinkedIn />
              </Link>
            </p>
          </div>
          <div className="w-1/3 text-xs leading-3 text-[#c9b99c]">
            <p className="text-sm space-x-[1px] uppercase">
              &#169; UQIDEV{" "}
              <span className="font-semibold">
                {new Date().getFullYear() || "2023"}
              </span>
            </p>
            <Link href={"/terms-and-conditions"} className="hover:text-orange-500">Terms & Conditions</Link>
            <br />
            <Link href={"/privacy"} className="hover:text-orange-500">Privacy Policies</Link>
            <br />
            <Link href={"/privacy-notice"} className="hover:text-orange-500">Privacy Notice</Link>
          </div>
          <div className="w-1/3 text-[#c9b99c]">
            <ul className="leading-3">
              <li className="hover:text-orange-500 text-xs">
                <Link href="/">UQIDEV</Link>
              </li>
              <li className="hover:text-orange-500 text-xs">
                <Link href="/our-story">Our Story</Link>
              </li>
              <li className="hover:text-orange-500 text-xs">
                <Link href="/career">Career</Link>
              </li>
              <li className="hover:text-orange-500 text-xs">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
