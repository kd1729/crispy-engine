import Link from "next/link";

const navigationRoutes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "Contact Me",
    path: "/contact",
  },
  {
    name: "My Projects",
    path: "/projects",
  },
  {
    name: "Experiences",
    path: "/experience",
  },
  {
    name: "My Blogs",
    path: "/blogs",
  },
];

function NavBar() {
  return (
    <div className=" bg-[#393E46] flex gap-2 w-screen justify-end fixed">
        {navigationRoutes.map((route) => (
          <Link key={route.name} href={route.path} passHref>
            <div className="text-gray-50 m-4 hover:text-blue-400 hover:underline">
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
