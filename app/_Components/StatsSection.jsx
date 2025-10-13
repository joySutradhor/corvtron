import React from "react";

const statsData = [
  {
    value: "50%",
    title: "Reduced Engineering Time",
    description: "Boost engineering teams with standardized hardware integration.",
  },
  {
    value: "5x",
    title: "Faster Reconfiguration",
    description: "Get a swift start by using a pre-built application template.",
  },
  {
    value: "100%",
    title: "User Autonomy",
    description: "Take full control of your robots through an intuitive user interface.",
  },
];

export default function StatsSection() {
  return (
    <div className="r__stats__container ">
      {statsData.map((item, index) => (
        <div
          key={index}
          className=" r__starts__border"
        >
          <h2 className=" r__starts__title gradient__text">{item.value}</h2>
          <h3 className="heading__five my-4">{item.title}</h3>
          <p className="base__text ">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
