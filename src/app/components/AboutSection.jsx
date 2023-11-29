"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>MySQL</li>
        <li>Python</li>
        <li>Dart</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Schooling : Mount Carmel Central School</li>
        <li>Pre-University: St.Aloysius PU College</li>
        <li>Bachelor's: St.Aloysius College[Autonomous]</li>
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Flutter & Dart - The Complete Guide [2023 Edition]</li>
        <li>Palo Alto Networks Cybersecurity Academy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            <b>
              "Progress is doing something that is bigger than yourslef"
              <br></br>
            </b>
            I am currently pursuing a Bachelor's Degree in Computer Applications
            at St. Aloysius College [Autonomous]. My primary passion is
            cybersecurity, and I am adept at front-end development for web and
            app projects, with proficiency in HTML, CSS, JavaScript, Dart,
            MySQL, Python, and Tailwind CSS. While front-end development is my
            strength, I am continually refining my skills to learn, adapt, and
            excel under diverse conditions. Through collaborative experiences
            with mentors, I have developed a resilient skill set that allows me
            to thrive in challenging environments.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            {/* 
              For Workshops update this 
          
          <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Competitions Attended{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
