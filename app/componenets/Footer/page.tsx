"use client";

import React from "react";
import { FaCopyright } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <section
      className="
      w-full
      bg-black
      text-white
      flex
      justify-center
      items-center
      py-6
      px-4
      relative
      "
    >
      {/* Footer Text */}
      <div className="flex items-center gap-3 text-center">
        <FaCopyright className="text-white text-lg" />

        <h1 className="font-semibold text-sm md:text-lg">
          Copyright 2026, Crave Bakes. All Rights Reserved
        </h1>
      </div>

      {/* Scroll Top Button */}
      <div
        className="
        bg-orange-600
        text-white
        p-4
        rounded-full
        hover:bg-white
        hover:text-black
        cursor-pointer
        fixed
        bottom-6
        right-6
        shadow-lg
        duration-300
        z-50
        "
      >
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          <FaArrowUp className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
