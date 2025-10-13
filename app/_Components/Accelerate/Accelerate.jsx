"use client";

import React, { useState } from "react";
import {
  FiCpu,
  FiMousePointer,
  FiSettings,
  FiSliders,
  FiGrid,
} from "react-icons/fi";

export default function FeatureSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState  (null );

  const features = [
    {
      id: "01",
      title: "Hardware agnostic",
      desc: "Support for cobots, industrial robots, and more.",
      hoverText: "Compatible with all major robot brands and models",
      icon: <FiCpu className="size-10" />,
    },
    {
      id: "02",
      title: "Simple to use",
      desc: "Intuitive drag & drop user interface. A platform that speaks your language.",
      hoverText: "No coding required - get started in minutes",
      icon: <FiMousePointer className="size-10" />,
    },
    {
      id: "03",
      title: "Flexible",
      desc: "Configurable application templates mean saying goodbye to wasted hours.",
      hoverText: "Adapt quickly to changing production needs",
      icon: <FiSettings className="size-10" />,
    },
    {
      id: "04",
      title: "Customizable",
      desc: "A platform fully tailored to your needs.",
      hoverText: "Build workflows that match your process",
      icon: <FiSliders className="size-10" />,
    },
    {
      id: "05",
      title: "Refineable",
      desc: "Optimize before deployment.",
      hoverText: "Test and perfect your automation workflow",
      icon: <FiGrid className="size-10" />,
    },
  ];

  const visibleCards = 4;
  const maxIndex = features.length - visibleCards;

  return (
    <section className="min-h-screen overflow-hidden  text-white flex flex-col justify-center section__top">
      <div className="lg:px-[5vw] w-full">
        {/* Subheading */}
        <div className="text-center">
          <h2 className="heading_two mb-5">
            Accelerate <span className="gradient__text">value</span> generation
          </h2>
          <p className="text-center text-gray-500 text-base mb-20">
            The fast-track for millions of manufacturers to join the Industry
            4.0 revolution
          </p>
        </div>

        {/* Cards Slider */}
        <div className="relative overflow-hidden mb-12">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out "
            style={{ transform: `translateX(-${activeIndex * 25}%)` }}
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="  flex-shrink-0 w-[calc(25%-18px)] min-w-[280px] transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Wrapper */}
                <div
                  className="relative p-[2px] rounded-2xl group transition-all duration-500"
                  style={{
                    background:
                      hoveredIndex === index
                        ? "linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6)" 
                        : "linear-gradient(135deg, #111, #333)", 
                  }}
                >
                  {/* Inner Card */}
                  <div
                    className={`bg-gradient-to-tl from-[#212123] to-[#0c0c0D] rounded-2xl p-8 flex flex-col justify-between h-full  transition-all duration-500`}
                    style={{ minHeight: "400px" }}
                  >
                    {/* Top Number */}
                    <span
                      className={`text-xs mb-4 block font-light tracking-wider transition-colors duration-300 ${
                        activeIndex === index || hoveredIndex === index
                          ? "text-green-500"
                          : "text-white/30"
                      }`}
                    >
                      {item.id}
                    </span>

                    {/* Title */}
                    <h3 className="heading__three mb-4 text-white ">
                      {item.title}
                    </h3>

                    {/* Description / Hover Text Switch */}
                    <div className="relative h-[72px] overflow-hidden mb-auto">
                      <p
                        className={`absolute top-0 left-0 right-0 base__text transition-all duration-500 ease-in-out ${
                          hoveredIndex === index
                            ? "-translate-x-full opacity-0"
                            : "translate-x-0 opacity-100"
                        }`}
                      >
                        {item.desc}
                      </p>

                      <p
                        className={`absolute top-0 left-0 right-0 base__text transition-all duration-500 ease-in-out ${
                          hoveredIndex === index
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0"
                        }`}
                      >
                        {item.hoverText}
                      </p>
                    </div>

                    {/* Icon at Bottom */}
                    <div
                      className={`mt-8 transition-colors duration-300 ${
                        activeIndex === index || hoveredIndex === index
                          ? "text-green-500"
                          : "text-white/40"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots & Progress */}
        <div className="flex items-center justify-between mt-8 cursor-pointer">
          {/* Dot navigation */}
          <div className="flex gap-2">
            {[
              ...Array(Math.ceil((features.length - 1) / visibleCards + 1)),
            ].map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "bg-green-500 w-8" : "bg-white/20 w-2"
                }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-[40vw]  h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="absolute h-full bg-green-500 transition-all duration-300 rounded-full"
              style={{
                width: `${((activeIndex + 1) / (maxIndex + 1)) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
