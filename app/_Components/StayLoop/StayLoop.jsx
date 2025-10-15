import React from "react";

export default function StayLoop() {
  return (
    <div className="text-center section__top " id="contact">
      <div className=" max-w-[85%] md:max-w-[70%] mx-auto ">
        <h2 className="heading_two">Stay in the loop</h2>
        <p className="heading__para font-semibold mb-8 mt-4 ">
          Receive quartly updates about important new features, events and
          releases.
        </p>

        <div className="lg:flex items-center gap-5 justify-center ">
          <input
            type="text"
            placeholder="Email"
            className="base__text r__stay__input"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="base__text r__stay__input mt-5 lg:mt-0 "
          />
        </div>
        <div>
          <button className="rounded-full py-3 px-10 border border-[#02DE18] mt-10 base__text">
            Receive Updates
          </button>
        </div>
      </div>
    </div>
  );
}
