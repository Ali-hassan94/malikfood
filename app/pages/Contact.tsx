"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="
  w-full
  py-20
  px-6
  lg:px-20
  bg-cover
  bg-center
  relative
  "
      style={{
        backgroundImage: "url('/a1.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div
        className="
        relative
        z-10
        max-w-[1300px]
        mx-auto
        grid
        lg:grid-cols-2
        gap-12
        items-center
        "
      >
        {/* LEFT */}
        <div className="flex flex-col gap-8" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>

          <p className="text-gray-200 text-lg leading-8">
            We bake fresh every day. Contact us for orders, questions, or custom
            bakery requests.
          </p>

          <div className="space-y-4 text-white">
            <h2 className="text-2xl font-semibold">Find Us</h2>

            <p>📍 94/9/L Sahiwal</p>
            <h1 className="text-4xl font-bold text-blue-400">
              Ma<b className="text-yellow-300">li</b>k A
              <b className="text-fuchsia-500">l</b>i Ha
              <b className="text-red-500">ss</b>an{" "}
              <b className="text-green-500">AA</b>
            </h1>
            <p>📞 +92 310 3029594</p>
            <h1 className="text-4xl font-bold text-blue-400">
              Ma<b className="text-yellow-300">li</b>k M
              <b className="text-fuchsia-500">a</b>tee
              <b className="text-red-500">n</b>
              <b className="text-green-500"> AA</b>
            </h1>
            <p>📞 +92 3277397364</p>

            <p>✉ Malikalihassan2296@gmail.com</p>
          </div>
        </div>

        {/* RIGHT */}
        <form
          data-aos="fade-left"
          className="
          bg-white
          rounded-3xl
          p-8
          shadow-xl
          flex
          flex-col
          gap-6
          "
        >
          <div>
            <label className="font-semibold">Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="
              mt-2
              w-full
              border
              rounded-xl
              p-4
              outline-none
              focus:border-orange-500
              "
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
              mt-2
              w-full
              border
              rounded-xl
              p-4
              outline-none
              focus:border-orange-500
              "
            />
          </div>

          <div>
            <label className="font-semibold">Message</label>

            <textarea
              rows={5}
              placeholder="Write your message..."
              className="
              mt-2
              w-full
              border
              rounded-xl
              p-4
              outline-none
              resize-none
              focus:border-orange-500
              "
            />
          </div>

          <button
            className="
            bg-black
            text-white
            rounded-full
            py-4
            hover:bg-orange-500
            hover:scale-105
            transition-all
            duration-300
            "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
