"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "3",
    postfix: "+",
  },
  {
    metric: "Public Speaking Opportunities",
    value: "6",
    postfix: "+",
  },
  {
    metric: " Years of Leadership",
    value: "2 Years",
  },
  {
    metric: "Compeitions Attended",
    value: "5",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust the maxWidth as needed

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center mx-4 my-4 sm:my-0 ${
                isMobile ? "text-center" : ""
              }`}
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
