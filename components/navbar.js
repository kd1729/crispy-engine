import Link from "next/link";
// import { useState } from "react";

const navigationRoutes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Experiences",
    path: "/experience",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function NavBar({ activeSection }) {
  return (
    <div className=" bg-[#393E46] flex gap-2 w-screen justify-end fixed">
      {navigationRoutes.map((route) => (
        <Link key={route.name} href={route.path} passHref>
          <div
            className={
              route.name === activeSection
                ? "text-[#247fff] underline text-2xl m-4"
                : "text-white text-lg m-4"
            }
          >
            <div className="hover:font-bold w-28 font-semibold ease-in-out duration-300">
              {route.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
