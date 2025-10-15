"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Template", href: "#template" },
    { label: "Success stories", href: "#success" },
    { label: "top-tier", href: "#top-tier" },
    { label: "Accelerate", href: "#accelerate" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* === Navbar === */}
      <nav className=" bg-[#0C0C0D] lg:bg-transparent text-white py-5 lg:border-b border-white/10 absolute w-full top-0 z-50">
        <div className="px-[5vw] flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Ricat
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center ">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block w-full text-left hover:text-gray-300 cursor-pointer text-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
              Try for free
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 px-[5vw] pb-4  bg-[#0C0C0D]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block w-full text-left hover:text-gray-300 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}

            <button className="w-full bg-white text-black py-2 rounded-md">
              Try for free
            </button>
          </div>
        )}
      </nav>

      {/* === Hero Section with Video and Content Overlay === */}
      <div className="relative w-full h-[100dvh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-opacity-60 z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-5xl mx-auto">
            <h1 className="xl:text-7xl lg:text-7xl text-5xl font-extrabold mb-4">
              Build Faster, Smarter, Scalable Sites Resources
            </h1>
            <p className="heading__para mb-6">
              Get started with the #1 platform for high-performance WordPress
              hosting and development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition">
                Try for Free
              </button>
              <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
