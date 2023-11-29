import React from "react";
import { FaGithub } from "react-icons/fa";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>

        {/* GitHub logo linked to another webpage */}
        <a
          className="p-3 flex justify-center items-center" // Added flex and centering styles
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            style={{ color: "#FFFFFF", fontSize: "40px", marginBottom: "-3px" }}
          />
          {/*-5px is applying a negative margin to the bottom of the element, effectively moving it 5 pixels upward. */}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
