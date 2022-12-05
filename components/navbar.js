import Link from "next/link";
import { useState } from "react";

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
    name: "Contct",
    path: "/contact",
  },
];

function NavBar() {
  const [TabIsActive, setTabActive] = useState({
    Home: true,
    About: false,
    Projects: false,
    Experiences: false,
    Blogs: false,
    Contact: false,
  });

  const setSectionActive = (routeName) => {
    console.log(routeName);
    navigationRoutes.forEach((route) => {
      if (route.name === routeName) {
        setTabActive({ ...TabIsActive, [route.name]: true });
      } else {
        setTabActive({ ...TabIsActive, [route.name]: false });
      }
    });
  };

  return (
    <div  className=" bg-[#393E46] flex gap-2 w-screen justify-end fixed">
      {navigationRoutes.map((route) => (
        <Link
          key={route.name}
          href={route.path}
          passHref
          className={ TabIsActive[route.name] ? "text-gray-400" : "text-pink-400"}
        >
          <div
            className="m-4 hover:text-blue-400 hover:underline"
            onClick={() => setSectionActive(route.name)}
          >
            <div className="hover:font-bold text-lg hover:text-xl w-28 font-semibold ease-in-out duration-300">
              {route.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
