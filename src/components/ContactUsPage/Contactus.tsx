import {Discord, LinkedIn, Mail, Twitter, WhatsApp} from "../Icon";
import firstSection from "@/components/HomePage/FirstSection";
import Link from "next/link";
import {FileBarChart, LucideCalendarClock, LucideMail} from "lucide-react";

const ContactUs = () => {
  return (
    <div className="backdrop-blur-[30px] h-full min-h-[calc(100vh-105px)]">
      <div className="container flex flex-wrap py-[150px] ">
        <div className="w-full lg:w-1/2 pr-4 text-[#8f8688]">
          <p className="font-bold text-3xl">Contact</p>

          <p className="text-lg leading-8 pt-5">
             UQIDEV TECHNOLOGIES
          </p>
          <div className="leading-4">
            <p> Uttara, Dhaka-1230</p>
            <p> connect@uqidev.com</p>
            <p> +880 1743949931</p>
          </div>
          {/*<div className="flex items-center gap-x-3 py-3">*/}
          {/*  <LinkedIn /> <p> +880 1234567890</p>*/}
          {/*</div>*/}
          {/*<div className="flex items-center gap-x-3 py-3">*/}
          {/*  <Twitter /> <p> +880 1234567890</p>*/}
          {/*</div>*/}
        </div>

        <div className="bg-[#0000004f] mt-5 md:m-0 lg:w-1/2 flex text-[#8f8688] w-full rounded-md justify-center">
          <div className=" flex gap-2 items-center flex-wrap">
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=8801743949931">
              <button className="py-3 px-8 text-xs bg-[#624948]/30 hover:bg-[#624948] rounded text-amber-100">
                <WhatsApp />
                <div>WhatsApp</div>
              </button>
            </Link>
            <Link href='mailto://syedshihabdu@gmail.com'>
              <button className="py-3 px-8 text-xs bg-[#624948]/30 hover:bg-[#624948] rounded text-amber-100">
                <Mail/>
                <div>Email</div>
              </button>
            </Link>
            <Link target="_blank" href="https://twitter.com/dev_syedshihab">
              <button className="py-3 px-8 text-xs bg-[#624948]/30 hover:bg-[#624948] rounded text-amber-100">
                <Twitter />
                <div>Twitter</div>
              </button>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/company/uqidev">
              <button className="py-3 px-8 text-xs bg-[#624948]/30 hover:bg-[#624948] rounded text-amber-100">
                <LinkedIn />
                <div>LinkedIn</div>
              </button>
            </Link>
            {/*<Link target="_blank" href="https://api.whatsapp.com/send?phone=8801743949931">*/}
            {/*  <button className="py-3 px-8 text-xs bg-[#624948]/30 hover:bg-[#624948] rounded text-amber-100">*/}
            {/*    <Discord />*/}
            {/*    <div>WhatsApp</div>*/}
            {/*  </button>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
