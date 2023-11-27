"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Career = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <div className="backdrop-blur-[30px] h-full min-h-[calc(100vh-105px)]">
      <div className="container py-[100px] ">
        <div className="">
          <h1 className="text-5xl text-gray-200 font-rajdhani font-bold">
            Join The Nest!
          </h1>
          <p className="text-2xl text-gray-300 font-bold">
            We are always looking for people that strive to learn as our team
            players.
          </p>

          <div className="mt-10">
            <Accordion
              open={open === 1}
              className="mb-2 rounded-lg border border-blue-gray-100 px-4 overflow-hidden"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`border-b-0 transition-colors ${
                  open === 1 ? "text-orange-500" : "text-gray-200"
                }`}
              >
                Full Stack Developer
              </AccordionHeader>
              <AccordionBody className="pt-0 text-gray-300">
                As versatile Fullstack Developers, we span across diverse
                industries with a consistent commitment to delivering
                comprehensive solutions. We are actively seeking a dynamic
                Fullstack Developer to join our innovative team. In this
                influential role, you will contribute to the entire software
                development lifecycle, from frontend design to backend
                implementation. <br />
                Bring your proficiency in both frontend and backend
                technologies, your passion for crafting seamless user
                experiences, and your ability to contribute to collaborative and
                agile development environments. Join us in shaping the future of
                digital solutions and delivering excellence across the full tech
                stack.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 2}
              className="mb-2 rounded-lg border border-blue-gray-100 px-4 overflow-hidden"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`border-b-0 transition-colors ${
                  open === 2 ? "text-orange-500" : "text-gray-200"
                }`}
              >
                Exchange Engineer
              </AccordionHeader>
              <AccordionBody className="pt-0 text-gray-300">
                As proficient Exchange Engineers, we oversee various industries,
                maintaining a consistent approach to deliver top-tier solutions.
                We are currently seeking a skilled Exchange Engineer to join our
                accomplished team. In this role, you will play a crucial part in
                architecting and maintaining robust email infrastructure. <br />
                Bring your expertise in implementing secure and scalable
                Exchange environments, coupled with a proactive approach to
                troubleshooting and resolving complex issues. Join our team to
                contribute to our commitment to delivering seamless and reliable
                communication solutions for our clients.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 3}
              className="mb-2 rounded-lg border border-blue-gray-100 px-4 overflow-hidden"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={`border-b-0 transition-colors ${
                  open === 3 ? "text-orange-500" : "text-gray-200"
                }`}
              >
                Application Security Engineer
              </AccordionHeader>
              <AccordionBody className="pt-0 text-gray-300">
                As dedicated Application Security Engineers, we navigate diverse
                industries, adhering to a steadfast commitment to deliver
                top-tier security solutions. We re actively seeking an
                accomplished Application Security Engineer to bolster our
                esteemed team. In this pivotal role, you ll spearhead the
                fortification of our applications against cyber threats. <br />
                Bring your expertise in implementing robust security measures,
                your proactive stance in identifying and mitigating
                vulnerabilities, and your ability to champion best practices in
                application security. Join us in advancing our commitment to
                providing secure and resilient digital experiences for our
                clients.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 4}
              className="mb-2 rounded-lg border border-blue-gray-100 px-4 overflow-hidden"
            >
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className={`border-b-0 transition-colors ${
                  open === 4 ? "text-orange-500" : "text-gray-200"
                }`}
              >
                Node JS Developer
              </AccordionHeader>
              <AccordionBody className="pt-0 text-gray-300">
                As adept Node.js Developers, we traverse diverse industries,
                upholding a consistent commitment to deliver cutting-edge
                solutions. We re actively inviting a skilled Node.js Developer
                to join our dynamic team. In this pivotal role, you ll be
                instrumental in building robust and scalable applications using
                Node.js. <br />
                Bring your expertise in leveraging the power of Node.js, your
                passion for crafting efficient and high-performance solutions,
                and your ability to contribute to collaborative and
                forward-thinking development practices. Join us in shaping the
                future of web development and delivering exceptional digital
                experiences.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
