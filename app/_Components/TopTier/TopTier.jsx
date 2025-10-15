import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function TopTier() {
  const logos = [
    "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64ef35bace337cbcc455fb26_RiACT_Customer_Universal.svg",
    "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64ef35a5f4dec15a87d65421_RiACT_Customer_Flanders.svg",
    "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64ef357de4099a52c79be80e_RiACT_Customer_X2.svg",
    "https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64ef34ce9cc076ffcb43583c_RiACT_Customer_Simens.svg",
  ];

  return (
    <section className="section__top" id="top-tier">
      <h2 className="heading_two text-center">
        Working with <span className="gradient__text">top-tier</span> customers
      </h2>

      {/* cards */}
      <div className="r__top__container">
        <div>
          <Image
            src="https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64ef2fe2f6beec4d32fb3ee3_RiACT_Customers_Image-1_extended-p-1600.webp"
            alt="companies"
            width={1200}
            height={1000}
            className="r__top__images"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src="https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64ff7b495112d6a44fc8c511_RiACT_tablet%20Large-p-800.png"
            alt="companies"
            width={1200}
            height={1000}
            className="r__top__images"
          />
        </div>
      </div>

      {/* React Marquee */}
      <div className="mt-10">
        <Marquee
          speed={40}
          gradient={true}
          pauseOnHover={true}
          autoFill={true}
          gradientColor="#0C0C0D"
        >
          {logos.map((src, i) => (
            <div
              key={i}
              className="r__top__logos__container "
            >
              <Image
                src={src}
                alt={`customer-logo-${i}`}
                width={120}
                height={80}
                className="object-contain opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
