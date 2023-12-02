"use client";
// Importing necessary modules
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Define data for tabs
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
        <li>Schooling: Mount Carmel Central School</li>
        <li>Pre-University: St. Aloysius PU College</li>
        <li>Bachelor's: St. Aloysius College[Autonomous]</li>
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
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>English</li>
        <li>Hindi</li>
        <li>Kannada</li>
        <li>German [ A2 ]</li>
      </ul>
    ),
  },
];

// Define the main component
const AboutSection = () => {
  // State for active tab
  const [tab, setTab] = useState("skills");
  // useTransition hook
  const [isPending, startTransition] = useTransition();

  // Function to handle tab change
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Render the component
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image component with alt prop */}
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Me Image"
        />
        {/* Content section */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          {/* Updated text with corrected quote */}
          <p className="text-base lg:text-lg">
            <b>
              "Progress is doing something that is bigger than yourself."
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
          {/* Tab buttons */}
          <div className="flex flex-row justify-start mt-8">
            {/* TabButton components */}
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
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
          </div>
          {/* Display content based on active tab */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the component
export default AboutSection;
