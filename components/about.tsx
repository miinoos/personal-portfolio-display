"use client";

import React from "react";
import { SectionHeading } from "./section-heading";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-35"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
      }}
      ref={ref}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science Engineering</span>, I
        decided to pursue my passion for programming. I enrolled in a coding
        bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express and MongoDB
        </span>
        . I am also familiar with TypeScript and Postgres. I am always looking
        to learn new technologies .{" "}
        <span className="font-bold">
          I am currently looking for a full-time position
        </span>{" "}
        as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching horror movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">High Level System Design Concepts</span>.
        I'm also learning how make a SaaS side business 💰.
      </p>
    </motion.section>
  );
};

export default About;
