"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio ",
    description: "Built using HTML, Bootstrap , Javascript",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nathan-sudo-pycharm/NathanSequeiaResume",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Login Page UI ",
    description: "Basic login page using HTML , CSS ,JavaScript",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nathan-sudo-pycharm/Login-Form-UI.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Webscrapper Project [ Ongoing ]",
    description:
      "A realtime webscrapper app built using Next JS , Tailwind CSS",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nathan-sudo-pycharm/webscrapper_nextjs.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "A Dummy Ecommerce Website ",
    description:
      " A  dummy ecommerce website done using plain HTML ,CSS , JavaScript",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Nathan-sudo-pycharm/Simple-Dummy-Ecommerce-Website",
    previewUrl: "/",
  },

  /*Python project/s */
  {
    id: 8,
    title: "Automated Machine Learing App",
    description:
      "Python project: processes data, generates graphs, provides essential measurements.  ",
    image: "/images/projects/6.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/Nathan-sudo-pycharm/AutoStreamlitApp.git",
    previewUrl: "/",
  },

  {
    id: 9,
    title: "MultiPDF Chat Assistant",
    description:
      "Chat with and query multiple PDFs using natural language for accurate responses.",
    image: "/images/projects/9.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/Nathan-sudo-pycharm/Pdf_reader.git",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "A 2D Multi-Player Game",
    description:
      "This project is a Clone of the Street Fighter Game. It has been developed in Python programming language, using the Pygame library.",
    image: "/images/projects/10.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/Nathan-sudo-pycharm/Multiplayer-game-.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/*    <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
