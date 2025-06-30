"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profileImage from "@/public/profile.jpg";
import { motion, useInView } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-session";

const Intro = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profileImage}
              alt="My Profile Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-6xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Yudhajit.</span> I'm a{" "}
        <span className="font-bold">Software Developer</span> with{" "}
        <span className="font-bold">3+ years</span> of experience. <br />I enjoy
        building <span className="italic">websites and SaaS applications!</span>{" "}
        My focus is <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex felx-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full ouline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="cursor-pointer group bg-white px-7 py-3 flex items-center gap-2 rounded-full ouline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
          href="/CV.pdf"
          download
        >
          Download My Resume/CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white py-4 px-4.5 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full ouline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 cursor-pointer"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 text-[1.5rem] flex items-center gap-2 rounded-full ouline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 cursor-pointer"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
