import Link from "next/link";
// import { useState } from "react";

const navigationRoutes = [
  {
    name: "Home",
    path: "/",
    width: "w-12",
  },
  {
    name: "About",
    path: "/about",
    width: "w-12",
  },
  {
    name: "Projects",
    path: "/projects",
    width: "w-16",
  },
  {
    name: "Experiences",
    path: "/experience",
    width: "w-24",
  },
  {
    name: "Blogs",
    path: "/blogs",
    width: "w-10",
  },
  {
    name: "Contact",
    path: "/contact",
    width: "w-20",
  },
];

function NavBar({ activeSection }) {
  return (
    <div className=" bg-[#393E46] flex gap-2 w-screen justify-end fixed">
      {navigationRoutes.map((route) => (
        <Link key={route.name} href={route.path} passHref>
          <div
            className={
              [route.name === activeSection
                ? "text-[#247fff] underline underline-offset-4 m-4"
                : "text-white", "text-lg m-4 hover:text-[#247fff]"].join(" ")
            }
          >
            <div className= { [route.width, "font-semibold ease-in-out duration-300"].join(" ")}>
              {route.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
