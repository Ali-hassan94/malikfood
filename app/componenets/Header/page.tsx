// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { link: "Home", path: "/" },
//     { link: "Burgers", path: "/burgers" },
//     { link: "Pizza Rolls", path: "/pizza-rolls" },
//     { link: "Shawarma", path: "/shawarma" },
//     { link: "Samosa", path: "/samosa" },
//     { link: "Chips", path: "/chips" },
//   ];

//   return (
//     <nav className="w-full bg-black sticky top-0 z-50 px-4 lg:px-8 py-3">
//       <div className="flex justify-between items-center">
//         {/* LOGO + NAME */}
//         <div className="flex items-center gap-2 flex-shrink-0">
//           <Image
//             src="/mlklogo.png"
//             alt="logo"
//             width={70}
//             height={70}
//             className="invert object-contain"
//           />

//           {/* hide text on very small screens */}
//           <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-blue-400 leading-tight">
//             Ma<b className="text-yellow-300">li</b>k A
//             <b className="text-fuchsia-500">l</b>i Ha
//             <b className="text-red-500">ss</b>an{" "}
//             <b className="text-green-500">AA</b>
//           </h1>
//         </div>

//         {/* DESKTOP MENU */}
//         <ul className="hidden lg:flex items-center gap-5">
//           {navItems.map(item => (
//             <li key={item.path}>
//               <a
//                 href={item.path}
//                 className="text-white uppercase font-semibold text-sm px-3 py-2 rounded-lg hover:bg-orange-500 transition"
//               >
//                 {item.link}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-3">
//           <Link href="/order">
//             <button className="hidden lg:block bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
//               Order Now
//             </button>
//           </Link>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden text-white text-3xl"
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {isMenuOpen && (
//         <div className="lg:hidden mt-4 bg-black flex flex-col items-center gap-5 py-6 border-t border-gray-700">
//           {navItems.map(item => (
//             <a
//               key={item.path}
//               href={item.path}
//               onClick={() => setIsMenuOpen(false)}
//               className="text-white uppercase font-bold hover:text-orange-500 transition"
//             >
//               {item.link}
//             </a>
//           ))}

//           <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
//             Order Now
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Burgers", path: "/burgers" },
    { link: "Pizza Rolls", path: "/pizza-rolls" },
    { link: "Shawarma", path: "/shawarma" },
    { link: "Samosa", path: "/samosa" },
    { link: "Chips", path: "/chips" },
  ];

  return (
    <nav className="w-full bg-black sticky top-0 z-50 px-4 lg:px-8 py-3">
      <div className="flex justify-between items-center">
        {/* LOGO + NAME */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/mlklogo.png"
            alt="logo"
            width={70}
            height={70}
            className="invert object-contain"
          />

          {/* ✅ MOBILE + DESKTOP NAME FIX */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-xs sm:text-lg md:text-2xl lg:text-3xl font-bold text-blue-400">
              Ma<b className="text-yellow-300">li</b>k A
              <b className="text-fuchsia-500">l</b>i Ha
              <b className="text-red-500">ss</b>an{" "}
              <b className="text-green-500">AA</b>
            </h1>

            <span className="text-[10px] sm:text-xs text-gray-400">
              Food Point
            </span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-5">
          {navItems.map(item => (
            <li key={item.path}>
              <a
                href={item.path}
                className="text-white uppercase font-semibold text-sm px-3 py-2 rounded-lg hover:bg-orange-500 transition"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* ORDER BUTTON */}
          <Link href="/order">
            <button className="hidden lg:block bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Order Now
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden mt-4 bg-black flex flex-col items-center gap-5 py-6 border-t border-gray-700 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map(item => (
          <a
            key={item.path}
            href={item.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-white uppercase font-bold hover:text-orange-500 transition"
          >
            {item.link}
          </a>
        ))}

        <Link href="/order">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Order Now
          </button>
        </Link>
      </div>
    </nav>
  );
}
