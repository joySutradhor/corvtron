"use client";
import React from "react";

const companies = [
  null,
  {
    name: "Universal Robots",
    logo: "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64f08783a47f78a608f72dac_logo1_universal.svg",
    category: "COBOT",
  },
  {
    name: "TM",
    logo: "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64f087af3fd0e9128dcc020a_logo2_tm-robots.svg",
    category: "COBOT",
  },
  {
    name: "Phoenix Mecano",
    logo: "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64f08f0b45e1c6882b33fd89_logo3_phoenix-mecano.svg",
    category: "ENCLOSURE",
  },
  null,
  null,
  {
    name: "Robotiq",
    logo: "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64f08f1a5a2be2cc299b566a_logo4_robotiq.svg",
    category: "GRIPPER",
  },
  {
    name: "Haas",
    logo: "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64f08f453c068eb5c6c54c8e_logo5_haas.svg",
    category: "CNC",
  },
  {
    name: "Schunk",
    logo: "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64f08f7b733b8fb626324900_logo6_schunk.svg",
    category: "GRIPPER",
  },
  null,
  null,
  {
    name: "OnRobot",
    logo: "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64f08fb99537ff63ddb1ffb9_logo7_onrobot.svg",
    category: "GRIPPER",
  },
  {
    name: "Fanuc",
    logo: "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64f08fe6563c48d7dadc4851_logo9_fanuc.svg",
    category: "ROBOT",
  },
  {
    name: "ABB",
    logo: "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64f08fc3918e029a982b4bac_logo8_abb.svg",
    category: "ROBOT",
  },
  null,
];

export default function IntegrationGrid() {

  const mobileCompanies = companies.filter((company) => company !== null);

  return (
    <div className="pt-[25vh]">
      <div className="text-center max-w-[90%] md:max-w-[80%]  lg:max-w-4xl mx-auto">
        <h2 className="heading_two mb-5">
          <span className="gradient__text">Integration</span> across multiple
          platforms
        </h2>
        <p className="heading__para mb-10">
          We build the infrastructure of therobotic automation industry. Upgrade
          any robot - new or old - to the most intuitive user interface.
        </p>
      </div>
      <section className="relative text-white min-h-screen overflow-hidden py-10">
        <div className="relative w-full h-screen">
  
          <div className="grid grid-cols-2 md:hidden h-full">
            {mobileCompanies.map((company, index) => {
              const col = index % 2;
              const isLeftEdge = col === 0;
              const isRightEdge = col === 1;

              return (
                <div
                  key={index}
                  className={`relative flex items-center justify-center border-white/10 group
                    border-t border-b
                    ${!isLeftEdge ? "border-l" : ""}
                    ${!isRightEdge ? "border-r" : ""}
                  `}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-20 max-w-[60%] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                  />
                  <div className="absolute bottom-3 left-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-3 py-1.5 text-[#02DE18] rounded-full text-xs border border-white/10 transition-colors">
                      {company.category}
                    </button>
                  </div>
                </div>
              );
            })}

            {mobileCompanies.length % 2 !== 0 && (
              <div className="border-white/10 border-t border-b border-r"></div>
            )}
          </div>

          {/* Tablet Grid: 3 columns for md devices */}
          <div className="hidden md:grid lg:hidden grid-cols-3 h-full">
            {mobileCompanies.map((company, index) => {
              const col = index % 3;
              const isLeftEdge = col === 0;
              const isRightEdge = col === 2;

              return (
                <div
                  key={index}
                  className={`relative flex items-center justify-center border-white/10 group
                    border-t border-b
                    ${!isLeftEdge ? "border-l" : ""}
                    ${!isRightEdge ? "border-r" : ""}
                  `}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-24 max-w-[60%] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                  />
                  <div className="absolute bottom-4 left-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-3 py-1.5 text-[#02DE18] rounded-full text-xs border border-white/10 transition-colors">
                      {company.category}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Grid: Original 5 columns with null cells */}
          <div className="hidden lg:grid grid-cols-5 grid-rows-3 h-full border-t border-b border-white/10">
            {companies.map((company, index) => {
              const row = Math.floor(index / 5);
              const col = index % 5;
              const isLeftEdge = col === 0;
              const isRightEdge = col === 4;
              const isTopEdge = row === 0;
              const isBottomEdge = row === 2;

              // For null cells
              if (!company) {
                return (
                  <div
                    key={index}
                    className="flex border-white/10 items-center justify-center
                      border-l border-t border-b border-r"
                  />
                );
              }

              return (
                <div
                  key={index}
                  className={`relative flex items-center justify-center border-white/10 group
                    ${!isTopEdge ? "border-t" : ""}
                    ${!isLeftEdge ? "border-l" : ""}
                    ${!isBottomEdge ? "border-b" : ""}
                    ${!isRightEdge ? "border-r" : ""}
                  `}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-32 max-w-[60%] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                  />
                  <div className="absolute bottom-5 left-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-4 py-2 text-[#02DE18] rounded-full text-xs border border-white/10 transition-colors">
                      {company.category}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Plus signs for Desktop (5-column layout) */}
          <div className="hidden lg:block">
            {[0, 1, 2, 3].map((row) =>
              [1, 2, 3, 4].map((col) => (
                <div
                  key={`plus-desktop-${row}-${col}`}
                  className={`absolute text-3xl pointer-events-none ${
                    row === col ? "text-green-500" : "text-white/30"
                  }`}
                  style={{
                    top: `${(row / 3) * 100}%`,
                    left: `${(col / 5) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  +
                </div>
              ))
            )}
          </div>

          {/* Plus signs for Tablet (3-column layout) */}
          <div className="hidden md:block lg:hidden">
            {[0, 1, 2, 3].map((row) =>
              [1, 2].map((col) => (
                <div
                  key={`plus-tablet-${row}-${col}`}
                  className="absolute text-2xl pointer-events-none text-white/30"
                  style={{
                    top: `${(row / 3) * 100}%`,
                    left: `${(col / 3) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  +
                </div>
              ))
            )}
          </div>

          {/* Plus signs for Mobile (2-column layout) */}
          <div className="md:hidden block">
            {[0, 1, 2, 3, 4].map((row) => (
              <div
                key={`plus-mobile-${row}`}
                className="absolute text-2xl pointer-events-none text-white/30"
                style={{
                  top: `${(row / 5) * 100}%`,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                +
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
