import React from "react";
import { SectionHeading } from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-35">
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
