"use client";

import React, { useEffect, useRef } from "react";
import { SectionHeading } from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-session";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-35">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((projects, index) => (
          <React.Fragment key={index}>
            <Project {...projects} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
