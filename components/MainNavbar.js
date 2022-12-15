import Link from "next/link";

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

function MainNavbar({ activeSection }) {
  return (
    <div className="navbar-bgcolor sm:flex grid grid-cols-3 gap-2 w-screen justify-center items-center fixed z-10 ">
      {navigationRoutes.map((route) => (
        <Link key={route.name} href={route.path} passHref>
          <div
            className={
              [route.name === activeSection
                ? "text-[#fd5d5d] underline underline-offset-4": "text-white",
                 "text-center sm:text-2xl text-lg sm:m-8 hover:text-[#e37c73]"].join(" ")
            }
          >
            <div className="font-semibold ease-in-out duration-300">
              {route.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MainNavbar;
